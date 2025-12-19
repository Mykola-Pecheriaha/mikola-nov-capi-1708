'use client';
import React from 'react';
import Link from 'next/link';
import { AbdominoGernReabillGallery, type GalleryImage } from './AbdominoGernReabillGallery';

const AbdominoGernReabill: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/abdomiGernio/abdomiGernio6.jpg',
      alt: 'Реабілітація - період відновлення 1',
      width: 800,
      height: 600,
      title: 'Період лікування',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio7.jpg',
      alt: 'Реабілітація - період відновлення 2',
      width: 800,
      height: 600,
      title: 'Контроль загоєння',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio8.jpg',
      alt: 'Реабілітація - період відновлення 3',
      width: 800,
      height: 600,
      title: 'Результат одужання',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок по середині */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12 lg:mb-16">
          Реабілітація
        </h2>

        {/* Основна інформація на всю ширину */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Реабілітація після поєднаної операції (грижесічення + абдомінопластика) є складнішою та
            тривалішою, ніж після звичайної герніопластики, оскільки включає відновлення як глибоких
            м&apos;язових шарів, так і великої площі шкірних покривів. Повний період відновлення
            зазвичай займає від 3 до 6 місяців.
          </p>
        </div>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
          {/* Ліва колонка - текст */}
          <div className="w-full flex flex-col justify-start">
            <div className="space-y-6 md:space-y-8">
              {/* Графік відновлення */}
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300">
                  Графік відновлення
                </h3>
                <ul className="space-y-3 ml-4 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        1–3 дні:
                      </span>{' '}
                      Перебування в стаціонарі. Можливий дискомфорт, набряки та синці, які
                      купіруються знеболювальними.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        1 тиждень:
                      </span>{' '}
                      Необхідно багато відпочивати, але рекомендується робити короткі прогулянки
                      (5–10 хвилин) по дому для запобігання тромбозу. Спати слід на спині з піднятим
                      узголів&apos;ям та зігнутими в колінах ногами, щоб зменшити натяг на шви.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        2–3 тижні:
                      </span>{' '}
                      Зняття швів (якщо не використано саморозсмоктувальні нитки). Можна повернутися
                      до офісної роботи, але набряки все ще можуть зберігатися.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        4–6 тижнів:
                      </span>{' '}
                      Формування рубцевої тканини. Поступове повернення до звичайної активності,
                      окрім інтенсивних тренувань.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">
                      •
                    </span>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        6 місяців:
                      </span>{' '}
                      Остаточне оцінювання естетичного результату, повне зникнення внутрішніх
                      набряків.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full flex justify-center items-start">
            <AbdominoGernReabillGallery images={galleryImages} />
          </div>
        </div>

        {/* Ключові обмеження та вимоги - на всю ширину */}
        <div className="w-full space-y-6 md:space-y-8 mb-8 md:mb-12">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300">
            Ключові обмеження та вимоги
          </h3>

          {/* Компресійна білизна */}
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-gray-800 dark:text-gray-100 text-base md:text-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400">
            <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3">
              Компресійна білизна:
            </h4>
            <p className="leading-relaxed text-justify">
              Обов&apos;язкове носіння бандажа цілодобово протягом перших 4–6 тижнів. Це підтримує
              м&apos;язи, запобігає рецидиву грижі та прискорює сходження набряків.
            </p>
          </div>

          {/* Фізичні навантаження */}
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-gray-800 dark:text-gray-100 text-base md:text-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400">
            <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3">
              Фізичні навантаження:
            </h4>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">
                  •
                </span>
                <span>Підняття ваги понад 3–5 кг суворо заборонено протягом 6–8 тижнів.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">
                  •
                </span>
                <span>
                  Вправи на м&apos;язи черевного преса виключаються на термін до 2–3 місяців.
                </span>
              </li>
            </ul>
          </div>

          {/* Гігієна та сонце */}
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-gray-800 dark:text-gray-100 text-base md:text-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400">
            <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-3">Гігієна та сонце:</h4>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">
                  •
                </span>
                <span>
                  Приймати душ можна після дозволу лікаря (зазвичай через 3–5 днів), уникаючи
                  намокання швів.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">
                  •
                </span>
                <span>Відвідування сауни, басейну та гарячої ванни заборонено на 2 місяці.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5 flex-shrink-0">
                  •
                </span>
                <span>
                  Уникайте сонячних променів (солярію) на область рубця протягом 1 року, щоб
                  запобігти пігментації.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Рекомендації для прискорення загоєння - на всю ширину */}
        <div className="w-full space-y-4 md:space-y-5">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300">
            Рекомендації для прискорення загоєння
          </h3>

          <div className="space-y-4 md:space-y-5">
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-gray-800 dark:text-gray-100 text-base md:text-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center text-sm md:text-base font-bold flex-shrink-0 mt-1">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Дієта:</h4>
                  <p className="leading-relaxed text-justify">
                    Харчування, багате на білок та клітковину, щоб уникнути запорів, які створюють
                    небезпечний тиск на прооперовану черевну стінку.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-gray-800 dark:text-gray-100 text-base md:text-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center text-sm md:text-base font-bold flex-shrink-0 mt-1">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
                    Контроль ваги:
                  </h4>
                  <p className="leading-relaxed text-justify">
                    Важливо підтримувати стабільну вагу, оскільки її значні коливання можуть
                    зіпсувати результат операції.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-gray-800 dark:text-gray-100 text-base md:text-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center text-sm md:text-base font-bold flex-shrink-0 mt-1">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
                    Догляд за рубцем:
                  </h4>
                  <p className="leading-relaxed text-justify">
                    Використання спеціальних силіконових пластирів або гелів (за призначенням
                    лікаря) після повного загоєння шва для його розгладження.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Заклик до дії */}
        <div className="mt-8 sm:mt-10 text-center p-6 sm:p-8 md:p-10 bg-blue-100/60 dark:bg-blue-900/40 rounded-2xl shadow-lg">
          <p className="text-lg sm:text-xl mb-5 text-gray-800 dark:text-gray-100 font-medium">
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <Link href="/ask-doctor">
            <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white border-none px-6 sm:px-7 py-3 text-base sm:text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Зв&apos;язатися з нами
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AbdominoGernReabill;
