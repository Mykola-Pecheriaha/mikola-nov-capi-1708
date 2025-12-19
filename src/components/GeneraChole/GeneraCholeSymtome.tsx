'use client';
import React from 'react';
import { CholeSymtomeGallery, type GalleryImage } from './CholeSymtomeGallery';

const GeneraCholeSymtome: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/general-chole/choleterapiya5.jpg',
      alt: 'Ознаки гострого запалення жовчевого міхура',
      width: 800,
      height: 600,
      title: 'Гостре запалення',
    },
    {
      src: '/images/general-chole/choleterapiya6.jpg',
      alt: 'Болі в підребіррі',
      width: 800,
      height: 600,
      title: 'Болі',
    },
    {
      src: '/images/general-chole/choleterapiya11.jpg',
      alt: 'Симптоми холециститу',
      width: 800,
      height: 600,
      title: 'Симптоми',
    },
    {
      src: '/images/general-chole/choleterapiya14.jpg',
      alt: 'Хронічний холецистит',
      width: 800,
      height: 600,
      title: 'Хроніка',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
          Ознаки гострого запалення жовчевого міхура
        </h1>

        {/* Основний контент - Гостре запалення */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Ліва колонка - текст */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
              <ul className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Виражена біль в правому підребіррі з поширенням на весь живіт, а часом в праву
                    лопатку і шию.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Біль буває настільки виражена, що у хворого може раптово знизитися тиск і втрата
                    свідомості.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">Нудота і блювота</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Згодом може бути підвищення температури тіла
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Може бути і поява жовтушності шкіри і слизових
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full lg:w-1/2">
            <CholeSymtomeGallery images={galleryImages} />
          </div>
        </div>

        {/* Хронічний холецистит - на всю ширину */}
        <div className="w-full space-y-6 md:space-y-8">
          {/* Перший блок - Періодичні болі */}
          <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400">
            <p className="flex items-start text-gray-700 dark:text-gray-300">
              <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                •
              </span>
              <span className="text-base md:text-lg leading-relaxed">
                Часом у хворого виникають періодичні болі і дискомфорт в правому підребіррі. Хворі
                самостійно приймають ліки і досить довго не звертаються до лікаря. Більша частина з
                них знають що мають `каміння`` в жовчевому міхурі. Хвороба приймає хронічний
                характер
              </span>
            </p>
          </div>

          {/* Другий блок - Хронічний холецистит */}
          <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4">
              Хронічний холецистит
            </h3>
            <ul className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                  •
                </span>
                <span className="text-base md:text-lg leading-relaxed">
                  При хронічному холециститі, крім названих вище симптомів, людина може відчувати
                  біль у правому підребер`ї, що віддає в інші відділи живота, іноді навіть в серці,
                  присмак гіркоти у роті, відрижку.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                  •
                </span>
                <span className="text-base md:text-lg leading-relaxed">
                  Незалежно від того, як довго хворий `носить каміння в жовчевому міхурі`` -
                  Загострення хвороби і виникнення печінкової кольки може з`явитися будь коли і як
                  правило в `самий непідходящий момент.``
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneraCholeSymtome;
