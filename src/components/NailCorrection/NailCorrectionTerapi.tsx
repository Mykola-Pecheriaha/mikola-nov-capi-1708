'use client';
import React from 'react';
import { NailTerapiGallery, type GalleryImage } from './NailTerapiGallery';

const NailCorrectionTerapi: React.FC = () => {
  // Зображення для галереї - 6 зображень
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/ingrown-nail/ingrown-nail8.jpg',
      alt: 'Діагностика врослого нігтя',
      width: 800,
      height: 600,
      title: 'Клінічний огляд та діагностика',
    },
    {
      src: '/images/ingrown-nail/ingrown-nail23.jpg',
      alt: 'Хірургічна тактика',
      width: 800,
      height: 600,
      title: 'Планування хірургічного втручання',
    },

    {
      src: '/images/ingrown-nail/ingrown-nail25.jpg',
      alt: 'Методи хірургічного лікування',
      width: 800,
      height: 600,
      title: 'Проведення операції',
    },
    {
      src: '/images/ingrown-nail/ingrown-nail24.jpg',
      alt: 'Методи хірургічного лікування',
      width: 800,
      height: 600,
      title: 'Проведення операції',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Розділ на всю ширину: Діагностика та хірургічна тактика */}
        <div className="w-full max-w-5xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-400 mb-6 md:mb-8 transition-colors duration-300">
            Діагностика та хірургічна тактика
          </h2>
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-300">
              Діагноз встановлюється на підставі клінічного огляду. Під час обстеження оцінюються
              ступінь вростання нігтьової пластини, вираженість запального процесу, наявність
              інфекційних ускладнень та супутніх захворювань.
            </p>
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-300">
              Тактика лікування визначається індивідуально з урахуванням стадії захворювання та
              ризику рецидиву.
            </p>
          </div>
        </div>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16 items-stretch">
          {/* Ліва колонка - текст з двома секціями */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {/* Показання для консультації хірурга */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-400 mb-5 md:mb-6 transition-colors duration-300">
                Показання для консультації хірурга
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                  <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                    прогресування больового синдрому
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                  <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                    ознаки нагноєння
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                  <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                    рецидивуючий перебіг
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                  <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                    наявність супутніх захворювань (цукровий діабет, судинна патологія)
                  </span>
                </div>
              </div>
            </div>

            {/* Методи хірургічного лікування */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-400 mb-5 md:mb-6 transition-colors duration-300">
                Методи хірургічного лікування
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                  <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                    Часткова резекція врослого краю нігтьової пластини
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                  <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                    Резекція або пластика нігтьового валика
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                  <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                    Корекція росткової зони нігтя з метою профілактики рецидивів
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                  <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                    Санація рани та контроль запального процесу
                  </span>
                </div>
              </div>
              <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed mt-4 md:mt-5 transition-colors duration-300">
                Хірургічні втручання виконуються з дотриманням принципів мінімальної травматизації
                тканин.
              </p>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full md:w-1/2">
            <NailTerapiGallery images={galleryImages} />
          </div>
        </div>

        {/* Розділ на всю ширину: Мета хірургічного лікування */}
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-400 mb-6 md:mb-8 transition-colors duration-300">
            Мета хірургічного лікування
          </h2>
          <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-300">
            Основною метою лікування є ліквідація больового синдрому та запалення, повне загоєння
            тканин і профілактика повторного вростання, з відновленням функції ураженого пальця.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NailCorrectionTerapi;
