'use client';
import React from 'react';
import ButtockContraIndicationGallery, { GalleryImage } from './ButtockContraIndicationGallery';

const contraindicationImages: GalleryImage[] = [
  {
    src: '/images/buttockAugment/Contraindicatio3.jpg',
    alt: 'Обмеження до операції',
    width: 800,
    height: 600,
    title: 'Обмеження',
  },
  {
    src: '/images/buttockAugment/Contraindicatio1.jpg',
    alt: 'Протипокази до пластики сідниць',
    width: 800,
    height: 600,
    title: 'Протипокази',
  },
  {
    src: '/images/buttockAugment/Contraindicatio3.jpg',
    alt: 'Обмеження до операції',
    width: 800,
    height: 600,
    title: 'Обмеження',
  },
  {
    src: '/images/buttockAugment/Contraindicatio2.jpg',
    alt: 'Протипокази до глютеопластики',
    width: 800,
    height: 600,
    title: 'Протипокази',
  },
];

export default function ButtockContraIndication() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Протипокази до пластики сідниць
        </h2>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Ліва колонка - список протипоказань */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-blue-100 dark:border-blue-900">
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                  <span>вагітність</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                  <span>грудне годування</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                  <span>онкологічне захворювання</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                  <span>серцево-судинна патологія</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                  <span>ниркова та печінкова недостатність</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                  <span>декомпенсований цукровий діабет</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                  <span>інфекційні захворювання</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                  <span>хронічні хвороби у гострій фазі</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                  <span>шкірні захворювання, що зачіпають область проведення операції</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full md:w-1/2">
            <ButtockContraIndicationGallery images={contraindicationImages} />
          </div>
        </div>

        {/* Текст на всю ширину */}
        <div className="w-full max-w-5xl mx-auto space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 md:p-6 text-blue-900 dark:text-blue-100 text-base md:text-lg font-medium shadow-sm border-l-8 border-blue-400 dark:border-blue-500">
            <p className="leading-relaxed">
              Пластика сідниць — це хірургічне втручання, спрямоване на відновлення та корекцію
              форми сідниць шляхом моделювання м&apos;яких тканин. Основними методами є ліпофілінг
              та ендопротезування глютеальними імплантами.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 md:p-6 text-blue-900 dark:text-blue-100 text-base md:text-lg font-medium shadow-sm border-l-8 border-blue-400 dark:border-blue-500">
            <p className="leading-relaxed">
              Мета втручання — корекція гіпоплазії сідниць, контурних деформацій та вікових змін.
              Вибір методики визначається анатомічними особливостями пацієнта, об&apos;ємом
              донорського матеріалу та вимогами до проєкції.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
