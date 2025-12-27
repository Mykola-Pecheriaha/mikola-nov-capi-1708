'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X, MoreVertical } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

interface AbdominoDetailsGalleryProps {
  images: GalleryImage[];
}

const AbdominoDetailsGallery: React.FC<AbdominoDetailsGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (images.length === 0) {
    return (
      <div className="w-full h-80 bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-lg">
        <p className="text-gray-500 dark:text-gray-300 text-lg font-medium">Немає зображень</p>
      </div>
    );
  }

  const currentImage = images[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setImageLoaded(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setImageLoaded(false);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    setImageLoaded(false);
  };

  return (
    <>
      {/* Основна галерея */}
      <div className="relative w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
        {/* Контейнер зображення */}
        <div className="relative w-full h-80 sm:h-96 md:h-80 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 z-10">
              <p className="text-gray-600 dark:text-gray-300 text-base font-medium">
                Завантаження...
              </p>
            </div>
          )}
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Навігаційні кнопки */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 dark:bg-gray-700/90 hover:bg-white dark:hover:bg-gray-600 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 transition-all duration-300 z-20 shadow-md hover:shadow-lg"
          aria-label="Попередне зображення"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 dark:bg-gray-700/90 hover:bg-white dark:hover:bg-gray-600 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 transition-all duration-300 z-20 shadow-md hover:shadow-lg"
          aria-label="Наступне зображення"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Нижня панель з індикаторами та кнопками */}
        <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-12 bg-white dark:bg-gray-800 flex items-center justify-between px-3 sm:px-4 border-t border-gray-200 dark:border-gray-700">
          {/* Індикатори */}
          <div className="flex gap-1 sm:gap-2 flex-1 justify-center">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-600 dark:bg-cyan-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Перейти до зображення ${index + 1}`}
              />
            ))}
          </div>

          {/* Кнопки дій */}
          <div className="flex gap-2 ml-2">
            <button
              onClick={() => setIsFullscreen(true)}
              className="w-6 h-6 sm:w-7 sm:h-7 bg-transparent hover:bg-cyan-100 dark:hover:bg-cyan-900 border border-gray-300 dark:border-gray-600 rounded text-cyan-600 dark:text-cyan-400 flex items-center justify-center transition-all duration-300"
              title="На весь екран"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen режим */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
          <div className="relative w-full h-full max-w-6xl max-h-screen flex flex-col items-center justify-center">
            {/* Кнопка закриття */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-50"
              aria-label="Закрити"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Кнопка мініатюр */}
            {images.length > 1 && (
              <button
                onClick={() => setShowThumbnails(!showThumbnails)}
                className="absolute top-4 right-16 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 z-50 pointer-events-auto"
                title="Мініатюри"
              >
                <MoreVertical className="w-6 h-6" />
              </button>
            )}

            {/* Контейнер зображення */}
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="absolute left-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
                aria-label="Попередне"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <div className="relative w-full h-full max-w-5xl max-h-96 sm:max-h-[500px] md:max-h-[600px]">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                />
              </div>

              <button
                onClick={handleNext}
                className="absolute right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
                aria-label="Наступне"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Індикатори */}
            <div className="flex gap-2 justify-center mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Перейти до ${index + 1}`}
                />
              ))}
            </div>

            {/* Мініатюри */}
            {showThumbnails && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 bg-black/50 py-3 rounded-lg overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded border-2 overflow-hidden transition-all duration-300 ${
                      index === currentIndex
                        ? 'border-white'
                        : 'border-gray-500 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={80}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Назва зображення */}
            {currentImage.title && (
              <div className="absolute bottom-20 sm:bottom-24 bg-black/70 text-white px-4 py-2 rounded-lg">
                <p className="text-sm sm:text-base font-medium text-center">{currentImage.title}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AbdominoDetailsGallery;
