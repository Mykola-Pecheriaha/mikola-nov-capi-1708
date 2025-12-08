'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CruroplastyStart: React.FC = () => {
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
        '/images/cruroplasty/cruroplasty1-removebg-preview.png',
      );
      setImageLoaded(isAvailable);
    };
    checkImage();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок вверху по середині */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Корекція гомілок
        </h2>

        {/* Дві колонки: текст зліва, зображення справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Ліва колонка - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">✨</span>
                <span className="font-medium">Гарна форма</span>
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">✨</span>
                <span className="font-medium">Створення бажаного об`єму гомілки</span>
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">✨</span>
                <span className="font-medium">Корекція контуру гомілок</span>
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">✨</span>
                <span className="font-medium">Відновлення форми ніг</span>
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">✨</span>
                <span className="font-medium">Досягнення привабливого вигляду гомілок</span>
              </li>
            </ul>
          </div>

          {/* Права колонка - зображення */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden  border-blue-100 dark:border-blue-900">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50 dark:bg-gray-800">
                  <div className="text-blue-900 dark:text-blue-100 text-sm md:text-base">
                    Завантаження...
                  </div>
                </div>
              )}
              <Image
                src="/images/cruroplasty/cruroplasty3-removebg-preview.png"
                alt="Корекція гомілок"
                fill
                className="object-cover"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
                priority
              />
            </div>
          </div>
        </div>

        {/* Текст на всю ширину знизу */}
        <div className="w-full">
          <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-6 md:p-8 text-blue-900 dark:text-blue-100 text-base md:text-lg font-medium shadow-sm border-l-8 border-blue-400 dark:border-blue-500">
            <p>
              Краса залежить не тільки від того, наскільки витонченою є фігура і овал обличчя.
              Ідеальна зовнішність – це збірне поняття. Воно включає в себе кожну частину тіла.
              Таким чином, більшість жінок приділяють особливу увагу своїй зовнішності в цілому.
              Природно, бездоганні ноги з рівними гомілками – це одна з найважливіших складових
              жіночої привабливості і сексуальності.{' '}
            </p>
            <p className="leading-relaxed">
              <strong className="font-bold">Пластика гомілок, або круропластика,</strong> – це
              хірургічна операція для корекції форми, об`єму та вирівнювання кривизни ніг, що
              досягається шляхом встановлення саліконових імплантів або власного жиру (ліпофілінгу),
              що робить ноги більш гармонійними, особливо при слабко розвинених м`язах або
              `О-подібній` кривизні.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CruroplastyStart;
