'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export interface ImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

interface ImplantReplacementProcedureGalleryProps {
  images: ImageType[];
}

function ImplantReplacementProcedureGallery({ images }: ImplantReplacementProcedureGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [hoverNavLeft, setHoverNavLeft] = useState(false);
  const [hoverNavRight, setHoverNavRight] = useState(false);
  const [hoverFullscreen, setHoverFullscreen] = useState(false);

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
      <div className="w-full h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 text-xl border border-blue-200 dark:border-blue-700">
        Зображення недоступні
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className="w-full mx-auto relative">
      {/* Основна галерея */}
      <div
        className="relative w-full h-96 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border"
        style={{ borderColor: '#8EAAB8' }}
      >
        {/* Навігаційні кнопки поверх зображення */}
        {images.length > 1 && (
          <>
            <button
              className="absolute top-1/2 -translate-y-1/2 left-4 w-9 h-9 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all z-10 shadow-md bg-white/20"
              style={{
                color: '#8EAAB8',
                backgroundColor: hoverNavLeft
                  ? 'rgba(142, 170, 184, 0.8)'
                  : 'rgba(255, 255, 255, 0.2)',
              }}
              onClick={prevImage}
              onMouseEnter={() => setHoverNavLeft(true)}
              onMouseLeave={() => setHoverNavLeft(false)}
              aria-label="Попереднє зображення"
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4 w-9 h-9 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all z-10 shadow-md bg-white/20"
              style={{
                color: '#8EAAB8',
                backgroundColor: hoverNavRight
                  ? 'rgba(142, 170, 184, 0.8)'
                  : 'rgba(255, 255, 255, 0.2)',
              }}
              onClick={nextImage}
              onMouseEnter={() => setHoverNavRight(true)}
              onMouseLeave={() => setHoverNavRight(false)}
              aria-label="Наступне зображення"
            >
              &#10095;
            </button>
          </>
        )}

        {/* Контейнер зображення */}
        <div className="relative w-[calc(100%-8px)] h-[calc(100%-48px)] m-1 mb-11 overflow-hidden rounded-lg">
          {!imagesLoaded[currentIndex] && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-base z-10">
              Завантаження...
            </div>
          )}
          <Image
            src={
              currentImage.src || '/placeholder.svg?height=600&width=800&query=medical+procedure'
            }
            alt={currentImage.alt}
            width={currentImage.width}
            height={currentImage.height}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onLoad={() => handleImageLoad(currentIndex)}
            onError={() => handleImageLoad(currentIndex)}
            priority={currentIndex === 0}
          />
        </div>

        {/* Нижня панель з індикаторами та кнопкою fullscreen */}
        <div
          className="absolute bottom-0 left-0 right-0 h-11 bg-white dark:bg-gray-800 flex items-center justify-between px-4 z-20 border-t"
          style={{ borderTopColor: '#8EAAB8' }}
        >
          <div className="flex justify-center items-center gap-2 flex-1">
            {images.map((_, index) => (
              <span
                key={index}
                className="w-2 h-2 rounded-full cursor-pointer transition-all"
                style={{
                  backgroundColor: index === currentIndex ? '#8EAAB8' : '#dee2e6',
                  transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
                }}
                onClick={() => selectImage(index)}
              />
            ))}
          </div>
          <button
            className="w-7 h-7 bg-transparent rounded flex items-center justify-center text-base cursor-pointer transition-all font-bold border"
            style={{
              borderColor: '#8EAAB8',
              color: hoverFullscreen ? '#ffffff' : '#8EAAB8',
              backgroundColor: hoverFullscreen ? '#8EAAB8' : 'transparent',
            }}
            onClick={openFullscreen}
            onMouseEnter={() => setHoverFullscreen(true)}
            onMouseLeave={() => setHoverFullscreen(false)}
            aria-label="Відкрити на повний екран"
          >
            +
          </button>
        </div>
      </div>

      {/* Повноекранний режим */}
      {fullscreen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center z-[1000]"
          onClick={closeFullscreen}
        >
          <div
            className="relative w-[90%] h-[90%] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 bg-white/20 hover:bg-white/30 border-none rounded-full text-white text-2xl cursor-pointer flex items-center justify-center transition-all"
              onClick={closeFullscreen}
              aria-label="Закрити"
            >
              &times;
            </button>
            <button
              className="absolute top-5 right-[70px] w-10 h-10 bg-white/20 hover:bg-white/30 border-none rounded-full text-white text-2xl cursor-pointer flex items-center justify-center transition-all"
              onClick={toggleThumbnails}
              aria-label="Показати мініатюри"
            >
              &#8942;
            </button>

            {images.length > 1 && (
              <>
                <button
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 border-none rounded-full text-white text-2xl cursor-pointer flex items-center justify-center mx-5 transition-all"
                  onClick={prevImage}
                  aria-label="Попереднє зображення"
                >
                  &#10094;
                </button>

                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                  <Image
                    src={
                      currentImage.src ||
                      '/placeholder.svg?height=600&width=800&query=medical+procedure'
                    }
                    alt={currentImage.alt}
                    width={currentImage.width}
                    height={currentImage.height}
                    className="max-w-full max-h-full object-contain"
                    onLoad={() => handleImageLoad(currentIndex)}
                    onError={() => handleImageLoad(currentIndex)}
                  />
                  {currentImage.title && (
                    <div className="absolute -bottom-10 left-0 right-0 bg-black/60 text-white py-2.5 px-0 text-center rounded-b-lg">
                      {currentImage.title}
                    </div>
                  )}
                </div>

                <button
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 border-none rounded-full text-white text-2xl cursor-pointer flex items-center justify-center mx-5 transition-all"
                  onClick={nextImage}
                  aria-label="Наступне зображення"
                >
                  &#10095;
                </button>
              </>
            )}

            {showThumbnails && (
              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2.5 p-2.5 bg-black/60 overflow-x-auto">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="w-[100px] h-[75px] border-2 rounded overflow-hidden cursor-pointer transition-all"
                    style={{
                      borderColor: index === currentIndex ? 'white' : 'transparent',
                    }}
                    onClick={() => selectImage(index)}
                  >
                    <Image
                      src={
                        image.src ||
                        '/placeholder.svg?height=75&width=100&query=procedure+thumbnail'
                      }
                      alt={image.alt}
                      width={100}
                      height={75}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1 z-[5]">
              {images.map((_, index) => (
                <span
                  key={index}
                  className="w-2 h-2 rounded-full cursor-pointer transition-colors mx-[3px]"
                  style={{
                    backgroundColor: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  }}
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

export default ImplantReplacementProcedureGallery;
