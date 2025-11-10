#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * 🔄 Міграційний скрипт для переносу даних з JSON файлів у Supabase
 *
 * Використання:
 * 1. Налаштуйте .env.local з вашими Supabase credentials
 * 2. Запустіть: node scripts/migrate-to-supabase.js
 */

const fs = require('fs');
const path = require('path');

// Завантажуємо environment variables
require('dotenv').config({ path: '.env.local' });

// Імпортуємо Supabase client (потрібно встановити @supabase/supabase-js)
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    '❌ Error: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required',
  );
  console.error('Please check your .env.local file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Шляхи до JSON файлів
const MEDICAL_FORMS_PATH = path.join(__dirname, '..', 'server', 'medical-forms.json');
const CONSULTATIONS_PATH = path.join(__dirname, '..', 'server', 'consultations.json');

// Функція для перетворення camelCase в snake_case
function toSnakeCase(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const snakeKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
    result[snakeKey] = value;
  }
  return result;
}

async function migrateMedicalForms() {
  console.log('📋 Migrating medical forms...');

  if (!fs.existsSync(MEDICAL_FORMS_PATH)) {
    console.log('⚠️  No medical forms file found, skipping...');
    return;
  }

  try {
    const data = JSON.parse(fs.readFileSync(MEDICAL_FORMS_PATH, 'utf-8'));
    console.log(`Found ${data.length} medical forms to migrate`);

    // Перетворюємо дані для Supabase
    const supabaseData = data.map((form) => {
      const converted = toSnakeCase(form);

      // Додаємо відсутні поля
      if (!converted.status) converted.status = 'pending';
      if (!converted.created_at) converted.created_at = new Date().toISOString();

      // Видаляємо id якщо він є (Supabase згенерує новий UUID)
      delete converted.id;

      return converted;
    });

    // Вставляємо в Supabase
    const { error } = await supabase.from('medical_forms').insert(supabaseData);

    if (error) {
      console.error('❌ Error inserting medical forms:', error);
      return;
    }

    console.log(`✅ Successfully migrated ${data.length} medical forms`);

    // Створюємо бекап
    const backupPath = `${MEDICAL_FORMS_PATH}.backup.${Date.now()}`;
    fs.copyFileSync(MEDICAL_FORMS_PATH, backupPath);
    console.log(`💾 Backup created: ${backupPath}`);
  } catch (error) {
    console.error('❌ Error migrating medical forms:', error);
  }
}

async function migrateConsultations() {
  console.log('📞 Migrating consultations...');

  if (!fs.existsSync(CONSULTATIONS_PATH)) {
    console.log('⚠️  No consultations file found, skipping...');
    return;
  }

  try {
    const data = JSON.parse(fs.readFileSync(CONSULTATIONS_PATH, 'utf-8'));
    console.log(`Found ${data.length} consultations to migrate`);

    // Перетворюємо дані для Supabase
    const supabaseData = data.map((consultation) => {
      const converted = toSnakeCase(consultation);

      // Додаємо відсутні поля
      if (!converted.created_at) converted.created_at = new Date().toISOString();

      // Видаляємо id якщо він є (Supabase згенерує новий UUID)
      delete converted.id;

      return converted;
    });

    // Вставляємо в Supabase
    const { error } = await supabase.from('consultations').insert(supabaseData);

    if (error) {
      console.error('❌ Error inserting consultations:', error);
      return;
    }

    console.log(`✅ Successfully migrated ${data.length} consultations`);

    // Створюємо бекап
    const backupPath = `${CONSULTATIONS_PATH}.backup.${Date.now()}`;
    fs.copyFileSync(CONSULTATIONS_PATH, backupPath);
    console.log(`💾 Backup created: ${backupPath}`);
  } catch (error) {
    console.error('❌ Error migrating consultations:', error);
  }
}

async function verifyMigration() {
  console.log('🔍 Verifying migration...');

  try {
    // Перевіряємо медичні форми
    const { data: medicalForms, error: medicalError } = await supabase
      .from('medical_forms')
      .select('id');

    if (medicalError) {
      console.error('❌ Error verifying medical forms:', medicalError);
    } else {
      console.log(`✅ Medical forms in Supabase: ${medicalForms.length}`);
    }

    // Перевіряємо консультації
    const { data: consultations, error: consultError } = await supabase
      .from('consultations')
      .select('id');

    if (consultError) {
      console.error('❌ Error verifying consultations:', consultError);
    } else {
      console.log(`✅ Consultations in Supabase: ${consultations.length}`);
    }
  } catch (error) {
    console.error('❌ Error verifying migration:', error);
  }
}

async function main() {
  console.log('🚀 Starting Supabase migration...');
  console.log(`📡 Supabase URL: ${supabaseUrl}`);

  try {
    await migrateMedicalForms();
    await migrateConsultations();
    await verifyMigration();

    console.log('🎉 Migration completed successfully!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Check your Supabase dashboard to verify the data');
    console.log('2. Test your application to ensure everything works');
    console.log('3. Consider removing the old JSON files after verification');
  } catch (error) {
    console.error('💥 Migration failed:', error);
    process.exit(1);
  }
}

// Запускаємо міграцію
main();
