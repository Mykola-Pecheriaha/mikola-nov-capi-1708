'use client';
import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">👨‍💼 Адміністративна панель</h1>
          <p className="text-xl text-gray-600">
            Управління записами на консультації та медичними формами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Консультації */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Записи на консультацію</h2>
              <p className="text-gray-600 mb-6">
                Переглядайте та керуйте записами пацієнтів на консультації. Швидкі записи через
                форми на сайті.
              </p>
              <Link
                href="/admin/consultations"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Переглянути записи
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Медичні форми */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Медичні форми</h2>
              <p className="text-gray-600 mb-6">
                Детальні медичні анкети пацієнтів з повною інформацією про стан здоров&apos;я,
                скарги та історію хвороб.
              </p>
              <Link
                href="/admin/medical-forms"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Переглянути форми
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            📊 Швидка статистика
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">-</div>
              <div className="text-sm text-gray-600">Нові консультації</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">-</div>
              <div className="text-sm text-gray-600">Медичні форми</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">-</div>
              <div className="text-sm text-gray-600">Очікують розгляду</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">-</div>
              <div className="text-sm text-gray-600">Оброблено сьогодні</div>
            </div>
          </div>
        </div>

        {/* Швидкі дії */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Швидкі дії</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/medical-form"
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              🔗 Відкрити медичну форму
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              🏠 На головну сторінку
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
