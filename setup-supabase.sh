#!/bin/bash

# 🚀 Інтерактивний скрипт налаштування Supabase

echo "🏥 === Налаштування Supabase для медичного центру ==="
echo ""

# Функція для перевірки URL
validate_url() {
    if [[ $1 =~ ^https://[a-z0-9-]+\.supabase\.co$ ]]; then
        return 0
    else
        return 1
    fi
}

# Функція для перевірки ключа
validate_key() {
    if [[ $1 =~ ^eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$ ]]; then
        return 0
    else
        return 1
    fi
}

echo "📋 Цей скрипт допоможе налаштувати Supabase для вашого проекту"
echo ""
echo "Спочатку створіть проект на https://supabase.com якщо ще не зробили"
echo ""

read -p "Продовжити налаштування? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Налаштування скасовано"
    exit 1
fi

echo ""
echo "🔗 Введіть URL вашого Supabase проекту:"
echo "   Приклад: https://xyzexample.supabase.co"
read -p "URL: " SUPABASE_URL

if ! validate_url "$SUPABASE_URL"; then
    echo "❌ Невірний формат URL"
    echo "   Має бути: https://xxxxxxxx.supabase.co"
    exit 1
fi

echo ""
echo "🔑 Введіть anon key з вашого Supabase проекту:"
echo "   Знайдіть у: Settings → API → anon public"
read -p "Key: " SUPABASE_KEY

if ! validate_key "$SUPABASE_KEY"; then
    echo "❌ Невірний формат ключа"
    echo "   Має починатися з: eyJ..."
    exit 1
fi

echo ""
echo "💾 Створюю файл .env.local..."

cat > .env.local << EOF
# 🔐 Supabase налаштування для медичного центру
# Згенеровано $(date)

# 🌐 URL вашого Supabase проекту
NEXT_PUBLIC_SUPABASE_URL=$SUPABASE_URL

# 🔑 Публічний анонімний ключ Supabase  
NEXT_PUBLIC_SUPABASE_ANON_KEY=$SUPABASE_KEY

# 🏠 Режим розробки
NODE_ENV=development
EOF

echo "✅ Файл .env.local створено!"
echo ""

echo "📊 Наступні кроки:"
echo "=================="
echo "1. 🗃️  Створіть таблиці у Supabase SQL Editor:"
echo "   Скопіюйте вміст файлу: supabase-schema.sql"
echo ""
echo "2. 🔄 Перезапустіть сервер:"
echo "   yarn dev"
echo ""
echo "3. 🧪 Протестуйте API:"
echo "   yarn test:api"
echo ""

read -p "Відкрити SQL схему для копіювання? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "📋 === SQL СХЕМА ДЛЯ SUPABASE ==="
    echo "Скопіюйте це у Supabase SQL Editor:"
    echo "=================================="
    cat supabase-schema.sql
    echo ""
    echo "=================================="
    echo "✅ Скопіюйте код вище і виконайте у Supabase SQL Editor"
fi

echo ""
echo "🎉 Налаштування завершено!"
echo "Тепер ваш проект використовуватиме Supabase як основну базу даних"