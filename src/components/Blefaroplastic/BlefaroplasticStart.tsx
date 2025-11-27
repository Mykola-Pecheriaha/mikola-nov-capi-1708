'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface BlefaroplasticStartProps {
  backgroundColor?: string;
}

const BlefaroplasticStart: React.FC<BlefaroplasticStartProps> = ({
  backgroundColor = '#e8f5e8',
}) => {
  const [imageSrc, setImageSrc] = useState(
    '/images/blepharoplasty/blefaroplasty-removebg-preview.png',
  );

  // Перевірка доступності зображення
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkImageExists = async () => {
      try {
        const response = await fetch(imageSrc, { method: 'HEAD' });
        if (!response.ok) {
          setImageSrc('/placeholder.svg?height=600&width=500');
        }
      } catch (error) {
        console.error('Помилка завантаження зображення:', error);
        setImageSrc('/placeholder.svg?height=600&width=500');
      }
    };

    checkImageExists();
  }, [imageSrc]);

  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-10 sm:mb-12 md:mb-14">
          <div className="flex-1">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-400 mb-8 sm:mb-12 md:mb-14 leading-tight text-center lg:text-left">
              Блефаропластика
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl text-blue-900 dark:text-blue-400 font-medium">
                Корекція повік та омолодження погляду
              </span>
            </h1>
            <ul className="list-none p-0 m-0 mb-10 lg:mb-0">
              <li className="flex items-center mb-4 sm:mb-5 text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-100">
                <span className="mr-3 sm:mr-4 text-2xl sm:text-3xl">👁️</span>
                Відкритий та молодий погляд
              </li>
              <li className="flex items-center mb-4 sm:mb-5 text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-100">
                <span className="mr-3 sm:mr-4 text-2xl sm:text-3xl">👁️</span>
                Видалення мішків під очима
              </li>
              <li className="flex items-center mb-4 sm:mb-5 text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-100">
                <span className="mr-3 sm:mr-4 text-2xl sm:text-3xl">👁️</span>
                Тривалий результат — до 10-15 років
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={imageSrc || '/placeholder.svg'}
              alt="Блефаропластика - корекція повік та омолодження погляду"
              width={500}
              height={600}
              className="max-w-full h-auto object-contain rounded-lg"
              priority
            />
          </div>
        </div>
        <div className="mt-8 sm:mt-10">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-4 sm:mb-5">
            <strong className="text-xl sm:text-2xl mr-2">Блефаропластика </strong> — це хірургічна
            процедура корекції повік, яка дозволяє усунути вікові зміни навколо очей та повернути
            молодий, відкритий погляд. Операція ефективно вирішує проблеми опущених повік, мішків
            під очима та зморшок.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-4 sm:mb-5">
            Під час процедури видаляються надлишки шкіри та жирової тканини, що робить погляд більш
            виразним та молодим. Сучасні методики дозволяють досягти природного результату з
            мінімальними слідами втручання.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-4 sm:mb-5">
            Блефаропластика особливо популярна серед пацієнтів після 35 років, коли з&apos;являються
            перші ознаки старіння навколо очей. Результат операції зберігається протягом багатьох
            років.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlefaroplasticStart;
