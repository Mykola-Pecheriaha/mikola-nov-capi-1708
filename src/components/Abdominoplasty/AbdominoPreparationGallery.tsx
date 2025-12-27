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

interface AbdominoPreparationGalleryProps {
  images: GalleryImage[];
}

export function AbdominoPreparationGallery({ images }: AbdominoPreparationGalleryProps) {
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
      <div className="w-full h-96 flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg text-gray-600 dark:text-gray-400 text-lg">
        Зображення недоступні
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className="w-full relative">
      {/* Основна галерея */}
      <div className="relative w-full h-96 bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Ліва кнопка навігації */}
        <button
          onClick={prevImage}
          aria-label="Попереднє зображення"
          className="absolute top-1/2 left-4 z-20 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-md"
        >
          &#10094;
        </button>

        {/* Контейнер зображення */}
        <div className="relative w-[calc(100%-8px)] h-[calc(100%-48px)] m-1 mb-11 overflow-hidden rounded-sm">
          {!imagesLoaded[currentIndex] && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm z-10">
              Завантаження...
            </div>
          )}
          <Image
            src={currentImage.src || '/placeholder.svg'}
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            onLoad={() => handleImageLoad(currentIndex)}
            onError={() => handleImageLoad(currentIndex)}
            priority={currentIndex === 0}
          />
        </div>

        {/* Права кнопка навігації */}
        <button
          onClick={nextImage}
          aria-label="Наступне зображення"
          className="absolute top-1/2 right-4 z-20 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-md"
        >
          &#10095;
        </button>

        {/* Нижня панель */}
        <div className="absolute bottom-0 left-0 right-0 h-11 bg-white dark:bg-gray-800 flex items-center justify-between px-4 z-15 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-center items-center gap-2 flex-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => selectImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? 'bg-cyan-600 dark:bg-cyan-400 scale-150'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Перейти до зображення ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={openFullscreen}
            aria-label="Розгорнути на повний екран"
            className="w-7 h-7 bg-transparent border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:bg-cyan-600 dark:hover:bg-cyan-500 hover:text-white dark:hover:text-gray-900 transition-all duration-300 font-bold text-base"
          >
            +
          </button>
        </div>
      </div>

      {/* Повноекранний режим */}
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
          onClick={closeFullscreen}
        >
          <div
            className="relative w-[90%] h-[90%] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закриття */}
            <button
              onClick={closeFullscreen}
              aria-label="Закрити"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300 text-2xl z-50"
            >
              &times;
            </button>

            {/* Кнопка мініатюр (три крапки вертикально) */}
            <button
              onClick={toggleThumbnails}
              aria-label="Показати мініатюри"
              className="absolute top-5 right-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300 text-xl z-50"
            >
              &#8942;
            </button>

            {/* Ліва кнопка навігації */}
            <button
              onClick={prevImage}
              aria-label="Попереднє зображення"
              className="absolute left-5 z-30 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300 text-2xl"
            >
              &#10094;
            </button>

            {/* Контейнер зображення */}
            <div className="relative w-[80%] h-[80%] flex items-center justify-center">
              <Image
                src={currentImage.src || '/placeholder.svg'}
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className="max-w-full max-h-full object-contain"
                onLoad={() => handleImageLoad(currentIndex)}
                onError={() => handleImageLoad(currentIndex)}
              />
              {currentImage.title && (
                <div className="absolute -bottom-10 left-0 right-0 bg-black/60 text-white py-2 px-4 text-center text-sm rounded-b-lg">
                  {currentImage.title}
                </div>
              )}
            </div>

            {/* Права кнопка навігації */}
            <button
              onClick={nextImage}
              aria-label="Наступне зображення"
              className="absolute right-5 z-30 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-300 text-2xl"
            >
              &#10095;
            </button>

            {/* Мініатюри */}
            {showThumbnails && (
              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 px-2 bg-black/60 py-2 rounded overflow-x-auto z-40">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`flex-shrink-0 w-24 h-20 border-2 rounded overflow-hidden transition-all duration-300 ${
                      index === currentIndex
                        ? 'border-white shadow-lg'
                        : 'border-transparent hover:border-gray-400'
                    }`}
                  >
                    <Image
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      width={100}
                      height={75}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Індикатори */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1 z-40">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Перейти до зображення ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AbdominoPreparationGallery;
