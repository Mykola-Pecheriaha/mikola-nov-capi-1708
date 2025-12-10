'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AlbumCard {
  id: string;
  title: string;
  coverImage: string;
  href: string;
}

const albums: AlbumCard[] = [
  {
    id: 'breast-surgery',
    title: 'Пластика грудей',
    coverImage: '/images/albums/implant25.jpg',
    href: '/services/albums/breast-surgery',
  },
  {
    id: 'face-surgery',
    title: 'Пластика обличчя',
    coverImage: '/images/albums/facelift1.jpg',
    href: '/services/albums/face-surgery',
  },
  {
    id: 'body-surgery',
    title: 'Пластика торса',
    coverImage: '/images/albums/abdominoplastic1.jpg',
    href: '/services/albums/body-surgery',
  },
];

export default function Albums() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Фотогалерея результатів
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Ознайомтеся з результатами наших пацієнтів. Кожна операція виконана з увагою до деталей та
          індивідуальним підходом.
        </p>

        {/* Сітка карточок */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {albums.map((album) => (
            <Link
              key={album.id}
              href={album.href}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Зображення обкладинки */}
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg?height=256&width=256&query=album';
                  }}
                />
                {/* Overlay при наведенні */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Назва альбому */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {album.title}
                </h3>
                <div className="mt-3 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Переглянути</span>
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
