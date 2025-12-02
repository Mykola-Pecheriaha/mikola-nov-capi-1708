'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AbdominoplastyStart: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

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
        '/images/abdominoplasty/abdominoplastic-removebg-preview.png',
      );
      setImageLoaded(isAvailable);
    };
    checkImage();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="container-custom">
        {/* Верхня секція: текст зліва, картинка справа */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-8 md:mb-12">
          {/* Текстовий контент */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center lg:text-left text-blue-600 dark:text-blue-400 leading-tight">
              Абдомінопластика пластика живота
            </h2>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start text-lg md:text-xl text-gray-700 dark:text-gray-300">
                <span className="text-2xl md:text-3xl mr-3 flex-shrink-0">🔷</span>
                <span className="leading-relaxed">Повернути плоский живіт як до пологів</span>
              </li>
              <li className="flex items-start text-lg md:text-xl text-gray-700 dark:text-gray-300">
                <span className="text-2xl md:text-3xl mr-3 flex-shrink-0">🔷</span>
                <span className="leading-relaxed">Усунути обвислу шкіру живота</span>
              </li>
              <li className="flex items-start text-lg md:text-xl text-gray-700 dark:text-gray-300">
                <span className="text-2xl md:text-3xl mr-3 flex-shrink-0">🔷</span>
                <span className="leading-relaxed">Відновити струнку фігуру</span>
              </li>
            </ul>
          </div>

          {/* Контейнер зображення */}
          <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {imageLoaded ? (
                <Image
                  src="/images/abdominoplasty/abdominoplastic-removebg-preview.png"
                  alt="Абдомінопластика"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                  priority
                  onError={() => setImageLoaded(false)}
                />
              ) : (
                <div className="w-full aspect-[5/4] bg-blue-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">🏥</div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">Абдомінопластика</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Нижня секція: опис на всю ширину */}
        <div className="w-full">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 border-l-4 border-blue-500 dark:border-blue-400 shadow-sm">
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              Пластика живота (абдомінопластика) – затребувана пластична операція, яка дозволяє
              отримати ідеально рівний животик і гарну талію після пологів та різкого схуднення. Це
              стає можливим за рахунок позбавлення від надлишків шкіри та підшкірного жиру (так
              званий «фартух»). Абдомінопластика повертає фігурі стрункість і пропорційність,
              гармонійні контури.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbdominoplastyStart;
