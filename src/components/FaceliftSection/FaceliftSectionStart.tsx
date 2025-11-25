'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const FaceliftSectionStart: React.FC = () => {
  const [imageSrc, setImageSrc] = useState(
    '/images/faceliftSection/FaceliftSec1-removebg-preview.png',
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  // Перевірка доступності зображення
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkImageExists = async () => {
      try {
        const response = await fetch(imageSrc, { method: 'HEAD' });
        if (!response.ok) {
          setImageSrc('/placeholder.svg?height=600&width=500');
        }
        setImageLoaded(true);
      } catch (error) {
        console.error('Помилка завантаження зображення:', error);
        setImageSrc('/placeholder.svg?height=600&width=500');
        setImageLoaded(true);
      }
    };

    checkImageExists();
  }, [imageSrc]);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Секція з заголовком зліва та фото справа */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Текстовий контент зліва з заголовком */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* Заголовок над текстом зліва */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-12 md:mb-16 leading-tight">
              Фейсліфтинг
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-blue-600 dark:text-blue-400 font-medium">
                Підтяжка обличчя та шиї
              </span>
            </h1>

            {/* Список переваг */}
            <ul className="space-y-5 md:space-y-6">
              <li className="flex items-center text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200">
                <span className="text-2xl md:text-3xl mr-4 md:mr-5 flex-shrink-0">✨</span>
                <span>Поверніть молодість всього за 1 місяць</span>
              </li>
              <li className="flex items-center text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200">
                <span className="text-2xl md:text-3xl mr-4 md:mr-5 flex-shrink-0">✨</span>
                <span>Чіткий та виразний контур обличчя</span>
              </li>
              <li className="flex items-center text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200">
                <span className="text-2xl md:text-3xl mr-4 md:mr-5 flex-shrink-0">✨</span>
                <span>Тривалий ефект — до 10–15 років</span>
              </li>
            </ul>
          </div>

          {/* Фото справа */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {imageLoaded ? (
              <div className="relative w-full max-w-md h-80 md:h-96 lg:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src={imageSrc}
                  alt="Фейсліфтинг - підтяжка обличчя та шиї"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="w-full max-w-md h-80 md:h-96 lg:h-[600px] bg-blue-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                <span className="text-blue-400 dark:text-blue-300 text-lg">Завантаження...</span>
              </div>
            )}
          </div>
        </div>

        {/* Нижня секція з описом на всю ширину */}
        <div className="w-full max-w-5xl mx-auto space-y-6 md:space-y-8">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed text-justify">
              Þ Фейсліфтинг (підтяжка обличчя та шиї) — це сучасна можливість позбутися вікових змін
              та повернути собі свіжий, молодий вигляд. Операція не лише омолоджує зовнішність, а й
              зберігає природність міміки та вашу індивідуальність.
            </p>
          </div>

          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed text-justify">
              Þ Під час хірургічного втручання формується чіткий контур обличчя, шкіра стає
              пружнішою, зникають зморшки та заломи.
            </p>
          </div>

          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed text-justify">
              Þ Сьогодні фейсліфтинг особливо популярний серед пацієнтів після 50 — завдяки малій
              травматичності та вражаючим результатам омолодження.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaceliftSectionStart;
