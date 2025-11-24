'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import GinecomastiyaPreparationGallery, {
  type GalleryImage,
} from './GinecomastiyaPreparationGallery';

// Дані для консультації
const consultationSteps = [
  'Огляд пацієнта та визначення типу гінекомастії',
  "Оцінка загального стану здоров'я та наявності протипоказань",
  'Обговорення очікуваних результатів та методів корекції',
  'Визначення обсягу хірургічного втручання',
  "Роз'яснення особливостей реабілітаційного періоду",
];

const consultationImages: GalleryImage[] = [
  {
    src: '/images/GinecomastiyaPreparation/ginecomas18.jpg',
    alt: 'Консультація пластичного хірурга',
    width: 800,
    height: 600,
    title: 'Консультація хірурга',
  },
  {
    src: '/images/GinecomastiyaPreparation/ginecomas17.jpg',
    alt: 'Огляд пацієнта',
    width: 800,
    height: 600,
    title: 'Огляд пацієнта',
  },
];

// Інформаційні блоки
const preparationBlocks = [
  {
    title: 'Лікування гінекомастії: проведення операції з видалення гінекомастії',
    description: `Метод проведення пластики визначається виходячи з виду патології. Справжня гінекомастія передбачає видалення залозистих тканин та відновлення природного контуру чоловічих грудей. Розріз здійснюється по колу ареоли. Після цього залишається косметичний шов, який через кілька місяців повністю зливається з кольором шкіри соска і зовсім непомітний для оточуючих.`,
    images: [
      {
        src: '/images/GinecomastiyaPreparation/ginecomas13.jpg',
        alt: 'Проведення операції з видалення гінекомастії',
        width: 800,
        height: 600,
        title: 'Проведення операції з видалення гінекомастії',
      },
      {
        src: '/images/GinecomastiyaPreparation/ginecomas25.jpg',
        alt: 'Проведення операції з видалення гінекомастії',
        width: 800,
        height: 600,
        title: 'Проведення операції з видалення гінекомастії',
      },
      {
        src: '/images/GinecomastiyaPreparation/ginecomas24.jpg',
        alt: 'Хірургічне втручання',
        width: 800,
        height: 600,
        title: 'Хірургічне втручання',
      },
      {
        src: '/images/GinecomastiyaPreparation/ginecomas20.jpg',
        alt: 'Хірургічне втручання',
        width: 800,
        height: 600,
        title: 'Хірургічне втручання',
      },
    ],
  },
  {
    title: 'Лікування гінекомастії: реабілітація',
    description: `Після хірургічного втручання, виконаного під загальною анестезією, пацієнт проводить у стаціонарі одну добу під контролем медичного персоналу. Імовірний дискомфорт в області грудей легко усувається знеболюючими.`,
    images: [
      {
        src: '/images/GinecomastiyaPreparation/ginecomas22.jpg',
        alt: 'Реабілітація після операції',
        width: 800,
        height: 600,
        title: 'Реабілітація після операції',
      },
      {
        src: '/images/GinecomastiyaPreparation/ginecomas21.jpg',
        alt: 'Відновлення після операції',
        width: 800,
        height: 600,
        title: 'Відновлення після операції',
      },
    ],
  },
];

const GinecomastiyaPreparation: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Заголовок */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-6 md:mb-8 relative">
          Гінекомастія у чоловіків: консультація
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></span>
        </h2>

        {/* Опис */}
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-800 dark:text-gray-200 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
          Як позбутися гінекомастії? Перший етап – безкоштовна консультація в Чернівцях у
          досвідченого пластичного хірурга Миколи Печеряга. Індивідуальна консультація у хірурга
          включає:
        </p>

        {/* Консультаційна секція */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-10 md:mb-12 p-6 md:p-8 lg:p-10 bg-gradient-to-br from-blue-50/80 to-blue-100/50 dark:from-gray-800/80 dark:to-gray-700/50 rounded-2xl border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          {/* Кроки консультації */}
          <div className="flex-1 flex flex-col justify-center gap-5 md:gap-6">
            {consultationSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-white/60 dark:bg-gray-900/60 rounded-xl transition-all duration-300 hover:translate-x-1 hover:bg-white/80 dark:hover:bg-gray-900/80"
              >
                <ArrowRight
                  size={20}
                  className="text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5"
                />
                <span className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* Галерея */}
          <div className="flex-[1.3] lg:flex-1">
            {imagesLoaded && <GinecomastiyaPreparationGallery images={consultationImages} />}
          </div>
        </div>

        {/* Додаткова інформація */}
        <div className="w-full max-w-5xl mx-auto mb-10 md:mb-12">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-blue-900 dark:text-blue-100 text-base md:text-lg lg:text-xl font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              Спеціаліст визначає, що стало причиною виникнення патології та підбирає необхідний
              спосіб вирішення проблеми.
            </p>
          </div>
        </div>

        {/* Інформаційні блоки */}
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
          {preparationBlocks.map((block, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 md:p-8 lg:p-10 bg-gradient-to-br from-blue-50/60 to-white dark:from-gray-800/60 dark:to-gray-900/60 rounded-2xl border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Текстовий контент */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-900 dark:text-blue-100 mb-4 md:mb-6 relative pb-3">
                  {block.title}
                  <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></span>
                </h3>
                <div className="space-y-4 md:space-y-5">
                  {block.description.split('\n\n').map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed text-justify"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Галерея */}
              <div className="flex-1">
                {imagesLoaded && <GinecomastiyaPreparationGallery images={block.images} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GinecomastiyaPreparation;
