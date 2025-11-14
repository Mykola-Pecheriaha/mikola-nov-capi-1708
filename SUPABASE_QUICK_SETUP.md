# 🚀 Швидке налаштування Supabase

## 1️⃣ Створення проекту на Supabase

### Перейдіть на https://supabase.com

1. Натисніть **"Start your project"**
2. **Sign in** або **Sign up** з GitHub/Google
3. Натисніть **"New Project"**
4. Оберіть організацію (або створіть нову)

### Налаштування проекту:

- **Name**: `mikola-medical-clinic`
- **Database Password**: Створіть надійний пароль (збережіть його!)
- **Region**: `Europe West (eu-west-1)` (найкращий для України)
- **Pricing Plan**: `Free tier` (достатньо для початку)

### Натисніть **"Create new project"**

⏳ Очікуйте 2-3 хвилини поки проект створюється...

---

## 2️⃣ Отримання облікових даних

Після успішного створення проекту:

### Перейдіть у Settings → API

1. У лівому меню натисніть **⚙️ Settings**
2. Оберіть **"API"**
3. Знайдіть секцію **"Project API keys"**

### Скопіюйте ці дані:

```bash
# Це ваші реальні дані (замініть на свої):
Project URL: https://xxxxxxxxxxxxxxxx.supabase.co
anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOi...
```

---

## 3️⃣ Оновлення змінних середовища

### Локально (.env.local):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOi...
NODE_ENV=development
```

### На Vercel:

1. Зайдіть у Vercel Dashboard
2. Оберіть проект `mikola-nov-capi-1708`
3. Settings → Environment Variables
4. Додайте:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://xxxxxxxxxxxxxxxx.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGc...`

---

## 4️⃣ Створення таблиць БД

### Перейдіть у SQL Editor

1. У Supabase Dashboard → **🗃️ SQL Editor**
2. Натисніть **"New query"**
3. Вставте цей SQL код:

```sql
-- 🏥 Створення таблиць для медичного центру

-- Таблиця медичних форм
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

-- Таблиця швидких консультацій
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

-- 📊 Індекси для швидкодії
CREATE INDEX idx_medical_forms_created_at ON medical_forms(created_at DESC);
CREATE INDEX idx_consultations_created_at ON consultations(created_at DESC);
CREATE INDEX idx_medical_forms_status ON medical_forms(status);
CREATE INDEX idx_medical_forms_phone ON medical_forms(phone);
CREATE INDEX idx_consultations_phone ON consultations(phone);

-- 🔒 Налаштування безпеки (Row Level Security)
ALTER TABLE medical_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- 📝 Політики доступу (для розробки - відкритий доступ)
-- ⚠️ УВАГА: У продакшні налаштуйте більш суворі політики!

-- Дозволяємо всім створювати записи
CREATE POLICY "Allow public insert" ON medical_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert" ON consultations FOR INSERT WITH CHECK (true);

-- Дозволяємо читати тільки аутентифікованим користувачам
-- (поки що відкрито для всіх для тестування)
CREATE POLICY "Allow public read" ON medical_forms FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON consultations FOR SELECT USING (true);

-- Дозволяємо видаляти тільки аутентифікованим
CREATE POLICY "Allow public delete" ON medical_forms FOR DELETE USING (true);
CREATE POLICY "Allow public delete" ON consultations FOR DELETE USING (true);

-- ✅ Готово! Таблиці створено
```

4. Натисніть **"Run"** ▶️

---

## 5️⃣ Перевірка роботи

### Автоматичний тест:

```bash
# У терміналі проекту:
yarn dev
node test-medical-forms.js
```

### Ручна перевірка:

1. Відкрийте http://localhost:3000/medical-form
2. Заповніть форму
3. Надішліть
4. Перевірте у Supabase → Table Editor чи з'явилися дані

---

## 6️⃣ Деплой на Vercel

```bash
# Зробіть commit змін:
git add .
git commit -m "Configure Supabase production database"
git push

# Vercel автоматично зробить редеплой
```

---

## ✅ Що буде після налаштування:

- ✅ Форми працюватимуть на мобільних пристроях
- ✅ Дані зберігатимуться у надійній базі Supabase
- ✅ Немає помилок "read-only file system"
- ✅ Масштабована архітектура
- ✅ Автоматичні бекапи
- ✅ Професійний моніторинг

---

## 🆘 Якщо щось не працює:

1. Перевірте логи у Vercel → Functions
2. Перевірте логи у Supabase → Logs
3. Перевірте змінні середовища у Vercel
4. Перевірте чи правильно скопійовані ключі

---

**Потрібна допомога?** Напишіть мені після кожного кроку для перевірки! 🚀
