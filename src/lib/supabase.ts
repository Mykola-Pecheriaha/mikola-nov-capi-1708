import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Типи для наших таблиць
export interface MedicalForm {
  id?: number;
  name: string;
  age?: number;
  gender?: string;
  phone: string;
  height?: number;
  weight?: number;
  bmi?: number;
  complaints?: string;
  examinations?: string[];
  has_chronic_disease?: boolean;
  chronic_diseases?: string;
  takes_medication?: boolean;
  medications?: string;
  pain_level?: number;
  additional_comments: string;
  user_agent?: string;
  is_mobile?: boolean;
  viewport?: string;
  connection?: string;
  platform?: string;
  cookie_enabled?: boolean;
  created_at?: string;
  status?: string;
}

export interface Consultation {
  id?: number;
  name: string;
  phone: string;
  comment: string;
  user_agent?: string;
  is_mobile?: boolean;
  viewport?: string;
  connection?: string;
  created_at?: string;
}

// SQL для створення таблиць (виконати в Supabase SQL Editor)
export const createTablesSQL = `
-- Створення таблиці medical_forms
CREATE TABLE IF NOT EXISTS medical_forms (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age TEXT NOT NULL,
  gender TEXT NOT NULL,
  phone TEXT NOT NULL,
  height TEXT NOT NULL,
  weight TEXT NOT NULL,
  bmi NUMERIC,
  complaints TEXT NOT NULL,
  examinations TEXT[] DEFAULT '{}',
  has_chronic_disease BOOLEAN DEFAULT FALSE,
  chronic_diseases TEXT DEFAULT '',
  takes_medication BOOLEAN DEFAULT FALSE,
  medications TEXT DEFAULT '',
  pain_level INTEGER DEFAULT 0,
  additional_comments TEXT DEFAULT '',
  user_agent TEXT,
  is_mobile BOOLEAN DEFAULT FALSE,
  viewport JSONB,
  connection JSONB,
  platform TEXT,
  cookie_enabled BOOLEAN,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Створення таблиці consultations
CREATE TABLE IF NOT EXISTS consultations (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  comment TEXT DEFAULT '',
  user_agent TEXT,
  is_mobile BOOLEAN DEFAULT FALSE,
  viewport JSONB,
  connection JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включення Row Level Security
ALTER TABLE medical_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Політики для публічного доступу (можна змінити за потреби)
CREATE POLICY "Allow all operations on medical_forms" ON medical_forms FOR ALL USING (true);
CREATE POLICY "Allow all operations on consultations" ON consultations FOR ALL USING (true);
`;
