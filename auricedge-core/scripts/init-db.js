require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

async function initDb() {
    console.log('Connecting to database...');
    // Explicitly defining connection parameters to ensure correct parsing
    const pool = new Pool({
        user: 'postgres.xgqlkyzlqyutdkkhcrek',
        host: 'aws-1-eu-west-1.pooler.supabase.com',
        database: 'postgres',
        password: '#17306105Mabiz',
        port: 5432,
        ssl: { rejectUnauthorized: false }
    });

    try {
        const sqlPath = path.join(__dirname, 'setup-db.sql');
        console.log(`Reading SQL from ${sqlPath}...`);
        const sql = fs.readFileSync(sqlPath, 'utf8');

        console.log('Executing SQL...');
        await pool.query(sql);
        console.log('✅ Database initialized successfully!');
    } catch (err) {
        console.error('❌ Database initialization failed:', err);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

initDb();
