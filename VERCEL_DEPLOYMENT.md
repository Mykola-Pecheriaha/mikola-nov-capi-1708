# Medical Forms - Vercel Deployment Guide

## Поточний стан

Зараз API працює з двома режимами:

- **Локально**: дані зберігаються у `server/medical-forms.json`
- **На Vercel**: дані зберігаються у пам'яті (тимчасово, втрачаються при рестарті)

## Тестування на Vercel

Форма працює на Vercel і приймає дані, але вони зберігаються тільки в пам'яті сервера. Це означає:

✅ **Працює**: форма приймає дані, показує успішне повідомлення
✅ **Працює**: адмін панель показує надіслані форми (до рестарту сервера)
⚠️ **Обмеження**: дані втрачаються при рестарті Vercel function

### Для перевірки на Vercel:

1. Деплойте проект: `vercel --prod`
2. Відкрийте `/medical-form` та надішліть тестову форму
3. Перейдіть до `/admin/medical-forms` та перевірте чи з'явилася форма
4. Відкрийте Vercel Dashboard → Functions → Logs для перегляду логів

## Майбутня міграція на продакшин

Коли проект буде готовий, замініть тимчасове рішення на одне з:

### Варіант 1: Vercel KV (рекомендується)

```bash
# 1. Додайте Vercel KV через Dashboard
# 2. Встановіть клієнт
npm install @vercel/kv

# 3. Додайте змінні середовища в Vercel:
# KV_REST_API_URL=...
# KV_REST_API_TOKEN=...
```

### Варіант 2: Supabase

```bash
npm install @supabase/supabase-js

# Додайте в Vercel env vars:
# SUPABASE_URL=...
# SUPABASE_ANON_KEY=...
```

### Варіант 3: PlanetScale/MongoDB Atlas

Підключіть будь-яку SQL/NoSQL базу через DATABASE_URL

## Файли для оновлення при міграції

- `src/app/api/medical-forms/route.ts` - замінити vercelMemoryStore на реальну БД
- `.env.example` - додати нові змінні середовища
- Цей README - оновити інструкції

## Логи для налагодження

На Vercel перевіряйте логи через:

- Vercel Dashboard → Project → Functions → View Function Logs
- Або використовуйте `vercel logs` CLI

Ключові лог-повідомлення:

- `"Medical form submission"` - нова форма отримана
- `"Vercel: saved to memory"` - форма збережена у пам'яті
- `"Vercel: returning X forms from memory"` - кількість форм в адмін панелі
