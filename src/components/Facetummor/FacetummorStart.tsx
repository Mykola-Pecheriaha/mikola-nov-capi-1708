'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const FacetummorStart: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Функція для перевірки доступності зображення
  const checkImageAvailability = async (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = window.Image ? new window.Image() : document.createElement('img');
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  };

  // Перевірка доступності зображення при монтуванні компонента
  useEffect(() => {
    const checkImage = async () => {
      const isAvailable = await checkImageAvailability(
        '/images/facetummor/resultbreast5-removebg-preview.png',
      );
      setImageLoaded(isAvailable);
    };
    checkImage();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок вверху по середині */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400 mb-8 md:mb-12 transition-colors duration-300">
          Новоутворення обличча та тіла
        </h2>

        {/* Дві колонки: текст зліва, зображення справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16 items-center">
          {/* Ліва колонка - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-1.5"></span>
                <span className="font-medium">
                  Видалення новоутворень обличчя з дотриманням принципів дерматохірургії
                </span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-1.5"></span>
                <span className="font-medium">
                  Максимальне збереження функції та естетики обличчя
                </span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-1.5"></span>
                <span className="font-medium">Мінімізація рубцевих змін</span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-1.5"></span>
                <span className="font-medium">Професійний післяопераційний нагляд</span>
              </li>
            </ul>
          </div>

          {/* Права колонка - зображення */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {imageLoaded ? (
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg dark:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/facetummor/resultbreast5-removebg-preview.png"
                  alt="Видалення новоутворень обличчя"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-blue-50 dark:bg-gray-800 border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-xl flex items-center justify-center transition-colors duration-300">
                <span className="text-blue-400 dark:text-blue-300 text-lg">
                  Завантаження зображення...
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacetummorStart;
