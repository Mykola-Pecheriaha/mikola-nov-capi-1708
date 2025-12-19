'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

interface AbdominoGernOperGalleryProps {
  images: GalleryImage[];
}

function AbdominoGernOperGallery({ images }: AbdominoGernOperGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    setImagesLoaded(new Array(images.length).fill(false));
    setCurrentIndex(0);
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && fullscreen) {
        setFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openFullscreen = () => {
    setFullscreen(true);
  };

  const closeFullscreen = () => {
    setFullscreen(false);
    setShowThumbnails(false);
  };

  const toggleThumbnails = () => {
    setShowThumbnails(!showThumbnails);
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = (index: number) => {
    const newImagesLoaded = [...imagesLoaded];
    newImagesLoaded[index] = true;
    setImagesLoaded(newImagesLoaded);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 sm:h-80 md:h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-500 dark:text-gray-400 text-lg md:text-xl border border-blue-100 dark:border-blue-900">
        Зображення недоступні
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className="w-full mx-auto relative">
      <div className="relative w-full h-64 sm:h-80 md:h-96 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-blue-100 dark:border-blue-900">
        {/* Навігаційні кнопки */}
        {images.length > 1 && (
          <>
            <button
              className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 bg-white/90 dark:bg-gray-700/90 border-none rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 z-10 text-blue-500 dark:text-blue-400 shadow-md hover:bg-blue-500 hover:dark:bg-blue-600 hover:text-white hover:scale-110"
              onClick={prevImage}
              aria-label="Попереднє зображення"
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 w-8 sm:w-9 h-8 sm:h-9 bg-white/90 dark:bg-gray-700/90 border-none rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 z-10 text-blue-500 dark:text-blue-400 shadow-md hover:bg-blue-500 hover:dark:bg-blue-600 hover:text-white hover:scale-110"
              onClick={nextImage}
              aria-label="Наступне зображення"
            >
              &#10095;
            </button>
          </>
        )}

        <div className="relative w-[calc(100%-8px)] h-[calc(100%-48px)] mx-1 my-1 mb-11 overflow-hidden rounded-lg">
          {!imagesLoaded[currentIndex] && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-50/50 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300 text-base z-[1]">
              Завантаження...
            </div>
          )}
          <Image
            src={currentImage.src || '/placeholder.svg?height=600&width=800'}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onLoad={() => handleImageLoad(currentIndex)}
            onError={() => handleImageLoad(currentIndex)}
            priority={currentIndex === 0}
          />
        </div>

        {/* Нижня панель */}
        <div className="absolute bottom-0 left-0 right-0 h-11 bg-white dark:bg-gray-800 flex items-center justify-between px-3 sm:px-4 z-[2] border-t border-blue-100 dark:border-blue-900">
          <div className="flex justify-center items-center gap-2 flex-1">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 dark:bg-blue-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => selectImage(index)}
              />
            ))}
          </div>
          <button
            className="w-7 h-7 bg-transparent border border-blue-500 dark:border-blue-400 rounded flex items-center justify-center text-base cursor-pointer transition-all duration-300 text-blue-500 dark:text-blue-400 font-bold hover:bg-blue-500 hover:dark:bg-blue-600 hover:text-white"
            onClick={openFullscreen}
            aria-label="Відкрити на повний екран"
          >
            +
          </button>
        </div>
      </div>

      {/* Повноекранний режим */}
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999]"
          onClick={closeFullscreen}
        >
          <div
            className="relative w-[90%] h-[90%] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-1 sm:top-2 lg:top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl sm:text-3xl flex items-center justify-center transition-all duration-300 z-50"
              onClick={closeFullscreen}
              aria-label="Закрити"
            >
              &times;
            </button>
            <button
              className="absolute top-1 sm:top-2 lg:top-4 right-16 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl sm:text-3xl flex items-center justify-center transition-all duration-300 z-50"
              onClick={toggleThumbnails}
              aria-label="Показати мініатюри"
            >
              &#8942;
            </button>
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl sm:text-3xl flex items-center justify-center mx-2 sm:mx-4 lg:mx-8 transition-all duration-300"
              onClick={prevImage}
              aria-label="Попереднє зображення"
            >
              &#10094;
            </button>
            <div className="relative w-4/5 h-4/5 flex flex-col items-center justify-center">
              <Image
                src={currentImage.src || '/placeholder.svg?height=600&width=800'}
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className="max-w-full max-h-full object-contain"
                onLoad={() => handleImageLoad(currentIndex)}
                onError={() => handleImageLoad(currentIndex)}
              />
              {currentImage.title && (
                <div className="absolute -bottom-10 left-0 right-0 bg-black/60 text-white p-2 sm:p-3 text-center rounded-b-lg text-sm sm:text-base">
                  {currentImage.title}
                </div>
              )}
            </div>
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl sm:text-3xl flex items-center justify-center mx-2 sm:mx-4 lg:mx-8 transition-all duration-300"
              onClick={nextImage}
              aria-label="Наступне зображення"
            >
              &#10095;
            </button>
            {showThumbnails && (
              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 sm:gap-3 p-3 bg-black/60 overflow-x-auto">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-16 h-12 sm:w-24 sm:h-18 border-2 ${
                      index === currentIndex ? 'border-white' : 'border-transparent'
                    } rounded overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0`}
                    onClick={() => selectImage(index)}
                  >
                    <Image
                      src={image.src || '/placeholder.svg?height=75&width=100'}
                      alt={image.alt}
                      width={100}
                      height={75}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1 z-30">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  onClick={() => selectImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const AbdominoGernOper: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/abdomiGernio/abdomiGernio5.jpg',
      alt: 'Етапи проведення операції - схема 1',
      width: 800,
      height: 600,
      title: 'Класична схема грижесічення',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio6.jpg',
      alt: 'Етапи проведення операції - схема 1',
      width: 800,
      height: 600,
      title: 'Класична схема грижесічення',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio7.jpg',
      alt: 'Етапи проведення операції - схема 2',
      width: 800,
      height: 600,
      title: 'Міні-абдомінопластика',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio8.jpg',
      alt: 'Етапи проведення операції - схема 3',
      width: 800,
      height: 600,
      title: 'Лапароскопічна схема',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio9.jpg',
      alt: 'Етапи проведення операції - схема 3',
      width: 800,
      height: 600,
      title: 'Лапароскопічна схема',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio19.jpg',
      alt: 'Етапи проведення операції - схема 3',
      width: 800,
      height: 600,
      title: 'Лапароскопічна схема',
    },
    {
      src: '/images/abdomiGernio/abdomiGernio22.jpg',
      alt: 'Етапи проведення операції - схема 3',
      width: 800,
      height: 600,
      title: 'Лапароскопічна схема',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Заголовок по середині */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12 lg:mb-16">
          Етапи проведення операції
        </h2>

        {/* Основна інформація на всю ширину */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            Залежно від складності та локалізації грижі, операція проводиться за однією з наступних
            схем:
          </p>
        </div>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
          {/* Ліва колонка - текст */}
          <div className="w-full flex flex-col justify-start">
            <div className="space-y-6 md:space-y-8">
              {/* Схема 1 */}
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  Класична (стандартна) схема:
                </h3>
                <ul className="space-y-2 ml-8 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5">•</span>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        Розріз:
                      </span>{' '}
                      Виконується горизонтальний розріз над лобком (лінія «бікіні»).
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5">•</span>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        Відшарування:
                      </span>{' '}
                      Шкірно-жировий лоскут відшаровується від м&apos;язів вгору до реберних дуг.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5">•</span>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        Етап грижесічення:
                      </span>{' '}
                      Хірург січе грижовий мішок, вправляє вміст у черевну порожнину та ушиває
                      грижові ворота. При великих дефектах встановлюється сітчастий імплантат для
                      зміцнення стінки.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5">•</span>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        Корекція м&apos;язів:
                      </span>{' '}
                      Ушивається діастаз прямих м&apos;язів живота.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5">•</span>
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">
                        Формування естетики:
                      </span>{' '}
                      Видаляється надлишок шкіри (фартух), пупок переноситься у нове положення.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Схема 2 */}
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  Міні-абдомінопластика з грижесіченням:
                </h3>
                <ul className="space-y-2 ml-8 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5">•</span>
                    <span>
                      Використовується при невеликих грижах (наприклад, епігастральних або пупкових)
                      та незначному надлишку шкіри в нижній частині живота.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5">•</span>
                    <span>Пупок зазвичай залишається на місці.</span>
                  </li>
                </ul>
              </div>

              {/* Схема 3 */}
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  Комбінована лапароскопічна схема:
                </h3>
                <ul className="space-y-2 ml-8 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 dark:text-blue-400 font-bold mt-0.5">•</span>
                    <span>
                      Грижу усувають через невеликі проколи (лапароскопічно), а косметичну підтяжку
                      шкіри виконують відкритим способом. Це зменшує травматичність та пришвидшує
                      відновлення.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full flex justify-center items-start">
            <AbdominoGernOperGallery images={galleryImages} />
          </div>
        </div>

        {/* Переваги поєднаної методики - на всю ширину */}
        <div className="mt-8 md:mt-12 lg:mt-16 space-y-4 md:space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300 text-center mb-6 md:mb-8">
            Переваги поєднаної методики
          </h3>

          <div className="space-y-4 md:space-y-5">
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-gray-800 dark:text-gray-100 text-base md:text-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center text-sm md:text-base font-bold flex-shrink-0 mt-1">
                  ✓
                </span>
                <p className="leading-relaxed text-justify">
                  Один наркоз та один період відновлення для вирішення медичної та естетичної
                  проблем.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-gray-800 dark:text-gray-100 text-base md:text-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center text-sm md:text-base font-bold flex-shrink-0 mt-1">
                  ✓
                </span>
                <p className="leading-relaxed text-justify">
                  Зміцнення каркаса: Видалення зайвої ваги («фартуха») знижує тиск на черевну
                  стінку, що зменшує ризик рецидиву грижі.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-gray-800 dark:text-gray-100 text-base md:text-lg shadow-sm border-l-4 border-blue-500 dark:border-blue-400 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-500 dark:bg-blue-400 text-white flex items-center justify-center text-sm md:text-base font-bold flex-shrink-0 mt-1">
                  ✓
                </span>
                <p className="leading-relaxed text-justify">
                  Кращий результат: Пластичний хірург забезпечує більш естетичний вигляд рубця
                  порівняно з традиційним грижесіченням.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbdominoGernOper;
