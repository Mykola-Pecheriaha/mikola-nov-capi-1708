'use client';
import { useState, useEffect } from 'react';
import BreastLiftNipplePreparGallery from './BreastLiftNipplePreparGallery';
import type { GalleryImage } from './BreastLiftNipplePreparGallery';

// Зображення для галереї
const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/breast-preparation/breast-preparation10.jpg',
    alt: 'Підготовка до підтяжки грудей - обстеження',
    width: 400,
    height: 600,
    title: 'Обстеження',
  },
  {
    src: '/images/breast-preparation/breast-preparation9.jpg',
    alt: 'УЗД молочних залоз',
    width: 400,
    height: 600,
    title: 'УЗД',
  },
  {
    src: '/images/breast-preparation/breast-preparation11.jpg',
    alt: 'Консультація спеціалістів',
    width: 400,
    height: 600,
    title: 'Консультація',
  },
  {
    src: '/images/breast-preparation/breast6.bmp',
    alt: 'Аналізи та підготовка',
    width: 400,
    height: 600,
    title: 'Аналізи',
  },
];

const FALLBACK_IMAGES: GalleryImage[] = [
  {
    src: '/placeholder.svg?height=600&width=400&text=Підготовка+1',
    alt: 'Підготовка до операції',
    width: 400,
    height: 600,
    title: 'Підготовка 1',
  },
  {
    src: '/placeholder.svg?height=600&width=400&text=Підготовка+2',
    alt: 'Підготовка до операції',
    width: 400,
    height: 600,
    title: 'Підготовка 2',
  },
  {
    src: '/placeholder.svg?height=600&width=400&text=Підготовка+3',
    alt: 'Підготовка до операції',
    width: 400,
    height: 600,
    title: 'Підготовка 3',
  },
  {
    src: '/placeholder.svg?height=600&width=400&text=Підготовка+4',
    alt: 'Підготовка до операції',
    width: 400,
    height: 600,
    title: 'Підготовка 4',
  },
];

export default function BreastLiftNipplePreparation() {
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
  }, []);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 dark:text-gray-100 mb-12 md:mb-16 relative">
          Підготовка до операції підтяжки грудей та корекції сосків
          <span
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
            style={{ backgroundColor: '#8EAAB8' }}
          ></span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Текстова колонка */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-8">
              {/* Вступна секція */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center gap-3 text-blue-900 dark:text-gray-100">
                  <span className="text-3xl md:text-4xl" style={{ color: '#8EAAB8' }}>
                    🔬
                  </span>
                  Необхідні обстеження
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                  При підготовці до операції підтяжки грудей та корекції сосково-ареолярної ділянки
                  потрібно провести ряд обстежень пацієнтки для забезпечення безпеки та ефективності
                  втручання.
                </p>
              </div>

              {/* Список обстежень */}
              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3 text-blue-900 dark:text-gray-100">
                  <span className="text-2xl" style={{ color: '#8EAAB8' }}>
                    📋
                  </span>
                  До обстеження входить:
                </h4>
                <ul className="space-y-3">
                  {[
                    'УЗД молочних залоз',
                    'Мамографія (за потреби)',
                    'Огляд профільних спеціалістів',
                    'Загальні та спеціальні аналізи',
                    'ЕКГ',
                    'Флюорографія (ФОГК)',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start p-3 rounded-lg transition-all duration-300 hover:translate-x-1"
                      style={{
                        backgroundColor: 'rgba(142, 170, 184, 0.08)',
                        borderLeft: '3px solid #8EAAB8',
                      }}
                    >
                      <span
                        className="text-xl mr-3 flex-shrink-0 mt-0.5"
                        style={{ color: '#8EAAB8' }}
                      >
                        🔹
                      </span>
                      <span className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Додаткова секція */}
              <div
                className="p-5 rounded-xl border"
                style={{
                  backgroundColor: 'rgba(142, 170, 184, 0.05)',
                  borderColor: 'rgba(142, 170, 184, 0.2)',
                }}
              >
                <p className="text-base md:text-lg leading-relaxed mb-3 text-gray-700 dark:text-gray-300">
                  У деяких випадках рекомендуються:
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  УЗД молочних залоз та консультація мамолога.
                </p>
              </div>

              {/* Нотатка для іногородніх */}
              <div
                className="flex flex-col sm:flex-row gap-4 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(142, 170, 184, 0.12) 0%, rgba(142, 170, 184, 0.08) 100%)',
                  borderLeft: '4px solid #8EAAB8',
                }}
              >
                <span
                  className="text-3xl flex-shrink-0 self-start sm:self-center"
                  style={{ color: '#8EAAB8' }}
                >
                  📌
                </span>
                <div>
                  <h5 className="text-xl font-semibold mb-2 text-blue-900 dark:text-gray-100">
                    Для іногородніх пацієнтів
                  </h5>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Передбачена можливість поєднати консультацію, обстеження та здачу аналізів в
                    один день, а також провести операцію під час того ж візиту. Це значно економить
                    час і є зручним варіантом для пацієнтів з інших міст.
                  </p>
                </div>
              </div>

              {/* Рекомендації */}
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.08)',
                  borderLeft: '4px solid #f59e0b',
                }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-3 text-blue-900 dark:text-gray-100">
                  <span className="text-2xl text-amber-500">⚠️</span>
                  Рекомендації перед операцією
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Рекомендується відмовитися від куріння та вживання алкоголю за 2 тижні до
                  операції, а також повідомити фахівця про препарати, що регулярно приймаються.
                  Особливу увагу слід звернути на прийом препаратів, що впливають на згортання
                  крові.
                </p>
              </div>
            </div>
          </div>

          {/* Галерея */}
          <div className="w-full lg:w-1/3">
            {imagesLoaded && <BreastLiftNipplePreparGallery images={images} />}
          </div>
        </div>
      </div>
    </section>
  );
}
