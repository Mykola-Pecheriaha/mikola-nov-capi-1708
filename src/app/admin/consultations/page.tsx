'use client';
import React, { useEffect, useState } from 'react';

interface Consultation {
  id?: string;
  name: string;
  phone: string;
  comment?: string;
  date?: string;
  createdAt?: string;
}

export default function ConsultationsAdminPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/consultations')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        setConsultations(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setConsultations([]);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (consultationId: string | undefined) => {
    if (!consultationId) {
      alert('Помилка: ID консультації не знайдено');
      return;
    }

    if (!confirm('Ви впевнені, що хочете видалити цю консультацію?')) {
      return;
    }

    try {
      console.log('🗑️ Attempting to delete consultation with ID:', consultationId);
      const response = await fetch(`/api/consultations?id=${consultationId}`, {
        method: 'DELETE',
      });

      console.log('📡 Delete response status:', response.status);
      const result = await response.json();
      console.log('✅ Delete response result:', result);

      if (result.success) {
        // Оновлюємо список консультацій
        setConsultations((prevConsultations) =>
          prevConsultations.filter((c) => c.id !== consultationId),
        );
        alert('Консультацію успішно видалено!');
      } else {
        console.error('❌ Delete failed:', result);
        alert(`Помилка при видаленні: ${result.error || 'Невідома помилка'}`);
      }
    } catch (error) {
      console.error('❌ Delete error:', error);
      alert(
        'Помилка при видаленні консультації: ' +
          (error instanceof Error ? error.message : 'Невідома помилка'),
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Записи на консультацію</h1>
      {loading ? (
        <p className="text-gray-500">Завантаження...</p>
      ) : consultations.length === 0 ? (
        <p className="text-gray-500">Записів поки немає.</p>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ім&apos;я
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Телефон
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Коментар
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
                {consultations.map((c, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {c.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                      {c.comment || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {c.date
                        ? new Date(c.date).toLocaleDateString('uk-UA')
                        : c.createdAt
                          ? new Date(c.createdAt).toLocaleDateString('uk-UA')
                          : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleDelete(c.id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                      >
                        🗑️ Видалити
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
