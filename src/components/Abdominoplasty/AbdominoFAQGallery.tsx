'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, MoreVertical } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

interface AbdominoFAQGalleryProps {
  images: GalleryImage[];
}

export function AbdominoFAQGallery({ images }: AbdominoFAQGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    setImagesLoaded(new Array(images.length).fill(false));
    setCurrentIndex(0);
  }, [images]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!fullscreen) return;
      if (e.key === 'Escape') {
        setFullscreen(false);
        return;
      }
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen, images.length]);

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
      <div className="w-full h-80 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg flex items-center justify-center border border-gray-300 dark:border-gray-700">
        <span className="text-gray-600 dark:text-gray-400 text-lg">Зображення недоступні</span>
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className="w-full">
      {/* Основна галерея */}
      <div className="relative w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm dark:shadow-md border border-gray-200 dark:border-gray-700">
        {/* Навігаційні кнопки */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/90 dark:bg-gray-700/90 hover:bg-white dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-200 shadow-md"
          aria-label="Попереднє зображення"
        >
          <ChevronLeft className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </button>

        {/* Контейнер для зображення */}
        <div className="relative w-full h-80 sm:h-96 md:h-96 bg-gray-100 dark:bg-gray-900 overflow-hidden">
          {!imagesLoaded[currentIndex] && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 z-5">
              <span className="text-gray-500 dark:text-gray-400">Завантаження...</span>
            </div>
          )}
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-cover"
            onLoad={() => handleImageLoad(currentIndex)}
            onError={() => handleImageLoad(currentIndex)}
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 600px"
          />
        </div>

        {/* Кнопка вперед */}
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/90 dark:bg-gray-700/90 hover:bg-white dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-200 shadow-md"
          aria-label="Наступне зображення"
        >
          <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </button>

        {/* Нижня панель з індикаторами та кнопкою fullscreen */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm flex items-center justify-between px-4 z-20 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-2 flex-1 justify-center">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => selectImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400 w-6'
                    : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'
                }`}
                aria-label={`Зображення ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={openFullscreen}
            className="ml-2 px-2 py-1 border border-gray-400 dark:border-gray-600 rounded hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors duration-200 text-blue-600 dark:text-blue-400 font-bold text-lg"
            aria-label="Відкрити на повний екран"
          >
            +
          </button>
        </div>
      </div>

      {/* Повноекранний режим */}
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={closeFullscreen}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закриття */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Закрити"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Кнопка мініатюр */}
            <button
              onClick={toggleThumbnails}
              className="absolute top-4 right-16 z-50 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Показати мініатюри"
            >
              <MoreVertical className="w-6 h-6 text-white" />
            </button>

            {/* Навігаційні кнопки в повноекранному режимі */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Попереднє зображення"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Контейнер для зображення в повноекранному режимі */}
            <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex flex-col items-center justify-center">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                onLoad={() => handleImageLoad(currentIndex)}
                onError={() => handleImageLoad(currentIndex)}
                sizes="90vw"
              />
              {currentImage.title && (
                <div className="absolute bottom-16 left-0 right-0 bg-black/70 text-white py-2 px-4 text-center text-sm md:text-base">
                  {currentImage.title}
                </div>
              )}
            </div>

            {/* Кнопка вперед */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Наступне зображення"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Мініатюри */}
            {showThumbnails && (
              <div className="absolute bottom-4 left-0 right-0 z-40 flex justify-center gap-2 overflow-x-auto px-4">
                <div className="flex gap-2 bg-black/70 p-2 rounded-lg">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => selectImage(index)}
                      className={`relative w-16 h-12 rounded border-2 transition-all duration-200 flex-shrink-0 overflow-hidden ${
                        index === currentIndex
                          ? 'border-white'
                          : 'border-transparent hover:border-gray-400'
                      }`}
                      aria-label={`Мініатюра ${index + 1}`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Індикатори в повноекранному режимі */}
            <div className="absolute bottom-20 left-0 right-0 z-30 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Зображення ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AbdominoFAQGallery;
