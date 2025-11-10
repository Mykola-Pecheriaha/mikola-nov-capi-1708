'use client';
import { useState } from 'react';

interface MedicalFormData {
  // Інформація про пацієнта
  name: string;
  age: string;
  gender: string;
  phone: string;
  height: string;
  weight: string;
  bmi?: number;

  // Скарги пацієнта
  complaints: string;

  // Обстеження
  examinations: string[];

  // Медична історія
  hasChronicDisease: boolean;
  chronicDiseases: string;
  takesMedication: boolean;
  medications: string;
  painLevel: number;

  // Додаткові коментарі
  additionalComments: string;
}

export default function MedicalFormPage() {
  const [formData, setFormData] = useState<MedicalFormData>({
    name: '',
    age: '',
    gender: '',
    phone: '',
    height: '',
    weight: '',
    complaints: '',
    examinations: [],
    hasChronicDisease: false,
    chronicDiseases: '',
    takesMedication: false,
    medications: '',
    painLevel: 0,
    additionalComments: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Розрахунок ІМТ
  const calculateBMI = () => {
    const height = parseFloat(formData.height);
    const weight = parseFloat(formData.weight);
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      return Math.round(bmi * 10) / 10;
    }
    return 0;
  };

  const getBMIStatus = (bmi: number) => {
    if (bmi < 18.5) return { text: 'Недостатня вага', color: 'text-blue-600' };
    if (bmi < 25) return { text: 'Нормальна вага', color: 'text-green-600' };
    if (bmi < 30) return { text: 'Надлишкова вага', color: 'text-yellow-600' };
    return { text: 'Ожиріння', color: 'text-red-600' };
  };

  const handleExaminationChange = (exam: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        examinations: [...prev.examinations, exam],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        examinations: prev.examinations.filter((e) => e !== exam),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (loading) return;

    console.log('🏥 MEDICAL FORM SUBMISSION STARTED');
    console.log('📱 User agent:', navigator.userAgent);
    console.log('🌐 Online status:', navigator.onLine);
    console.log('📋 Form data preview:', {
      name: formData.name,
      phone: formData.phone,
      hasRequiredFields: !!(formData.name && formData.phone),
    });

    // Enhanced validation
    if (!formData.name.trim()) {
      setMessage("❌ Будь ласка, введіть ім'я");
      return;
    }

    if (!formData.phone.trim()) {
      setMessage('❌ Будь ласка, введіть телефон');
      return;
    }

    // Check network connectivity
    if (!navigator.onLine) {
      console.log('❌ No internet connection');
      setMessage("❌ Немає з'єднання з інтернетом. Перевірте підключення.");
      return;
    }

    setLoading(true);
    setMessage(null);

    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

    const submitData = {
      ...formData,
      bmi: calculateBMI(),
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      isMobile,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
      },
      connection: {
        online: navigator.onLine,
        effectiveType:
          (navigator as Navigator & { connection?: { effectiveType?: string } }).connection
            ?.effectiveType || 'unknown',
        downlink:
          (navigator as Navigator & { connection?: { downlink?: number } }).connection?.downlink ||
          'unknown',
      },
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
    };

    try {
      console.log('🚀 Sending medical form data...');
      console.log('🌐 Current URL:', window.location.href);
      console.log('📱 Is Mobile:', isMobile);
      console.log('📡 API endpoint:', '/api/medical-forms');
      console.log('📦 Payload size:', JSON.stringify(submitData).length, 'characters');
      console.log('🔗 Connection info:', {
        online: navigator.onLine,
        effectiveType: (navigator as Navigator & { connection?: { effectiveType?: string } })
          .connection?.effectiveType,
        userAgent: navigator.userAgent,
      });

      // Для мобільних пристроїв використовуємо більший таймаут і не використовуємо AbortController
      let res: Response;

      if (isMobile) {
        console.log('📱 Using mobile-optimized fetch...');

        // Мобільна версія без AbortController (може викликати проблеми на деяких пристроях)
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Mobile timeout after 30 seconds')), 30000),
        );

        const fetchPromise = fetch('/api/medical-forms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Cache-Control': 'no-cache',
            'User-Agent': navigator.userAgent,
          },
          body: JSON.stringify(submitData),
          credentials: 'same-origin',
        });

        res = await Promise.race([fetchPromise, timeoutPromise]);
      } else {
        console.log('💻 Using desktop-optimized fetch...');

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        res = await fetch('/api/medical-forms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Cache-Control': 'no-cache',
          },
          body: JSON.stringify(submitData),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
      }

      console.log('📡 Medical form response:', {
        status: res.status,
        statusText: res.statusText,
        ok: res.ok,
        isMobile,
        headers: Object.fromEntries(res.headers.entries()),
      });

      const data = await res.json();
      console.log('✅ Medical form response data:', data);
      console.log('🔍 Response data.success:', data.success, typeof data.success);

      if (data.success) {
        console.log('🎉 MEDICAL FORM SUBMISSION SUCCESSFUL!');
        setMessage("✅ Форму успішно надіслано! Ми зв'яжемося з вами найближчим часом. Дякуємо!");

        // Очищення форми
        setFormData({
          name: '',
          age: '',
          gender: '',
          phone: '',
          height: '',
          weight: '',
          complaints: '',
          examinations: [],
          hasChronicDisease: false,
          chronicDiseases: '',
          takesMedication: false,
          medications: '',
          painLevel: 0,
          additionalComments: '',
        });

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.log('❌ Server returned error:', data.error);
        setMessage(`❌ Помилка при надсиланні форми: ${data.error || 'Невідома помилка сервера'}`);
      }
    } catch (error) {
      console.error('💥 Medical form submission error:', error);
      console.error('📱 Device info:', {
        isMobile,
        userAgent: navigator.userAgent,
        online: navigator.onLine,
        cookieEnabled: navigator.cookieEnabled,
        platform: navigator.platform,
      });

      if (error instanceof Error && error.name === 'AbortError') {
        setMessage('⏰ Час очікування минув. Спробуйте надіслати форму ще раз.');
      } else if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        if (isMobile) {
          setMessage(
            "📱 Проблема з мобільним з'єднанням. Спробуйте:\n• Перевірити інтернет\n• Оновити сторінку\n• Використати Wi-Fi замість мобільних даних",
          );
        } else {
          setMessage("🌐 Проблема з мережею. Перевірте інтернет-з'єднання та спробуйте ще раз.");
        }
      } else if (error instanceof Error && error.message.includes('Mobile timeout')) {
        setMessage(
          '📱 Мобільний таймаут. Спробуйте:\n• Перевірити стабільність інтернету\n• Зачекати кілька секунд і спробувати знову\n• Використати Wi-Fi',
        );
      } else {
        const errorMsg = error instanceof Error ? error.message : 'Невідома помилка';
        if (isMobile) {
          setMessage(
            `📱 Мобільна помилка: ${errorMsg}\n\nСпробуйте оновити сторінку або використати Wi-Fi.`,
          );
        } else {
          setMessage(`❌ Помилка при надсиланні форми: ${errorMsg}`);
        }
      }
    }
    setLoading(false);
  };

  const currentBMI = calculateBMI();
  const bmiStatus = getBMIStatus(currentBMI);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Форма консультації</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Інформація про пацієнта */}
            <section className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                👤 Інформація про пацієнта
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ім&apos;я *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Вік *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Вік"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Стать</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData((prev) => ({ ...prev, gender: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Оберіть стать</option>
                    <option value="Чоловіча">Чоловіча</option>
                    <option value="Жіноча">Жіноча</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="+380..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Ріст (см)</label>
                  <input
                    type="number"
                    min="50"
                    max="250"
                    value={formData.height}
                    onChange={(e) => setFormData((prev) => ({ ...prev, height: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Ріст в сантиметрах"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Вага (кг)</label>
                  <input
                    type="number"
                    min="10"
                    max="300"
                    value={formData.weight}
                    onChange={(e) => setFormData((prev) => ({ ...prev, weight: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Вага в кілограмах"
                  />
                </div>
              </div>

              {/* Індекс маси тіла */}
              {currentBMI > 0 && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium mb-2">Індекс маси тіла (ІМТ)</h3>
                  <div className="text-2xl font-bold text-blue-600">
                    {currentBMI}{' '}
                    <span className={`text-lg ${bmiStatus.color}`}>({bmiStatus.text})</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Нормальна вага: 18.5-24.9 • Формула: вага/(ріст²)
                  </p>
                </div>
              )}
            </section>

            {/* Скарги пацієнта */}
            <section className="border-l-4 border-green-500 pl-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                📝 Скарги пацієнта
              </h2>

              <div>
                <label className="block text-sm font-medium mb-2">Опишіть скарги</label>
                <textarea
                  value={formData.complaints}
                  onChange={(e) => setFormData((prev) => ({ ...prev, complaints: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  rows={4}
                  placeholder="Детально опишіть ваші скарги та симптоми..."
                />
              </div>
            </section>

            {/* Обстеження */}
            <section className="border-l-4 border-yellow-500 pl-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                🧪 Які маєте обстеження
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Огляд', 'Аналізи', 'ЕКГ', 'Рентген', 'УЗД', 'КТ', 'МРТ'].map((exam) => (
                  <label key={exam} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.examinations.includes(exam)}
                      onChange={(e) => handleExaminationChange(exam, e.target.checked)}
                      className="w-4 h-4 text-yellow-600 rounded focus:ring-yellow-500"
                    />
                    <span className="text-sm">{exam}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* Медична історія */}
            <section className="border-l-4 border-purple-500 pl-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                🩺 Медична історія
              </h2>

              <div className="space-y-6">
                {/* Хронічні хвороби */}
                <div>
                  <label className="block text-sm font-medium mb-3">Чи є хронічні хвороби?</label>
                  <div className="flex space-x-4 mb-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="chronicDisease"
                        checked={formData.hasChronicDisease}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, hasChronicDisease: true }))
                        }
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="ml-2">Так</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="chronicDisease"
                        checked={!formData.hasChronicDisease}
                        onChange={() =>
                          setFormData((prev) => ({
                            ...prev,
                            hasChronicDisease: false,
                            chronicDiseases: '',
                          }))
                        }
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="ml-2">Ні</span>
                    </label>
                  </div>
                  {formData.hasChronicDisease && (
                    <textarea
                      value={formData.chronicDiseases}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, chronicDiseases: e.target.value }))
                      }
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      rows={2}
                      placeholder="Опишіть хронічні захворювання..."
                    />
                  )}
                </div>

                {/* Ліки */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Чи приймаєте ліки постійно?
                  </label>
                  <div className="flex space-x-4 mb-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="medication"
                        checked={formData.takesMedication}
                        onChange={() => setFormData((prev) => ({ ...prev, takesMedication: true }))}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="ml-2">Так</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="medication"
                        checked={!formData.takesMedication}
                        onChange={() =>
                          setFormData((prev) => ({
                            ...prev,
                            takesMedication: false,
                            medications: '',
                          }))
                        }
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="ml-2">Ні</span>
                    </label>
                  </div>
                  {formData.takesMedication && (
                    <textarea
                      value={formData.medications}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, medications: e.target.value }))
                      }
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      rows={2}
                      placeholder="Які ліки приймаєте і в яких дозах..."
                    />
                  )}
                </div>

                {/* Рівень болю */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Рівень болю (0-10): {formData.painLevel}
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={formData.painLevel}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, painLevel: parseInt(e.target.value) }))
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Немає болю (0)</span>
                      <span>Поточний: {formData.painLevel}</span>
                      <span>Нестерпний біль (10)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Додаткові коментарі */}
            <section className="border-l-4 border-gray-500 pl-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                💬 Додаткові коментарі
              </h2>

              <div>
                <label className="block text-sm font-medium mb-2">Додаткові замітки</label>
                <textarea
                  value={formData.additionalComments}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, additionalComments: e.target.value }))
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  rows={4}
                  placeholder="Будь-яка додаткова інформація, яку ви хочете повідомити..."
                />
              </div>
            </section>

            {/* Кнопка відправки */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-full text-lg transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Надсилання...' : 'Надіслати консультацію'}
              </button>

              {message && (
                <div
                  className={`mt-4 p-4 rounded-lg text-center font-medium text-base md:text-sm ${
                    message.includes('успішно') || message.includes('✅')
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}
                  style={{
                    position: 'sticky',
                    top: '20px',
                    zIndex: 50,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                >
                  {message}
                </div>
              )}
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            Відсічений фрагмент екрана створено: {new Date().toLocaleDateString('uk-UA')}{' '}
            {new Date().toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
}
