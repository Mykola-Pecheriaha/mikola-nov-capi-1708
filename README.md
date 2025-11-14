# 🏥 Медичний сайт з формами та консультаціями

Сучасний веб-сайт медичної клініки з інтеграцією Supabase backend, мобільною оптимізацією та системою форм.

## ✨ Особливості

- 📋 **Медичні форми** - детальна анкета пацієнта з BMI розрахунком
- 📞 **Швидкі консультації** - форма зворотного зв'язку
- 📱 **Мобільна оптимізація** - спеціальна підтримка мобільних пристроїв
- 🗄️ **Supabase Backend** - надійне зберігання даних в PostgreSQL
- 🎨 **Сучасний UI** - Tailwind CSS з адаптивним дизайном
- 🚀 **Vercel Deployment** - готовий до продакшену

## 🚀 Швидкий старт

### 1. Клонування проекту

```bash
git clone <repository-url>
cd mikola-nov-capi-1708
yarn install
```

### 2. Налаштування Supabase

1. Створіть проект на [supabase.com](https://supabase.com)
2. Скопіюйте `.env.local.example` в `.env.local`
3. Додайте ваші Supabase credentials
4. Виконайте SQL схему з `SUPABASE_SETUP.md`

### 3. Запуск розробки

```bash
yarn dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

## 🗄️ Backend Integration

Проект використовує **Supabase** як backend:

- ✅ PostgreSQL база даних
- ✅ RESTful API
- ✅ Автентифікація та авторизація
- ✅ Автоматичні бекапи
- ✅ Масштабованість

Детальні інструкції: [`SUPABASE_SETUP.md`](./SUPABASE_SETUP.md)

## 📱 Мобільна оптимізація

Спеціальна підтримка мобільних пристроїв:

- 🔧 **Debug Panel** - діагностика мобільних проблем
- 📡 **Connection Monitoring** - відстеження якості з'єднання
- 🎯 **Adaptive Fetch** - різні стратегії для мобільних/десктоп
- 📊 **Device Analytics** - збір технічної інформації

## 📂 Структура проекту

```
src/
├── app/
│   ├── api/              # API routes
│   │   ├── medical-forms/
│   │   └── consultations/
│   ├── medical-form/     # Медична форма
│   └── services/         # Сторінки послуг
├── components/           # React компоненти
├── lib/
│   └── supabase.ts      # Supabase конфігурація
└── types/               # TypeScript типи
```

## 🛠️ Технології

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **TypeScript**: Повна типізація
- **Deployment**: Vercel
- **Forms**: Custom form handling

## 📊 API Endpoints

### Medical Forms

- `GET /api/medical-forms` - Список медичних форм
- `POST /api/medical-forms` - Створення форми
- `DELETE /api/medical-forms?id=<uuid>` - Видалення

### Consultations

- `GET /api/consultations` - Список консультацій
- `POST /api/consultations` - Створення консультації
- `DELETE /api/consultations?id=<uuid>` - Видалення

## 🔄 Міграція даних

Якщо у вас є дані в JSON файлах:

```bash
npm install dotenv
node scripts/migrate-to-supabase.js
```

## 🚀 Deployment

### Vercel

1. Підключіть GitHub репозиторій
2. Додайте environment variables в Vercel Dashboard
3. Deploy автоматично

### Environment Variables

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## 🔧 Розробка

### Запуск локально

```bash
yarn dev             # Development server
yarn build           # Production build
yarn start           # Production server
yarn lint            # ESLint
```

### Debug мобільних пристроїв

1. Увімкніть debug panel через `MobileDebugPanel`
2. Тестуйте API через вбудовані тести
3. Перевіряйте логи в browser console

## 📝 Документація

- [`SUPABASE_SETUP.md`](./SUPABASE_SETUP.md) - Налаштування backend
- [`MOBILE_OPTIMIZATION.md`](./MOBILE_OPTIMIZATION.md) - Мобільна оптимізація
- [`MOBILE_TESTING.md`](./MOBILE_TESTING.md) - Тестування на мобільних
- [`VERCEL_DEPLOYMENT.md`](./VERCEL_DEPLOYMENT.md) - Деплоймент

## 🤝 Внесок

1. Fork проекту
2. Створіть feature branch
3. Commit змін
4. Push до гілки
5. Відкрийте Pull Request

## 📄 Ліцензія

MIT License - деталі в [LICENSE](./LICENSE) файлі.

---

💡 **Tip**: Для кращого розуміння проекту почніть з [`PROJECT_SUMMARY.md`](./PROJECT_SUMMARY.md)
