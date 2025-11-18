'use client';
import RemovalBreastImplantRevisionGallery, {
  ImageType,
} from './RemovalBreastImplantRevisionGallery';

const aestheticImages: ImageType[] = [
  {
    src: '/images/breastImplantRevision/revision.jpg',
    alt: 'Естетичні покази для заміни імплантів',
    width: 700,
    height: 600,
    title: 'Естетичні покази',
  },
  {
    src: '/images/breastImplantRevision/revision2.jpg',
    alt: 'Зміна розміру імплантів',
    width: 600,
    height: 600,
    title: 'Зміна розміру',
  },
  {
    src: '/images/breastImplantRevision/revision14.jpg',
    alt: 'Корекція форми грудей',
    width: 600,
    height: 600,
    title: 'Корекція форми',
  },
];

const medicalImages: ImageType[] = [
  {
    src: '/images/breastImplantRevision/revision21.jpg',
    alt: 'Медичні покази для заміни імплантів',
    width: 600,
    height: 550,
    title: 'Медичні покази',
  },
  {
    src: '/images/breastImplantRevision/revision15.jpg',
    alt: 'Капсулярна контрактура',
    width: 550,
    height: 650,
    title: 'Капсулярна контрактура',
  },
  {
    src: '/images/breastImplantRevision/revision16.jpg',
    alt: 'Розрив імпланту',
    width: 550,
    height: 550,
    title: 'Розрив імпланту',
  },
];

const contraindicationsImages: ImageType[] = [
  {
    src: '/images/breastImplantRevision/contraindicacio.jpg',
    alt: 'Протипокази до операції',
    width: 600,
    height: 500,
    title: 'Протипокази',
  },
];

export default function RemovalBreastImplantRevision() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Заголовок */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-blue-900 dark:text-blue-400">
          Покази до видалення чи заміні імплантів грудей
        </h2>

        {/* Вступний текст */}
        <p className="text-base sm:text-lg md:text-xl mb-12 sm:mb-16 text-center text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Реендопротезування (повторна заміна грудних імплантів) виконується як із{' '}
          <strong className="text-blue-900 dark:text-blue-400">естетичних</strong>, так і з{' '}
          <strong className="text-blue-900 dark:text-blue-400">медичних причин</strong>.
        </p>

        {/* Секція: За естетичними показами */}
        <div className="mb-12 sm:mb-16">
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-center text-white py-4 rounded-lg shadow-md"
            style={{ background: 'linear-gradient(to right, #8EAAB8, #7491a3)' }}
          >
            За естетичними показами:
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div
              className="lg:w-2/3 bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border"
              style={{ borderColor: '#8EAAB8' }}
            >
              <ul className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>
                    незадоволеність розміром, формою, контурами грудей. Наприклад, збільшивши груди
                    на 1-2 розміри, жінка хоче ще більшого розміру. Трапляються й протилежні
                    ситуації, коли необхідна заміна грудних імплантів на менші;
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>неправильно підібрані імпланти при первинній мамопластиці;</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>видима асиметрія грудей;</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>
                    зміна форми грудей після різкого схуднення або різкого набору ваги, вагітності,
                    грудного вигодовування, а також внаслідок вікових змін;
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>явне контурування ендопротезу на поверхні шкіри.</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <RemovalBreastImplantRevisionGallery images={aestheticImages} />
            </div>
          </div>
        </div>

        {/* Секція: Медичні покази */}
        <div className="mb-12 sm:mb-16">
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-center text-white py-4 rounded-lg shadow-md"
            style={{ background: 'linear-gradient(to right, #8EAAB8, #7491a3)' }}
          >
            Медичні покази:
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div
              className="lg:w-2/3 bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border"
              style={{ borderColor: '#8EAAB8' }}
            >
              <ul className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>розрив, порушення цілісності силіконового ендопротезу;</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>
                    формування капсулярної контрактури. Поява фіброзної оболонки (капсули), яка стає
                    щільною, промацується та викликає хворобливі відчуття;
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>
                    деформація та асиметрія грудей внаслідок зміщення імпланту з утворенням сером;
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>
                    Будь які септичні захворювання молочної залози з поширенням на імплант, при
                    неефективності консервативної терапії.
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <RemovalBreastImplantRevisionGallery images={medicalImages} />
            </div>
          </div>
        </div>

        {/* Секція: Протипокази */}
        <div>
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-center text-white py-4 rounded-lg shadow-md"
            style={{ background: 'linear-gradient(to right, #8EAAB8, #7491a3)' }}
          >
            Протипокази:
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div
              className="lg:w-2/3 bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg border"
              style={{ borderColor: '#8EAAB8' }}
            >
              <p className="mb-4 sm:mb-6 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                Операція із заміни імплантів по естетичним показам, як будь-яке хірургічне
                втручання, має низку певних протипоказань:
              </p>
              <ul className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>
                    тяжкі хронічні захворювання серцево-судинної та легеневої систем, особливо на
                    стадії загострення;
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>вагітність, період грудного вигодовування;</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="mr-3 mt-1 text-2xl" style={{ color: '#8EAAB8' }}>
                    •
                  </span>
                  <span>порушення згортання крові.</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                У клініці перед реендопротезуванням молочних залоз пацієнтка проходить обстеження та
                здає аналізи. На підставі отриманих результатів пластичний хірург приймає рішення
                про проведення операції.
              </p>
            </div>
            <div className="lg:w-1/3">
              <RemovalBreastImplantRevisionGallery images={contraindicationsImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
