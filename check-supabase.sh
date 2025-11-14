#!/bin/bash

# 🧪 Скрипт для перевірки налаштування Supabase

echo "🔍 Перевіряю налаштування Supabase..."
echo "================================="

# Перевірка змінних середовища
if [ -f ".env.local" ]; then
    echo "✅ Файл .env.local знайдено"
    
    # Перевірка URL
    if grep -q "https://.*\.supabase\.co" .env.local; then
        echo "✅ NEXT_PUBLIC_SUPABASE_URL налаштовано"
    else
        echo "❌ NEXT_PUBLIC_SUPABASE_URL не налаштовано або невірний"
        echo "   Має бути: https://xxxxxxxxxxxxxxxx.supabase.co"
    fi
    
    # Перевірка ключа
    if grep -q "eyJ.*" .env.local; then
        echo "✅ NEXT_PUBLIC_SUPABASE_ANON_KEY налаштовано"
    else
        echo "❌ NEXT_PUBLIC_SUPABASE_ANON_KEY не налаштовано або невірний"
        echo "   Має починатися з: eyJ..."
    fi
else
    echo "❌ Файл .env.local не знайдено"
    echo "   Створіть файл на основі .env.local.template"
fi

echo ""
echo "🚀 Запускаю тест API..."
echo "====================="

# Перевірка чи запущений сервер
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Сервер запущений на порту 3000"
    
    # Тест API
    echo "🧪 Тестую API medical-forms..."
    node test-medical-forms.js
else
    echo "❌ Сервер не запущений"
    echo "   Запустіть: yarn dev"
fi

echo ""
echo "📊 Інструкції:"
echo "============="
echo "1. Якщо бачите 'Supabase не налаштовано' - оновіть .env.local"
echo "2. Якщо бачите 'Database not configured' - створіть Supabase проект"
echo "3. Якщо API працює - все готово! 🎉"
echo "4. Детальні інструкції: cat SUPABASE_QUICK_SETUP.md"