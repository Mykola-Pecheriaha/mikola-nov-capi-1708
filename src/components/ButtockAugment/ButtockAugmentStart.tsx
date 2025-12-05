'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ButtockAugmentStart: React.FC = () => {
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
        '/images/buttockAugment/buttock-augment1-removebg-preview.png',
      );
      setImageLoaded(isAvailable);
    };
    checkImage();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок вверху по середині */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Збільшення сідниць
        </h2>

        {/* Дві колонки: текст зліва, зображення справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Ліва колонка - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">✨</span>
                <span className="font-medium">Гарна форма</span>
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">✨</span>
                <span className="font-medium">Природна проєкція</span>
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">✨</span>
                <span className="font-medium">Пружні контури</span>
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">✨</span>
                <span className="font-medium">Ліпофілінг або імпланти</span>
              </li>
            </ul>
          </div>

          {/* Права колонка - зображення */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md h-64 md:h-96">
              {imageLoaded ? (
                <Image
                  src="/images/buttockAugment/buttock-augment2-removebg-preview.png"
                  alt="Збільшення сідниць"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-pulse text-blue-500 dark:text-blue-400 text-4xl mb-2">
                      📸
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Завантаження зображення...
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Текст на всю ширину внизу */}
        <div className="w-full">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 text-gray-800 dark:text-gray-200 text-base md:text-lg leading-relaxed shadow-sm border-l-8 border-blue-400 dark:border-blue-600">
            <p className="mb-4">
              Пластика сідниць — це хірургічне втручання, спрямоване на відновлення або покращення
              форми, об`єму та контурів сідничної ділянки шляхом моделювання м`яких тканин.
              Основними методами є ліпофілінг (аутологічна трансплантація жиру) та ендопротезування
              глютеальними імплантами.
            </p>
            <p>
              Мета втручання — корекція гіпоплазії сідниць, контурних деформацій, асиметрії або
              втрати об`єму після схуднення чи вікових змін. Вибір методики визначається
              анатомічними особливостями пацієнта, станом підшкірно-жирової клітковини, наявністю
              донорського матеріалу та вимогами до проєкції.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtockAugmentStart;
