const express = require('express');
const router = express.Router();
const db = require('../utils/database');

// POST /api/leads - Create or update a lead
router.post('/', async (req, res) => {
    const { companyName, email, industry, businessType, customBusinessType } = req.body;

    try {
        const result = await db.query(
            'INSERT INTO leads (company_name, email, industry, business_type, custom_business_type) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (email) DO UPDATE SET company_name = EXCLUDED.company_name, industry = EXCLUDED.industry RETURNING *',
            [companyName, email, industry, businessType, customBusinessType]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Lead creation error:', error);
        res.status(500).json({ error: 'Failed to process lead' });
    }
});

module.exports = router;
