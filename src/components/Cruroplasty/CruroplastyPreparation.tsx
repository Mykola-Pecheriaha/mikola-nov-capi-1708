'use client';
import CruroPreparationGallery, { GalleryImage } from './CruroPreparationGallery';

const preparationImages: GalleryImage[] = [
  {
    src: '/images/cruroplasty/cruroplasty5.jpg',
    alt: 'Етап операції крурометрії 1',
    width: 800,
    height: 600,
    title: 'Підготовка до операції',
  },
  {
    src: '/images/cruroplasty/cruroplasty13.jpg',
    alt: 'Етап операції крурометрії 2',
    width: 800,
    height: 600,
    title: 'Процес операції',
  },
  {
    src: '/images/cruroplasty/cruroplasty21.jpg',
    alt: 'Етап операції крурометрії 3',
    width: 800,
    height: 600,
    title: 'Встановлення імпланту',
  },
  {
    src: '/images/cruroplasty/cruroplasty20.jpg',
    alt: 'Етап операції крурометрії 4',
    width: 800,
    height: 600,
    title: 'Завершення операції',
  },
];

export default function CruroplastyPreparation() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-10 md:mb-12">
          Етапи та послідовність операції
        </h2>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Ліва колонка - список етапів */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  •
                </span>
                <span>вводиться загальний наркоз;</span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  •
                </span>
                <span>
                  виконується розріз на внутрішній поверхні гомілки, трохи нижче колінного суглоба
                  (в підколінній ямці) довжиною 3-4 см;
                </span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  •
                </span>
                <span>формується заглиблення для імпланта під фасцією гомілки;</span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  •
                </span>
                <span>в підготоване заглиблення вводиться імплантат;</span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  •
                </span>
                <span>накладаються внутрішньошкірні шви на прооперовану зону;</span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  •
                </span>
                <span>ті ж маніпуляції проводяться на іншій гомілці;</span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  •
                </span>
                <span>
                  на місце протезування накладається асептична пов&apos;язка і одягаються
                  компресійні панчохи;
                </span>
              </li>
              <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="mr-3 md:mr-4 mt-1 text-blue-500 dark:text-blue-400 text-xl font-bold flex-shrink-0">
                  •
                </span>
                <span>
                  тривалість операції з ендопротезування гомілок складає приблизно 1,5 години.
                </span>
              </li>
            </ul>
          </div>

          {/* Права колонка - галерея */}
          <div className="flex items-center">
            <CruroPreparationGallery images={preparationImages} />
          </div>
        </div>
      </div>
    </section>
  );
}
