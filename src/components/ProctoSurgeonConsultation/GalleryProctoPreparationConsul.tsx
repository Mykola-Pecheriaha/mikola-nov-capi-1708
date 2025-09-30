"use client";

import Image from "next/image";
import { useState } from "react";

export type GalleryProctoPreparationConsulImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
};

// Масив зображень для галереї підготовки (4 шт)
const preparationImages: GalleryProctoPreparationConsulImage[] = [
  { src: "/images/procto/proctology41.jpg", alt: "Підготовка 1", width: 800, height: 600, title: "Підготовка 1" },
  { src: "/images/procto/proctology40.jpg", alt: "Підготовка 2", width: 800, height: 600, title: "Підготовка 2" },
  { src: "/images/procto/proctology42.jpg", alt: "Підготовка 3", width: 800, height: 600, title: "Підготовка 3" },
  { src: "/images/procto/proctology43.jpg", alt: "Підготовка 4", width: 800, height: 600, title: "Підготовка 4" },
    { src: "/images/procto/proctology44.jpg", alt: "Підготовка 4", width: 800, height: 600, title: "Підготовка 4" },
];

interface GalleryProctoPreparationConsulProps {
  className?: string;
  style?: React.CSSProperties;
}

export function GalleryProctoPreparationConsul({ className = "", style }: GalleryProctoPreparationConsulProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(() => new Array(preparationImages.length).fill(false));

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % preparationImages.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + preparationImages.length) % preparationImages.length);
  const selectImage = (idx: number) => setCurrentIndex(idx);
  const handleImageLoad = (idx: number) => {
    const arr = [...imagesLoaded]; arr[idx] = true; setImagesLoaded(arr);
  };

  if (!preparationImages.length) return <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 text-[1.2rem]">Зображення недоступні</div>;
  const currentImage = preparationImages[currentIndex];

  return (
    <div className={`w-full relative ${className}`} style={style}>
      <div className="relative w-full h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
        <button className="absolute top-1/2 -translate-y-1/2 left-4 w-9 h-9 bg-white/90 border-none rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 z-30 text-amber-500 hover:bg-white hover:scale-110" onClick={prevImage} aria-label="Попереднє зображення">&#10094;</button>
        <div className="relative w-[calc(100%-8px)] h-[calc(100%-48px)] m-1 mx-1 mb-11 overflow-hidden rounded">
          {!imagesLoaded[currentIndex] && <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/10 text-gray-800 text-base z-10">Завантаження...</div>}
          <Image src={currentImage.src} alt={currentImage.alt} width={currentImage.width} height={currentImage.height} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" onLoad={() => handleImageLoad(currentIndex)} onError={() => handleImageLoad(currentIndex)} priority={currentIndex === 0} />
        </div>
        <button className="absolute top-1/2 -translate-y-1/2 right-4 w-9 h-9 bg-white/90 border-none rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 z-30 text-amber-500 hover:bg-white hover:scale-110" onClick={nextImage} aria-label="Наступне зображення">&#10095;</button>
        <div className="absolute bottom-0 left-0 right-0 h-11 bg-white flex items-center justify-between px-4 z-20">
          <div className="flex justify-center items-center gap-2 flex-1">
            {preparationImages.map((_, idx) => (
              <span key={idx} className={`w-2 h-2 rounded-full bg-gray-300 cursor-pointer transition-all duration-300 ${idx === currentIndex ? 'bg-blue-500 scale-125' : ''}`} onClick={() => selectImage(idx)} />
            ))}
          </div>
          <button className="w-7 h-7 bg-transparent border border-gray-300 rounded flex items-center justify-center text-base cursor-pointer transition-all duration-300 text-amber-500 font-bold hover:bg-amber-500 hover:text-white hover:border-amber-500" onClick={() => setFullscreen(true)} aria-label="Відкрити на повний екран">+</button>
        </div>
      </div>
      {fullscreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center z-[1000]" onClick={() => setFullscreen(false)}>
          <div className="relative w-[90%] h-[90%] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button className="absolute top-5 right-5 w-10 h-10 bg-white/20 border-none rounded-full text-white text-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30" onClick={() => setFullscreen(false)} aria-label="Закрити">&times;</button>
            <button className="absolute top-5 right-20 w-10 h-10 bg-white/20 border-none rounded-full text-white text-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30" onClick={() => setShowThumbnails(s => !s)} aria-label="Показати мініатюри">&#8942;</button>
            <button className="w-10 h-10 bg-white/20 border-none rounded-full text-white text-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30 mr-5" onClick={prevImage} aria-label="Попереднє зображення">&#10094;</button>
            <div className="relative w-4/5 h-4/5 flex items-center justify-center">
              <Image src={currentImage.src} alt={currentImage.alt} width={currentImage.width} height={currentImage.height} className="max-w-full max-h-full object-contain" onLoad={() => handleImageLoad(currentIndex)} onError={() => handleImageLoad(currentIndex)} />
              {currentImage.title && <div className="absolute -bottom-10 left-0 right-0 bg-black/60 text-white p-2 text-center rounded-b-lg">{currentImage.title}</div>}
            </div>
            <button className="w-10 h-10 bg-white/20 border-none rounded-full text-white text-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30 ml-5" onClick={nextImage} aria-label="Наступне зображення">&#10095;</button>
            {showThumbnails && (
              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 p-2 bg-black/60 overflow-x-auto">
                {preparationImages.map((img, idx) => (
                  <div key={idx} className={`w-24 h-20 border-2 rounded cursor-pointer overflow-hidden transition-all duration-300 ${idx === currentIndex ? 'border-white' : 'border-transparent'}`} onClick={() => selectImage(idx)}>
                    <Image src={img.src} alt={img.alt} width={100} height={75} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1 z-10">
              {preparationImages.map((_, idx) => (
                <span key={idx} className={`w-2 h-2 rounded-full bg-white/50 cursor-pointer transition-colors duration-300 ${idx === currentIndex ? 'bg-white' : ''}`} onClick={() => selectImage(idx)} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
