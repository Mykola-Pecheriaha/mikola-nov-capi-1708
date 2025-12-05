'use client';
import { ButtockAugmentGallery } from './ButtockAugmentGallery';
import type { GalleryImage } from './ButtockAugmentGallery';

export function ButtockAugmentDetails() {
  // Зображення для галереї
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/buttockAugment/buttock-augment3.jpg',
      alt: 'Пластика сідниць - результати',
      width: 800,
      height: 600,
      title: 'Результати пластики сідниць',
    },
    {
      src: '/images/buttockAugment/buttock-augment4.jpg',
      alt: 'Збільшення сідниць імплантами',
      width: 800,
      height: 600,
      title: 'Збільшення імплантами',
    },
    {
      src: '/images/buttockAugment/buttock-augment5.jpg',
      alt: 'Ліпофілінг сідниць',
      width: 800,
      height: 600,
      title: 'Ліпофілінг сідниць',
    },
    {
      src: '/images/buttockAugment/buttock-augment6.jpg',
      alt: 'Контури після пластики',
      width: 800,
      height: 600,
      title: 'Контури після пластики',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Покази до пластики сідниць
        </h2>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Ліва колонка - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">
                    Недостатній природний об`єм або проєкція сідниць.
                  </span>
                </li>
                <li className="flex items-start text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">
                    Гіпотрофія після схуднення або вікової інволюції.
                  </span>
                </li>
                <li className="flex items-start text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">
                    Асиметрія, наслідки травм чи вроджені дефіцити.
                  </span>
                </li>
                <li className="flex items-start text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">
                    Пацієнти без достатнього донорського жиру для ліпофілінгу.
                  </span>
                </li>
                <li className="flex items-start text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">
                    Обвисання шкіри, втрата пружності, поява «ямочок»
                  </span>
                </li>
                <li className="flex items-start text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">
                    Жирові «кишеньки», «вушка» на сідницях, які неможливо прибрати за допомогою
                    дієт, косметологічних процедур або фізичних вправ
                  </span>
                </li>
                <li className="flex items-start text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">
                    Незадоволеність обсягом і формою сідничної області
                  </span>
                </li>
                <li className="flex items-start text-gray-800 dark:text-gray-200">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-base md:text-lg">
                    Вроджені особливості тіла, які вимагають змін
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full md:w-1/2">
            <ButtockAugmentGallery images={galleryImages} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ButtockAugmentDetails;
