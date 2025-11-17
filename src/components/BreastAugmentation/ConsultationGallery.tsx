'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

interface ConsultationGalleryProps {
  images: GalleryImage[];
}

export function ConsultationGallery({ images }: ConsultationGalleryProps) {
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
      <div className="w-full h-[400px] md:h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
        Зображення недоступні
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className="w-full mx-auto relative">
      {/* Основна галерея */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        {/* Навігаційні кнопки */}
        <button
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 dark:bg-gray-700/90 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-400 hover:bg-white dark:hover:bg-gray-600 hover:scale-110 transition-all duration-300 shadow-lg"
          onClick={prevImage}
          aria-label="Попереднє зображення"
        >
          &#10094;
        </button>

        {/* Контейнер зображення */}
        <div className="relative w-full h-[calc(100%-44px)] sm:h-[calc(100%-48px)] overflow-hidden">
          {!imagesLoaded[currentIndex] && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              Завантаження...
            </div>
          )}
          <Image
            src={currentImage.src}
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
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 dark:bg-gray-700/90 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-400 hover:bg-white dark:hover:bg-gray-600 hover:scale-110 transition-all duration-300 shadow-lg"
          onClick={nextImage}
          aria-label="Наступне зображення"
        >
          &#10095;
        </button>

        {/* Нижня панель */}
        <div className="absolute bottom-0 left-0 right-0 h-11 sm:h-12 bg-white dark:bg-gray-800 flex items-center justify-between px-3 sm:px-4 z-20 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center gap-2 flex-1">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 dark:bg-blue-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                onClick={() => selectImage(index)}
              />
            ))}
          </div>
          <button
            className="w-7 h-7 bg-transparent border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center text-blue-500 dark:text-blue-400 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 font-bold text-base"
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
            {/* Кнопка закриття */}
            <button
              className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl sm:text-3xl flex items-center justify-center transition-all duration-300 z-50"
              onClick={closeFullscreen}
              aria-label="Закрити"
            >
              &times;
            </button>

            {/* Кнопка мініатюр */}
            <button
              className="absolute top-4 right-16 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl sm:text-3xl flex items-center justify-center transition-all duration-300 z-50"
              onClick={toggleThumbnails}
              aria-label="Показати мініатюри"
            >
              &#8942;
            </button>

            {/* Навігація */}
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl sm:text-3xl flex items-center justify-center mx-4 sm:mx-8 transition-all duration-300"
              onClick={prevImage}
              aria-label="Попереднє зображення"
            >
              &#10094;
            </button>

            {/* Контейнер зображення */}
            <div className="relative w-4/5 h-4/5 flex flex-col items-center justify-center">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className="max-w-full max-h-full object-contain"
                onLoad={() => handleImageLoad(currentIndex)}
                onError={() => handleImageLoad(currentIndex)}
              />
              {currentImage.title && (
                <div className="absolute -bottom-10 left-0 right-0 bg-black/60 text-white p-3 text-center rounded-b-lg">
                  {currentImage.title}
                </div>
              )}
            </div>

            <button
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full text-white text-2xl sm:text-3xl flex items-center justify-center mx-4 sm:mx-8 transition-all duration-300"
              onClick={nextImage}
              aria-label="Наступне зображення"
            >
              &#10095;
            </button>

            {/* Мініатюри */}
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
                      src={image.src}
                      alt={image.alt}
                      width={100}
                      height={75}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Індикатори */}
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

export default ConsultationGallery;
