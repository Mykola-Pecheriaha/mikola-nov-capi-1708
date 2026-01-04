'use client';
import React from 'react';
import Link from 'next/link';
import { FacetummorDetalisGallery } from './FacetummorDetalisGallery';

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

const FacetummorDetalis: React.FC = () => {
  // Зображення для галереї
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/skintumors/faceRemoval.jpg',
      alt: 'Видалення новоутворення',
      width: 700,
      height: 800,
      title: 'До видалення',
    },
    {
      src: '/images/skintumors/faceRemoval2.jpg',
      alt: 'Результат операції',
      width: 800,
      height: 600,
      title: 'Після видалення',
    },
    {
      src: '/images/skintumors/faceRemoval5.jpg',
      alt: 'Гістологічне дослідження',
      width: 800,
      height: 600,
      title: 'Гістологія',
    },
    {
      src: '/images/skintumors/faceRemoval8.jpg',
      alt: 'Гістологічне дослідження',
      width: 800,
      height: 600,
      title: 'Гістологія',
    },
    {
      src: '/images/skintumors/faceRemoval9.jpg',
      alt: 'Гістологічне дослідження',
      width: 800,
      height: 600,
      title: 'Гістологія',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12 lg:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок по центру */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 dark:text-blue-400 mb-4 transition-colors duration-300">
            Оперативне видалення доброякісних новоутворень шкіри
          </h2>
        </div>

        {/* Опис на всю ширину */}
        <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed transition-colors duration-300">
              Після проведення диференційної діагностики лікарем-онкологом та підтвердження
              доброякісного характеру новоутворення, пацієнт спільно з лікарем ухвалює рішення щодо
              доцільності оперативного лікування.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed transition-colors duration-300">
              Оперативне видалення доброякісних пухлин шкіри (невусів, ліпом, фібром, папілом та
              інших утворень) на сьогодні проводиться за наявності чітких медичних, функціональних
              або естетичних показань.
            </p>
          </div>
        </div>

        {/* Двоколонна розмітка: показання + галерея */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Ліва колонка - Показання */}
          <div className="flex flex-col justify-start order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-400 mb-6 md:mb-8 transition-colors duration-300">
              Показання до оперативного лікування:
            </h3>

            <div className="space-y-6 md:space-y-8">
              {/* 1. Медичні показання */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4 sm:p-6 md:p-8 border border-blue-200 dark:border-blue-800 shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-400 mb-4 transition-colors duration-300">
                  1. Медичні показання
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                    <span>
                      <strong>Підозра на малігнізацію</strong> — зміна кольору, форми, розмірів, меж
                      утворення або його швидкий ріст, що може свідчити про можливе злоякісне
                      переродження.
                    </span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                    <span>
                      <strong>Хронічна травматизація</strong> — регулярне пошкодження утворення
                      одягом, гребінцем, під час гоління, що супроводжується кровоточивістю або
                      запальними реакціями.
                    </span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                    <span>
                      <strong>Рецидивуючі інфекційні ускладнення</strong> — повторні епізоди
                      запалення, які потребують медикаментозної терапії.
                    </span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                    <span>
                      <strong>Больовий синдром</strong> — постійний біль або дискомфорт у ділянці
                      новоутворення.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 2. Функціональні показання */}
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-800/40 dark:to-cyan-800/40 rounded-xl p-4 sm:p-6 md:p-8 border-2 border-blue-400 dark:border-blue-600 shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg md:text-xl font-bold text-blue-950 dark:text-blue-300 mb-4 transition-colors duration-300">
                  2. Функціональні показання
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                    <span>
                      <strong>Порушення функції органів</strong> — розташування утворення в ділянці
                      повік, носа, губ, зовнішнього слухового проходу або поблизу суглобів, що
                      обмежує їхню функцію.
                    </span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                    <span>
                      <strong>Компресія навколишніх структур</strong> — здавлювання судин, нервів
                      або м&apos;яких тканин, що може спричиняти оніміння, порушення чутливості або
                      трофічні зміни.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 3. Естетичні показання */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 sm:p-6 md:p-8 border border-purple-200 dark:border-purple-800 shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg md:text-xl font-bold text-purple-900 dark:text-purple-400 mb-4 transition-colors duration-300">
                  3. Естетичні показання
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-3 md:mr-4 flex-shrink-0 mt-2"></span>
                    <span>
                      <strong>Косметичний дефект</strong> — новоутворення на відкритих ділянках тіла
                      (обличчя, шия, декольте), які викликають психологічний або соціальний
                      дискомфорт у пацієнта.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Права колонка - Галерея */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <FacetummorDetalisGallery images={galleryImages} />
          </div>
        </div>

        {/* Блок "Важливо" на всю ширину */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6 sm:p-8 md:p-10 text-center border-2 border-amber-400 dark:border-amber-600 shadow-lg mb-4 transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-200 mb-4 transition-colors duration-300">
            ⚠️ Важливо
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed transition-colors duration-300">
            Перед оперативним втручанням обов&apos;язково проводиться дерматоскопічне обстеження, а
            після видалення — гістологічне дослідження тканин для остаточного підтвердження
            доброякісного характеру утворення.
          </p>
        </div>

        {/* Заклик до дії */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6 sm:p-8 md:p-10 text-center border-2 border-blue-400 dark:border-blue-600 shadow-lg transition-colors duration-300">
          <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 font-medium mb-6 transition-colors duration-300">
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <Link href="/ask-doctor">
            <button className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Зв&apos;язатися з нами
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacetummorDetalis;
