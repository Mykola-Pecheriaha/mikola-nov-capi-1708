'use client';

import type React from 'react';
import { useState, useRef, useEffect, useCallback, type ReactElement } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  width?: number;
  height?: number;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'До процедури',
  afterAlt = 'Після процедури',
  width = 600,
  height = 400,
}: BeforeAfterSliderProps): ReactElement {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const calculateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const offsetX = clientX - containerRect.left;

    // Обмежуємо позицію повзунка в межах контейнера
    let newPosition = (offsetX / containerWidth) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));

    setSliderPosition(newPosition);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      calculateSliderPosition(e.clientX);
    },
    [isDragging, calculateSliderPosition],
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      calculateSliderPosition(e.touches[0].clientX);
    },
    [isDragging, calculateSliderPosition],
  );

  // Зміщення повзунка вліво на 10%
  const moveSliderLeft = () => {
    setSliderPosition((prev) => Math.max(0, prev - 10));
  };

  // Зміщення повзунка вправо на 10%
  const moveSliderRight = () => {
    setSliderPosition((prev) => Math.min(100, prev + 10));
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div className="flex justify-center items-center w-full" ref={containerRef}>
      <div
        className="relative overflow-hidden rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] cursor-grab active:cursor-grabbing select-none max-w-full group"
        style={{ width, height }}
      >
        {/* Зображення "після" (задній шар) */}
        <div className="relative w-full h-full bg-gray-100">
          <Image
            src={afterImage || '/placeholder.svg'}
            alt={afterAlt}
            width={width}
            height={height}
            className="w-full h-full object-contain block"
            sizes={`${width}px`}
          />
        </div>

        {/* Зображення "до" (передній шар з обрізанням) */}
        <div
          className="absolute top-0 left-0 w-full h-full z-[2] bg-gray-100"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage || '/placeholder.svg'}
            alt={beforeAlt}
            width={width}
            height={height}
            className="w-full h-full object-contain block"
            sizes={`${width}px`}
          />
        </div>

        {/* Повзунок */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-[3] cursor-grab active:cursor-grabbing -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.2)] cursor-grab active:cursor-grabbing">
            <ChevronLeft className="text-gray-600 mr-0.5" size={16} />
            <ChevronRight className="text-gray-600 ml-0.5" size={16} />
          </div>
        </div>

        {/* Кнопки для керування з клавіатури та доступності */}
        <button
          className="absolute top-1/2 -translate-y-1/2 left-4 md:left-3.5 sm:left-2.5 w-9 h-9 md:w-8 md:h-8 sm:w-7 sm:h-7 bg-white/90 border-none rounded-full flex items-center justify-center cursor-pointer z-[4] transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110"
          onClick={moveSliderLeft}
          aria-label="Показати більше зображення 'до'"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-4 md:right-3.5 sm:right-2.5 w-9 h-9 md:w-8 md:h-8 sm:w-7 sm:h-7 bg-white/90 border-none rounded-full flex items-center justify-center cursor-pointer z-[4] transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110"
          onClick={moveSliderRight}
          aria-label="Показати більше зображення 'після'"
        >
          <ChevronRight size={20} />
        </button>

        {/* Підписи */}
        <div className="absolute top-4 md:top-3.5 sm:top-2.5 left-0 right-0 flex justify-between px-4 md:px-3.5 sm:px-2.5 z-[5] pointer-events-none">
          <div className="bg-black/70 text-white px-3 py-1.5 md:px-2.5 md:py-1 sm:px-2 sm:py-1 rounded text-sm md:text-xs sm:text-[0.75rem] font-semibold">
            До
          </div>
          <div className="bg-black/70 text-white px-3 py-1.5 md:px-2.5 md:py-1 sm:px-2 sm:py-1 rounded text-sm md:text-xs sm:text-[0.75rem] font-semibold">
            Після
          </div>
        </div>
      </div>
    </div>
  );
}
