'use client';
import React from 'react';
import { CholeTerapiGallery, type GalleryImage } from './CholeTerapiGallery';
import { CholeComplicationGallery } from './CholeComplicationGallery';

const GeneraCholeTerapi: React.FC = () => {
  const terapiImages: GalleryImage[] = [
    {
      src: '/images/general-chole/choleterapiya3.jpg',
      alt: 'Лапароскопічна холецистектомія',
      width: 800,
      height: 600,
      title: 'Операція',
    },
    {
      src: '/images/general-chole/therapy2.jpg',
      alt: 'Малоінвазивне видалення',
      width: 800,
      height: 600,
      title: 'Малоінвазив',
    },
    {
      src: '/images/general-chole/choleterapiya1.jpg',
      alt: 'Видалення жовчевого міхура',
      width: 800,
      height: 600,
      title: 'Холецистектомія',
    },
    {
      src: '/images/general-chole/choleterapiya4.jpg',
      alt: 'Результат операції',
      width: 800,
      height: 600,
      title: 'Результат',
    },
  ];

  const complicationImages: GalleryImage[] = [
    {
      src: '/images/general-chole/choleterapiya15.jpg',
      alt: "Ускладнення жовчнокам'яної хвороби",
      width: 800,
      height: 600,
      title: 'Ускладнення',
    },
    {
      src: '/images/general-chole/choleterapiya16.jpg',
      alt: 'Водянка жовчевого міхура',
      width: 800,
      height: 600,
      title: 'Водянка',
    },
    {
      src: '/images/general-chole/choleterapiya17.jpg',
      alt: 'Емпієма жовчевого міхура',
      width: 800,
      height: 600,
      title: 'Емпієма',
    },
    {
      src: '/images/general-chole/choleterapiya13.jpg',
      alt: 'Холангіт',
      width: 800,
      height: 600,
      title: 'Холангіт',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
          Лікування - видалення жовчевого міхура
        </h1>

        {/* Лапароскопічна холецистектомія - на всю ширину */}
        <div className="w-full mb-12 md:mb-16">
          <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              • Лапароскопічна холецистектомія
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-4">
              Золотим стандартом в лікуванні жовчнокам`яної хвороби сьогодні є лапароскопічне
              (малоінвазивне) видалення жовчевого міхура. Сучасна лапароскопічна операція значно
              зменшує страждання пацієнта в післяопераційному періоді за рахунок відсутності
              розрізів передньої черевної стінки, коли доступ до хворого органу (жовчевого міхура)
              виконується за допомогою постановки портів (0,5 - 10,0 мм), через які вводиться
              відеокамера та маніпулятори. Пацієнт через одну дві доби може бути виписаний на
              амбулаторне лікування. Операція дозволяє позбутися від хвороби назавжди.
            </p>
          </div>
        </div>

        {/* Додаткові позитиви - заголовок */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-16">
          Додаткові позитиви малоінвазивної лапароскопічної холецистектомії
        </h2>

        {/* Додаткові позитиви - 50/50 макет */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Ліва колонка - переваги */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
              <ul className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Гарна видимість для більш прецизійної техніки операції
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Профілактика післяопераційних гриж
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Профілактика нагноєнь операційної рани
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Профілактика утворення злук і злукової хвороби
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full lg:w-1/2">
            <CholeTerapiGallery images={terapiImages} />
          </div>
        </div>

        {/* Ускладнення - заголовок */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-16">
          Ускладнення при довгому носінні конкрементів в жовчевому міхурі
        </h2>

        {/* Ускладнення - 50/50 макет */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Ліва колонка - ускладнення */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
              <ul className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Водянка жовчевого міхура - це відключений жовчевий міхур з прозорою рідиною
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Емпієма жовчевого міхура - жовчевий міхур у вигляді `мішочка`` з гнійним вмістом
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Жовтянниця - пожовтіння шкіри та слизових як наслідок закупорки жовчевих
                    протоків
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Холангіт - запалення жовчевивідних протоків
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">Рак жовчевого міхура</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full lg:w-1/2">
            <CholeComplicationGallery images={complicationImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneraCholeTerapi;
