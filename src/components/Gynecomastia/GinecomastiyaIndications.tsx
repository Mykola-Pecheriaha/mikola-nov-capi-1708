'use client';
import React from 'react';
import GinecomastiyaIndicationsGallery from './GinecomastiyaIndicationsGallery';

interface ImageType {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

const GinecomastiyaIndications: React.FC = () => {
  // Зображення для першої секції
  const images1: ImageType[] = [
    {
      src: '/images/GinecomastiyaIndications/ginecomas8.jpg',
      alt: 'Гінекомастія - приклад 1',
      width: 800,
      height: 600,
      title: 'Хибна гінекомастія',
    },
    {
      src: '/images/GinecomastiyaIndications/ginecomas4.jpg',
      alt: 'Гінекомастія - приклад 2',
      width: 800,
      height: 600,
      title: 'Збільшення молочних залоз',
    },
  ];

  // Зображення для другої секції
  const images2: ImageType[] = [
    {
      src: '/images/GinecomastiyaIndications/ginecomas9.jpg',
      alt: 'Показання до операції - приклад 1',
      width: 800,
      height: 600,
      title: 'Асиметричне збільшення',
    },
    {
      src: '/images/GinecomastiyaIndications/ginecomas10.jpg',
      alt: 'Показання до операції - приклад 2',
      width: 800,
      height: 600,
      title: 'Ущільнення в тканинах',
    },
    {
      src: '/images/GinecomastiyaIndications/ginecomas11.jpg',
      alt: 'Показання до операції - приклад 3',
      width: 800,
      height: 600,
      title: 'Естетичний дискомфорт',
    },
  ];

  // Зображення для третьої секції
  const images3: ImageType[] = [
    {
      src: '/images/GinecomastiyaIndications/ginecomas100.jpg',
      alt: 'Протипоказання до операції',
      width: 800,
      height: 600,
      title: 'Медичні протипоказання',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Заголовок */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-10 md:mb-12">
          Лікування гінекомастії: показання до операції
        </h2>

        {/* Секція 1: Типи гінекомастії */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-10 md:mb-12">
          {/* Текстовий блок */}
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Гінекомастія — це стан, який характеризується збільшенням молочних залоз у чоловіків.
              Існують два основних типи цієї патології: <strong>істинна</strong> та{' '}
              <strong>хибна</strong> (псевдогінекомастія).
            </p>
            <div className="flex items-start gap-3 p-4 bg-blue-50/50 dark:bg-gray-800/50 rounded-lg border-l-4 border-blue-500">
              <span className="text-blue-500 text-xl flex-shrink-0">🔹</span>
              <div className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                <strong>Істинна гінекомастія</strong> виникає внаслідок гормональних збоїв, що
                можуть бути спричинені захворюваннями або прийомом гормональних препаратів.
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50/50 dark:bg-gray-800/50 rounded-lg border-l-4 border-blue-500">
              <span className="text-blue-500 text-xl flex-shrink-0">🔹</span>
              <div className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                <strong>Хибна гінекомастія</strong> є результатом надмірної ваги або ожиріння. У
                цьому випадку збільшення грудей зумовлене накопиченням жирової тканини.
              </div>
            </div>
          </div>

          {/* Галерея */}
          <div className="w-full lg:w-1/2">
            <GinecomastiyaIndicationsGallery images={images1} />
          </div>
        </div>

        {/* Текст на всю ширину */}
        <div className="w-full max-w-5xl mx-auto mb-10 md:mb-12">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-blue-900 dark:text-blue-100 text-base md:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              Найчастіше патологія спостерігається з двох сторін, однак, у деяких випадках, може
              уражатися і одна сторона. Це не лише косметичний недолік, в окремих випадках один із
              симптомів серйозних порушень у роботі організму.
            </p>
          </div>
        </div>

        {/* Підзаголовок */}
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-10">
          Операція гінекомастія у чоловіків показана у таких випадках:
        </h3>

        {/* Секція 2: Показання до операції */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-10 md:mb-12">
          {/* Текстовий блок */}
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Оперативне втручання при гінекомастії у чоловіків рекомендоване у таких випадках:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-blue-500 font-bold text-xl flex-shrink-0">•</span>
                <span>
                  симетричне або асиметричне збільшення грудей, що виходить за межі норми;
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-blue-500 font-bold text-xl flex-shrink-0">•</span>
                <span>виділення із соска при натисканні;</span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-blue-500 font-bold text-xl flex-shrink-0">•</span>
                <span>наявність ущільнень або відчутної твердості в тканинах;</span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-blue-500 font-bold text-xl flex-shrink-0">•</span>
                <span>біль під час дотику чи пальпації;</span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-blue-500 font-bold text-xl flex-shrink-0">•</span>
                <span>
                  відчуття тяжкості, дискомфорту чи естетичне незадоволення виглядом грудей.
                </span>
              </li>
            </ul>
          </div>

          {/* Галерея */}
          <div className="w-full lg:w-1/2">
            <GinecomastiyaIndicationsGallery images={images2} />
          </div>
        </div>

        {/* Текст на всю ширину */}
        <div className="w-full max-w-5xl mx-auto mb-10 md:mb-12">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-blue-900 dark:text-blue-100 text-base md:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              Гінекомастія — не лише медична проблема, а й емоційна. Її ефективне хірургічне
              лікування дозволяє не просто усунути фізичний дефект, а й суттєво покращити якість
              життя.
            </p>
          </div>
        </div>

        {/* Підзаголовок */}
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-10">
          Протипокази
        </h3>

        {/* Текст на всю ширину */}
        <div className="w-full max-w-5xl mx-auto mb-8">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-6 text-blue-900 dark:text-blue-100 text-base md:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              Гінекомастія лікування хірургічним шляхом показане пацієнтам не завжди. Є низка
              протипоказань, яких рекомендовано дотримуватися:
            </p>
          </div>
        </div>

        {/* Секція 3: Протипокази */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Текстовий блок */}
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-semibold">
              Медичні протипоказання до проведення операції:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-blue-500 font-bold text-xl flex-shrink-0">•</span>
                <span>
                  Серцева недостатність та інші серйозні захворювання серцево-судинної системи
                </span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-blue-500 font-bold text-xl flex-shrink-0">•</span>
                <span>Хронічні патології печінки та нирок</span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-blue-500 font-bold text-xl flex-shrink-0">•</span>
                <span>Цукровий діабет, надмірна вага або ожиріння високого ступеня</span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-blue-500 font-bold text-xl flex-shrink-0">•</span>
                <span>Порушення згортання крові</span>
              </li>
              <li className="flex items-start gap-3 text-base md:text-lg text-gray-800 dark:text-gray-200">
                <span className="text-blue-500 font-bold text-xl flex-shrink-0">•</span>
                <span>Онкологічні захворювання</span>
              </li>
            </ul>
          </div>

          {/* Галерея */}
          <div className="w-full lg:w-1/2">
            <GinecomastiyaIndicationsGallery images={images3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GinecomastiyaIndications;
