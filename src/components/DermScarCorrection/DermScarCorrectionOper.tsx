'use client';
import React from 'react';
import Link from 'next/link';
import { DermScarCorrectionOperGallery, GalleryImage } from './DermScarCorrectionOperGallery';

const DermScarCorrectionOper: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/skin-plastic/skin-correction17.jpg',
      alt: 'Контрольоване самостійне загоєння',
      width: 800,
      height: 600,
      title: 'Контрольоване самостійне загоєння',
    },
    {
      src: '/images/skin-plastic/skin-correction18.jpg',
      alt: 'Первинне хірургічне ушивання',
      width: 800,
      height: 600,
      title: 'Первинне хірургічне ушивання',
    },
    {
      src: '/images/skin-plastic/skin-correction15.jpg',
      alt: 'Пластика місцевими тканинами',
      width: 800,
      height: 600,
      title: 'Пластика місцевими тканинами',
    },
    {
      src: '/images/skin-plastic/skin-correction16.jpg',
      alt: 'Пересадка власної шкіри',
      width: 800,
      height: 600,
      title: 'Пересадка власної шкіри',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок по центру */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Методи закриття ран у реконструктивній та пластичній хірургії
        </h2>

        {/* Вступний текст на всю ширину */}
        <div className="w-full max-w-5xl mx-auto mb-12 md:mb-16">
          <div
            className="bg-blue-50 rounded-xl p-4 md:p-6 text-blue-900 text-sm md:text-base font-medium shadow-sm border-l-8 border-blue-400 dark:bg-blue-900 dark:text-blue-100"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              У реконструктивній та пластичній хірургії застосовується широкий спектр методів
              закриття ран шкіри та м&apos;яких тканин. Вибір тактики лікування визначається
              індивідуально з урахуванням розмірів і глибини дефекту, його локалізації, стану
              навколишніх тканин, кровопостачання та естетичної значущості ураженої ділянки.
            </p>
            <p className="leading-relaxed mt-4">
              Основною метою є не лише загоєння рани, а й максимальне відновлення функції та
              зовнішнього вигляду, з формуванням малопомітних рубців і збереженням анатомічних
              контурів.
            </p>
          </div>
        </div>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Ліва колонка - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            {/* Основні методи лікування */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                <span className="w-1 h-6 bg-blue-500 mr-3"></span>
                Основні методи лікування
              </h3>

              <ul className="space-y-6">
                <li className="flex flex-col">
                  <h4 className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    Контрольоване самостійне загоєння
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 ml-5 leading-relaxed">
                    Використовується при невеликих дефектах у функціонально та естетично менш
                    значущих зонах. Лікування проводиться під постійним медичним наглядом з метою
                    формування оптимального рубця.
                  </p>
                </li>

                <li className="flex flex-col">
                  <h4 className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    Первинне хірургічне ушивання рани
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 ml-5 leading-relaxed">
                    Застосовується при свіжих ушкодженнях із можливістю точного зіставлення країв
                    рани. Дозволяє досягти швидкого загоєння та мінімізувати рубцеві зміни.
                  </p>
                </li>

                <li className="flex flex-col">
                  <h4 className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    Пластика місцевими тканинами
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 ml-5 leading-relaxed">
                    Дає змогу закрити дефект за рахунок переміщення навколишніх тканин із
                    збереженням їх кровопостачання. Метод широко використовується в естетично
                    важливих ділянках, зокрема на обличчі.
                  </p>
                </li>

                <li className="flex flex-col">
                  <h4 className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    Пересадка власної шкіри (аутодермопластика)
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 ml-5 leading-relaxed">
                    Показана при обширних або глибоких дефектах, коли використання місцевих тканин є
                    неможливим або недостатнім. Забезпечує відновлення шкірного покриву та захист
                    підлеглих тканин.
                  </p>
                </li>

                <li className="flex flex-col">
                  <h4 className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    Поетапне реконструктивне лікування складних дефектів
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 ml-5 leading-relaxed">
                    Застосовується при комбінованих, інфікованих або посттравматичних ушкодженнях.
                    Передбачає кілька етапів хірургічного відновлення з поступовим формуванням
                    функціонально й естетично повноцінного результату.
                  </p>
                </li>
              </ul>
            </div>

            {/* Переваги реконструктивно-пластичного підходу */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                <span className="w-1 h-6 bg-blue-500 mr-3"></span>
                Переваги реконструктивно-пластичного підходу
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                    Індивідуальний вибір методу лікування
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                    Збереження функції ураженої ділянки
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                    Мінімізація післяопераційних рубців
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                    Відновлення природних контурів
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                    Покращення якості життя пацієнта
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <DermScarCorrectionOperGallery images={galleryImages} />
          </div>
        </div>

        {/* Мета лікування на всю ширину */}
        <div className="w-full max-w-5xl mx-auto">
          <div
            className="bg-blue-50 rounded-xl p-4 md:p-6 text-blue-900 text-sm md:text-base font-medium shadow-sm border-l-8 border-blue-400 dark:bg-blue-900 dark:text-blue-100"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-3">⇒</span>
              Мета лікування
            </h3>
            <p className="leading-relaxed">
              Головною метою реконструктивної та пластичної хірургії є досягнення повноцінного
              загоєння з мінімальними функціональними та естетичними порушеннями, з урахуванням
              індивідуальних потреб кожного пацієнта.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DermScarCorrectionOper;
