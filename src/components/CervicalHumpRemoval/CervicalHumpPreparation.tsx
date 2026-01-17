'use client';
import Link from 'next/link';
import { CervicalHumpPreparationGallery } from './CervicalHumpPreparationGallery';
import type { GalleryImage } from './CervicalHumpPreparationGallery';

export function CervicalHumpPreparation() {
  // Зображення для галереї хірургічного лікування
  const treatmentImages: GalleryImage[] = [
    {
      src: '/images/cervical-hump/liposuction37.jpg',
      alt: 'Операція загальної хірургії',
      width: 800,
      height: 600,
      title: 'Загальна хірургія',
    },
    {
      src: '/images/cervical-hump/liposuction40.jpg',
      alt: 'Пластична операція - ліпосакція',
      width: 800,
      height: 600,
      title: 'Пластична ліпосакція',
    },
    {
      src: '/images/cervical-hump/liposuction46.jpg',
      alt: 'Результати після ліпосакції',
      width: 800,
      height: 600,
      title: 'Результати лікування',
    },
    {
      src: '/images/cervical-hump/liposuction45.jpg',
      alt: 'Реабілітація після операції',
      width: 800,
      height: 600,
      title: 'Реабілітація',
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12 relative pb-4">
          <span className="text-blue-500 dark:text-blue-400 mr-3">✦</span>
          Лікування клімактеричного горба
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded"></span>
        </h2>

        {/* Перший блок - Консервативне лікування */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-6">
            <span className="text-blue-500 dark:text-blue-400 mr-2">✦</span>
            Консервативне лікування вдовиного горба: в домашніх умовах та у лікаря
          </h3>

          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 md:p-6 border-l-4 border-blue-500 dark:border-blue-400">
              <p className="text-base md:text-lg text-blue-900 dark:text-blue-100 leading-relaxed">
                <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">⇒</span>
                Лікування клімактеричного горба може бути консервативним, який призначає лікар.
                Такого підходу достатньо, коли клімактеричний горб невеликих розмірів припухлість
                тільки починає утворюватися у вигляді маленького валика. Або якщо при вигинанні шиї
                людина зауважує, що утворилася складка, раніше якої не було.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 md:p-6 border-l-4 border-blue-500 dark:border-blue-400">
              <p className="text-base md:text-lg text-blue-900 dark:text-blue-100 leading-relaxed">
                <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">⇒</span>
                Хороша профілактика розвитку клімактеричного горба є заняття плаванням, гімнастична
                вправа, йога (бажано 2-3 рази на тиждень). Однак якими б не були вправи, вони не
                допоможуть позбутися вдовиного горба (навіть маленького), вони лише сповільнять його
                розвиток. Консервативні методики дозволяють повністю позбавити не дуже щільних
                відкладень, добре знімають болі, провокують нормалізацію обміну та кровотоку.
                Мануальна терапія позбавляє деяких причин, вправляючи хребці та знімаючи
                м&apos;язові спазми. Але якщо він вже з&apos;явився, то позбутися вдовиного горба
                повністю допоможе лише пластична операція.
              </p>
            </div>
          </div>
        </div>

        {/* Другий блок - Хірургічне лікування */}
        <div className="bg-blue-50/80 dark:bg-gray-800/80 rounded-2xl p-6 md:p-10 shadow-lg backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            <span className="text-blue-500 dark:text-blue-400 mr-2">✦</span>
            Хірургічне лікування вдовиного горба
          </h3>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Ліва колонка - текст */}
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-blue-900">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-blue-500 dark:text-blue-400 text-2xl font-bold flex-shrink-0 mt-1">
                      •
                    </span>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                        Операції загальної хірургії.
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        передбачає висічення горба під загальним наркозом, що супроводжується
                        складним періодом реабілітації, є біль (до 3-4 тижнів), залишається великий
                        рубець (до 15 см).
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="text-blue-500 dark:text-blue-400 text-2xl font-bold flex-shrink-0 mt-1">
                      •
                    </span>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                        Пластична операція
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        є{' '}
                        <Link
                          href="/services/liposuction"
                          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          ліпосакція
                        </Link>
                        , при якій хірург через 4 мікро-проколи (по 3-5 мм) за допомогою канюлі
                        руйнує і витягує скупчений жир. Вже за добу пацієнт може йти додому.
                        Невелика набряклість може бути 1-2 тижні, але це не заважає звичному способу
                        життя. Рубці на шкірі не залишаються.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Права колонка - галерея */}
            <div className="flex-1">
              <CervicalHumpPreparationGallery images={treatmentImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CervicalHumpPreparation;
