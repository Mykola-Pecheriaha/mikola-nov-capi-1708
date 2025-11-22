'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MastopexyWithNippleCorrection: React.FC = () => {
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
        '/images/mastopexy-with-nipple-correction/plastychna-khirurhiy2-removebg-preview.png',
      );
      setImageLoaded(isAvailable);
    };
    checkImage();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок вверху по середині */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Підтяжка грудей і корекція сосків та ареоли
        </h1>

        {/* Дві колонки: текст зліва, зображення справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Ліва колонка - переваги */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-blue-900">
              <h2 className="text-xl md:text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-6 flex items-center gap-3">
                <span className="text-2xl md:text-3xl">✨</span>
                Переваги процедури
              </h2>
              <ul className="space-y-4 md:space-y-5">
                <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-7 h-7 bg-blue-500 dark:bg-blue-600 rounded-full mr-3 md:mr-4 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-medium">Бажаний об&apos;єм</span>
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-7 h-7 bg-blue-500 dark:bg-blue-600 rounded-full mr-3 md:mr-4 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-medium">Ідеальна форма</span>
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-7 h-7 bg-blue-500 dark:bg-blue-600 rounded-full mr-3 md:mr-4 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-medium">Реабілітація до 30 днів</span>
                </li>
                <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-7 h-7 bg-blue-500 dark:bg-blue-600 rounded-full mr-3 md:mr-4 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    ✓
                  </span>
                  <span className="font-medium">Природний результат</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - зображення */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {imageLoaded ? (
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/mastopexy-with-nipple-correction/plastychna-khirurhiy2-removebg-preview.png"
                  alt="Підтяжка грудей і корекція сосків та ареоли"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full h-64 md:h-80 lg:h-96 bg-blue-50 dark:bg-gray-800 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-blue-400 dark:text-blue-500 text-lg">
                  Завантаження зображення...
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Три абзаци на всю ширину */}
        <div className="w-full max-w-5xl mx-auto space-y-6 md:space-y-8">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed text-justify">
              ► Красиві груди — синонім жіночності, впевненості та внутрішньої гармонії. З віком,
              після вагітності, грудного вигодовування або змін у вазі, форма молочної залози
              втрачає свою пружність, а сосок і ареола — чіткі естетичні пропорції.
            </p>
          </div>

          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed text-justify">
              ► Підтяжка грудей (мастопексія) дозволяє повернути молочній залозі гармонійний контур
              і природну форму. У поєднанні з корекцією сосково-ареолярного комплексу можна досягти
              максимально збалансованого і привабливого результату. Операція не лише усуває ознаки
              опущення грудей, а й вдосконалює зовнішній вигляд сосків та ареоли — їх форму, розмір
              і симетрію.
            </p>
          </div>

          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed text-justify">
              ► Сучасні хірургічні методики дозволяють проводити ці втручання безпечно, ефективно та
              з природним результатом, підкреслюючи красу кожної жінки.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MastopexyWithNippleCorrection;
