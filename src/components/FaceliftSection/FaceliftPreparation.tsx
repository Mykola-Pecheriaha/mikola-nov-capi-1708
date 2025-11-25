'use client';
import { useState, useEffect, useRef } from 'react';
import FaceliftPreparationGallery, { type GalleryImage } from './FaceliftPreparationGallery';

const FaceliftPreparation: React.FC = () => {
  const initialRenderRef = useRef(true);
  const [isClient, setIsClient] = useState(false);

  const preparationImages: GalleryImage[] = [
    {
      src: '/images/FaceLiftPreparation/analiz3.jpg',
      alt: 'Підготовка до фейсліфтингу - аналізи',
      width: 800,
      height: 600,
      title: 'Етап підготовки',
    },
    {
      src: '/images/FaceLiftPreparation/preparatio4.jpg',
      alt: 'Підготовка до фейсліфтингу - консультація',
      width: 800,
      height: 600,
      title: 'Етап підготовки',
    },
    {
      src: '/images/FaceLiftPreparation/life.jpg',
      alt: 'Підготовка до фейсліфтингу - спосіб життя',
      width: 800,
      height: 600,
      title: 'Етап підготовки',
    },
    {
      src: '/images/FaceLiftPreparation/preparatio5.jpg',
      alt: 'Підготовка до фейсліфтингу - рекомендації',
      width: 800,
      height: 600,
      title: 'Етап підготовки',
    },
  ];

  const operationImages: GalleryImage[] = [
    {
      src: '/images/FaceLiftPreparation/operatio6.jpg',
      alt: 'Проведення операції фейсліфтингу',
      width: 600,
      height: 600,
      title: 'Проведення операції',
    },
    {
      src: '/images/FaceLiftPreparation/operatio3.jpg',
      alt: 'Операція фейсліфтингу - процес',
      width: 600,
      height: 500,
      title: 'Проведення операції',
    },
    {
      src: '/images/FaceLiftPreparation/operatio2.jpg',
      alt: 'Операція фейсліфтингу - техніка',
      width: 600,
      height: 500,
      title: 'Проведення операції',
    },
    {
      src: '/images/FaceLiftPreparation/preparatio8.jpg',
      alt: 'Операція фейсліфтингу - результат',
      width: 600,
      height: 500,
      title: 'Проведення операції',
    },
  ];

  const recoveryImages: GalleryImage[] = [
    {
      src: '/images/FaceLiftPreparation/reabilit5.jpg',
      alt: 'Реабілітація після фейсліфтингу',
      width: 500,
      height: 600,
      title: 'Реабілітаційний період',
    },
    {
      src: '/images/FaceLiftPreparation/reabilit6.jpg',
      alt: 'Відновлення після фейсліфтингу',
      width: 600,
      height: 600,
      title: 'Реабілітаційний період',
    },
    {
      src: '/images/FaceLiftPreparation/reabilit7.jpg',
      alt: 'Догляд після фейсліфтингу',
      width: 600,
      height: 600,
      title: 'Реабілітаційний період',
    },
    {
      src: '/images/FaceLiftPreparation/reabilit2.jpg',
      alt: 'Результати після фейсліфтингу',
      width: 600,
      height: 600,
      title: 'Реабілітаційний період',
    },
  ];

  useEffect(() => {
    if (initialRenderRef.current) {
      setIsClient(true);
      initialRenderRef.current = false;
    }
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Заголовок */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8 sm:mb-10 md:mb-12">
          Підготовка до фейсліфтингу
        </h2>

        {/* Секція підготовки */}
        <div className="mb-10 sm:mb-12 md:mb-14">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl">✅</span>
            <span>Етап підготовки</span>
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <div className="w-full lg:w-1/2">
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-4 sm:mb-5">
                Підготовка до фейсліфтингу — важливий етап, який забезпечує безпеку та ефективність
                процедури. Перед операцією необхідно:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Пройти комплексне медичне обстеження',
                  'Здати аналізи крові та сечі',
                  'Пройти консультацію анестезіолога',
                  'Припинити прийом препаратів, що розріджують кров, за 2 тижні до операції',
                  'Відмовитися від куріння та алкоголю за 2 тижні до процедури',
                  'Підготувати шкіру обличчя за допомогою спеціальних засобів',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-base sm:text-lg text-gray-800 dark:text-gray-200"
                  >
                    <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              {isClient && (
                <FaceliftPreparationGallery
                  images={preparationImages}
                  galleryId="preparation-gallery"
                />
              )}
            </div>
          </div>
        </div>

        {/* Блок важливо */}
        <div className="w-full max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              <strong>Важливо!</strong> Дотримання всіх рекомендацій лікаря на етапі підготовки
              значно знижує ризик ускладнень та покращує результат операції. Пацієнт отримує
              детальні інструкції щодо підготовки під час консультації з хірургом.
            </p>
          </div>
        </div>

        {/* Секція операції */}
        <div className="mb-10 sm:mb-12 md:mb-14">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl">✅</span>
            <span>Проведення операції</span>
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <div className="w-full lg:w-1/2">
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-4 sm:mb-5">
                Операція фейсліфтингу проводиться під загальним наркозом або місцевою анестезією з
                седацією. Процедура включає:
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-5">
                {[
                  'Розріз вздовж лінії росту волосся та навколо вуха',
                  'Відшарування шкіри та підтяжку підшкірних тканин',
                  'Видалення надлишків шкіри',
                  'Накладання косметичних швів',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-base sm:text-lg text-gray-800 dark:text-gray-200"
                  >
                    <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                Тривалість операції становить 3-5 години залежно від обсягу втручання. Сучасні
                методики дозволяють мінімізувати травматичність та забезпечити природний результат.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              {isClient && (
                <FaceliftPreparationGallery
                  images={operationImages}
                  galleryId="operation-gallery"
                />
              )}
            </div>
          </div>
        </div>

        {/* Блок інформації */}
        <div className="w-full max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              Фейсліфтинг — це хірургічне втручання, яке вимагає високої кваліфікації хірурга.
              Операція проводиться в стерильних умовах з використанням сучасного обладнання та
              матеріалів. Пацієнт перебуває під постійним наглядом медичного персоналу.
            </p>
          </div>
        </div>

        {/* Секція реабілітації */}
        <div className="mb-10 sm:mb-12 md:mb-14">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl">✅</span>
            <span>Реабілітаційний період</span>
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <div className="w-full lg:w-1/2">
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-4 sm:mb-5">
                Реабілітація після фейсліфтингу — важливий етап, який впливає на кінцевий результат.
                Відновлювальний період включає:
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-5">
                {[
                  'Перебування в стаціонарі протягом 1-2 днів',
                  'Носіння компресійної пов`язки протягом 7-10 днів',
                  'Зняття швів через 7-14 днів',
                  'Обмеження фізичних навантажень протягом 3-4 тижнів',
                  'Уникнення сонячних променів протягом 2-3 місяців',
                  'Регулярні огляди у хірурга',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-base sm:text-lg text-gray-800 dark:text-gray-200"
                  >
                    <span className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
                Повне відновлення займає 3-6 місяців, але вже через 2-3 тижні пацієнт може
                повернутися до звичного способу життя.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              {isClient && (
                <FaceliftPreparationGallery images={recoveryImages} galleryId="recovery-gallery" />
              )}
            </div>
          </div>
        </div>

        {/* Фінальний блок */}
        <div className="w-full max-w-5xl mx-auto">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              Результат фейсліфтингу зберігається протягом 7-10 років. Для підтримання ефекту
              рекомендується дотримуватися здорового способу життя, правильно доглядати за шкірою та
              регулярно відвідувати косметолога.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaceliftPreparation;
