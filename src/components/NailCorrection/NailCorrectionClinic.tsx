'use client';
import React from 'react';
import { NailClinicalGallery, type GalleryImage } from './NailClinicalGallery';

const NailCorrectionClinic: React.FC = () => {
  // Зображення для галереї - 6 зображень
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/ingrown-nail/ingrown-nail9.jpg',
      alt: 'Клінічна картина врослого нігтя - локальний біль',
      width: 800,
      height: 600,
      title: 'Локальний біль у ділянці нігтьового валика',
    },
    {
      src: '/images/ingrown-nail/ingrown-nail3.jpg',
      alt: 'Клінічна картина врослого нігтя - набряк',
      width: 800,
      height: 600,
      title: "Набряк та гіперемія м'яких тканин",
    },
    {
      src: '/images/ingrown-nail/ingrown-nail6.jpg',
      alt: 'Клінічна картина врослого нігтя - виділення',
      width: 800,
      height: 600,
      title: 'Виділення серозного характеру',
    },
    {
      src: '/images/ingrown-nail/ingrown-nail7.jpg',
      alt: 'Клінічна картина врослого нігтя - гіпергрануляції',
      width: 800,
      height: 600,
      title: 'Формування гіпергрануляцій',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок вверху по середині */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400 mb-8 md:mb-12 transition-colors duration-300">
          Клінічна картина
        </h2>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16 items-stretch">
          {/* Ліва колонка - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                  локальний біль у ділянці нігтьового валика
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                  набряк та гіперемія м&apos;яких тканин
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                  виділення серозного або гнійного характеру
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                  формування гіпергрануляцій
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-4 flex-shrink-0 mt-2 transition-colors duration-300"></span>
                <span className="text-base md:text-lg text-gray-800 dark:text-gray-300 font-medium transition-colors duration-300">
                  обмеження ходьби при прогресуванні процесу
                </span>
              </div>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full md:w-1/2">
            <NailClinicalGallery images={galleryImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NailCorrectionClinic;
