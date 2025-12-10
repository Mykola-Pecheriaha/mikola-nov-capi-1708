import type { ReactElement } from 'react';
import Link from 'next/link';
import ImplantRemovalAlbumGallery from '@/components/Albums/ImplantRemovalAlbumGallery';

export default function ImplantRemovalAlbumPage(): ReactElement {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container-custom">
        {/* Навігація назад */}
        <Link
          href="/services/albums/breast-surgery"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Назад до пластики грудей
        </Link>

        {/* Заголовок */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Видалення або заміна імплантів
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Результати ревізійних операцій з видалення або заміни грудних імплантів. Кожна операція
          виконується з урахуванням індивідуальних потреб пацієнта.
        </p>

        {/* Галерея */}
        <div className="max-w-6xl mx-auto">
          <ImplantRemovalAlbumGallery />
        </div>

        {/* Додаткова інформація */}
        <div className="mt-16 max-w-4xl mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-900">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Про процедуру
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Реендопротезування (повторна заміна грудних імплантів) виконується як із естетичних, так
            і з медичних причин. Процедура може включати заміну старих імплантів на нові або повне
            їх видалення.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Всі представлені фотографії — реальні результати наших пацієнтів з дотриманням норм
            конфіденційності.
          </p>
        </div>
      </div>
    </main>
  );
}
