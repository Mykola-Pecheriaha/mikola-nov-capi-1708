'use client';
import { useState, useEffect } from 'react';
import BreastIndicationGallery from './BreastIndicationGallery';
import type { GalleryImage } from './BreastIndicationGallery';

// Дані для галереї з повною інформацією
const galleryImages: GalleryImage[] = [
  {
    src: '/images/breast-lift/removalInfo12.jpg',
    alt: 'Показання до підтяжки грудей - птоз',
    width: 400,
    height: 600,
    title: 'Птоз грудей',
  },
  {
    src: '/images/breast-lift/removalInfo30.jpg',
    alt: 'Зміни після пологів та грудного вигодовування',
    width: 400,
    height: 600,
    title: 'Після пологів',
  },
  {
    src: '/images/breast-lift/removalInfo35.jpg',
    alt: 'Асиметрія молочних залоз',
    width: 400,
    height: 600,
    title: 'Асиметрія',
  },
  {
    src: '/images/breast-lift/removalInfo46.jpg',
    alt: 'Результат після різкого схуднення',
    width: 400,
    height: 600,
    title: 'Після схуднення',
  },
];

// Запасні зображення
const fallbackImages: GalleryImage[] = [
  {
    src: '/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+1',
    alt: 'Показання до підтяжки грудей',
    width: 400,
    height: 600,
    title: 'Показання 1',
  },
  {
    src: '/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+2',
    alt: 'Показання до підтяжки грудей',
    width: 400,
    height: 600,
    title: 'Показання 2',
  },
  {
    src: '/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+3',
    alt: 'Показання до підтяжки грудей',
    width: 400,
    height: 600,
    title: 'Показання 3',
  },
  {
    src: '/placeholder.svg?height=600&width=400&text=Підтяжка+грудей+4',
    alt: 'Показання до підтяжки грудей',
    width: 400,
    height: 600,
    title: 'Показання 4',
  },
];

export default function BreastLiftNippleIndications() {
  const [images, setImages] = useState(galleryImages);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Перевірка доступності зображень при монтуванні компонента
  useEffect(() => {
    const checkImagesExist = async () => {
      try {
        const imagePromises = galleryImages.map(
          (imageData) =>
            new Promise((resolve) => {
              const img = new window.Image();
              img.onload = () => resolve(true);
              img.onerror = () => resolve(false);
              img.src = imageData.src;
            }),
        );
        const results = await Promise.all(imagePromises);
        const allImagesExist = results.every(Boolean);
        if (!allImagesExist) {
          setImages(fallbackImages);
        }
        setImagesLoaded(true);
      } catch (error) {
        console.error('Помилка перевірки зображень:', error);
        setImages(fallbackImages);
        setImagesLoaded(true);
      }
    };
    checkImagesExist();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-blue-50 dark:to-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-center text-blue-900 dark:text-blue-900 mb-8 md:mb-12 lg:mb-16 relative">
          Показання до підтяжки грудей і корекції сосків
          <span className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-28 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Ліва колонка - текст (2/3) */}
          <div className="w-full lg:w-2/3">
            <div className="bg-transparent">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 dark:text-blue-900 mb-6 md:mb-8 flex items-center gap-3 flex-col sm:flex-row text-center sm:text-left">
                <span className="text-2xl sm:text-3xl md:text-4xl"></span>
                <span>Покази до підтяжки молочних залоз та корекції ареоли і соска</span>
              </h3>

              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-900 dark:text-blue-900 mb-5 md:mb-6">
                Основні показання до операції:
              </h4>

              <ul className="space-y-5 md:space-y-6">
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mr-4 sm:mr-5 mt-0.5">
                    1
                  </span>
                  <div className="flex-1 text-base sm:text-lg text-gray-800 leading-relaxed">
                    <strong className="font-semibold block mb-1" style={{ color: '#1E3A8A' }}>
                      Птоз (опущення грудей).
                    </strong>
                    З віком тканини втрачають еластичність, шкіра в`яне, бюст втрачає форму.
                    Підтяжка ефективно вирішує цю вікову проблему, повертаючи пружність і естетику.
                  </div>
                </li>
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mr-4 sm:mr-5 mt-0.5">
                    2
                  </span>
                  <div className="flex-1 text-base sm:text-lg text-gray-800 leading-relaxed">
                    <strong
                      className="font-semibold text-blue-600 block mb-1"
                      style={{ color: '#1E3A8A' }}
                    >
                      Зміни після пологів та грудного вигодовування.
                    </strong>
                    Залозиста тканина значно збільшується, а після лактації — зменшується, залишаючи
                    обвислу шкіру. Підтяжка допомагає молодим мамам повернути форму грудей.
                  </div>
                </li>
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mr-4 sm:mr-5 mt-0.5">
                    3
                  </span>
                  <div className="flex-1 text-base sm:text-lg text-gray-800 leading-relaxed">
                    <strong
                      className="font-semibold text-blue-600 block mb-1 "
                      style={{ color: '#1E3A8A' }}
                    >
                      Асиметрія.
                    </strong>
                    Операція дозволяє вирівняти розмір та форму молочних залоз.
                  </div>
                </li>
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mr-4 sm:mr-5 mt-0.5">
                    4
                  </span>
                  <div className="flex-1 text-base sm:text-lg text-gray-800 leading-relaxed">
                    <strong
                      className="font-semibold text-blue-800 block mb-1"
                      style={{ color: '#1E3A8A' }}
                    >
                      Різке схуднення.
                    </strong>
                    Коливання ваги змінюють об`єм грудей, а надлишок шкіри залишається. Підтяжка
                    повертає пружність і привабливість.
                  </div>
                </li>
                <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mr-4 sm:mr-5 mt-0.5">
                    5
                  </span>
                  <div className="flex-1 text-base sm:text-lg text-gray-800 leading-relaxed">
                    <strong
                      className="font-semibold text-blue-600 block mb-1"
                      style={{ color: '#1E3A8A' }}
                    >
                      Косметичні недоліки сосків та ареоли.
                    </strong>
                    Корекція дозволяє покращити форму, розмір і зовнішній вигляд.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея (1/3) */}
          <div className="w-full lg:w-1/3">
            {imagesLoaded && <BreastIndicationGallery images={images} />}
          </div>
        </div>
      </div>
    </section>
  );
}
