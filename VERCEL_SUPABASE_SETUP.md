# Налаштування Supabase на Vercel

## Проблема

Помилка "EROFS: read-only file system" виникає тому, що Vercel не дозволяє запис у файлову систему. Потрібно використовувати Supabase як основну базу даних.

## Швидке рішення

### 1. Створення Supabase проекту

1. Йдіть на [supabase.com](https://supabase.com)
2. Створіть обліковий запис або увійдіть
3. Натисніть "New Project"
4. Оберіть організацію та назвіть проект (наприклад, "mikola-medical")
5. Створіть надійний пароль для бази даних
6. Оберіть регіон (найкращий для України - Europe West)
7. Натисніть "Create new project"

### 2. Отримання облікових даних

Після створення проекту:

1. Перейдіть в "Settings" → "API"
2. Скопіюйте:
   - **Project URL** (починається з https://xxx.supabase.co)
   - **Project API Key** (anon public key)

### 3. Налаштування Vercel Environment Variables

1. Зайдіть в свій Vercel dashboard
2. Виберіть проект `mikola-nov-capi-1708`
3. Перейдіть в "Settings" → "Environment Variables"
4. Додайте:
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGc...
   ```

### 4. Створення таблиць в Supabase

1. Перейдіть в Supabase Dashboard → "SQL Editor"
2. Виконайте цей SQL скрипт:

```sql
-- Створюємо таблицю медичних форм
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

-- Створюємо таблицю консультацій
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

-- Додаємо індекси для оптимізації
CREATE INDEX idx_medical_forms_created_at ON medical_forms(created_at DESC);
CREATE INDEX idx_consultations_created_at ON consultations(created_at DESC);
CREATE INDEX idx_medical_forms_status ON medical_forms(status);

-- Включаємо Row Level Security (необов'язково для початку)
ALTER TABLE medical_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Політики для публічного доступу (УВАГА: тільки для розробки!)
CREATE POLICY "Enable all operations for all users" ON medical_forms FOR ALL USING (true);
CREATE POLICY "Enable all operations for all users" ON consultations FOR ALL USING (true);
```

### 5. Редеплой на Vercel

1. Після налаштування змінних середовища
2. Vercel автоматично перезапустить деплой
3. Або зробіть новий push в репозиторій

## Перевірка роботи

### Локально

```bash
# Додайте в .env.local:
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# Перезапустіть сервер
npm run dev
```

### На продакшені

1. Відкрийте сайт
2. Заповніть медичну форму
3. Перевірте в Supabase Dashboard → "Table Editor", чи з'явилися дані

## Безпека (для продакшн)

### Налаштуйте Row Level Security:

```sql
-- Видаліть публічні політики
DROP POLICY "Enable all operations for all users" ON medical_forms;
DROP POLICY "Enable all operations for all users" ON consultations;

-- Створіть більш обмежені політики
CREATE POLICY "Allow insert for everyone" ON medical_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow select for authenticated users" ON medical_forms FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow insert for everyone" ON consultations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow select for authenticated users" ON consultations FOR SELECT USING (auth.role() = 'authenticated');
```

## Моніторинг

- Supabase Dashboard → "Logs" для перегляду запитів
- Vercel Dashboard → "Functions" для перегляду логів API
- Console в браузері для клієнтських помилок

---

**Важливо**: Після налаштування Supabase форми будуть працювати і з мобільних пристроїв, і з десктопу без помилок файлової системи.
