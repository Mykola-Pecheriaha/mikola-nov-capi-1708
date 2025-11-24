'use client';
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

export interface BeforeAfterImage {
  before: {
    src: string;
    alt: string;
  };
  after: {
    src: string;
    alt: string;
  };
}

interface GynecomastiaGalleryProps {
  images: BeforeAfterImage[];
  initialIndex?: number;
}

export function GynecomastiaGallery({ images, initialIndex = 0 }: GynecomastiaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  if (!isClient || images.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-500 dark:text-gray-400 text-lg">
        Завантаження...
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className={`relative ${isFullscreen ? 'fixed inset-0 bg-black/95 z-[1000] flex flex-col justify-center items-center' : 'bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-blue-100 dark:border-blue-900'}`}
      >
        {/* Кнопка закриття для повноекранного режиму */}
        {isFullscreen && (
          <button
            onClick={toggleFullscreen}
            className="absolute top-6 right-6 w-11 h-11 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full text-white text-2xl flex items-center justify-center transition-all duration-300 z-50"
            aria-label="Закрити повноекранний режим"
          >
            ✕
          </button>
        )}

        <div className="relative flex items-center justify-between w-full">
          {/* Ліва навігаційна кнопка */}
          <button
            onClick={handlePrev}
            className={`absolute ${isFullscreen ? 'left-8' : 'left-4 md:left-8'} top-1/2 -translate-y-1/2 w-10 h-10 ${isFullscreen ? 'bg-white/20 hover:bg-white/30 border-white/30 text-white' : 'bg-white dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-600 text-gray-800 dark:text-gray-200 hover:text-white border-blue-200 dark:border-blue-800'} border rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg hover:scale-110`}
            aria-label="Попереднє зображення"
          >
            &#10094;
          </button>

          {/* Контейнер зображень */}
          <div
            className={`w-full flex flex-col items-center ${isFullscreen ? 'h-[80vh]' : 'py-6 md:py-8'}`}
          >
            <div
              className={`flex ${isFullscreen ? 'flex-row h-full max-w-[90vw] gap-8' : 'flex-col md:flex-row w-full justify-center gap-5 md:gap-6 px-4 md:px-8'}`}
            >
              {/* Зображення "До" */}
              <div
                className={`relative ${isFullscreen ? 'h-full max-w-[45vw]' : 'w-full md:w-[380px]'}`}
              >
                <div
                  className={`relative ${isFullscreen ? 'h-full' : 'pb-[125%]'} overflow-hidden rounded-xl shadow-2xl bg-gray-100 dark:bg-gray-700`}
                >
                  <Image
                    src={
                      currentImage.before.src || '/placeholder.svg?height=500&width=400&query=До'
                    }
                    alt={currentImage.before.alt}
                    fill={!isFullscreen}
                    width={isFullscreen ? 400 : undefined}
                    height={isFullscreen ? 500 : undefined}
                    className={`${isFullscreen ? 'max-w-full max-h-full object-contain' : 'absolute top-0 left-0 w-full h-full object-cover'} transition-transform duration-300 hover:scale-105`}
                    priority={true}
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg z-10">
                    До
                  </div>
                </div>
              </div>

              {/* Зображення "Після" */}
              <div
                className={`relative ${isFullscreen ? 'h-full max-w-[45vw]' : 'w-full md:w-[380px]'}`}
              >
                <div
                  className={`relative ${isFullscreen ? 'h-full' : 'pb-[125%]'} overflow-hidden rounded-xl shadow-2xl bg-gray-100 dark:bg-gray-700`}
                >
                  <Image
                    src={
                      currentImage.after.src || '/placeholder.svg?height=500&width=400&query=Після'
                    }
                    alt={currentImage.after.alt}
                    fill={!isFullscreen}
                    width={isFullscreen ? 400 : undefined}
                    height={isFullscreen ? 500 : undefined}
                    className={`${isFullscreen ? 'max-w-full max-h-full object-contain' : 'absolute top-0 left-0 w-full h-full object-cover'} transition-transform duration-300 hover:scale-105`}
                    priority={true}
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg z-10">
                    Після
                  </div>
                </div>
              </div>
            </div>

            {/* Інформація про пацієнта */}
            {!isFullscreen && (
              <div className="mt-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 rounded-full text-sm md:text-base font-semibold">
                Пацієнт №{currentIndex + 1}
              </div>
            )}
          </div>

          {/* Права навігаційна кнопка */}
          <button
            onClick={handleNext}
            className={`absolute ${isFullscreen ? 'right-8' : 'right-4 md:right-8'} top-1/2 -translate-y-1/2 w-10 h-10 ${isFullscreen ? 'bg-white/20 hover:bg-white/30 border-white/30 text-white' : 'bg-white dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-600 text-gray-800 dark:text-gray-200 hover:text-white border-blue-200 dark:border-blue-800'} border rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg hover:scale-110`}
            aria-label="Наступне зображення"
          >
            &#10095;
          </button>
        </div>

        {/* Панель керування */}
        <div
          className={`flex justify-center items-center gap-5 ${isFullscreen ? 'bg-transparent py-4' : 'bg-gray-50 dark:bg-gray-900 border-t border-blue-100 dark:border-blue-900 py-4'}`}
        >
          {/* Індикатори */}
          <div className="flex gap-2.5">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 dark:bg-blue-400 scale-125'
                    : isFullscreen
                      ? 'bg-white/50 hover:bg-white/75'
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Кнопка повноекранного режиму */}
          {!isFullscreen && (
            <button
              onClick={toggleFullscreen}
              className="w-9 h-9 bg-transparent border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:dark:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 text-lg font-bold"
              aria-label="Повноекранний режим"
            >
              ⛶
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default GynecomastiaGallery;
