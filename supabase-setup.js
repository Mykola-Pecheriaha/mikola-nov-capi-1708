#!/usr/bin/env node

/**
 * 🚀 SUPABASE QUICK START - CLI утиліта
 * Допомагає швидко налаштувати Supabase для проекту
 *
 * Використання:
 *   node supabase-setup.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

async function main() {
  console.clear();
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║   🏥 SUPABASE QUICK SETUP                                 ║');
  console.log('║   Медична клініка Миколи Печеряги                         ║');
  console.log('╚═══════════════════════════════════════════════════════════╝');
  console.log('');

  const envPath = path.join(process.cwd(), '.env.local');

  // Перевіра .env.local
  if (!fs.existsSync(envPath)) {
    console.log('⚠️  .env.local НЕ ЗНАЙДЕНО');
    console.log('📝 Створюю базовий шаблон...\n');

    const template = `# 🔐 SUPABASE CONFIGURATION
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-key
NODE_ENV=development
`;
    fs.writeFileSync(envPath, template);
    console.log('✅ Файл .env.local створено\n');
  }

  console.log('📖 Перед продовженням:');
  console.log('   1. Перейти: https://supabase.com');
  console.log('   2. Натиснути: "Start your project"');
  console.log('   3. Заповнити форму (вибрати Free план)');
  console.log('   4. Скопіювати URL та ключ з Settings → API\n');

  const url = await question('🔗 Вставте NEXT_PUBLIC_SUPABASE_URL: ');
  if (!url) {
    console.log('❌ URL не введено');
    rl.close();
    return;
  }

  const key = await question('🔑 Вставте NEXT_PUBLIC_SUPABASE_ANON_KEY: ');
  if (!key) {
    console.log('❌ Ключ не введено');
    rl.close();
    return;
  }

  // Оновити .env.local
  console.log('\n⚙️  Оновлюю .env.local...');
  let env = fs.readFileSync(envPath, 'utf8');
  env = env.replace(/NEXT_PUBLIC_SUPABASE_URL=.*/g, `NEXT_PUBLIC_SUPABASE_URL=${url}`);
  env = env.replace(/NEXT_PUBLIC_SUPABASE_ANON_KEY=.*/g, `NEXT_PUBLIC_SUPABASE_ANON_KEY=${key}`);
  fs.writeFileSync(envPath, env);

  console.log('✅ .env.local оновлено\n');

  // Показати інструкції
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║  🎯 НАСТУПНІ КРОКИ:                                       ║');
  console.log('╚═══════════════════════════════════════════════════════════╝\n');

  console.log('📋 КРОК 1: Створіть таблиці БД');
  console.log('   a) Перейти: Supabase Dashboard → SQL Editor');
  console.log('   b) Натиснути: "New query"');
  console.log('   c) Скопіювати код (див. нижче)');
  console.log('   d) Вставити у SQL Editor');
  console.log('   e) Натиснути: ▶️ RUN\n');

  console.log('📋 КРОК 2: Скопіюйте SQL код:');
  console.log('   yarn setup:sql\n');

  console.log('📋 КРОК 3: Перезапустіть сервер');
  console.log('   yarn dev\n');

  console.log('🧪 КРОК 4: Протестуйте API');
  console.log('   yarn test:api\n');

  console.log('✅ ГОТОВО!\n');

  rl.close();
}

main().catch(console.error);
