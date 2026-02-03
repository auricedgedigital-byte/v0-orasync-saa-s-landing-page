-- Leads table
CREATE TABLE IF NOT EXISTS leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    industry VARCHAR(100),
    business_type VARCHAR(100),
    custom_business_type TEXT,
    score INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);
-- Audit answers
CREATE TABLE IF NOT EXISTS audit_answers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    question_id VARCHAR(100) NOT NULL,
    answer TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
-- Audit results
CREATE TABLE IF NOT EXISTS audit_results (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    maturity_level VARCHAR(50),
    recommendations JSONB,
    score_breakdown JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);
-- Automation events
CREATE TABLE IF NOT EXISTS automation_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    event_type VARCHAR(100) NOT NULL,
    payload JSONB,
    processed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);