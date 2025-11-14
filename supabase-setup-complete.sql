-- 🏥 ГОТОВИЙ SQL ДЛЯ SUPABASE
-- Скопіюйте цей код повністю у Supabase SQL Editor і натисніть RUN

-- ============================================
-- СТВОРЕННЯ ТАБЛИЦЬ ДЛЯ МЕДИЧНОГО ЦЕНТРУ
-- ============================================

-- Таблиця медичних форм (детальні анкети пацієнтів)
CREATE TABLE IF NOT EXISTS medical_forms (
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
CREATE TABLE IF NOT EXISTS consultations (
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

-- ============================================
-- ІНДЕКСИ ДЛЯ ОПТИМІЗАЦІЇ ШВИДКОДІЇ
-- ============================================

CREATE INDEX IF NOT EXISTS idx_medical_forms_created_at ON medical_forms(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON consultations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_medical_forms_status ON medical_forms(status);
CREATE INDEX IF NOT EXISTS idx_medical_forms_phone ON medical_forms(phone);
CREATE INDEX IF NOT EXISTS idx_consultations_phone ON consultations(phone);

-- ============================================
-- НАЛАШТУВАННЯ БЕЗПЕКИ (ROW LEVEL SECURITY)
-- ============================================

-- Включення RLS
ALTER TABLE medical_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Видалення старих політик (якщо існують)
DROP POLICY IF EXISTS "Allow public insert" ON medical_forms;
DROP POLICY IF EXISTS "Allow public read" ON medical_forms;  
DROP POLICY IF EXISTS "Allow public delete" ON medical_forms;
DROP POLICY IF EXISTS "Allow public insert" ON consultations;
DROP POLICY IF EXISTS "Allow public read" ON consultations;
DROP POLICY IF EXISTS "Allow public delete" ON consultations;

-- Політики доступу для медичних форм
CREATE POLICY "Allow anyone to insert medical forms" ON medical_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anyone to read medical forms" ON medical_forms FOR SELECT USING (true);
CREATE POLICY "Allow anyone to delete medical forms" ON medical_forms FOR DELETE USING (true);

-- Політики доступу для консультацій
CREATE POLICY "Allow anyone to insert consultations" ON consultations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anyone to read consultations" ON consultations FOR SELECT USING (true);
CREATE POLICY "Allow anyone to delete consultations" ON consultations FOR DELETE USING (true);

-- ============================================
-- ТЕСТОВІ ДАНІ (ОПЦІОНАЛЬНО)
-- ============================================

-- Вставка тестового запису у медичні форми
INSERT INTO medical_forms (
  name, age, gender, phone, height, weight, bmi, 
  complaints, status, is_mobile
) VALUES (
  'Тестовий Пацієнт', 
  30, 
  'male', 
  '+380123456789', 
  175.0, 
  70.0, 
  22.9,
  'Тестова скарга для перевірки системи',
  'pending',
  false
) ON CONFLICT DO NOTHING;

-- Вставка тестового запису у консультації
INSERT INTO consultations (
  name, phone, comment, is_mobile
) VALUES (
  'Тестова Консультація',
  '+380987654321', 
  'Тестовий коментар для перевірки системи',
  false
) ON CONFLICT DO NOTHING;

-- ============================================
-- ПЕРЕВІРКА СТВОРЕННЯ
-- ============================================

-- Показати створені таблиці
SELECT 'medical_forms' as table_name, COUNT(*) as records FROM medical_forms
UNION ALL
SELECT 'consultations' as table_name, COUNT(*) as records FROM consultations;

-- ============================================
-- ГОТОВО! 
-- ============================================
-- Таблиці створено та готові до використання
-- Тепер можна тестувати API через веб-сайт