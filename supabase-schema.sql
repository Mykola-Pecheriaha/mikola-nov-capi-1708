-- 🏥 Створення таблиць для медичного центру "Mikola Medical Clinic"
-- Виконайте цей скрипт у Supabase SQL Editor

-- Таблиця медичних форм (детальні анкети пацієнтів)
CREATE TABLE medical_forms (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age INTEGER,
  gender VARCHAR(20),
  phone VARCHAR(50) NOT NULL,
  height NUMERIC(5,2),
  weight NUMERIC(5,2),
  bmi NUMERIC(4,1),
  complaints TEXT,
  examinations TEXT[],
  has_chronic_disease BOOLEAN DEFAULT false,
  chronic_diseases TEXT,
  takes_medication BOOLEAN DEFAULT false,
  medications TEXT,
  pain_level INTEGER DEFAULT 0,
  additional_comments TEXT,
  user_agent TEXT,
  is_mobile BOOLEAN DEFAULT false,
  viewport TEXT,
  connection TEXT,
  platform TEXT,
  cookie_enabled BOOLEAN,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Таблиця швидких консультацій (записи через кнопку "Записатися на прийом")
CREATE TABLE consultations (
  id BIGSERIAL PRIMARY KEY,  
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  comment TEXT,
  user_agent TEXT,
  is_mobile BOOLEAN DEFAULT false,
  viewport TEXT,
  connection TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 📊 Індекси для оптимізації швидкодії
CREATE INDEX idx_medical_forms_created_at ON medical_forms(created_at DESC);
CREATE INDEX idx_consultations_created_at ON consultations(created_at DESC);
CREATE INDEX idx_medical_forms_status ON medical_forms(status);
CREATE INDEX idx_medical_forms_phone ON medical_forms(phone);
CREATE INDEX idx_consultations_phone ON consultations(phone);

-- 🔒 Включення Row Level Security
ALTER TABLE medical_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- 📝 Політики доступу для медичних форм
CREATE POLICY "Allow anyone to insert medical forms" ON medical_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anyone to read medical forms" ON medical_forms FOR SELECT USING (true);
CREATE POLICY "Allow anyone to delete medical forms" ON medical_forms FOR DELETE USING (true);

-- 📝 Політики доступу для консультацій
CREATE POLICY "Allow anyone to insert consultations" ON consultations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anyone to read consultations" ON consultations FOR SELECT USING (true);
CREATE POLICY "Allow anyone to delete consultations" ON consultations FOR DELETE USING (true);

-- ✅ Створення завершено!
-- Тепер можна тестувати API через сайт

-- 📊 Для перевірки створених таблиць:
-- SELECT * FROM medical_forms LIMIT 5;
-- SELECT * FROM consultations LIMIT 5;