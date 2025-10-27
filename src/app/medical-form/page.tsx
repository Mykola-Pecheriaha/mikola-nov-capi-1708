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
    setLoading(true);
    setMessage(null);

    const submitData = {
      ...formData,
      bmi: calculateBMI(),
    };

    try {
      const res = await fetch('/api/medical-forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Форму успішно надіслано! Ми зв'яжемося з вами найближчим часом.");
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
      } else {
        setMessage('Помилка при надсиланні форми. Спробуйте ще раз.');
      }
    } catch {
      setMessage('Помилка при надсиланні форми. Спробуйте ще раз.');
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
                  className={`mt-4 p-4 rounded-lg ${message.includes('успішно') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
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
