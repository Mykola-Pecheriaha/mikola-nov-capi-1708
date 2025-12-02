'use client';
import { LiposuctionIndicatioGallery } from './LiposuctionIndicatioGallery';
import type { GalleryImage } from './LiposuctionIndicatioGallery';

export function LiposuctionIndicatio() {
  // Зображення для першої галереї
  const indicationImages: GalleryImage[] = [
    {
      src: '/images/liposuctionIndicatio/liposuction5.jpg',
      alt: 'Локальні скупчення жиру на животі',
      width: 800,
      height: 600,
      title: 'Локальні скупчення жиру на стегнах',
    },
    {
      src: '/images/liposuctionIndicatio/liposuction13.jpg',
      alt: 'Жирові відкладення на спині (фланках)',
      width: 800,
      height: 600,
      title: 'Жирові відкладення на спині (фланках)',
    },
    {
      src: '/images/liposuctionIndicatio/liposuction2.jpg',
      alt: 'Корекція форми в області стегон',
      width: 800,
      height: 600,
      title: 'Корекція форми в області живота',
    },
    {
      src: '/images/liposuctionIndicatio/liposuction3.jpg',
      alt: 'Зона галіфе',
      width: 800,
      height: 600,
      title: 'Зона шиї',
    },
    {
      src: '/images/liposuctionIndicatio/liposuction7.jpg',
      alt: 'Зона галіфе',
      width: 800,
      height: 600,
      title: 'шия',
    },
    {
      src: '/images/liposuctionIndicatio/liposuction8.jpg',
      alt: 'Зона галіфе',
      width: 800,
      height: 600,
      title: 'Спинний горб',
    },
    {
      src: '/images/liposuctionIndicatio/liposuction14.jpg',
      alt: 'Зона галіфе',
      width: 800,
      height: 600,
      title: 'Зона плича',
    },
  ];

  // Зображення для другої галереї
  const contraindicationImages: GalleryImage[] = [
    {
      src: '/images/liposuctionIndicatio/contraindicatio1.jpg',
      alt: 'Хронічні захворювання',
      width: 800,
      height: 600,
      title: 'Хронічні захворювання',
    },
    {
      src: '/images/liposuctionIndicatio/abdominoPreparation27.jpg',
      alt: 'Порушення згортання крові',
      width: 800,
      height: 600,
      title: 'Порушення згортання крові',
    },
    {
      src: '/images/liposuctionIndicatio/abdominoPreparation28.jpg',
      alt: 'Серйозні психічні розлади',
      width: 800,
      height: 600,
      title: 'Серйозні психічні розлади',
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12 relative pb-4">
          <span className="text-blue-500 dark:text-blue-400 mr-3">✦</span>
          Ліпосакція: показання до проведення
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded"></span>
        </h2>

        {/* Перший сегмент */}
        <div className="mb-12 bg-blue-50/80 dark:bg-gray-800/80 rounded-2xl p-6 md:p-10 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-blue-900">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                  <span className="text-blue-500 dark:text-blue-400 mr-2">✦</span>
                  Ліпосакція: показання до проведення
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Хірургічне втручання рекомендується у таких випадках:
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">🔹</span>
                  за наявності «жирових пасток» — локальних скупчень жиру на:
                </p>
                <ul className="list-none space-y-2 mb-4 ml-6">
                  <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                    животі
                  </li>
                  <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                    спині (фланках)
                  </li>
                  <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                    стегнах
                  </li>
                  <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                    зоні «галіфе»
                  </li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  які не вдається усунути самостійно за допомогою масажу, спорту чи дієт;
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">🔹</span>
                  після схуднення, коли необхідна корекція форм, особливо в області стегон;
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">🔹</span>
                  при надлишкових жирових відкладеннях у нижній частині живота;
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">🔹</span>
                  для вирішення естетичних проблем:
                </p>
                <ul className="list-none space-y-2 ml-6">
                  <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                    гінекомастія (збільшення грудних залоз у чоловіків)
                  </li>
                  <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                    клімактеричний горб («холка бухгалтера», «вдовиний горб»)
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <LiposuctionIndicatioGallery images={indicationImages} />
            </div>
          </div>
        </div>

        {/* Другий сегмент */}
        <div className="bg-blue-50/80 dark:bg-gray-800/80 rounded-2xl p-6 md:p-10 shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 mb-6">
            <span className="mr-2">⚠️</span>
            Протипоказання до ліпосакції
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium">
            Ліпосакція, як і будь-яке інше хірургічне втручання, має ряд медичних протипоказань, які
            необхідно враховувати перед плануванням операції.
          </p>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-blue-900">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">🔸</span>
                  До основних протипоказань належать:
                </p>
                <ul className="list-none space-y-4 mb-6">
                  <li className="font-semibold text-gray-800 dark:text-gray-100">
                    <span className="text-red-500 dark:text-red-400 font-bold mr-2">❗</span>
                    Хронічні захворювання:
                    <ul className="list-none space-y-2 mt-2 ml-6 font-normal">
                      <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                        цукровий діабет
                      </li>
                      <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                        ожиріння III–IV ступеня
                      </li>
                      <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                        серцево-легенева недостатність
                      </li>
                      <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                        захворювання щитовидної залози
                      </li>
                      <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                        хронічна недостатність нирок і печінки
                      </li>
                    </ul>
                  </li>
                  <li className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">🔹</span>
                    гострі інфекційні захворювання;
                  </li>
                  <li className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">🔹</span>
                    вагітність та період годування грудьми;
                  </li>
                  <li className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">🔹</span>
                    онкологічні захворювання;
                  </li>
                  <li className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">🔹</span>
                    перенесений інфаркт або інсульт в анамнезі.
                  </li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
                  <p className="text-lg text-blue-800 dark:text-blue-200">
                    <span className="mr-2">💡</span>У таких випадках необхідно стабілізувати стан
                    пацієнта або вилікувати супутнє захворювання перед плануванням операції.
                  </p>
                </div>

                <ul className="list-none space-y-4 mb-6">
                  <li className="font-semibold text-gray-800 dark:text-gray-100">
                    <span className="text-red-500 dark:text-red-400 font-bold mr-2">❗</span>
                    Порушення згортання крові
                  </li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Це може ускладнити процес загоєння та підвищити ризик ускладнень.
                </p>

                <ul className="list-none space-y-4 mb-6">
                  <li className="font-semibold text-gray-800 dark:text-gray-100">
                    <span className="text-red-500 dark:text-red-400 font-bold mr-2">❗</span>
                    Серйозні психічні розлади
                  </li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Операція потребує усвідомленого та стабільного психологічного стану.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">🔸</span>
                  Індивідуальний підхід
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Остаточне рішення щодо можливості проведення ліпосакції приймає лікар, враховуючи:
                </p>
                <ul className="list-none space-y-2 ml-6">
                  <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                    загальний стан здоров`я
                  </li>
                  <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                    вік пацієнта
                  </li>
                  <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                    індивідуальні особливості організму
                  </li>
                  <li className="text-lg text-gray-700 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                    рівень мотивації та психоемоційний настрій
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <LiposuctionIndicatioGallery images={contraindicationImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiposuctionIndicatio;
