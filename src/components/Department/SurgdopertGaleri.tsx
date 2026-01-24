'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ZoomIn, ZoomOut, Play, Pause, Maximize, Grid3X3, X, Plus } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

const SurgdopertGaleri: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [isFullscreenMode, setIsFullscreenMode] = useState(false);
  const [showPlusButton, setShowPlusButton] = useState(false);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  const galleryImages: GalleryImage[] = [
    {
      src: '/images/surgical-department/surgoper1.jpg',
      alt: 'Операційна блок',
      width: 800,
      height: 600,
      title: 'Операційна блок',
    },
    {
      src: '/images/surgical-department/surgoper2.jpg',
      alt: 'Операційне відділення',
      width: 800,
      height: 600,
      title: 'Операційне відділення',
    },
    {
      src: '/images/surgical-department/surgoper3.jpg',
      alt: 'Медичне обладнання',
      width: 800,
      height: 600,
      title: 'Сучасне обладнання',
    },
    {
      src: '/images/surgical-department/surgoper4.jpg',
      alt: 'Операційна',
      width: 800,
      height: 600,
      title: 'Операційна',
    },
    {
      src: '/images/surgical-department/surgoper5.jpg',
      alt: 'Медичний персонал',
      width: 800,
      height: 600,
      title: 'Професійна команда',
    },
    {
      src: '/images/surgical-department/surgoper6.jpg',
      alt: 'Операційне приміщення',
      width: 800,
      height: 600,
      title: 'Операційне приміщення',
    },
    {
      src: '/images/surgical-department/surgoper7.jpg',
      alt: 'Стерильна зона',
      width: 800,
      height: 600,
      title: 'Стерильна зона',
    },
    {
      src: '/images/surgical-department/surgoper8.JPG',
      alt: 'Внутрішнє устаткування',
      width: 800,
      height: 600,
      title: 'Внутрішнє устаткування',
    },
    {
      src: '/images/surgical-department/surgoper9.JPG',
      alt: 'Операційне відділення',
      width: 800,
      height: 600,
      title: 'Операційне відділення',
    },
    {
      src: '/images/surgical-department/surgoper10.jpg',
      alt: 'Хірургічні інструменти',
      width: 800,
      height: 600,
      title: 'Медичні інструменти',
    },
    {
      src: '/images/surgical-department/surgoper11.jpg',
      alt: 'Устаткування',
      width: 800,
      height: 600,
      title: 'Сучасне устаткування',
    },
    {
      src: '/images/surgical-department/surgoper12.jpg',
      alt: 'Операційна зона',
      width: 800,
      height: 600,
      title: 'Операційна зона',
    },
    {
      src: '/images/surgical-department/surgoper13.jpg',
      alt: 'Хірургічна база',
      width: 800,
      height: 600,
      title: 'Хірургічна база',
    },
    {
      src: '/images/surgical-department/surgoper14.jpg',
      alt: 'Медичний центр',
      width: 800,
      height: 600,
      title: 'Медичний центр',
    },
    {
      src: '/images/surgical-department/surgoper15.jpg',
      alt: 'Операційні приміщення',
      width: 800,
      height: 600,
      title: 'Операційні приміщення',
    },
  ];

  useEffect(() => {
    setImagesLoaded(new Array(galleryImages.length).fill(false));
    setCurrentIndex(0);
  }, [galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && fullscreen) {
        setFullscreen(false);
        setZoomLevel(1);
        setIsSlideshow(false);
        setIsFullscreenMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreen]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSlideshow && fullscreen) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isSlideshow, fullscreen, galleryImages.length]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (fullscreen && fullscreenRef.current?.contains(e.target as Node)) {
        e.preventDefault();
        e.stopPropagation();

        const delta = e.deltaY > 0 ? -0.3 : 0.3;
        setZoomLevel((prev) => {
          const newZoom = Math.max(0.5, Math.min(5, prev + delta));
          return newZoom;
        });
      }
    };

    if (fullscreen && fullscreenRef.current) {
      const element = fullscreenRef.current;
      element.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        element.removeEventListener('wheel', handleWheel);
      };
    }
  }, [fullscreen]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    setZoomLevel(1);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    setZoomLevel(1);
  };

  const openFullscreen = () => {
    setFullscreen(true);
    setZoomLevel(1);
  };

  const closeFullscreen = () => {
    setFullscreen(false);
    setZoomLevel(1);
    setIsSlideshow(false);
    setIsFullscreenMode(false);
  };

  const toggleThumbnails = () => {
    setShowThumbnails(!showThumbnails);
  };

  const toggleSlideshow = () => {
    setIsSlideshow(!isSlideshow);
  };

  const toggleFullscreenMode = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreenMode(true);
    } else {
      document.exitFullscreen();
      setIsFullscreenMode(false);
    }
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 5));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 0.5));
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
    setZoomLevel(1);
  };

  const handleImageLoad = (index: number) => {
    const newImagesLoaded = [...imagesLoaded];
    newImagesLoaded[index] = true;
    setImagesLoaded(newImagesLoaded);
  };

  if (!galleryImages || galleryImages.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="w-full h-96 flex items-center justify-center bg-blue-50 dark:bg-gray-800 rounded-xl">
          <span className="text-blue-900 dark:text-blue-100 text-lg">Зображення недоступні</span>
        </div>
      </div>
    );
  }

  const currentImage = galleryImages[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Галерея */}
      <div className="w-full">
        {/* Основна галерея */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white dark:bg-gray-800 rounded-t-xl overflow-hidden shadow-lg border border-b-0 border-blue-200 dark:border-blue-700">
          {/* Навігаційні кнопки */}
          <button
            onClick={prevImage}
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-blue-900 dark:text-white rounded-full flex items-center justify-center transition-all z-20 shadow-lg border border-blue-200 dark:border-blue-700"
            aria-label="Попереднє зображення"
          >
            &#10094;
          </button>

          {/* Контейнер зображення */}
          <div
            className="relative w-full h-full flex items-center justify-center bg-white dark:bg-gray-800 group"
            onMouseEnter={() => setShowPlusButton(true)}
            onMouseLeave={() => setShowPlusButton(false)}
          >
            {!imagesLoaded[currentIndex] && (
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50 dark:bg-gray-700 z-10">
                <span className="text-blue-900 dark:text-blue-100">Завантаження...</span>
              </div>
            )}
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
              onLoad={() => handleImageLoad(currentIndex)}
              onError={() => handleImageLoad(currentIndex)}
              priority
            />

            {/* Кнопка + при наведенні */}
            {showPlusButton && (
              <button
                onClick={openFullscreen}
                className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-all z-15"
                aria-label="Збільшити"
              >
                <Plus size={40} className="text-white" />
              </button>
            )}
          </div>

          <button
            onClick={nextImage}
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-blue-900 dark:text-white rounded-full flex items-center justify-center transition-all z-20 shadow-lg border border-blue-200 dark:border-blue-700"
            aria-label="Наступне зображення"
          >
            &#10095;
          </button>
        </div>

        {/* Мініатюри нижче */}
        <div className="w-full h-20 sm:h-24 md:h-28 bg-white dark:bg-gray-800 border border-t border-blue-200 dark:border-blue-700 rounded-b-xl px-2 py-2 overflow-x-auto flex gap-2 items-center shadow-lg">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`flex-shrink-0 w-14 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 rounded-lg border-2 overflow-hidden transition-all ${
                index === currentIndex
                  ? 'border-blue-600 dark:border-blue-400 scale-105 shadow-lg'
                  : 'border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={80}
                height={100}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Повноекранний режим */}
      {fullscreen && (
        <div
          ref={fullscreenRef}
          className="fixed inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-50 flex flex-col items-center justify-center pt-20 pb-8"
          onClick={closeFullscreen}
        >
          {/* Лічильник зліва вгорі */}
          <div className="absolute top-6 left-6 bg-gray-800 dark:bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium border border-blue-600 z-50">
            {currentIndex + 1}/{galleryImages.length} | Zoom: {Math.round(zoomLevel * 100)}%
          </div>

          {/* Панель інструментів справа вгорі */}
          <div className="absolute top-6 right-6 flex flex-row gap-2 z-50">
            <button
              onClick={(e) => {
                e.stopPropagation();
                zoomOut();
              }}
              className="w-11 h-11 bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all border border-blue-600"
              aria-label="Зменшити"
            >
              <ZoomOut size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                zoomIn();
              }}
              className="w-11 h-11 bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all border border-blue-600"
              aria-label="Збільшити"
            >
              <ZoomIn size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSlideshow();
              }}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all border border-blue-600 ${
                isSlideshow
                  ? 'bg-blue-600 dark:bg-blue-600 text-white'
                  : 'bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 text-white'
              }`}
              aria-label={isSlideshow ? 'Зупинити слайдшоу' : 'Запустити слайдшоу'}
            >
              {isSlideshow ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreenMode();
              }}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all border border-blue-600 ${
                isFullscreenMode
                  ? 'bg-blue-600 dark:bg-blue-600 text-white'
                  : 'bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 text-white'
              }`}
              aria-label="Повноекранний режим браузера"
            >
              <Maximize size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleThumbnails();
              }}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all border border-blue-600 ${
                showThumbnails
                  ? 'bg-blue-600 dark:bg-blue-600 text-white'
                  : 'bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 text-white'
              }`}
              aria-label="Показати/сховати мініатюри"
            >
              <Grid3X3 size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                closeFullscreen();
              }}
              className="w-11 h-11 bg-gray-800 dark:bg-gray-900 hover:bg-red-600 dark:hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all border border-blue-600"
              aria-label="Закрити"
            >
              <X size={20} />
            </button>
          </div>

          {/* Навігаційні кнопки */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all z-40 border border-blue-600 text-xl md:text-2xl"
            aria-label="Попереднє зображення"
          >
            &#10094;
          </button>

          {/* Контейнер зображення */}
          <div className="relative w-[90%] h-[80%] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.1s ease',
                }}
                sizes="90vw"
                onLoad={() => handleImageLoad(currentIndex)}
                onError={() => handleImageLoad(currentIndex)}
              />
            </div>
            {currentImage.title && (
              <div className="absolute bottom-4 left-4 right-4 bg-gray-800 dark:bg-gray-900 text-white px-4 py-2 rounded-lg text-center border border-blue-600">
                {currentImage.title}
              </div>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-gray-800 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all z-40 border border-blue-600 text-xl md:text-2xl"
            aria-label="Наступне зображення"
          >
            &#10095;
          </button>

          {/* Мініатюри внизу */}
          {showThumbnails && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-4 py-3 bg-gray-800 dark:bg-gray-900 rounded-lg border border-blue-600 max-w-[95%] overflow-x-auto">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectImage(index);
                  }}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg border-2 overflow-hidden transition-all ${
                    index === currentIndex
                      ? 'border-blue-400 scale-105'
                      : 'border-blue-600 hover:border-blue-400'
                  }`}
                >
                  <Image
                    src={image.src}
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
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-40">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  selectImage(index);
                }}
                className={`w-3 h-3 rounded-full transition-all border border-blue-600 ${
                  index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SurgdopertGaleri;
