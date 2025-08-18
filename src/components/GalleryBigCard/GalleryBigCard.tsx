"use client"

import { useState, useEffect } from "react"
import Image from "next/image"



export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title?: string;
};


interface GalleryBigCardProps {
  images: GalleryImage[];
}

export function GalleryBigCard({ images }: GalleryBigCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(() => new Array(images.length).fill(false))

  // Слідкуємо за зміною images, щоб не було помилки useEffect
  useEffect(() => {
    setImagesLoaded(new Array(images.length).fill(false))
    setCurrentIndex(0)
  }, [images])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullscreen) {
        setFullscreen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [fullscreen])

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length)
  }

  const openFullscreen = () => {
    setFullscreen(true)
  }

  const closeFullscreen = () => {
    setFullscreen(false)
    setShowThumbnails(false)
  }

  const toggleThumbnails = () => {
    setShowThumbnails(!showThumbnails)
  }

  const selectImage = (index: number) => {
    setCurrentIndex(index)
  }

  const handleImageLoad = (index: number) => {
    const newImagesLoaded = [...imagesLoaded]
    newImagesLoaded[index] = true
    setImagesLoaded(newImagesLoaded)
  }


  if (!images || images.length === 0) {
    return <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 text-[1.2rem]">Зображення недоступні</div>
  }

  const currentImage = images[currentIndex]

  return (
    <div className="w-full mx-auto relative">
      <div className="relative w-full h-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
        <button
          className="absolute top-1/2 -translate-y-1/2 left-4 w-9 h-9 bg-white/90 border-none rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 z-30 text-blue-500 hover:bg-white hover:scale-110"
          onClick={prevImage}
          aria-label="Попереднє зображення"
        >
          &#10094;
        </button>
        <div className="relative w-[calc(100%-8px)] h-[calc(100%-48px)] m-1 mx-1 mb-11 overflow-hidden rounded">
          {!imagesLoaded[currentIndex] && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/10 text-gray-800 text-base z-10">
              Завантаження...
            </div>
          )}
          <Image
            src={currentImage.src || "/placeholder.svg?height=600&width=800&query=body surgery"}
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
          className="absolute top-1/2 -translate-y-1/2 right-4 w-9 h-9 bg-white/90 border-none rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 z-30 text-blue-500 hover:bg-white hover:scale-110"
          onClick={nextImage}
          aria-label="Наступне зображення"
        >
          &#10095;
        </button>
        <div className="absolute bottom-0 left-0 right-0 h-11 bg-white flex items-center justify-between px-4 z-20">
          <div className="flex justify-center items-center gap-2 flex-1">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full bg-gray-300 cursor-pointer transition-all duration-300 ${index === currentIndex ? 'bg-blue-500 scale-125' : ''}`}
                onClick={() => selectImage(index)}
              />
            ))}
          </div>
          <button
            className="w-7 h-7 bg-transparent border border-gray-300 rounded flex items-center justify-center text-base cursor-pointer transition-all duration-300 text-blue-500 font-bold hover:bg-blue-500 hover:text-white hover:border-blue-500"
            onClick={openFullscreen}
            aria-label="Відкрити на повний екран"
          >
            +
          </button>
        </div>
      </div>
      {fullscreen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center z-[1000]" onClick={closeFullscreen}>
          <div className="relative w-[90%] h-[90%] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-5 right-5 w-10 h-10 bg-white/20 border-none rounded-full text-white text-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30"
              onClick={closeFullscreen}
              aria-label="Закрити"
            >
              &times;
            </button>
            <button
              className="absolute top-5 right-20 w-10 h-10 bg-white/20 border-none rounded-full text-white text-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30"
              onClick={toggleThumbnails}
              aria-label="Показати мініатюри"
            >
              &#8942;
            </button>
            <button
              className="w-10 h-10 bg-white/20 border-none rounded-full text-white text-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30 mr-5"
              onClick={prevImage}
              aria-label="Попереднє зображення"
            >
              &#10094;
            </button>
            <div className="relative w-4/5 h-4/5 flex items-center justify-center">
              <Image
                src={currentImage.src || "/placeholder.svg?height=600&width=800&query=body surgery"}
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className="max-w-full max-h-full object-contain"
                onLoad={() => handleImageLoad(currentIndex)}
                onError={() => handleImageLoad(currentIndex)}
              />
              {currentImage.title && (
                <div className="absolute -bottom-10 left-0 right-0 bg-black/60 text-white p-2 text-center rounded-b-lg">
                  {currentImage.title}
                </div>
              )}
            </div>
            <button
              className="w-10 h-10 bg-white/20 border-none rounded-full text-white text-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/30 ml-5"
              onClick={nextImage}
              aria-label="Наступне зображення"
            >
              &#10095;
            </button>
            {showThumbnails && (
              <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 p-2 bg-black/60 overflow-x-auto">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-24 h-20 border-2 rounded cursor-pointer overflow-hidden transition-all duration-300 ${index === currentIndex ? 'border-white' : 'border-transparent'}`}
                    onClick={() => selectImage(index)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg?height=75&width=100&query=body surgery thumbnail"}
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
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1 z-10">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full bg-white/50 cursor-pointer transition-colors duration-300 ${index === currentIndex ? 'bg-white' : ''}`}
                  onClick={() => selectImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryBigCard
