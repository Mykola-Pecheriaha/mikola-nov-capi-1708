'use client';
import React from 'react';
import Link from 'next/link';
import { NailReabilGallery, GalleryImage } from './NailReabilGallery';

const NailCorrectionReabil: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/ingrown-nail/ingrown-nail29.jpg',
      alt: 'Обробка місця операції',
      width: 800,
      height: 600,
      title: 'Обробка місця операції',
    },
    {
      src: '/images/ingrown-nail/ingrown-nail30.jpg',
      alt: "Перев'язання післяопераційної рани",
      width: 800,
      height: 600,
      title: "Перев'язання післяопераційної рани",
    },
    {
      src: '/images/ingrown-nail/ingrown-nail26.jpg',
      alt: 'Засідання гігієни ніг',
      width: 800,
      height: 600,
      title: 'Засідання гігієни ніг',
    },
    {
      src: '/images/ingrown-nail/ingrown-nail27.jpg',
      alt: 'Вибір зручного взуття',
      width: 800,
      height: 600,
      title: 'Вибір зручного взуття',
    },
    {
      src: '/images/ingrown-nail/ingrown-nail28.jpg',
      alt: 'Контрольний огляд ',
      width: 800,
      height: 600,
      title: 'Контрольний огляд ',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок на всю ширину */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Післяопераційний догляд
        </h2>

        {/* Вступний текст на всю ширину */}
        <div className="w-full max-w-5xl mx-auto mb-12 md:mb-16">
          <div
            className="bg-blue-50 dark:bg-blue-900 rounded-xl p-4 md:p-6 text-blue-900 dark:text-blue-100 text-sm md:text-base font-medium shadow-sm border-l-8 border-blue-400 dark:border-blue-500"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              Післяопераційний період є важливим етапом лікування та спрямований на безпечне
              загоєння рани, профілактику ускладнень і відновлення функції. Він включає:
            </p>
          </div>
        </div>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Ліва колонка - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  регулярні перев&apos;язки з використанням сучасних антисептичних і загоювальних
                  засобів
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  щоденний візуальний контроль стану рани та навколишніх тканин
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  спостереження за ознаками запалення (почервоніння, набряк, біль, виділення)
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  тимчасове обмеження фізичного навантаження та тривалого стояння
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  за потреби — розвантаження ділянки за допомогою спеціального взуття або устілок
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  дотримання рекомендацій щодо гігієни стоп і правильного догляду за шкірою
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  вибір зручного взуття, що не тисне на післяопераційну ділянку
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  профілактику інфекційних ускладнень, у тому числі медикаментозну — за показами
                  лікаря
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0 mt-1.5"></span>
                <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  планові контрольні огляди для оцінки динаміки загоєння
                </span>
              </li>
            </ul>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <NailReabilGallery images={galleryImages} />
          </div>
        </div>

        {/* Висновок на всю ширину */}
        <div className="w-full max-w-5xl mx-auto mb-10">
          <div
            className="bg-blue-50 dark:bg-blue-900 rounded-xl p-4 md:p-6 text-blue-900 dark:text-blue-100 text-sm md:text-base font-medium shadow-sm border-l-8 border-blue-400 dark:border-blue-500"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              Дотримання всіх рекомендацій лікаря в післяопераційному періоді значно знижує ризик
              ускладнень і рецидиву, забезпечує повноцінне загоєння та швидке повернення до звичного
              способу життя.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NailCorrectionReabil;
