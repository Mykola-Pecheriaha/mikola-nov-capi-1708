'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GynecomastiaGallery, BeforeAfterImage } from './GynecomastiaGallery';
const Gynecomastia: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const benefits = ['Бажана фігура', 'Швидка реабілітація', 'Упевненість в собі'];

  const galleryImages: BeforeAfterImage[] = [
    {
      before: {
        src: '/images/gynecomastia/ginecomastiya7.jpg',
        alt: 'Гінекомастія до операції - пацієнт 1',
      },
      after: {
        src: '/images/gynecomastia/ginecomastiya8.jpg',
        alt: 'Гінекомастія після операції - пацієнт 1',
      },
    },
  ];

  // Функція для перевірки доступності зображення
  const checkImageAvailability = async (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = window.Image ? new window.Image() : document.createElement('img');
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  };

  // Перевірка доступності зображення при монтуванні компонента
  useEffect(() => {
    const checkImage = async () => {
      const isAvailable = await checkImageAvailability(
        '/images/gynecomastia/ginecomas2-removebg-preview.png',
      );
      setImageLoaded(isAvailable);
    };
    checkImage();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок вверху по середині */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Гінекомастія
        </h1>

        {/* Дві колонки: текст зліва, зображення справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Ліва колонка - переваги */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <ul className="space-y-4 md:space-y-6">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 font-medium"
                >
                  <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0"></span>
                  <span>► {benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Права колонка - зображення */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {imageLoaded ? (
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/images/gynecomastia/ginecomas2-removebg-preview.png"
                  alt="Гінекомастія - лікування"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full h-64 md:h-80 lg:h-96 bg-blue-50 dark:bg-gray-800 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-blue-400 dark:text-blue-500 text-lg">
                  Завантаження зображення...
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Опис на всю ширину */}
        <div className="w-full max-w-5xl mx-auto mb-8">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed text-justify">
              Гінекомастія у чоловіків – аномальне збільшення грудних залоз доброякісного характеру.
              Порушення часто буває спричинене гормональним дисбалансом, а також може стати
              наслідком набору зайвої ваги. Чоловічі груди стають схожими на жіночі молочні залози.
              Патологія викликає масу комплексів та дискомфорт. Видалення гінекомастії передбачає
              пластичну операцію, яка повертає чоловічому торсу його природні контури.
            </p>
          </div>
        </div>

        {/* Заголовок галереї */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-blue-900 dark:text-blue-100 mb-6 md:mb-8">
          Приклади робіт До-Після
        </h2>

        {/* Галерея */}
        <div className="w-full max-w-4xl mx-auto">
          <GynecomastiaGallery images={galleryImages} />
        </div>
      </div>
    </section>
  );
};

export default Gynecomastia;
