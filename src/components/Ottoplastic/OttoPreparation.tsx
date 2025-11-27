'use client';
import { useEffect, useState, useRef } from 'react';
import OttoPreparationGallery, { type GalleryImage } from './OttoPreparationGallery';

export default function OttoPreparation() {
  const initialRenderRef = useRef(true);
  const [isClient, setIsClient] = useState(false);

  // Масив зображень для першої галереї
  const preparationImages: GalleryImage[] = [
    {
      src: '/images/OttoPreparation/ottoPreparatio1.jpg',
      alt: 'Консультація з пластичним хірургом',
      width: 600,
      height: 900,
      title: 'Консультація з пластичним хірургом',
    },
    {
      src: '/images/OttoPreparation/ottoPreparatio2.jpg',
      alt: 'Обговорення форми вушної раковини',
      width: 600,
      height: 900,
      title: 'Обговорення форми вушної раковини',
    },
    {
      src: '/images/OttoPreparation/ottoPreparatio3.jpg',
      alt: 'Підготовка до операції',
      width: 600,
      height: 900,
      title: 'Підготовка до операції',
    },
  ];

  // Масив зображень для другої галереї
  const rehabilitationImages: GalleryImage[] = [
    {
      src: '/images/OttoPreparation/ottoPreparatio4.jpg',
      alt: 'Реабілітація після отопластики',
      width: 700,
      height: 500,
      title: 'Реабілітація після отопластики',
    },
    {
      src: '/images/OttoPreparation/ottoPreparatio6.jpg',
      alt: 'Відновлення після операції',
      width: 700,
      height: 500,
      title: 'Відновлення після операції',
    },
    {
      src: '/images/OttoPreparation/ottoPreparatio7.jpg',
      alt: 'Результат після повного відновлення',
      width: 700,
      height: 500,
      title: 'Результат після повного відновлення',
    },
    {
      src: '/images/OttoPreparation/ottoPreparatio8.jpg',
      alt: 'Результат після повного відновлення',
      width: 700,
      height: 500,
      title: 'Результат після повного відновлення',
    },
  ];

  // Перевірка, чи код виконується на клієнті
  useEffect(() => {
    if (initialRenderRef.current) {
      setIsClient(true);
      initialRenderRef.current = false;
    }
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 md:mb-12">
          Пластика вух: консультація
        </h2>

        {/* Вступний текст */}
        <div className="mb-8 md:mb-12 space-y-4">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Перший крок на шляху до естетики та впевненості —{' '}
            <strong className="text-blue-800 dark:text-blue-600 font-semibold">
              консультація з пластичним хірургом у Чернівцях
            </strong>
            . Фахівець приймає пацієнтів не лише з Чернівців, а й з інших міст України.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            На індивідуальній зустрічі пацієнт разом із хірургом обговорює{' '}
            <strong className="text-blue-800 dark:text-blue-600 font-semibold">
              побажання щодо форми вушної раковини
            </strong>
            , можливості корекції та очікуваний результат.
          </p>
        </div>

        {/* Перша секція: Підготовка до отопластики */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Текстовий контент */}
          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-gray-700">
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 dark:text-blue-600 mb-6 flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                Підготовка до отопластики
              </h3>

              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Заради вашої зручності клініка працює за принципом{' '}
                <strong className="text-blue-800 dark:text-blue-600 font-semibold">
                  «хірургії одного дня»
                </strong>{' '}
                — консультація, обстеження та сама операція проходять в один день!
              </p>

              <p className="text-base md:text-lg font-semibold text-blue-800 dark:text-blue-600 mb-4">
                🔸 Операція не вимагає складної підготовки.
              </p>

              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Перед втручанням бажано:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    •
                  </span>
                  <span>припинити прийом гормональних і препаратів, що містять аспірин;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    •
                  </span>
                  <span>обов`язково повідомити лікаря про всі вживані ліки;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    •
                  </span>
                  <span>відмовитися від алкоголю і тютюну (або значно обмежити куріння).</span>
                </li>
              </ul>

              <div className="h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent my-6"></div>
            </div>
          </div>

          {/* Галерея */}
          <div className="w-full md:w-1/2">
            {isClient && <OttoPreparationGallery images={preparationImages} />}
          </div>
        </div>

        {/* Друга секція: Реабілітація після отопластики */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Текстовий контент */}
          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-gray-700">
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 dark:text-blue-800 mb-6 flex items-center gap-3">
                <span className="text-2xl"></span>
                Реабілітація після отопластики
              </h3>

              <p className="text-base md:text-lg font-semibold text-blue-800 dark:text-blue-600 mb-4">
                Перші 3 дні після операції можуть супроводжуватися:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    •
                  </span>
                  <span>набряками;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    •
                  </span>
                  <span>онімінням;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    •
                  </span>
                  <span>незначними синцями.</span>
                </li>
              </ul>

              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Це —{' '}
                <strong className="text-blue-800 dark:text-blue-600 font-semibold">
                  нормальні післяопераційні прояви
                </strong>
                , які швидко зникають завдяки знеболювальним засобам і відпочинку.
              </p>

              <p className="text-base md:text-lg font-semibold text-blue-800 dark:text-blue-600 mb-4">
                Для кращої стабілізації результату потрібно:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    •
                  </span>
                  <span>носити фіксуючу пов`язку 14 днів безперервно;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    •
                  </span>
                  <span>далі — ще 14 днів лише на ніч (можна замінити на щільну бандану);</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    •
                  </span>
                  <span>шви не знімаються — використовуються саморозсмоктувальні нитки.</span>
                </li>
              </ul>

              <p className="text-base md:text-lg font-semibold text-blue-800 dark:text-blue-600 mb-4">
                Повернення до повноцінного життя — майже одразу!
              </p>

              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Звичний режим, активність, миття голови — дозволено!
                <br />
                Обов`язковий лише контрольний огляд через 1 місяць.
              </p>
            </div>
          </div>

          {/* Галерея */}
          <div className="w-full md:w-1/2">
            {isClient && <OttoPreparationGallery images={rehabilitationImages} />}
          </div>
        </div>

        {/* Важливо знати */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 rounded-r-xl p-6 md:p-8 shadow-md">
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-800 dark:text-blue-400 mb-6 flex items-center gap-3">
            <span className="text-2xl"></span>
            Важливо знати
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
              <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                •
              </span>
              <span>Отопластика не впливає на слух;</span>
            </li>
            <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
              <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                •
              </span>
              <span>Процедура є безпечною для здоров`я і життя пацієнта</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
