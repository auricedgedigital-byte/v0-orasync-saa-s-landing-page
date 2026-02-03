const express = require('express');
const router = express.Router();
const db = require('../utils/database');

// POST /api/audits - Submit new audit
router.post('/', async (req, res) => {
    const { leadId, companyName, email, industry, businessType, customBusinessType, answers, tools, score } = req.body;

    try {
        // 1. Ensure lead exists or create it
        let currentLeadId = leadId;
        if (!currentLeadId) {
            const leadResult = await db.query(
                'INSERT INTO leads (company_name, email, industry, business_type, custom_business_type, score) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (email) DO UPDATE SET score = EXCLUDED.score RETURNING id',
                [companyName, email, industry, businessType, customBusinessType, score]
            );
            currentLeadId = leadResult.rows[0].id;
        }

        // 2. Save audit answers
        const queries = Object.entries(answers).map(([questionId, answer]) => {
            return db.query(
                'INSERT INTO audit_answers (lead_id, question_id, answer) VALUES ($1, $2, $3)',
                [currentLeadId, questionId, typeof answer === 'object' ? JSON.stringify(answer) : answer.toString()]
            );
        });
        await Promise.all(queries);

        // 3. Save audit result summary
        const result = await db.query(
            'INSERT INTO audit_results (lead_id, maturity_level, score_breakdown) VALUES ($1, $2, $3) RETURNING id',
            [currentLeadId, 'TBD', JSON.stringify({ score, tools })]
        );

        res.status(201).json({
            auditId: result.rows[0].id,
            leadId: currentLeadId,
            message: 'Audit submitted successfully'
        });
    } catch (error) {
        console.error('Audit submission error:', error);
        res.status(500).json({ error: 'Failed to submit audit' });
    }
});

// GET /api/audits/:id/results - Get audit results
router.get('/:id/results', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(
            'SELECT r.*, l.company_name, l.email FROM audit_results r JOIN leads l ON r.lead_id = l.id WHERE r.id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Audit results not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching audit results:', error);
        res.status(500).json({ error: 'Failed to fetch audit results' });
    }
});

module.exports = router;
