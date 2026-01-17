'use client';

import type React from 'react';
import { useState } from 'react';
import { AbdominoFAQGallery } from './AbdominoFAQGallery';
import Link from 'next/link';

interface AbdominoFAQProps {
  backgroundColor?: string;
}

const AbdominoFAQ: React.FC<AbdominoFAQProps> = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Зображення для галереї першого питання
  const operationGalleryImages = [
    {
      src: '/images/abdominoplastyFAQ/abdominoplastyFAQ1.jpg',
      alt: 'Етапи абдомінопластики',
      width: 800,
      height: 600,
      title: 'Етапи абдомінопластики',
    },
    {
      src: '/images/abdominoplastyFAQ/abdominoplastyFAQ3.jpg',
      alt: 'Хірургічний процес',
      width: 800,
      height: 600,
      title: 'Хірургічний процес',
    },
    {
      src: '/images/abdominoplastyFAQ/abdominoplastyFAQ4.jpg',
      alt: 'Результати операції',
      width: 800,
      height: 600,
      title: 'Результати операції',
    },
  ];

  // Зображення для галереї другого питання
  const rehabilitationGalleryImages = [
    {
      src: '/images/abdominoplastyFAQ/abdominoplastyFAQ6.jpg',
      alt: 'Реабілітація після абдомінопластики',
      width: 800,
      height: 600,
      title: 'Реабілітація після абдомінопластики',
    },
    {
      src: '/images/abdominoplastyFAQ/abdominoplastyFAQ8.jpg',
      alt: 'Відновлення після операції',
      width: 800,
      height: 600,
      title: 'Відновлення після операції',
    },
    {
      src: '/images/abdominoplastyFAQ/abdominoplastyFAQ5.jpg',
      alt: 'Догляд за швами',
      width: 800,
      height: 600,
      title: 'Догляд за швами',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400 mb-8 md:mb-10 relative pb-4">
          🔹 Поширені запитання про абдомінопластику
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </h2>

        {/* Вступний текст на всю ширину */}
        <div className="mb-8 md:mb-10 bg-white dark:bg-gray-800 rounded-lg p-5 md:p-6 shadow-sm dark:shadow-md border border-blue-200 dark:border-blue-800">
          <p className="text-center text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            Абдомінопластика — це хірургічна процедура, яка допомагає відновити плоский контур
            живота. Нижче ви знайдете відповіді на найпоширеніші запитання щодо цієї операції.
          </p>
        </div>

        {/* Секція FAQ з акордеоном */}
        <div className="space-y-4 mb-10">
          {/* Перше питання */}
          <div className="border border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm dark:shadow-md">
            <button
              onClick={() => toggleQuestion(0)}
              className="w-full flex items-center justify-between p-4 md:p-5 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 text-left flex items-center gap-3">
                <span>✅</span>
                <span>Як проходить сама операція</span>
              </h3>
              <span
                className={`text-blue-600 dark:text-blue-400 text-sm transition-transform duration-300 flex-shrink-0 ${
                  openQuestion === 0 ? 'rotate-90' : ''
                }`}
              >
                ▶
              </span>
            </button>

            {openQuestion === 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5 md:p-6 border-t border-blue-200 dark:border-blue-800">
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-400 mb-4 flex items-center gap-2">
                      📍 Етапи операції: абдомінопластика
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <p className="text-base font-bold text-blue-900 dark:text-blue-400 mb-2">
                          🔹 Анестезія:
                        </p>
                        <p className="text-gray-800 dark:text-gray-300">
                          Операція проводиться під загальним наркозом. У клініці застосовується
                          сучасний <strong>інгаляційний наркоз на основі Севофлурану</strong> – це
                          забезпечує м&apos;яке входження у сон і легке пробудження після операції.
                        </p>
                      </div>

                      <div>
                        <p className="text-base font-bold text-blue-900 dark:text-blue-400 mb-2">
                          🔹 Тривалість втручання:
                        </p>
                        <p className="text-gray-800 dark:text-gray-300">
                          В середньому <strong>1,5–2,5 години</strong>, залежно від індивідуальних
                          особливостей пацієнта та обсягу корекції.
                        </p>
                      </div>

                      <div>
                        <p className="text-base font-bold text-blue-900 dark:text-blue-400 mb-3">
                          ✅ Хірургічний процес включає:
                        </p>
                        <ul className="space-y-2 text-gray-800 dark:text-gray-300 pl-4 border-l-4 border-blue-400">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Висічення надлишків шкіри, жиру, розтяжок, рубців під пупком
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>Природний ліфтінг тканин живота</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Зшивання м&apos;язів, усунення гриж та зміцнення м&apos;язового
                              корсету
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Індивідуально підібрану методику – в залежності від ступеня
                              вираженості дефекту
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-base font-bold text-blue-900 dark:text-blue-400 mb-2">
                          🔹 Доступ:
                        </p>
                        <ul className="space-y-2 text-gray-800 dark:text-gray-300 pl-4">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Найчастіше — <strong>нижній горизонтальний розріз</strong> у шкірній
                              складці над лобком
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Можливий <strong>додатковий розріз</strong> навколо пупка
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-base font-bold text-blue-900 dark:text-blue-400 mb-2">
                          🔹 Робота з пупком:
                        </p>
                        <p className="text-gray-800 dark:text-gray-300 mb-2">
                          Корекція виконується одним із двох способів:
                        </p>
                        <ul className="space-y-2 text-gray-800 dark:text-gray-300 pl-4">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>Створення нового пупкового кільця</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>Перенесення існуючого при видаленні великої ділянки шкіри</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-base font-bold text-blue-900 dark:text-blue-400 mb-2">
                          🔹 Ушивання рани:
                        </p>
                        <ul className="space-y-2 text-gray-800 dark:text-gray-300 pl-4">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Косметичні шви з ниток, що <strong>саморозсмоктуються</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>Не потребують зняття та спеціального догляду</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <AbdominoFAQGallery images={operationGalleryImages} />
                </div>
              </div>
            )}
          </div>

          {/* Друге питання */}
          <div className="border border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm dark:shadow-md">
            <button
              onClick={() => toggleQuestion(1)}
              className="w-full flex items-center justify-between p-4 md:p-5 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 text-left flex items-center gap-3">
                <span>✅</span>
                <span>Абдомінопластика: реабілітація після операції</span>
              </h3>
              <span
                className={`text-blue-600 dark:text-blue-400 text-sm transition-transform duration-300 flex-shrink-0 ${
                  openQuestion === 1 ? 'rotate-90' : ''
                }`}
              >
                ▶
              </span>
            </button>

            {openQuestion === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5 md:p-6 border-t border-blue-200 dark:border-blue-800">
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-base font-bold text-blue-900 dark:text-blue-400 mb-2">
                          ✅ Госпіталізація:
                        </p>
                        <p className="text-gray-800 dark:text-gray-300 mb-2">
                          Після операції пацієнт залишається в клініці на <strong>1 добу</strong>{' '}
                          під наглядом хірурга та медичного персоналу. Призначаються знеболювальні
                          та антибіотики.
                        </p>
                        <p className="text-gray-800 dark:text-gray-300">
                          <strong>Наступного дня — виписка додому</strong> з індивідуальними
                          рекомендаціями щодо подальшого догляду.
                        </p>
                      </div>

                      <div>
                        <p className="text-base font-bold text-blue-900 dark:text-blue-400 mb-3">
                          ✅ Перші дні після операції:
                        </p>
                        <ul className="space-y-2 text-gray-800 dark:text-gray-300 pl-4">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Можливі <strong>болі при рухах</strong>, набряки
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Симптоми зменшуються і <strong>зникають через 2 тижні</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Повна реабілітація — <strong>приблизно 1 місяць</strong>
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-base font-bold text-blue-900 dark:text-blue-400 mb-3">
                          ✅ Компресія та догляд:
                        </p>
                        <ul className="space-y-2 text-gray-800 dark:text-gray-300 pl-4">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Носіння бандажу та компресійної білизни: <strong>4–6 тижнів</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Тимчасове зниження чутливості навколо пупка — відновлюється до{' '}
                              <strong>2 місяців</strong>
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-base font-bold text-blue-900 dark:text-blue-400 mb-3">
                          ✨ Рубець після операції:
                        </p>
                        <ul className="space-y-2 text-gray-800 dark:text-gray-300 pl-4">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>Залежить від обраної методики</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Добре <strong>маскується білизною</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                              •
                            </span>
                            <span>
                              Через <strong>2–6 місяців</strong> — виглядає як тонка «котяча
                              подряпина»
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-base font-bold text-blue-900 dark:text-blue-400 mb-2">
                          ✨ Результат:
                        </p>
                        <p className="text-gray-800 dark:text-gray-300">
                          Повну естетичну оцінку результату можна зробити{' '}
                          <strong>через 2 місяці</strong> після операції.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <AbdominoFAQGallery images={rehabilitationGalleryImages} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbdominoFAQ;
