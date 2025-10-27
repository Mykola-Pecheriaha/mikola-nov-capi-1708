'use client';
import React, { useEffect, useState } from 'react';

interface MedicalForm {
  id: string;
  name: string;
  age: string;
  gender: string;
  phone: string;
  height: string;
  weight: string;
  bmi?: number;
  complaints: string;
  examinations: string[];
  hasChronicDisease: boolean;
  chronicDiseases: string;
  takesMedication: boolean;
  medications: string;
  painLevel: number;
  additionalComments: string;
  createdAt: string;
  status: string;
}

export default function MedicalFormsAdminPage() {
  const [medicalForms, setMedicalForms] = useState<MedicalForm[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedForm, setSelectedForm] = useState<MedicalForm | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('/api/medical-forms')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        setMedicalForms(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setMedicalForms([]);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (form: MedicalForm) => {
    setSelectedForm(form);
    setShowModal(true);
  };

  const getBMIStatus = (bmi: number) => {
    if (bmi < 18.5) return { text: 'Недостатня вага', color: 'text-blue-600' };
    if (bmi < 25) return { text: 'Нормальна вага', color: 'text-green-600' };
    if (bmi < 30) return { text: 'Надлишкова вага', color: 'text-yellow-600' };
    return { text: 'Ожиріння', color: 'text-red-600' };
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'reviewed':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Очікує';
      case 'reviewed':
        return 'Переглянуто';
      case 'completed':
        return 'Завершено';
      default:
        return 'Невідомо';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Медичні форми</h1>
        <div className="text-sm text-gray-500">Всього форм: {medicalForms.length}</div>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Завантаження...</p>
        </div>
      ) : medicalForms.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Медичних форм поки немає.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Пацієнт
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Вік/Стать
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ІМТ
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Рівень болю
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Статус
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Дата
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Дії
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {medicalForms.map((form) => {
                  const bmiStatus = form.bmi ? getBMIStatus(form.bmi) : null;
                  return (
                    <tr key={form.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{form.name}</div>
                          <div className="text-sm text-gray-500">{form.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {form.age} років, {form.gender || 'Не вказано'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {form.bmi ? (
                          <div>
                            <div className="text-sm font-medium">{form.bmi}</div>
                            <div className={`text-xs ${bmiStatus?.color}`}>{bmiStatus?.text}</div>
                          </div>
                        ) : (
                          <span className="text-gray-400">Не розраховано</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 ${
                              form.painLevel <= 3
                                ? 'bg-green-400'
                                : form.painLevel <= 6
                                  ? 'bg-yellow-400'
                                  : 'bg-red-400'
                            }`}
                          ></div>
                          <span className="text-sm">{form.painLevel}/10</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(form.status)}`}
                        >
                          {getStatusText(form.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(form.createdAt).toLocaleDateString('uk-UA')}
                        <br />
                        {new Date(form.createdAt).toLocaleTimeString('uk-UA', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleViewDetails(form)}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          Переглянути
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Модальне вікно з деталями */}
      {showModal && selectedForm && (
        <div
          className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 pb-4 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Консультація #{selectedForm.id} - {selectedForm.name}
                </h2>
                <p className="text-gray-500 text-sm">
                  {new Date(selectedForm.createdAt).toLocaleDateString('uk-UA')},{' '}
                  {new Date(selectedForm.createdAt).toLocaleTimeString('uk-UA')}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition">
                  🗑️ Видалити
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>{' '}
            <div className="space-y-6 overflow-y-auto">
              {/* Пацієнт */}
              <section>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">👤 Пацієнт</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Ім&apos;я:</strong> {selectedForm.name}
                  </p>
                  <p>
                    <strong>Вік:</strong> {selectedForm.age} років
                  </p>
                  <p>
                    <strong>Стать:</strong> {selectedForm.gender || 'Не вказано'}
                  </p>
                  <p>
                    <strong>Телефон:</strong> {selectedForm.phone}
                  </p>
                  <p>
                    <strong>Ріст:</strong> {selectedForm.height} см
                  </p>
                  <p>
                    <strong>Вага:</strong> {selectedForm.weight} кг
                  </p>
                  {selectedForm.bmi && (
                    <p>
                      <strong>ІМТ:</strong> {selectedForm.bmi} кг/м² (
                      {getBMIStatus(selectedForm.bmi).text})
                    </p>
                  )}
                </div>
              </section>

              {/* Обстеження */}
              <section>
                <h3 className="text-lg font-semibold mb-3 text-yellow-600">🧪 Обстеження</h3>
                <div className="text-gray-700">
                  {selectedForm.examinations && selectedForm.examinations.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedForm.examinations.map((exam, index) => (
                        <span key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">
                          {exam === 'Огляд' && '👨‍⚕️'} {exam}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p>Не вказано</p>
                  )}
                </div>
              </section>

              {/* Скарги */}
              <section>
                <h3 className="text-lg font-semibold mb-3 text-green-600">📝 Скарги</h3>
                <div className="bg-green-50 p-3 rounded text-gray-700">
                  {selectedForm.complaints || 'Не вказано'}
                </div>
              </section>

              {/* Медична історія */}
              <section>
                <h3 className="text-lg font-semibold mb-3 text-purple-600">🩺 Медична історія</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Хронічні хвороби:</strong>{' '}
                    {selectedForm.hasChronicDisease
                      ? selectedForm.chronicDiseases || 'Так'
                      : 'Немає'}
                  </p>
                  <p>
                    <strong>Приймає ліки:</strong>{' '}
                    {selectedForm.takesMedication ? selectedForm.medications || 'Так' : 'Немає'}
                  </p>
                  <p>
                    <strong>Рівень болю:</strong> {selectedForm.painLevel}/10
                  </p>
                </div>
              </section>

              {/* Коментарі */}
              <section>
                <h3 className="text-lg font-semibold mb-3 text-gray-600">💬 Коментарі</h3>
                <div className="bg-gray-50 p-3 rounded text-gray-700">
                  {selectedForm.additionalComments || 'Немає коментарів'}
                </div>
              </section>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Закрити
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
