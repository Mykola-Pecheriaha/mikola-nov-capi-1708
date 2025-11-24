import type { ReactElement } from 'react';
import Link from 'next/link';
import BreastAugmentationAlbumGallery from '@/components/Albums/BreastAugmentationAlbumGallery';

export default function BreastAugmentationAlbumPage(): ReactElement {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container-custom">
        {/* Навігація назад */}
        <Link
          href="/services/albums"
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
          Назад до альбомів
        </Link>

        {/* Заголовок */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Збільшення груді
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Результати операцій зі збільшення груді. Кожна операція виконується з урахуванням
          індивідуальних особливостей пацієнта для досягнення природного та гармонійного результату.
        </p>

        {/* Галерея */}
        <div className="max-w-6xl mx-auto">
          <BreastAugmentationAlbumGallery />
        </div>

        {/* Додаткова інформація */}
        <div className="mt-16 max-w-4xl mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-900">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Про процедуру
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Збільшення груді (аугментаційна мамопластика) — одна з найпопулярніших операцій у
            пластичній хірургії. Процедура дозволяє збільшити обєм молочних залоз, покращити їх
            форму та симетрію.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Всі представлені фотографії — реальні результати наших пацієнтів. Фото зроблені до та
            після операції з дотриманням всіх норм конфіденційності.
          </p>
        </div>
      </div>
    </main>
  );
}
