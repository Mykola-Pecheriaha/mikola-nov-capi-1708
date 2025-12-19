'use client';
import React from 'react';
import { AbdominoGernGallery, GalleryImage } from './AbdominoGernGallery';

const AbdominoGernStart: React.FC = () => {
  // Три приклади зображень для галереї
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/abdomiGernio/abdomiGernio10.jpg',
      alt: 'Грижесічення та абдомінопластика - результат 1',
      width: 800,
      height: 600,
      title: 'До та після: комплексна операція',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio11.jpg',
      alt: 'Грижесічення та абдомінопластика - результат 2',
      width: 800,
      height: 800,
      title: 'Видалення грижі та підтяжка живота',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio13.jpg',
      alt: 'Грижесічення та абдомінопластика - результат 3',
      width: 800,
      height: 600,
      title: 'Естетичний результат',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio12.jpg',
      alt: 'Грижесічення та абдомінопластика - результат 3',
      width: 800,
      height: 600,
      title: 'Естетичний результат',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio23.jpg',
      alt: 'Грижесічення та абдомінопластика - результат 3',
      width: 800,
      height: 600,
      title: 'Естетичний результат',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio24.jpg',
      alt: 'Грижесічення та абдомінопластика - результат 3',
      width: 800,
      height: 600,
      title: 'Естетичний результат',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio27.jpg',
      alt: 'Грижесічення та абдомінопластика - результат 3',
      width: 800,
      height: 600,
      title: 'Естетичний результат',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio25.jpg',
      alt: 'Грижесічення та абдомінопластика - результат 3',
      width: 800,
      height: 600,
      title: 'Естетичний результат',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Заголовок по середині */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12 lg:mb-16">
          Грижесічення з абдомінопластикою
        </h2>

        {/* Основна інформація на всю ширину */}
        <div className="mb-10 md:mb-14 lg:mb-16">
          <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            <span className="font-bold text-blue-900 dark:text-blue-300">
              Грижесічення з абдомінопластикою
            </span>
            {
              " — це комплексна хірургічна операція, що поєднує видалення грижі (пупкової, післяопераційної, вентральної) з підтяжкою живота, що включає видалення надлишкової шкіри та жиру, а також зміцнення м'язів черевної стінки (усунення діастазу), щоб повернути животу пласку і підтянуту форму. Це втручання вирішує як естетичні (зайва шкіра, жирові складки), так і функціональні проблеми (грижа), часто проводиться після пологів або значної втрати ваги."
            }
          </p>
        </div>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Ліва колонка - текст */}
          <div className="flex flex-col justify-start space-y-6 md:space-y-8">
            {/* Що це за операція? */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300 mb-3 md:mb-4">
                Що це за операція?
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-blue-900 dark:text-blue-400">
                    • Грижесічення:
                  </span>{' '}
                  Хірург усуває дефект черевної стінки, через який випадають внутрішні органи,
                  зміцнюючи її, часто з використанням сітчастого імплантату.
                </li>
                <li className="text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold text-blue-900 dark:text-blue-400">
                    • Абдомінопластика:
                  </span>{' '}
                  Видаляється зайва шкіра та жир, зміцнюються та зшиваються розійдені м\`язи живота
                  (діастаз), що допомагає створити плоский живіт.
                </li>
              </ul>
            </div>

            {/* Коли це потрібно? */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300 mb-3 md:mb-4">
                Коли це потрібно?
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                  • Наявність грижі (пупкової, післяопераційної, вентральної).
                </li>
                <li className="text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                  • Наявність `жирового фартуха`` або значних надлишків шкіри після
                  пологів/схуднення.
                </li>
                <li className="text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                  • Розходження м`язів живота (діастаз), що призводить до обвисання шкіри.
                </li>
              </ul>
            </div>

            {/* Які переваги комбінованої операції? */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300 mb-3 md:mb-4">
                Які переваги комбінованої операції?
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                  • <span className="font-semibold">Комплексне вирішення:</span> Одночасно
                  усуваються і грижа, і естетичні дефекти живота.
                </li>
                <li className="text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                  • <span className="font-semibold">Економія часу:</span> Замість двох окремих
                  операцій виконується одна.
                </li>
                <li className="text-sm md:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                  • <span className="font-semibold">Покращений результат:</span> Створення більш
                  пласького та естетичного живота, зміцнення м`язового корсета.
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="flex items-start lg:sticky lg:top-24">
            <AbdominoGernGallery images={galleryImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbdominoGernStart;
