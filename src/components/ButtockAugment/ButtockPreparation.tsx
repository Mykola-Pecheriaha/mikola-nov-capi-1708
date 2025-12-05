'use client';
import React from 'react';
import { ButtockPreparationGallery, GalleryImage } from './ButtockPreparationGallery';
import { ButtockBrazilGallery } from './ButtockBrazilGallery';

const implantImages: GalleryImage[] = [
  {
    src: '/images/buttockAugment/buttock-augment7.jpg',
    alt: 'Встановлення імплантів сідниць',
    width: 800,
    height: 600,
    title: 'Встановлення імплантів',
  },
  {
    src: '/images/buttockAugment/buttock-augment8.jpg',
    alt: 'Глютеопластика',
    width: 800,
    height: 600,
    title: 'Глютеопластика',
  },
  {
    src: '/images/buttockAugment/buttock-augment12.jpg',
    alt: 'Хід операції',
    width: 800,
    height: 600,
    title: 'Хід операції',
  },
  {
    src: '/images/buttockAugment/buttock-augment17.jpg',
    alt: 'Результат операції',
    width: 800,
    height: 600,
    title: 'Результат',
  },
];

const brazilImages: GalleryImage[] = [
  {
    src: '/images/buttockAugment/buttock-augment26.jpg',
    alt: 'Бразильська підтяжка сідниць',
    width: 800,
    height: 600,
    title: 'BBL',
  },
  {
    src: '/images/buttockAugment/buttock-augment29.jpg',
    alt: 'Ліпофілінг сідниць',
    width: 800,
    height: 600,
    title: 'Ліпофілінг',
  },
  {
    src: '/images/buttockAugment/buttock-augment28.jpg',
    alt: 'Підготовка до BBL',
    width: 800,
    height: 600,
    title: 'Підготовка',
  },
  {
    src: '/images/buttockAugment/buttock-augment31.jpg',
    alt: 'Результат бразильської підтяжки',
    width: 800,
    height: 600,
    title: 'Результат BBL',
  },
];

export default function ButtockPreparation() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Збільшення сідниць за допомогою імплантів (глютеопластика)
        </h2>

        {/* Перший блок - Встановлення імплантів */}
        <div className="mb-12 md:mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-blue-100 dark:border-blue-900 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6">
              Встановлення імплантів
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  1. Загальна характеристика
                </h4>
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  Ендопротезування сідниць передбачає встановлення силіконового імпланта, який
                  підбирається індивідуально за формою — круглою, овальною або каплеподібною.
                  Імплант розміщується в анатомічно сформованій кишені:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span>між малим і великим сідничним м&apos;язом,</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span>під поверхневою фасцією великого сідничного м&apos;яза,</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span>або інтрам&apos;язово — всередині товщі м&apos;яза.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Дві колонки: текст зліва, галерея справа */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Ліва колонка - Хід операції */}
            <div className="w-full md:w-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-blue-100 dark:border-blue-900 h-full">
                <h4 className="text-lg md:text-xl font-semibold text-blue-800 dark:text-blue-200 mb-4">
                  2. Хід операції
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      • Тривалість та анестезія
                    </h5>
                    <ul className="space-y-2 ml-4">
                      <li className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                        Операція триває орієнтовно до 2 годин.
                      </li>
                      <li className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                        Виконується під загальною анестезією.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      • Хірургічний доступ
                    </h5>
                    <ul className="space-y-2 ml-4">
                      <li className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                        Для встановлення імпланта виконують розріз довжиною близько 5 см.
                      </li>
                      <li className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                        Найчастіше доступ робиться у міжсідничній щілині або підсідничній складці,
                        що забезпечує мінімальну видимість рубця.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      • Розміщення імпланта
                    </h5>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 ml-4">
                      Імплант поміщують у заздалегідь сформовану анатомічну кишеню під основними
                      м&apos;язами сідниць, що забезпечує природну проєкцію та стабільність.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      • Завершальний етап
                    </h5>
                    <ul className="space-y-2 ml-4">
                      <li className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                        Виконується пошарове ушивання тканин.
                      </li>
                      <li className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                        За потреби встановлюється дренаж, що допомагає зменшити післяопераційний
                        набряк і забезпечує контроль за серозним виділенням.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Права колонка - галерея */}
            <div className="w-full md:w-1/2">
              <ButtockPreparationGallery images={implantImages} />
            </div>
          </div>
        </div>

        {/* Другий блок - Бразильська підтяжка */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Ліва колонка - текст */}
            <div className="w-full md:w-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-blue-100 dark:border-blue-900 h-full">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-100 mb-6">
                  Бразильська підтяжка сідниць
                </h3>
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                  Процедура займає 2-3 години та включає два основні етапи:
                </p>
                <ul className="space-y-4">
                  <li className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">
                      • 1 етап: ліпосакція.
                    </span>{' '}
                    Хірург збирає жир з талії та боків, стегн та живота. Зібрану жирову тканину
                    готують для пересадки.
                  </li>
                  <li className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">
                      • 2 етап: ліпофілінг.
                    </span>{' '}
                    Лікар робить кілька невеликих проколів навколо сідниць для введення канюлі.
                    Після цього він вводить підготовлені жирові клітини (на одну сідницю зазвичай
                    потрібно від 300 до 900 мл жиру).
                  </li>
                </ul>
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed mt-6">
                  На завершальному етапі хірург накладає на розрізи акуратні косметичні шви та дає
                  пацієнтці рекомендації щодо відновлення.
                </p>
              </div>
            </div>

            {/* Права колонка - галерея */}
            <div className="w-full md:w-1/2">
              <ButtockBrazilGallery images={brazilImages} />
            </div>
          </div>
        </div>

        {/* Текст на всю ширину */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 md:p-6 text-blue-900 dark:text-blue-100 text-base md:text-lg font-medium shadow-sm border-l-8 border-blue-400 dark:border-blue-500">
            <p className="leading-relaxed">
              Ендопротезування сідниць залишається однією із найрезультативніших процедур.
              Ефективність такого виду пластики підтверджується позитивними відгуками безлічі наших
              пацієнтів. З відгуками про пластичні операції нашої клініки, в тому числі і про
              збільшення сідниць, ви можете ознайомитися на нашому сайті.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
