require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const auditRoutes = require('./routes/audits');
const leadRoutes = require('./routes/leads');
const automationRoutes = require('./routes/automations');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/audits', auditRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/automations', automationRoutes);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

app.listen(PORT, () => {
    console.log(`Auric Edge Core server running on port ${PORT}`);
});
