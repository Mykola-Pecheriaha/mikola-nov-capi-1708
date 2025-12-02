'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
}

interface LiposuctionFAQGalleryProps {
  images: GalleryImage[];
}

export function LiposuctionFAQGallery({ images }: LiposuctionFAQGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    // Ініціалізуємо масив завантажених зображень
    setImagesLoaded(new Array(images.length).fill(false));
    setCurrentIndex(0); // Скидаємо індекс при зміні зображень
  }, [images]);

  useEffect(() => {
    // Додаємо обробник клавіші Escape для закриття повноекранного режиму
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

  // Перевіряємо наявність зображень
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400 text-xl">
        Зображення недоступні
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className="w-full mx-auto relative">
      <div className="relative w-full h-[400px] md:h-[400px] sm:h-[300px] bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Навігаційні кнопки поверх зображення */}
        <button
          className="absolute top-1/2 -translate-y-1/2 left-[15px] sm:left-[10px] w-[35px] h-[35px] sm:w-[30px] sm:h-[30px] bg-white/90 dark:bg-gray-700/90 hover:bg-white dark:hover:bg-gray-600 border-none rounded-full flex items-center justify-center text-lg sm:text-base cursor-pointer transition-all duration-300 z-[3] text-blue-500 dark:text-blue-400 hover:scale-110"
          onClick={prevImage}
          aria-label="Попереднє зображення"
        >
          &#10094;
        </button>

        <div className="relative w-[calc(100%-8px)] h-[calc(100%-48px)] md:h-[calc(100%-44px)] sm:h-[calc(100%-40px)] m-[4px_4px_44px_4px] md:m-[4px_4px_44px_4px] sm:m-[3px_3px_37px_3px] overflow-hidden rounded">
          {!imagesLoaded[currentIndex] && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/10 dark:bg-black/30 text-gray-700 dark:text-gray-300 text-base z-[1]">
              Завантаження...
            </div>
          )}
          <Image
            src={currentImage.src || '/placeholder.svg?height=600&width=800&query=consultation'}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onLoad={() => handleImageLoad(currentIndex)}
            onError={() => handleImageLoad(currentIndex)}
            priority={currentIndex === 0}
          />
        </div>

        <button
          className="absolute top-1/2 -translate-y-1/2 right-[15px] sm:right-[10px] w-[35px] h-[35px] sm:w-[30px] sm:h-[30px] bg-white/90 dark:bg-gray-700/90 hover:bg-white dark:hover:bg-gray-600 border-none rounded-full flex items-center justify-center text-lg sm:text-base cursor-pointer transition-all duration-300 z-[3] text-blue-500 dark:text-blue-400 hover:scale-110"
          onClick={nextImage}
          aria-label="Наступне зображення"
        >
          &#10095;
        </button>

        {/* Нижня панель з індикаторами та кнопкою fullscreen */}
        <div className="absolute bottom-0 left-0 right-0 h-[44px] md:h-[44px] sm:h-[37px] bg-white dark:bg-gray-800 flex items-center justify-between px-[15px] sm:px-[10px] z-[2]">
          <div className="flex justify-center items-center gap-2 flex-1">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 sm:w-1.5 sm:h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 dark:bg-blue-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => selectImage(index)}
              />
            ))}
          </div>
          <button
            className="w-7 h-7 sm:w-6 sm:h-6 bg-transparent border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center text-base sm:text-sm cursor-pointer transition-all duration-300 text-blue-500 dark:text-blue-400 font-bold hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 hover:border-blue-500 dark:hover:border-blue-400"
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
          className="fixed top-0 left-0 w-full h-full bg-black/90 dark:bg-black/95 flex items-center justify-center z-[1000]"
          onClick={closeFullscreen}
        >
          <div
            className="relative w-[90%] md:w-[95%] h-[90%] md:h-[95%] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 border-none rounded-full text-white text-2xl cursor-pointer flex items-center justify-center transition-all duration-300"
              onClick={closeFullscreen}
              aria-label="Закрити"
            >
              &times;
            </button>
            <button
              className="absolute top-5 right-[70px] md:right-[65px] w-10 h-10 bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 border-none rounded-full text-white text-2xl cursor-pointer flex items-center justify-center transition-all duration-300"
              onClick={toggleThumbnails}
              aria-label="Показати мініатюри"
            >
              &#8942;
            </button>
            <button
              className="w-10 h-10 bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 border-none rounded-full text-white text-2xl cursor-pointer flex items-center justify-center mx-5 transition-all duration-300"
              onClick={prevImage}
              aria-label="Попереднє зображення"
            >
              &#10094;
            </button>
            <div className="relative w-4/5 md:w-[90%] h-4/5 md:h-[70%] flex items-center justify-center">
              <Image
                src={currentImage.src || '/placeholder.svg?height=600&width=800&query=consultation'}
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className="max-w-full max-h-full object-contain"
                onLoad={() => handleImageLoad(currentIndex)}
                onError={() => handleImageLoad(currentIndex)}
              />
              {currentImage.title && (
                <div className="absolute -bottom-10 left-0 right-0 bg-black/60 dark:bg-black/80 text-white p-2.5 text-center rounded-b-lg">
                  {currentImage.title}
                </div>
              )}
            </div>
            <button
              className="w-10 h-10 bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 border-none rounded-full text-white text-2xl cursor-pointer flex items-center justify-center mx-5 transition-all duration-300"
              onClick={nextImage}
              aria-label="Наступне зображення"
            >
              &#10095;
            </button>
            {showThumbnails && (
              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2.5 md:gap-1.5 p-2.5 md:p-1.5 bg-black/60 dark:bg-black/80 overflow-x-auto">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-[100px] h-[75px] md:w-20 md:h-[60px] sm:w-[60px] sm:h-[45px] border-2 rounded overflow-hidden cursor-pointer transition-all duration-300 ${
                      index === currentIndex
                        ? 'border-white dark:border-gray-200'
                        : 'border-transparent'
                    }`}
                    onClick={() => selectImage(index)}
                  >
                    <Image
                      src={
                        image.src ||
                        '/placeholder.svg?height=75&width=100&query=consultation thumbnail'
                      }
                      alt={image.alt}
                      width={100}
                      height={75}
                      className="w-full h-full object-cover"
                      onLoad={() => {}}
                      onError={() => {}}
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1 z-[5]">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 md:w-1.5 md:h-1.5 rounded-full cursor-pointer transition-colors duration-300 mx-1 ${
                    index === currentIndex
                      ? 'bg-white dark:bg-gray-200'
                      : 'bg-white/50 dark:bg-gray-400/50'
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

export default LiposuctionFAQGallery;
