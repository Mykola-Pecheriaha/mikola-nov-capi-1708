'use client';
import React from 'react';
import Link from 'next/link';
import { CholeReabilGallery, type GalleryImage } from './CholeReabilGallery';

const GeneraCholeReabil: React.FC = () => {
  const reabilImages: GalleryImage[] = [
    {
      src: '/images/general-chole/choleterapiya20.jpg',
      alt: 'Реабілітація після видалення жовчевого міхура',
      width: 800,
      height: 600,
      title: 'Період відновлення',
    },
    {
      src: '/images/general-chole/choleterapiya19.jpg',
      alt: 'Дієта після операції',
      width: 800,
      height: 600,
      title: 'Харчування',
    },
    {
      src: '/images/general-chole/choleterapiya23.jpg',
      alt: 'Фізична активність',
      width: 800,
      height: 600,
      title: 'Активність',
    },
    {
      src: '/images/general-chole/choleterapiya21.jpg',
      alt: 'Повернення до нормального життя',
      width: 800,
      height: 600,
      title: 'Якість життя',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 md:mb-12">
          Реабілітація після видалення жовчевого міхура
        </h1>

        {/* Вступна інформація на всю ширину */}
        <div className="w-full mb-12 md:mb-16">
          <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400">
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Реабілітація після видалення жовчного міхура триває від 1-2 тижнів (після
              лапароскопії) до 1-1,5 місяця для повного повернення до звичного життя, але повна
              адаптація травної системи може зайняти до року, протягом якого необхідно дотримуватися
              спеціальної дієти (Дієта №5), обмежити фізичні навантаження та уникати жирного,
              гострого і смаженого.
            </p>
          </div>
        </div>

        {/* Основний контент - 50/50 макет */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Ліва колонка - текст */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-sm space-y-6">
              {/* Короткостроковий період */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Короткостроковий період (перші тижні):
                </h3>
                <ul className="space-y-4 md:space-y-5 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                      •
                    </span>
                    <div>
                      <p className="text-base md:text-lg font-semibold mb-1">Лапароскопія:</p>
                      <p className="text-sm md:text-base leading-relaxed">
                        Повернення до легких справ за 1-2 тижні, до роботи без навантажень — за 7-10
                        днів.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                      •
                    </span>
                    <div>
                      <p className="text-base md:text-lg font-semibold mb-1">Відкрита операція:</p>
                      <p className="text-sm md:text-base leading-relaxed">
                        Відновлення повільніше, до 4-6 тижнів, через більший розріз.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                      •
                    </span>
                    <div>
                      <p className="text-base md:text-lg font-semibold mb-1">Рекомендації:</p>
                      <p className="text-sm md:text-base leading-relaxed">
                        Обмеження підняття важкого (до 3-5 кг) та інтенсивних вправ, регулярне
                        харчування невеликими порціями, багато рідини.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Довгостроковий період */}
              <div className="pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Довгостроковий період (1-12 місяців):
                </h3>
                <ul className="space-y-4 md:space-y-5 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                      •
                    </span>
                    <div>
                      <p className="text-base md:text-lg font-semibold mb-1">Харчування:</p>
                      <p className="text-sm md:text-base leading-relaxed">
                        Дотримання дієти №5, поступове розширення раціону (за 3 місяці), уникнення
                        алкоголю, газованих напоїв, копченого, смаженого.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                      •
                    </span>
                    <div>
                      <p className="text-base md:text-lg font-semibold mb-1">Фізична активність:</p>
                      <p className="text-sm md:text-base leading-relaxed">
                        Піші прогулянки, поступове повернення до спорту (після консультації з
                        лікарем).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                      •
                    </span>
                    <div>
                      <p className="text-base md:text-lg font-semibold mb-1">Якість життя:</p>
                      <p className="text-sm md:text-base leading-relaxed">
                        При дотриманні рекомендацій якість життя залишається високою.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Ключові фактори */}
              <div className="pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Ключові фактори:
                </h3>
                <ul className="space-y-3 md:space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                      •
                    </span>
                    <span className="text-base md:text-lg leading-relaxed">
                      Метод операції: Лапароскопія значно прискорює відновлення.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                      •
                    </span>
                    <span className="text-base md:text-lg leading-relaxed">
                      Індивідуальні особливості: Кожен організм адаптується по-різному.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 mt-1 text-blue-500 dark:text-blue-400 font-bold text-lg flex-shrink-0">
                      •
                    </span>
                    <span className="text-base md:text-lg leading-relaxed">
                      Дотримання рекомендацій лікаря: Це найважливіша умова успішної реабілітації.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full lg:w-1/2">
            <CholeReabilGallery images={reabilImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneraCholeReabil;
