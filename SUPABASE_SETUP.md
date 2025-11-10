# 🗄️ Налаштування Supabase Backend

## 📋 Огляд

Проект успішно мігрований з тимчасового in-memory сховища на **Supabase** як постійний backend. Це забезпечує:

- ✅ Постійне зберігання даних
- ✅ Масштабованість та надійність
- ✅ Автоматичні бекапи
- ✅ PostgreSQL база даних
- ✅ RESTful API з автентифікацією

## 🚀 Швидке налаштування

### 1. Створення Supabase проекту

1. Перейдіть на [supabase.com](https://supabase.com)
2. Створіть новий проект
3. Скопіюйте URL проекту та anon key

### 2. Environment Variables

Створіть файл `.env.local` у корені проекту:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Створення таблиць

У Supabase SQL Editor виконайте:

```sql
-- Таблиця для медичних форм
CREATE TABLE medical_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  age INTEGER,
  gender TEXT,
  phone TEXT NOT NULL,
  height REAL,
  weight REAL,
  bmi REAL,
  complaints TEXT,
  examinations TEXT[],
  has_chronic_disease BOOLEAN DEFAULT FALSE,
  chronic_diseases TEXT,
  takes_medication BOOLEAN DEFAULT FALSE,
  medications TEXT,
  pain_level INTEGER DEFAULT 0,
  additional_comments TEXT,
  user_agent TEXT,
  is_mobile BOOLEAN DEFAULT FALSE,
  viewport TEXT,
  connection TEXT,
  platform TEXT,
  cookie_enabled BOOLEAN,
  status TEXT DEFAULT 'pending'
);

-- Таблиця для консультацій
CREATE TABLE consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  comment TEXT,
  user_agent TEXT,
  is_mobile BOOLEAN DEFAULT FALSE,
  viewport TEXT,
  connection TEXT
);

-- Індекси для оптимізації
CREATE INDEX idx_medical_forms_created_at ON medical_forms(created_at DESC);
CREATE INDEX idx_medical_forms_status ON medical_forms(status);
CREATE INDEX idx_consultations_created_at ON consultations(created_at DESC);
```

## 📊 Структура даних

### Medical Forms

- `id`: UUID (автогенерований)
- `created_at`: Timestamp
- `name`, `phone`: Основна інформація
- `age`, `gender`, `height`, `weight`, `bmi`: Біометричні дані
- `complaints`, `examinations`: Медична інформація
- `has_chronic_disease`, `chronic_diseases`: Хронічні захворювання
- `takes_medication`, `medications`: Ліки
- `pain_level`: Рівень болю (0-10)
- `additional_comments`: Додаткові коментарі
- `user_agent`, `is_mobile`, `viewport`, `connection`, `platform`, `cookie_enabled`: Технічна інформація
- `status`: Статус форми (pending/processed/archived)

### Consultations

- `id`: UUID (автогенерований)
- `created_at`: Timestamp
- `name`, `phone`: Основна інформація
- `comment`: Коментар
- `user_agent`, `is_mobile`, `viewport`, `connection`: Технічна інформація

## 🔄 Міграція з попередньої версії

Якщо у вас є дані в старих JSON файлах:

1. **medical-forms**: Дані з `server/medical-forms.json`
2. **consultations**: Дані з `server/consultations.json`

Можна імпортувати через Supabase Dashboard або написати міграційний скрипт.

## 🛠️ API Endpoints

### Medical Forms

- `GET /api/medical-forms` - Отримати всі медичні форми
- `POST /api/medical-forms` - Створити нову медичну форму
- `DELETE /api/medical-forms?id=<uuid>` - Видалити медичну форму

### Consultations

- `GET /api/consultations` - Отримати всі консультації
- `POST /api/consultations` - Створити нову консультацію
- `DELETE /api/consultations?id=<uuid>` - Видалити консультацію

## 🔒 Безпека

- Дані захищені Row Level Security (RLS)
- API ключі мають обмежені права
- HTTPS з'єднання
- Автоматичне логування операцій

## 📱 Мобільна підтримка

Система включає мобільну оптимізацію:

- Автоматичне визначення мобільних пристроїв
- Спеціальні стратегії для мобільних з'єднань
- Debug панель для мобільної діагностики
- Збір технічної інформації про пристрої

## 🚨 Troubleshooting

### Помилки підключення

```bash
❌ Supabase error: Invalid API key
```

**Рішення**: Перевірте NEXT_PUBLIC_SUPABASE_ANON_KEY

### Помилки таблиць

```bash
❌ relation "medical_forms" does not exist
```

**Рішення**: Виконайте SQL скрипт створення таблиць

### Environment Variables

```bash
💥 Error: supabaseUrl and supabaseKey are required
```

**Рішення**: Перевірте файл `.env.local`

## 📈 Моніторинг

У Supabase Dashboard можна:

- Переглядати дані в реальному часі
- Аналізувати запити та продуктивність
- Налаштовувати алерти
- Експортувати дані

## 🔄 Оновлення

Для оновлення бібліотеки:

```bash
npm update @supabase/supabase-js
```

## 📝 Логування

Система веде детальні логи:

- ✅ Успішні операції
- ❌ Помилки з деталями
- 📊 Статистика запитів
- 🔍 Debug інформація

Логи доступні у browser console та Vercel Dashboard.
