'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const RemovalReplacementImplants: React.FC = () => {
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
        '/images/implantRevision/3breast-removebg-preview.png',
      );
      setImageLoaded(isAvailable);
    };
    checkImage();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок вверху по середині */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 mb-8 md:mb-12">
          Заміна або видалення грудних імплантів
        </h2>

        {/* Дві колонки: текст зліва, зображення справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Ліва колонка - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-center text-base md:text-lg text-gray-800">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></span>
                <span className="font-medium">Бажаний об&apos;єм</span>
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-800">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></span>
                <span className="font-medium">Ідеальна форма</span>
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-800">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></span>
                <span className="font-medium">Реабілітація до 30 днів</span>
              </li>
            </ul>
          </div>

          {/* Права колонка - зображення */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {imageLoaded ? (
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/implantRevision/3breast-removebg-preview.png"
                  alt="Заміна грудних імплантів"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full h-64 md:h-80 lg:h-96 bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl flex items-center justify-center">
                <span className="text-blue-400 text-lg">Завантаження зображення...</span>
              </div>
            )}
          </div>
        </div>

        {/* Три абзаци на всю ширину */}
        <div className="w-full max-w-5xl mx-auto space-y-6 md:space-y-8">
          <div
            className="bg-blue-50 dark:bg-blue-50 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-900 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed text-justify">
              Þ Заміна або видалення грудних імплантів — це хірургічна процедура, яка виконується у
              випадках ускладнень, змін у бажаннях пацієнтки або зношення імплантів з часом.
            </p>
          </div>

          <div
            className="bg-blue-50 dark:bg-blue-50 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-900 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed text-justify">
              Þ Імпланти можуть бути видалені або замінені на нові для поліпшення естетичного
              результату, усунення асиметрії, капсулярної контрактури або за бажанням жінки
              повернутися до природної форми грудей.
            </p>
          </div>

          <div
            className="bg-blue-50 dark:bg-blue-50 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-900 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed text-justify">
              Þ Процедура виконується з дотриманням усіх стандартів безпеки і часто супроводжується
              корекцією форми грудей для досягнення гармонійного результату.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemovalReplacementImplants;
