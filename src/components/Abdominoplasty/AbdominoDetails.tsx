'use client';
import React from 'react';
import AbdominoDetailsGallery from './AbdominoDetailsGallery';

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

const AbdominoDetails: React.FC = () => {
  // Зображення для першої галереї (показання)
  const indicationImages: GalleryImage[] = [
    {
      src: '/images/abdominoplastyDetalis/abdominoDetalis15.jpg',
      alt: 'Абдомінопластика: показання',
      width: 700,
      height: 800,
      title: 'Відвислий шкірно-жировий "фартух"',
    },
    {
      src: '/images/abdominoplastyDetalis/abdominoDetalis1.jpg',
      alt: "Втрата еластичності м'язів живота",
      width: 800,
      height: 600,
      title: "Втрата еластичності м'язів живота",
    },
    {
      src: '/images/abdominoplastyDetalis/abdominoDetalis2.JPG',
      alt: 'Післяопераційні рубці',
      width: 800,
      height: 600,
      title: 'Неестетичний зовнішній вигляд через післяопераційні рубці',
    },
  ];

  // Зображення для другої галереї (протипоказання)
  const contraindicationImages: GalleryImage[] = [
    {
      src: '/images/abdominoplastyDetalis/contraindicatio1.jpg',
      alt: 'Протипоказання: хронічні захворювання',
      width: 800,
      height: 600,
      title: 'Хронічні захворювання як протипоказання',
    },
    {
      src: '/images/abdominoplastyDetalis/abdominoPreparation27.jpg',
      alt: 'Протипоказання: порушення згортання крові',
      width: 800,
      height: 600,
      title: 'Порушення згортання крові як протипоказання',
    },
    {
      src: '/images/abdominoplastyDetalis/abdominoPreparation28.jpg',
      alt: 'Індивідуальний підхід до пацієнта',
      width: 800,
      height: 600,
      title: 'Індивідуальний підхід до кожного пацієнта',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-cyan-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 md:py-12 lg:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cyan-900 dark:text-cyan-300 mb-4">
            ✨ Абдомінопластика: показання до операції
          </h2>
        </div>

        {/* Першу секція: показання - 50/50 розподіл */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Ліва колонка - текст */}
          <div className="flex flex-col justify-start order-2 md:order-1">
            <div className="mb-4 text-3xl">✅</div>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6 md:mb-8 leading-relaxed">
              Абдомінопластика живота рекомендована у випадках:
            </p>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 md:p-8 border border-cyan-200 dark:border-cyan-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-cyan-900 dark:text-cyan-300 mb-4 md:mb-6">
                🔹 Основні показання:
              </h3>

              <ul className="space-y-4 md:space-y-5">
                <li className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 mr-2">🔸</span>
                  Відвислий шкірно-жировий «фартух», що виникає після:
                  <ul className="ml-6 mt-2 space-y-1 list-disc text-gray-700 dark:text-gray-300">
                    <li>різкої втрати ваги (понад 10 кг)</li>
                    <li>вікових або гормональних змін</li>
                    <li>вагітності та пологів</li>
                  </ul>
                </li>

                <li className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 mr-2">🔸</span>
                  Втрата еластичності м&apos;язів живота:
                  <ul className="ml-6 mt-2 space-y-1 list-disc text-gray-700 dark:text-gray-300">
                    <li>птоз</li>
                    <li>в&apos;ялість</li>
                    <li>діастаз (розходження прямих м&apos;язів)</li>
                  </ul>
                </li>

                <li className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 mr-2">🔸</span>
                  Неестетичний зовнішній вигляд через:
                  <ul className="ml-6 mt-2 space-y-1 list-disc text-gray-700 dark:text-gray-300">
                    <li>післяопераційні втягнуті рубці (наприклад, після кесаревого розтину)</li>
                  </ul>
                </li>

                <li className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 mr-2">🔸</span>
                  Грижа білої лінії живота у поєднанні з розтягнутою шкірою
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <AbdominoDetailsGallery images={indicationImages} />
          </div>
        </div>

        {/* Середні секції: додаткова інформація */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 md:p-8 border border-cyan-200 dark:border-cyan-800 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-cyan-900 dark:text-cyan-300 mb-3 md:mb-4">
              ✅ Після пологів
            </h3>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
              Операція часто виконується після народження дітей, коли жінка вже не планує
              вагітність. Повторні пологи можуть вплинути на результати, тому доцільно робити
              операцію після остаточного формування сім&apos;ї. Водночас усе індивідуально — важливу
              роль відіграють:
            </p>
            <ul className="ml-6 space-y-1 list-disc text-gray-700 dark:text-gray-300">
              <li>якість шкіри</li>
              <li>здатність до набору ваги</li>
              <li>особливості організму</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 md:p-8 border border-cyan-200 dark:border-cyan-800 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-cyan-900 dark:text-cyan-300 mb-3 md:mb-4">
              ✅ Комбіновані операції
            </h3>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
              Абдомінопластику часто поєднують з:
            </p>
            <ul className="ml-6 space-y-1 list-disc text-gray-700 dark:text-gray-300 mb-3">
              <li>збільшенням грудей</li>
              <li>підтяжкою грудей</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Це особливо актуально для молодих мам, які хочуть відновити допологову форму, а також
              для жінок після значного схуднення.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 md:p-8 border border-cyan-200 dark:border-cyan-800 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-cyan-900 dark:text-cyan-300 mb-3 md:mb-4">
              ✅ Пластика живота у чоловіків
            </h3>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Сучасна абдомінопластика затребувана і серед чоловіків, які прагнуть покращити контури
              тіла після інтенсивного схуднення або тренувань.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-4 sm:p-6 md:p-8 border border-cyan-200 dark:border-cyan-800 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-cyan-900 dark:text-cyan-300 mb-3 md:mb-4">
              ✅ Важливий момент
            </h3>
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Операція виконується лише при стабільній вазі. Якщо пацієнт продовжить худнути після
              втручання, це може призвести до надлишку шкіри, що знову потребуватиме корекції.
            </p>
          </div>
        </div>

        {/* Заголовок протипоказань */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cyan-900 dark:text-cyan-300 mb-4">
            ❌ Протипоказання до абдомінопластики
          </h2>
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Абдомінопластика живота, як і будь-яке інше хірургічне втручання, має ряд медичних
            протипоказань, які необхідно враховувати перед плануванням операції.
          </p>
        </div>

        {/* Друга секція: протипоказання - 50/50 розподіл */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Ліва колонка - текст */}
          <div className="flex flex-col justify-start order-2 md:order-1">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-4 sm:p-6 md:p-8 border border-red-200 dark:border-red-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-red-900 dark:text-red-300 mb-4 md:mb-6">
                До основних протипоказань належать:
              </h3>

              <ul className="space-y-4 md:space-y-5">
                <li className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  <span className="font-bold text-red-700 dark:text-red-400 mr-2">❗</span>
                  <span className="font-semibold">Хронічні захворювання:</span>
                  <ul className="ml-6 mt-2 space-y-1 list-disc text-gray-700 dark:text-gray-300">
                    <li>цукровий діабет</li>
                    <li>ожиріння III–IV ступеня</li>
                    <li>серцево-легенева недостатність</li>
                    <li>захворювання щитовидної залози</li>
                  </ul>
                  <p className="italic text-gray-600 dark:text-gray-400 mt-2 pl-4 border-l-2 border-red-400">
                    У таких випадках необхідно стабілізувати стан пацієнта або вилікувати супутнє
                    захворювання перед плануванням операції.
                  </p>
                </li>

                <li className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  <span className="font-bold text-red-700 dark:text-red-400 mr-2">❗</span>
                  Порушення згортання крові
                  <p className="italic text-gray-600 dark:text-gray-400 mt-2 pl-4 border-l-2 border-red-400">
                    Це може ускладнити процес загоєння та підвищити ризик ускладнень.
                  </p>
                </li>

                <li className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  <span className="font-bold text-red-700 dark:text-red-400 mr-2">❗</span>
                  Серйозні психічні розлади
                  <p className="italic text-gray-600 dark:text-gray-400 mt-2 pl-4 border-l-2 border-red-400">
                    Операція потребує усвідомленого та стабільного психологічного стану.
                  </p>
                </li>
              </ul>

              {/* Індивідуальний підхід */}
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t-2 border-red-200 dark:border-red-800">
                <h4 className="text-lg md:text-xl font-bold text-cyan-900 dark:text-cyan-300 mb-3">
                  ✅ Індивідуальний підхід
                </h4>
                <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
                  Остаточне рішення щодо можливості проведення абдомінопластики приймає лікар,
                  враховуючи:
                </p>
                <ul className="ml-6 space-y-1 list-disc text-gray-700 dark:text-gray-300">
                  <li>загальний стан здоров&apos;я</li>
                  <li>вік пацієнта</li>
                  <li>індивідуальні особливості організму</li>
                  <li>рівень мотивації та психоемоційний настрій</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <AbdominoDetailsGallery images={contraindicationImages} />
          </div>
        </div>

        {/* Заключна примітка */}
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 rounded-xl p-6 sm:p-8 md:p-10 text-center border-2 border-cyan-400 dark:border-cyan-600 shadow-lg">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-cyan-900 dark:text-cyan-200 leading-relaxed">
            Рішення про хірургічне втручання приймає спеціаліст на основі стану здоров&apos;я
            пацієнта та клінічних досліджень.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbdominoDetails;
