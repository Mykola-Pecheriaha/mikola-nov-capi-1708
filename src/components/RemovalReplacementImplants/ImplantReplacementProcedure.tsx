'use client';
import type { FC } from 'react';
import ImplantReplacementProcedureGallery from './ImplantReplacementProcedureGallery';
import type { ImageType } from './ImplantReplacementProcedureGallery';

const ImplantReplacementProcedure: FC = () => {
  // Масив зображень для галереї
  const galleryImages: ImageType[] = [
    {
      src: '/images/ImplantReplacementProcedure/Replacement.jpg',
      alt: 'Етапи заміни імплантів',
      width: 500,
      height: 980,
      title: 'Етапи операції',
    },
    {
      src: '/images/ImplantReplacementProcedure/Replacement2.jpg',
      alt: 'Процедура реендопротезування',
      width: 600,
      height: 850,
      title: 'Процедура заміни',
    },
    {
      src: '/images/ImplantReplacementProcedure/revision19.jpg',
      alt: 'Результат операції',
      width: 600,
      height: 820,
      title: 'Результат',
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div className="w-full">
          {/* Заголовок */}
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-14 text-blue-900 dark:text-blue-400 leading-tight relative pb-4">
            Проведення операції: етапи реендопротезування
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px]"
              style={{ backgroundColor: '#8EAAB8' }}
            />
          </h2>

          {/* Основний контент */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Текстовий контент - зліва */}
            <div className="w-full lg:w-[60%]">
              {/* Вступний текст */}
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-7 md:mb-8 text-gray-800 dark:text-gray-200 flex items-start gap-2">
                <span
                  className="text-xl sm:text-2xl md:text-3xl flex-shrink-0 mt-0.5"
                  style={{ color: '#8EAAB8' }}
                >
                  🔹
                </span>
                <span>
                  Операція з реендопротезування молочних залоз проходить у кілька послідовних етапів
                  і виконується з максимальним дотриманням безпеки та естетичних результатів.
                </span>
              </p>

              {/* Кроки процедури */}
              <ol className="pl-0 mb-6 sm:mb-7 md:mb-8 list-none space-y-5 sm:space-y-6">
                <li className="relative pl-9 sm:pl-10 md:pl-12">
                  <span
                    className="absolute left-0 top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                    style={{ backgroundColor: '#8EAAB8' }}
                  >
                    1
                  </span>
                  <strong className="block mb-2 text-base sm:text-lg md:text-xl font-semibold text-blue-900 dark:text-blue-400">
                    Видалення попередніх імплантів.
                  </strong>
                  <p className="m-0 leading-relaxed text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                    Хірург здійснює розріз по вже наявному рубцю, що залишився після первинної
                    операції, мінімізуючи утворення нових слідів. Через цей доступ акуратно
                    вилучають старі імпланти.
                  </p>
                </li>
                <li className="relative pl-9 sm:pl-10 md:pl-12">
                  <span
                    className="absolute left-0 top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                    style={{ backgroundColor: '#8EAAB8' }}
                  >
                    2
                  </span>
                  <strong className="block mb-2 text-base sm:text-lg md:text-xl font-semibold text-blue-900 dark:text-blue-400">
                    Капсулотомія (видалення капсули).
                  </strong>
                  <p className="m-0 leading-relaxed text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                    Утворена навколо імплантів фіброзна капсула видаляється повністю або частково —
                    залежно від клінічної ситуації. Це дозволяє зменшити ризик ускладнень і
                    покращити форму грудей.
                  </p>
                </li>
                <li className="relative pl-9 sm:pl-10 md:pl-12">
                  <span
                    className="absolute left-0 top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                    style={{ backgroundColor: '#8EAAB8' }}
                  >
                    3
                  </span>
                  <strong className="block mb-2 text-base sm:text-lg md:text-xl font-semibold text-blue-900 dark:text-blue-400">
                    Встановлення нових імплантів.
                  </strong>
                  <p className="m-0 leading-relaxed text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                    Нові ендопротези, як правило, імплантуються в уже сформовану внутрішню кишеню.
                    Це забезпечує стабільну посадку та природній вигляд грудей.
                  </p>
                </li>
              </ol>

              {/* Інформація про анестезію */}
              <div
                className="rounded-xl border-l-4 px-4 sm:px-5 md:px-6 py-4 sm:py-5 mt-4 sm:mt-5 md:mt-6"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(142, 170, 184, 0.08) 0%, rgba(142, 170, 184, 0.05) 100%)',
                  borderLeftColor: '#8EAAB8',
                }}
              >
                <p className="m-0 text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200">
                  Операція виконується під{' '}
                  <strong className="font-semibold text-blue-900 dark:text-blue-400">
                    загальним наркозом
                  </strong>
                  , з використанням сучасного інгаляційного препарату{' '}
                  <strong className="font-semibold text-blue-900 dark:text-blue-400">
                    Севофлуран
                  </strong>
                  , який забезпечує м&apos;яке та контрольоване занурення в сон, а також комфортне
                  пробудження.
                </p>
              </div>
            </div>

            {/* Галерея - справа */}
            <div className="w-full lg:w-[40%]">
              <ImplantReplacementProcedureGallery images={galleryImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantReplacementProcedure;
