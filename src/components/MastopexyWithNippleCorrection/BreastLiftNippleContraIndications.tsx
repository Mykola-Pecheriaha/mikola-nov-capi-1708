'use client';
import { useState, useEffect } from 'react';
import BreastContraIndicationsGallery from './BreastContraIndicationsGallery';
import type { GalleryImage } from './BreastContraIndicationsGallery';

// Винесіть ці масиви за межі компонента (перед визначенням компонента)
const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/breast-contraindications/blefaroContraindicatio1.jpg',
    alt: 'Протипокази до підтяжки грудей',
    width: 400,
    height: 600,
    title: 'Протипокази',
  },
];

const FALLBACK_IMAGES: GalleryImage[] = [
  {
    src: '/placeholder.svg?height=600&width=400&text=Протипоказання+1',
    alt: 'Протипокази до підтяжки грудей',
    width: 400,
    height: 600,
    title: 'Протипокази',
  },
];

export default function BreastLiftNippleContraIndications() {
  const [images, setImages] = useState(GALLERY_IMAGES);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Перевірка доступності зображень при монтуванні компонента
  useEffect(() => {
    const checkImagesExist = async () => {
      try {
        const imagePromises = GALLERY_IMAGES.map(
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
          setImages(FALLBACK_IMAGES);
        }
        setImagesLoaded(true);
      } catch (error) {
        console.error('Помилка перевірки зображень:', error);
        setImages(FALLBACK_IMAGES);
        setImagesLoaded(true);
      }
    };
    checkImagesExist();
  }, []); // Тепер масив залежностей може бути порожнім

  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-white  dark:text-blue-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center mb-14 text-blue-900 dark:text-gray-100 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight relative">
          Протипокази до операції підтяжки грудей і корекції сосків
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full"></span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-[2]">
            <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-blue-900">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 dark:text-gray-100 mb-5 flex items-center gap-3">
                  <span className="text-3xl md:text-4xl" style={{ color: '#dc2626' }}>
                    ⚠️
                  </span>
                  Основні протипокази
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-5 text-justify">
                  Операція з підтяжки грудей має низку протипоказань, які необхідно враховувати
                  перед прийняттям рішення про хірургічне втручання:
                </p>
              </div>

              <ul className="list-none p-0 m-0 mb-8">
                <li className="flex items-start mb-5 p-4 bg-red-50/50 dark:bg-red-900/10 rounded-xl border-l-4 border-blue-900 dark:border-blue-900 transition-all duration-300 hover:translate-x-1 hover:bg-red-50/80 dark:hover:bg-red-900/20">
                  <span className="text-xl mr-4 flex-shrink-0 mt-0.5">🚫</span>
                  <span className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 flex-1">
                    вік пацієнтки до 18 років
                  </span>
                </li>
                <li className="flex items-start mb-5 p-4 bg-red-50/50 dark:bg-red-900/10 rounded-xl border-l-4 border-blue-900 dark:border-blue-900 transition-all duration-300 hover:translate-x-1 hover:bg-red-50/80 dark:hover:bg-red-900/20">
                  <span className="text-xl mr-4 flex-shrink-0 mt-0.5">🚫</span>
                  <span className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 flex-1">
                    хронічні захворювання (гіпертонія, цукровий діабет, захворювання крові)
                  </span>
                </li>
                <li className="flex items-start mb-5 p-4 bg-red-50/50 dark:bg-red-900/10 rounded-xl border-l-4 border-blue-900 dark:border-blue-900 transition-all duration-300 hover:translate-x-1 hover:bg-red-50/80 dark:hover:bg-red-900/20">
                  <span className="text-xl mr-4 flex-shrink-0 mt-0.5">🚫</span>
                  <span className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 flex-1">
                    гормональна дисфункція
                  </span>
                </li>
                <li className="flex items-start mb-5 p-4 bg-red-50/50 dark:bg-red-900/10 rounded-xl border-l-4 border-blue-900 dark:border-blue-900 transition-all duration-300 hover:translate-x-1 hover:bg-red-50/80 dark:hover:bg-red-900/20">
                  <span className="text-xl mr-4 flex-shrink-0 mt-0.5">🚫</span>
                  <span className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 flex-1">
                    пухлинні утворення (доброякісні та злоякісні новоутворення)
                  </span>
                </li>
                <li className="flex items-start mb-5 p-4 bg-red-50/50 dark:bg-red-900/10 rounded-xl border-l-4 border-blue-900 dark:border-blue-900 transition-all duration-300 hover:translate-x-1 hover:bg-red-50/80 dark:hover:bg-red-900/20">
                  <span className="text-xl mr-4 flex-shrink-0 mt-0.5">🚫</span>
                  <span className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 flex-1">
                    схильність до формування рубців
                  </span>
                </li>
                <li className="flex items-start mb-5 p-4 bg-red-50/50 dark:bg-red-900/10 rounded-xl border-l-4 border-blue-900 dark:border-blue-900 transition-all duration-300 hover:translate-x-1 hover:bg-red-50/80 dark:hover:bg-red-900/20">
                  <span className="text-xl mr-4 flex-shrink-0 mt-0.5">🚫</span>
                  <span className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 flex-1">
                    надлишкова маса тіла
                  </span>
                </li>
              </ul>

              <div className="bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-2xl border-l-4 border-blue-900 dark:border-blue-900 mt-8">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2.5">
                  <span className="text-2xl" style={{ color: '#3b82f6' }}>
                    ℹ️
                  </span>
                  Тимчасові протипокази
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-5 text-justify">
                  Також втручання варто відкласти при гострих респіраторних захворюваннях, що
                  супроводжуються високою температурою тіла. Планувати корекцію рекомендується не
                  раніше ніж через 6 місяців після завершення лактації. Груди повинні набути
                  остаточної форми, щоб фахівець міг бачити всю картину та дати відповідні
                  рекомендації.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-0 text-justify">
                  <strong className="text-blue-900 dark:text-blue-400 font-semibold">
                    Рішення про хірургічне втручання приймає спеціаліст на підставі результатів
                    обстеження та аналізів.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            {imagesLoaded && <BreastContraIndicationsGallery images={images} />}
          </div>
        </div>
      </div>
    </section>
  );
}
