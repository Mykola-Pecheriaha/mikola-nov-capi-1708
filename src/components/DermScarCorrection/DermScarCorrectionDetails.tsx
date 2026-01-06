'use client';
import React from 'react';
import { DermScarCorrectionDetailsGallery, GalleryImage } from './DermScarCorrectionDetailsGallery';

const DermScarCorrectionDetails: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/skin-plastic/skin-correction4.jpg',
      alt: "Корекція дефектів м'яких тканин 1",
      width: 800,
      height: 600,
      title: 'Травматичні пошкодження',
    },
    {
      src: '/images/skin-plastic/skin-correction5.jpg',
      alt: "Корекція дефектів м'яких тканин 2",
      width: 800,
      height: 600,
      title: 'Післяопераційні дефекти',
    },
    {
      src: '/images/skin-plastic/skin-correction6.jpg',
      alt: "Корекція дефектів м'яких тканин 3",
      width: 800,
      height: 600,
      title: 'Гнійно-запальні ураження',
    },
    {
      src: '/images/skin-plastic/skin-correction7.jpg',
      alt: "Корекція дефектів м'яких тканин 4",
      width: 800,
      height: 600,
      title: 'Хронічні дефекти',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок по центру */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Дефекти мягких тканей
        </h2>

        {/* Два абзаци на всю ширину */}
        <div className="w-full max-w-5xl mx-auto space-y-6 md:space-y-8 mb-12 md:mb-16">
          <div
            className="bg-blue-50 rounded-xl p-4 md:p-6 text-blue-900 text-sm md:text-base font-medium shadow-sm border-l-8 border-blue-400 dark:bg-blue-900 dark:text-blue-100"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              <span className="text-xl md:text-2xl mr-2">⇒</span>
              <span className="font-bold">Дефекти м&apos;яких тканин</span> — це ушкодження або
              втрата шкіри та підшкірних структур, які можуть виникати внаслідок травм, оперативних
              втручань, видалення новоутворень, опіків, інфекційних процесів або хронічних
              захворювань.
            </p>
          </div>

          <div
            className="bg-blue-50 rounded-xl p-4 md:p-6 text-blue-900 text-sm md:text-base font-medium shadow-sm border-l-8 border-blue-400 dark:bg-blue-900 dark:text-blue-100"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              <span className="text-xl md:text-2xl mr-2">⇒</span>
              <span className="font-bold">
                У сучасних умовах дефекти м&apos;яких тканин є особливо актуальною медичною
                проблемою
              </span>{' '}
              на тлі триваючих воєнних дій, що зумовлено зростанням кількості травматичних ушкоджень
              та складних комбінованих дефектів. Такі ураження часто потребують поетапної
              діагностики та індивідуально підібраних методів відновлення.
            </p>
          </div>
        </div>

        {/* Заголовок підрозділу */}
        <h3 className="text-xl md:text-3xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Види пошкоджень м&apos;яких тканин
        </h3>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Ліва колонка - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <ul className="space-y-6">
              {/* Травматичні пошкодження */}
              <li className="flex flex-col">
                <h4 className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  Травматичні пошкодження
                </h4>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                  Виникають унаслідок механічного впливу (удари, порізи, рвані рани, вогнепальні та
                  мінно-вибухові ураження).
                </p>
              </li>

              {/* Післяопераційні дефекти */}
              <li className="flex flex-col">
                <h4 className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  Післяопераційні дефекти
                </h4>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                  Формуються після хірургічних втручань, у тому числі після видалення новоутворень
                  або ускладненого загоєння ран.
                </p>
              </li>

              {/* Опікові ушкодження */}
              <li className="flex flex-col">
                <h4 className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  Опікові ушкодження
                </h4>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                  Пов&apos;язані з термічним, хімічним або електричним впливом, часто
                  супроводжуються втратою шкірного покриву різної глибини.
                </p>
              </li>

              {/* Інфекційно-запальні ураження */}
              <li className="flex flex-col">
                <h4 className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  Інфекційно-запальні ураження
                </h4>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                  Виникають на тлі гнійних процесів, абсцесів, флегмон або хронічних інфекцій.
                </p>
              </li>

              {/* Хронічні дефекти */}
              <li className="flex flex-col">
                <h4 className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  Хронічні дефекти
                </h4>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 ml-6 leading-relaxed">
                  Повільно загоювані рани, зокрема при порушеннях кровообігу, цукровому діабеті або
                  трофічних розладах.
                </p>
              </li>
            </ul>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <DermScarCorrectionDetailsGallery images={galleryImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DermScarCorrectionDetails;
