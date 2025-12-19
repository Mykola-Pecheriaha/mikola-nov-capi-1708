'use client';
import React from 'react';
import { GeneraCholeStartGallery, type GalleryImage } from './GeneraCholeStartGallery';

const GeneraCholeStart: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/general-chole/liver19.jpg',
      alt: 'Камні жовчевого міхура',
      width: 800,
      height: 600,
      title: 'Діагностика',
    },
    {
      src: '/images/general-chole/liver15.jpg',
      alt: 'УЗД обстеження',
      width: 800,
      height: 600,
      title: 'УЗД',
    },
    {
      src: '/images/general-chole/uzdchol.jpg',
      alt: 'Хірургічне лікування',
      width: 800,
      height: 600,
      title: 'Операція',
    },
    {
      src: '/images/general-chole/liver18.jpg',
      alt: 'Результат лікування',
      width: 800,
      height: 600,
      title: 'Результат',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
          Камні жовчевого міхура
        </h1>

        {/* Вступна інформація на всю ширину */}
        <div className="w-full mb-12 md:mb-16">
          <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400">
            <ul className="space-y-4 md:space-y-6 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                  •
                </span>
                <span className="text-base md:text-lg leading-relaxed">
                  Наявність конкрементів (в `народі каміння``) в жовчевому міхурі довгий час нічим
                  не проявляються. Це може бути `знахідка`` при виконанні УЗД черевної порожнини з
                  причини зовсім іншої.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                  •
                </span>
                <span className="text-base md:text-lg leading-relaxed">
                  Прояв захворювання може з`являтися несподіванно у вигляді виражених болів в
                  правому підребіррі - печінкова колька, яка виникає після зміщення конкрементів в
                  шийку жовчевого міхура і закупорки виходу з нього.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Основний контент */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Ліва колонка - текст */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {/* Другий блок - Симптоми */}
              <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Жовчнокам`яна хвороба може тривалий час перебігати без виражених симптомів і часто
                  виявляється випадково. Найпоширенішими ознаками можуть бути:
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      Безсимптомний перебіг — відсутність скарг протягом тривалого часу
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      Випадкова знахідка під час планового ультразвукового обстеження органів
                      черевної порожнини
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      Відчуття гіркоти в роті, особливо вранці або після вживання жирної їжі
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      Періодичні болі в правому підребер`ї, які можуть виникати після порушення
                      дієти або фізичного навантаження
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      Відчуття важкості чи дискомфорту у верхній частині живота
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      Нудота, іноді блювання, що не приносить полегшення
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      Здуття живота, метеоризм, порушення травлення
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      Іррадіація болю в праву лопатку, плече або спину (при жовчній коліці)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full lg:w-1/2">
            <GeneraCholeStartGallery images={galleryImages} />
          </div>
        </div>

        {/* Попередження на всю ширину */}
        <div className="w-full">
          <div className="bg-red-50 dark:bg-red-900/20 p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-red-500 dark:border-red-400">
            <p className="flex items-start text-gray-800 dark:text-gray-200">
              <span className="mr-4 mt-1 text-red-500 dark:text-red-400 text-2xl font-bold flex-shrink-0">
                ⚠️
              </span>
              <span className="text-base md:text-lg leading-relaxed">
                При появі або посиленні болю, підвищенні температури тіла, пожовтінні шкіри чи склер
                необхідно негайно звернутися до лікаря, оскільки це може свідчити про розвиток
                ускладнень.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneraCholeStart;
