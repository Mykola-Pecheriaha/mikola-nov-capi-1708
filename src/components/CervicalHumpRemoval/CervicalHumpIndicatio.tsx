'use client';
import { CervicalHumpIndicatioGallery } from './CervicalHumpIndicatioGallery';
import type { GalleryImage } from './CervicalHumpIndicatioGallery';

export function CervicalHumpIndicatio() {
  // Зображення для галереї
  const indicationImages: GalleryImage[] = [
    {
      src: '/images/cervical-hump/liposuction36.jpg',
      alt: 'Початкова стадія вдовиного горба',
      width: 800,
      height: 600,
      title: 'Початкова стадія',
    },
    {
      src: '/images/cervical-hump/liposuction34.jpg',
      alt: 'Виражена стадія вдовиного горба',
      width: 800,
      height: 600,
      title: 'Виражена стадія',
    },
    {
      src: '/images/cervical-hump/liposuction35.jpg',
      alt: 'Запущена стадія вдовиного горба',
      width: 800,
      height: 600,
      title: 'Зміна постави',
    },
    {
      src: '/images/cervical-hump/liposuction33.jpg',
      alt: 'Лікування вдовиного горба',
      width: 800,
      height: 600,
      title: 'Зміщення центру ваги',
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12 relative pb-4">
          <span className="text-blue-500 dark:text-blue-400 mr-3">✦</span>
          Різновиди вдовиного горба
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded"></span>
        </h2>

        {/* Контент */}
        <div className="mb-12 bg-blue-50/80 dark:bg-gray-800/80 rounded-2xl p-6 md:p-10 shadow-lg backdrop-blur-sm">
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
                      <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                        Початкова.
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Виявляється незначними ущільненнями у комірній ділянці, які не викликають
                        дискомфорту. На цьому етапі спостерігаються лише естетичні дефекти.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-500 dark:text-blue-400 text-2xl font-bold flex-shrink-0 mt-1">
                      •
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                        Виражена.
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Горб стає помітним, вже з`являються періодичні болі та дискомфорт.
                        Прогресують мігрені, виникає скутість під час рухів.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-500 dark:text-blue-400 text-2xl font-bold flex-shrink-0 mt-1">
                      •
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
                        Запущена.
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Повний «букет» проблем у вигляді запаморочення, порушення природного
                        кровообігу мозку, зникає чутливість у проблемній зоні. Головний біль
                        прогресує, виникає шум у вухах.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Права колонка - галерея */}
            <div className="flex-1">
              <CervicalHumpIndicatioGallery images={indicationImages} />
            </div>
          </div>
        </div>

        {/* Текст на всю ширину - окремі блоки */}
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 md:p-6 border-l-4 border-blue-500 dark:border-blue-400">
            <p className="text-base md:text-lg text-blue-900 dark:text-blue-100 leading-relaxed">
              <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">⇒</span>У міру
              прогресування хвороби поступово змінюється постава пацієнта. З&apos;являється
              сутулість, підборіддя опускається до грудей, а шия висувається вперед. Може
              спостерігатися випинання живота та надмірний вигин у попереку. Ці зміни розвиваються
              повільно й часто залишаються малопомітними на ранніх етапах.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 md:p-6 border-l-4 border-blue-500 dark:border-blue-400">
            <p className="text-base md:text-lg text-blue-900 dark:text-blue-100 leading-relaxed">
              <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">⇒</span>
              Нерідко виникають м&apos;язові спазми, оскільки організм намагається компенсувати
              неправильне положення плечового пояса та хребта. Згодом постава порушується ще більше:
              пацієнт мимоволі обирає пози, які здаються комфортнішими, щоб уникнути напруги та
              болю.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 md:p-6 border-l-4 border-blue-500 dark:border-blue-400">
            <p className="text-base md:text-lg text-blue-900 dark:text-blue-100 leading-relaxed">
              <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">⇒</span>
              Такі компенсаторні зміни впливають на еластичність міжхребцевих дисків. Неправильне
              положення шиї може призводити до зменшення об&apos;єму легень, додаткового
              навантаження на серцевий м&apos;яз, порушення природного відтоку лімфи та розвитку
              застійних процесів. Усі ці прояви є сигналом про необхідність своєчасного звернення до
              лікаря.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CervicalHumpIndicatio;
