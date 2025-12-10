import type { ReactElement } from 'react';
import Link from 'next/link';
import AbdominoplastyAlbumGallery from '@/components/Albums/AbdominoplastyAlbumGallery';
import LiposuctionAlbumGallery from '@/components/Albums/LiposuctionAlbumGallery';
import ButtockAugmentationAlbumGallery from '@/components/Albums/ButtockAugmentationAlbumGallery';
import ArmLiftAlbumGallery from '@/components/Albums/ArmLiftAlbumGallery';

export default function BodySurgeryAlbumPage(): ReactElement {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container-custom">
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

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Пластика торса
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Результати різних типів операцій на тілі. Кожна секція містить по 3 пацієнти з фото до та
          після операції.
        </p>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Абдомінопластика
          </h2>
          <AbdominoplastyAlbumGallery />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Ліпосакція
          </h2>
          <LiposuctionAlbumGallery />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Збільшення сідниць
          </h2>
          <ButtockAugmentationAlbumGallery />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Підтяжка рук
          </h2>
          <ArmLiftAlbumGallery />
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-900">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Про пластику торса
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Пластична хірургія тіла допомагає покращити контури фігури, усунути надлишки шкіри та
            жирових відкладень, досягти гармонійних пропорцій.
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
