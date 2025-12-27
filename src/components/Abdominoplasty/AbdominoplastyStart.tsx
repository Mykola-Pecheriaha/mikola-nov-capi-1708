'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

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
    <section className="w-full bg-gradient-to-b from-cyan-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 md:py-12 lg:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок вверху по центру */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cyan-900 dark:text-cyan-300 mb-4">
            Абдомінопластика
          </h2>
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Хірургічна процедура для формування ідеального живота та підвищення впевненості в собі
          </p>
        </div>

        {/* Дві колонки: текст зліва, зображення справа */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Ліва колонка - текст */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-900 dark:text-cyan-300 mb-6 md:mb-8">
              Переваги процедури
            </h3>
            <ul className="space-y-3 sm:space-y-4 md:space-y-5">
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="text-base sm:text-lg text-gray-800 dark:text-gray-200 font-medium">
                  Видалення зайвої шкіри та жирової тканини
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="text-base sm:text-lg text-gray-800 dark:text-gray-200 font-medium">
                  Зміцнення абдомінальних м&apos;язів
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="text-base sm:text-lg text-gray-800 dark:text-gray-200 font-medium">
                  Плаский та підтягнутий живіт
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="text-base sm:text-lg text-gray-800 dark:text-gray-200 font-medium">
                  Покращена форма талії та обрисів тіла
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <span className="text-base sm:text-lg text-gray-800 dark:text-gray-200 font-medium">
                  Тривалі та стійкі результати
                </span>
              </li>
            </ul>
          </div>

          {/* Права колонка - зображення */}
          <div className="flex justify-center items-center order-1 md:order-2">
            {imageLoaded ? (
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <Image
                  src="/images/abdominoplasty/abdominoplastic-removebg-preview.png"
                  alt="Абдомінопластика - результати"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 border-2 border-dashed border-cyan-400 dark:border-cyan-600 rounded-2xl flex items-center justify-center">
                <span className="text-cyan-600 dark:text-cyan-300 text-base sm:text-lg font-medium">
                  Завантаження зображення...
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Три інформаційні блоки на всю ширину */}
        <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 text-gray-800 dark:text-gray-100 text-base sm:text-lg font-medium shadow-md border-l-4 border-cyan-600 dark:border-cyan-400 hover:shadow-lg transition-shadow duration-300">
            <p className="leading-relaxed text-justify">
              <span className="text-cyan-700 dark:text-cyan-300 font-bold">•</span> Абдомінопластика
              — це пластична операція, спрямована на формування сплющеного живота та поліпшення
              контурів талії. Процедура особливо ефективна для осіб, які мають зайву шкіру та
              послаблені м&apos;язи живота внаслідок вагітності, значної втрати ваги або природного
              старіння.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 text-gray-800 dark:text-gray-100 text-base sm:text-lg font-medium shadow-md border-l-4 border-cyan-600 dark:border-cyan-400 hover:shadow-lg transition-shadow duration-300">
            <p className="leading-relaxed text-justify">
              <span className="text-cyan-700 dark:text-cyan-300 font-bold">•</span> Під час операції
              хірург видаляє зайву шкіру та жирову тканину з області живота, зміцнює прямі
              абдомінальні м&apos;язи та формує нову лінію талії. Залежно від виду процедури, можна
              отримати значні результати з мінімальною видимістю шрамів.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 text-gray-800 dark:text-gray-100 text-base sm:text-lg font-medium shadow-md border-l-4 border-cyan-600 dark:border-cyan-400 hover:shadow-lg transition-shadow duration-300">
            <p className="leading-relaxed text-justify">
              <span className="text-cyan-700 dark:text-cyan-300 font-bold">•</span> Результати
              абдомінопластики тривалі та стійкі. Пацієнти зазвичай відзначають виразне покращення
              форми живота, підвищення впевненості в собі та задоволення результатом операції вже у
              перші тижні після процедури.
            </p>
          </div>
        </div>

        {/* Ключові показники */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                1-2 год
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                Тривалість операції
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                2-3 тижні
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                Відновлення
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                6-12 міс.
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                Фінальний результат
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                15+ років
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                Тривалість результату
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbdominoplastyStart;
