'use client';
import Link from 'next/link';
import CruroReabilitatioGallery, { GalleryImage } from './CruroReabilitatioGallery';

const reabilitatioImages: GalleryImage[] = [
  {
    src: '/images/cruroplasty/cruroplasty22.jpg',
    alt: 'Реабілітація після крурометрії 1',
    width: 800,
    height: 600,
    title: 'Перший тиждень після операції',
  },
  {
    src: '/images/cruroplasty/cruroplasty23.jpg',
    alt: 'Реабілітація після крурометрії 2',
    width: 800,
    height: 600,
    title: 'Компресійні панчохи',
  },
];

export default function CruroplastyReabilitatio() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-10 md:mb-12">
          Реабілітаційний період
        </h2>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Ліва колонка - інформація про реабілітацію */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            {/* Основна інформація */}
            <div className="space-y-4 md:space-y-5 mb-8">
              <p className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  ►
                </span>
                <span>
                  Після операції ще до 2 діб необхідно провести під наглядом лікарів у стаціонарі
                  клініки.
                </span>
              </p>
              <p className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  ►
                </span>
                <span>Імпланти будуть відчуватись тільки перші 2 місяці.</span>
              </p>
              <p className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  ►
                </span>
                <span>Набряк тканин в прооперованій зоні може триматись на протязі 1 місяця.</span>
              </p>
              <p className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  ►
                </span>
                <span>Шви знімаються через тиждень після операції.</span>
              </p>
            </div>

            {/* Рекомендації після виписки */}
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-6">
                Після виписки з клініки необхідно притримуватися наступних рекомендацій:
              </h3>
              <ul className="space-y-4 md:space-y-5">
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <span>спати на животі для уникнення зсуву імплантів (протягом тижня);</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    в лежачій позі гомілки мають розташовуватись вище тулуба (на подушці чи
                    спеціальній підставці);
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <span>обмежити фізичні навантаження на ноги (протягом 6 місяців);</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <span>не носити тісне і незручне взуття (протягом 1 місяця);</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <span>
                    користуватись компресійними панчохами для фіксації імплантів (протягом 1
                    місяця).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="flex items-center">
            <CruroReabilitatioGallery images={reabilitatioImages} />
          </div>
        </div>

        {/* Заклик до дії */}
        <div className="mt-10 text-center p-10 md:p-8 sm:p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-md border border-blue-100 dark:border-blue-900 backdrop-blur-sm">
          <p className="text-xl md:text-lg mb-5 text-gray-800 dark:text-gray-100">
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <Link href="/ask-doctor">
            <button className="bg-blue-500 dark:bg-blue-600 text-white border-none px-7 py-3 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 shadow-md hover:bg-blue-600 dark:hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg">
              Зв&apos;язатися з нами
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
