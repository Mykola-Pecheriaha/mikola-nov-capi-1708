'use client';
import CruroLypofilingGallery, { GalleryImage } from './CruroLypofilingGallery';

const lypofilingImages: GalleryImage[] = [
  {
    src: '/images/cruroplasty/cruroplasty26.jpg',
    alt: 'Ліпофілінг ніг - результат 1',
    width: 800,
    height: 600,
    title: 'Результат ліпофілінгу',
  },
  {
    src: '/images/cruroplasty/cruroplasty27.jpg',
    alt: 'Ліпофілінг ніг - результат 2',
    width: 800,
    height: 600,
    title: 'Корекція форми гомілок',
  },
  {
    src: '/images/cruroplasty/cruroplasty28.jpg',
    alt: 'Ліпофілінг ніг - результат 3',
    width: 800,
    height: 600,
    title: 'Пропорційні ноги',
  },
  {
    src: '/images/cruroplasty/cruroplasty29.jpg',
    alt: 'Ліпофілінг ніг - результат 4',
    width: 800,
    height: 600,
    title: 'Бажана форма стегон',
  },
];

export default function CruroplastyLypofiling() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-10 md:mb-12">
          Етапи проведення ліпофілінгу ніг
        </h2>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Ліва колонка - інформація про етапи */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            {/* Етапи операції */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-6">
                Умовно операція складається із 3 етапів:
              </h3>
              <ul className="space-y-4 md:space-y-5">
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <div>
                    <strong className="text-blue-900 dark:text-blue-100">Консультації.</strong>{' '}
                    Хірург визначає донорську зону для отримання необхідної кількості аутожиру,
                    робить фото для візуальної оцінки результату, відповідає на питання яка ціна
                    ліпофілінгу ніг.
                  </div>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <div>
                    <strong className="text-blue-900 dark:text-blue-100">Операція.</strong> Вона
                    складається з двох етапів ліпосакція, в результаті якої хірург витягує жир і
                    ліпофілінг, при якому хірург вводить жир у проблемну зону.
                  </div>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <div>
                    <strong className="text-blue-900 dark:text-blue-100">Реабілітація.</strong>{' '}
                    Відновлювальний період, необхідний скорочення шкіри, відновлення донорських зон
                    і зони пересадки жиру.
                  </div>
                </li>
              </ul>
            </div>

            {/* Результати */}
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-6">
                Результати ліпофілінгу ніг
              </h3>
              <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 mb-6">
                Завдяки ліпофілінгу ви отримуєте:
              </p>
              <ul className="space-y-4 md:space-y-5">
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <span>пропорційні та привабливі ноги;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <span>корекцію форми та збільшення обсягу гомілок;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <span>бажану форму та вид стегон;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  <span>пропорційні гомілки.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="flex items-center">
            <CruroLypofilingGallery images={lypofilingImages} />
          </div>
        </div>
      </div>
    </section>
  );
}
