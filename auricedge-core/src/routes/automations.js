const express = require('express');
const router = express.Router();
const axios = require('axios'); // Note: Need to install axios

// POST /api/automations/trigger
router.post('/trigger', async (req, res) => {
    const { eventType, leadId, payload } = req.body;

    try {
        const webhookUrl = process.env.N8N_WEBHOOK_URL;
        if (!webhookUrl) {
            return res.status(500).json({ error: 'N8N_WEBHOOK_URL not configured' });
        }

        const response = await axios.post(webhookUrl, {
            eventType,
            leadId,
            ...payload,
            timestamp: new Date().toISOString()
        });

        res.json({
            status: 'success',
            data: response.data
        });
    } catch (error) {
        console.error('Automation trigger error:', error.message);
        res.status(500).json({
            error: 'Failed to trigger automation',
            details: error.message
        });
    }
});

module.exports = router;
