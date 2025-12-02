'use client';
import { useState } from 'react';
import Link from 'next/link';
import AbdominoFAQGallery from './AbdominoFAQGallery';
import type { GalleryImage } from './AbdominoFAQGallery';

const AbdominoFAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Зображення для галереї першого питання
  const operationGalleryImages: GalleryImage[] = [
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
  const rehabilitationGalleryImages: GalleryImage[] = [
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
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container-custom">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-800 dark:text-gray-200 relative pb-4">
          Поширені запитання про абдомінопластику
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
        </h2>

        {/* Вступний текст */}
        <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 md:p-8 mb-10 shadow-sm border border-blue-100 dark:border-blue-900">
          <p className="text-base md:text-lg leading-relaxed text-center text-gray-700 dark:text-gray-300">
            Абдомінопластика — це хірургічна процедура, яка допомагає відновити плоский контур
            живота. Нижче ви знайдете відповіді на найпоширеніші запитання щодо цієї операції.
          </p>
        </div>

        {/* FAQ Акордеон */}
        <div className="space-y-5 mb-12">
          {/* Перше питання */}
          <div className="border border-blue-200 dark:border-blue-900 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md">
            <button
              className="w-full flex justify-between items-center p-5 md:p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-700 hover:from-blue-100 hover:to-green-100 dark:hover:from-gray-600 dark:hover:to-gray-600 transition-all border-b border-blue-100 dark:border-blue-900"
              onClick={() => toggleQuestion(0)}
              aria-expanded={openQuestion === 0}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-3 text-left">
                <span className="text-blue-500 dark:text-blue-400">✅</span>
                Як проходить сама операція
              </h3>
              <span
                className={`text-xl text-blue-500 dark:text-blue-400 font-bold transition-transform duration-300 ${
                  openQuestion === 0 ? 'rotate-180' : ''
                }`}
              >
                &#9660;
              </span>
            </button>
            {openQuestion === 0 && (
              <div className="p-6 md:p-8 bg-white dark:bg-gray-800">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Текст */}
                  <div className="lg:w-1/2">
                    <h4 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200">
                      Етапи операції: абдомінопластика
                    </h4>

                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">🔹</span> Анестезія:
                    </p>
                    <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                      Операція проводиться під загальним наркозом. У клініці застосовується сучасний{' '}
                      <strong>інгаляційний наркоз на основі Севофлурану</strong> – це забезпечує
                      м&apos;яке входження у сон і легке пробудження після операції.
                    </p>

                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">🔹</span> Тривалість
                      втручання:
                    </p>
                    <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                      В середньому <strong>1,5–2,5 години</strong>, залежно від індивідуальних
                      особливостей пацієнта та обсягу корекції.
                    </p>

                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">✅</span> Хірургічний
                      процес включає:
                    </p>
                    <ul className="space-y-2 mb-5 ml-6 list-disc text-gray-700 dark:text-gray-300">
                      <li>Висічення надлишків шкіри, жиру, розтяжок, рубців під пупком</li>
                      <li>Природний ліфтінг тканин живота</li>
                      <li>
                        Зшивання м&apos;язів, усунення гриж та зміцнення м&apos;язового корсету
                      </li>
                      <li>
                        Індивідуально підібрану методику – в залежності від ступеня вираженості
                        дефекту
                      </li>
                    </ul>

                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">🔹</span> Доступ:
                    </p>
                    <ul className="space-y-2 mb-5 ml-6 list-disc text-gray-700 dark:text-gray-300">
                      <li>
                        Найчастіше — <strong>нижній горизонтальний розріз</strong> у шкірній складці
                        над лобком
                      </li>
                      <li>
                        Можливий <strong>додатковий розріз</strong> навколо пупка
                      </li>
                    </ul>

                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">🔹</span> Робота з пупком:
                    </p>
                    <p className="mb-2 text-gray-700 dark:text-gray-300">
                      Корекція виконується одним із двох способів:
                    </p>
                    <ul className="space-y-2 mb-5 ml-6 list-disc text-gray-700 dark:text-gray-300">
                      <li>Створення нового пупкового кільця</li>
                      <li>Перенесення існуючого при видаленні великої ділянки шкіри</li>
                    </ul>

                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">🔹</span> Ушивання рани:
                    </p>
                    <ul className="space-y-2 ml-6 list-disc text-gray-700 dark:text-gray-300">
                      <li>
                        Косметичні шви з ниток, що <strong>саморозсмоктуються</strong>
                      </li>
                      <li>Не потребують зняття та спеціального догляду</li>
                    </ul>
                  </div>

                  {/* Галерея */}
                  <div className="lg:w-1/2">
                    <AbdominoFAQGallery images={operationGalleryImages} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Друге питання */}
          <div className="border border-blue-200 dark:border-blue-900 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md">
            <button
              className="w-full flex justify-between items-center p-5 md:p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-700 dark:to-gray-700 hover:from-blue-100 hover:to-green-100 dark:hover:from-gray-600 dark:hover:to-gray-600 transition-all border-b border-blue-100 dark:border-blue-900"
              onClick={() => toggleQuestion(1)}
              aria-expanded={openQuestion === 1}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-3 text-left">
                <span className="text-blue-500 dark:text-blue-400">✅</span>
                Абдомінопластика: реабілітація після операції
              </h3>
              <span
                className={`text-xl text-blue-500 dark:text-blue-400 font-bold transition-transform duration-300 ${
                  openQuestion === 1 ? 'rotate-180' : ''
                }`}
              >
                &#9660;
              </span>
            </button>
            {openQuestion === 1 && (
              <div className="p-6 md:p-8 bg-white dark:bg-gray-800">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Текст */}
                  <div className="lg:w-1/2">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">✅</span> Госпіталізація:
                    </p>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      Після операції пацієнт залишається в клініці на <strong>1 добу</strong> під
                      наглядом хірурга та медичного персоналу. Призначаються знеболювальні та
                      антибіотики.
                    </p>
                    <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                      <strong>Наступного дня — виписка додому</strong> з індивідуальними
                      рекомендаціями щодо подальшого догляду.
                    </p>

                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">✅</span> Перші дні після
                      операції:
                    </p>
                    <ul className="space-y-2 mb-5 ml-6 list-disc text-gray-700 dark:text-gray-300">
                      <li>
                        Можливі <strong>болі при рухах</strong>, набряки
                      </li>
                      <li>
                        Симптоми зменшуються і <strong>зникають через 2 тижні</strong>
                      </li>
                      <li>
                        Повна реабілітація — <strong>приблизно 1 місяць</strong>
                      </li>
                    </ul>

                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">✅</span> Компресія та
                      догляд:
                    </p>
                    <ul className="space-y-2 mb-5 ml-6 list-disc text-gray-700 dark:text-gray-300">
                      <li>
                        Носіння бандажу та компресійної білизни: <strong>4–6 тижнів</strong>
                      </li>
                      <li>
                        Тимчасове зниження чутливості навколо пупка — відновлюється до{' '}
                        <strong>2 місяців</strong>
                      </li>
                    </ul>

                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">✨</span> Рубець після
                      операції:
                    </p>
                    <ul className="space-y-2 mb-5 ml-6 list-disc text-gray-700 dark:text-gray-300">
                      <li>Залежить від обраної методики</li>
                      <li>
                        Добре <strong>маскується білизною</strong>
                      </li>
                      <li>
                        Через <strong>2–6 місяців</strong> — виглядає як тонка «котяча подряпина»
                      </li>
                    </ul>

                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-blue-500 dark:text-blue-400">✨</span> Результат:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Повну естетичну оцінку результату можна зробити{' '}
                      <strong>через 2 місяці</strong> після операції.
                    </p>
                  </div>

                  {/* Галерея */}
                  <div className="lg:w-1/2">
                    <AbdominoFAQGallery images={rehabilitationGalleryImages} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Заклик до дії */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 md:p-10 shadow-sm border border-blue-200 dark:border-blue-900">
          <p className="text-lg md:text-xl mb-6 text-gray-800 dark:text-gray-200">
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <Link href="/ask-doctor">
            <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Зв&apos;язатися з нами
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AbdominoFAQ;
