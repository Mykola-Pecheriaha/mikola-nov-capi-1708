#!/usr/bin/env node

// Тестовий скрипт для діагностики API medical-forms

// Використовуємо глобальний fetch в Node.js 18+

const testData = {
  name: 'Тестовий Пацієнт',
  age: 30,
  gender: 'male',
  phone: '1234567890',
  height: 180,
  weight: 75,
  complaints: 'Тестова скарга',
  examinations: [],
  hasChronicDisease: false,
  chronicDiseases: '',
  takesMedication: false,
  medications: '',
  painLevel: 5,
  additionalComments: 'Тестовий коментар',
  userAgent: 'Node.js Test Script',
  isMobile: false,
  viewport: { width: 1920, height: 1080 },
  connection: { effectiveType: '4g' },
  platform: 'Linux',
  cookieEnabled: true,
};

async function testAPI() {
  console.log('🚀 Тестуємо medical-forms API...');
  console.log('📝 Тестові дані:', JSON.stringify(testData, null, 2));

  try {
    const response = await fetch('http://localhost:3001/api/medical-forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📡 Response status:', response.status);
    console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));

    const data = await response.json();
    console.log('📋 Response data:', JSON.stringify(data, null, 2));

    if (data.success) {
      console.log('✅ ТЕСТ УСПІШНИЙ!');
    } else {
      console.log('❌ ТЕСТ НЕУСПІШНИЙ:', data.error);
    }
  } catch (error) {
    console.error('💥 Помилка тесту:', error);
  }
}

// Запускаємо тест
testAPI();
