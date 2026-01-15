'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const NailCorrectionStart: React.FC = () => {
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
      const isAvailable = await checkImageAvailability('/images/ingrown-nail/ingrown-nail1.jpg');
      setImageLoaded(isAvailable);
    };
    checkImage();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок вверху по середині */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400 mb-8 md:mb-12 transition-colors duration-300">
          Врослий ніготь
        </h2>

        {/* Опис на всю ширину */}
        <div className="w-full max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 sm:p-6 md:p-8 text-blue-900 dark:text-blue-300 text-base sm:text-lg font-medium shadow-sm transition-colors duration-300">
            <p className="leading-relaxed text-justify">
              Врослий ніготь — це стан, при якому край нігтьової пластини вростає в навколишні м`які
              тканини, викликаючи біль, запалення та дискомфорт. Найчастіше проблема виникає на
              великому пальці стопи та може суттєво обмежувати повсякденну активність.
            </p>
          </div>
        </div>

        {/* Дві колонки: текст зліва, зображення справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16 items-stretch">
          {/* Ліва колонка - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-400 mb-6 md:mb-8 transition-colors duration-300">
              Причини виникнення
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300 transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                <span className="font-medium">неправильне підстригання нігтів</span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300 transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                <span className="font-medium">носіння тісного або незручного взуття</span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300 transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                <span className="font-medium">травми нігтьової пластини</span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300 transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                <span className="font-medium">анатомічні особливості нігтя</span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300 transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                <span className="font-medium">підвищене потовиділення стоп</span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300 transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                <span className="font-medium">грибкові ураження нігтів</span>
              </li>
            </ul>
          </div>

          {/* Права колонка - зображення */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {imageLoaded ? (
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/images/ingrown-nail/ingrown-nail1.jpg"
                  alt="Врослий ніготь"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-xl flex items-center justify-center transition-colors duration-300">
                <span className="text-blue-400 dark:text-blue-500 text-lg text-center px-4 transition-colors duration-300">
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

export default NailCorrectionStart;
