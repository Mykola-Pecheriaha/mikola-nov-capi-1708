'use client';
import React from 'react';
import AbdominoDetailsGallery from './AbdominoDetailsGallery';
import type { GalleryImage } from './AbdominoDetailsGallery';

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
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container-custom">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
          ✨ Абдомінопластика: показання до операції
        </h2>

        {/* Перша секція: показання - 50/50 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          {/* Текстова колонка */}
          <div className="w-full lg:w-1/2">
            <div className="text-4xl mb-4">✅</div>
            <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300">
              Абдомінопластика живота рекомендована у випадках:
            </p>
            <div className="bg-blue-50/80 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 shadow-lg border border-blue-200 dark:border-blue-900">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                🔹 Основні показання:
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 text-xl flex-shrink-0">
                    🔸
                  </span>
                  <div>
                    <span className="font-medium">
                      Відвислий шкірно-жировий «фартух», що виникає після:
                    </span>
                    <ul className="ml-6 mt-2 space-y-1 list-disc text-gray-600 dark:text-gray-400">
                      <li>різкої втрати ваги (понад 10 кг)</li>
                      <li>вікових або гормональних змін</li>
                      <li>вагітності та пологів</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 text-xl flex-shrink-0">
                    🔸
                  </span>
                  <div>
                    <span className="font-medium">Втрата еластичності м&apos;язів живота:</span>
                    <ul className="ml-6 mt-2 space-y-1 list-disc text-gray-600 dark:text-gray-400">
                      <li>птоз</li>
                      <li>в&apos;ялість</li>
                      <li>діастаз (розходження прямих м&apos;язів)</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 text-xl flex-shrink-0">
                    🔸
                  </span>
                  <div>
                    <span className="font-medium">Неестетичний зовнішній вигляд через:</span>
                    <ul className="ml-6 mt-2 space-y-1 list-disc text-gray-600 dark:text-gray-400">
                      <li>післяопераційні втягнуті рубці (наприклад, після кесаревого розтину)</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 text-xl flex-shrink-0">
                    🔸
                  </span>
                  <span>Грижа білої лінії живота у поєднанні з розтягнутою шкірою</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Галерея */}
          <div className="w-full lg:w-1/2">
            <AbdominoDetailsGallery images={indicationImages} />
          </div>
        </div>

        {/* Додаткова інформація - повна ширина */}
        <div className="space-y-6 mb-12">
          <div className="bg-green-50/60 dark:bg-gray-800/60 rounded-xl p-6 md:p-8 shadow-sm border border-green-200 dark:border-green-900">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              ✅ Після пологів
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              Операція часто виконується після народження дітей, коли жінка вже не планує
              вагітність. Повторні пологи можуть вплинути на результати, тому доцільно робити
              операцію після остаточного формування сім&apos;ї. Водночас усе індивідуально — важливу
              роль відіграють:
            </p>
            <ul className="ml-6 space-y-2 list-disc text-gray-600 dark:text-gray-400">
              <li>якість шкіри</li>
              <li>здатність до набору ваги</li>
              <li>особливості організму</li>
            </ul>
          </div>

          <div className="bg-green-50/60 dark:bg-gray-800/60 rounded-xl p-6 md:p-8 shadow-sm border border-green-200 dark:border-green-900">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              ✅ Комбіновані операції
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              Абдомінопластику часто поєднують з:
            </p>
            <ul className="ml-6 mb-4 space-y-2 list-disc text-gray-600 dark:text-gray-400">
              <li>збільшенням грудей</li>
              <li>підтяжкою грудей</li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Це особливо актуально для молодих мам, які хочуть відновити допологову форму, а також
              для жінок після значного схуднення.
            </p>
          </div>

          <div className="bg-green-50/60 dark:bg-gray-800/60 rounded-xl p-6 md:p-8 shadow-sm border border-green-200 dark:border-green-900">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              ✅ Пластика живота у чоловіків
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Сучасна абдомінопластика затребувана і серед чоловіків, які прагнуть покращити контури
              тіла після інтенсивного схуднення або тренувань.
            </p>
          </div>

          <div className="bg-green-50/60 dark:bg-gray-800/60 rounded-xl p-6 md:p-8 shadow-sm border border-green-200 dark:border-green-900">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              ✅ Важливий момент
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Операція виконується лише при стабільній вазі. Якщо пацієнт продовжить худнути після
              втручання, це може призвести до надлишку шкіри, що знову потребуватиме корекції.
            </p>
          </div>
        </div>

        {/* Протипоказання заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
          🚫 Протипоказання до абдомінопластики
        </h2>
        <p className="text-center text-base md:text-xl mb-12 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
          Абдомінопластика живота, як і будь-яке інше хірургічне втручання, має ряд медичних
          протипоказань, які необхідно враховувати перед плануванням операції.
        </p>

        {/* Друга секція: протипоказання - 50/50 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          {/* Текстова колонка */}
          <div className="w-full lg:w-1/2">
            <div className="bg-blue-50/80 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 shadow-lg border border-blue-200 dark:border-blue-900">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                ✅ До основних протипоказань належать:
              </h3>
              <ul className="space-y-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 dark:text-red-400 mr-3 text-xl flex-shrink-0">
                    ❗
                  </span>
                  <div>
                    <span className="font-medium">Хронічні захворювання:</span>
                    <ul className="ml-6 mt-2 space-y-1 list-disc text-gray-600 dark:text-gray-400">
                      <li>цукровий діабет</li>
                      <li>ожиріння III–IV ступеня</li>
                      <li>серцево-легенева недостатність</li>
                      <li>захворювання щитовидної залози</li>
                    </ul>
                    <p className="mt-3 text-sm italic text-gray-600 dark:text-gray-400 pl-4 border-l-2 border-blue-500 dark:border-blue-400">
                      У таких випадках необхідно стабілізувати стан пацієнта або вилікувати супутнє
                      захворювання перед плануванням операції.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 dark:text-red-400 mr-3 text-xl flex-shrink-0">
                    ❗
                  </span>
                  <div>
                    <span className="font-medium">Порушення згортання крові</span>
                    <p className="mt-2 text-sm italic text-gray-600 dark:text-gray-400 pl-4 border-l-2 border-blue-500 dark:border-blue-400">
                      Це може ускладнити процес загоєння та підвищити ризик ускладнень.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 dark:text-red-400 mr-3 text-xl flex-shrink-0">
                    ❗
                  </span>
                  <div>
                    <span className="font-medium">Серйозні психічні розлади</span>
                    <p className="mt-2 text-sm italic text-gray-600 dark:text-gray-400 pl-4 border-l-2 border-blue-500 dark:border-blue-400">
                      Операція потребує усвідомленого та стабільного психологічного стану.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t-2 border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                  ✅ Індивідуальний підхід
                </h3>
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                  Остаточне рішення щодо можливості проведення абдомінопластики приймає лікар,
                  враховуючи:
                </p>
                <ul className="ml-6 space-y-2 list-disc text-gray-600 dark:text-gray-400">
                  <li>загальний стан здоров&apos;я</li>
                  <li>вік пацієнта</li>
                  <li>індивідуальні особливості організму</li>
                  <li>рівень мотивації та психоемоційний настрій</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Галерея */}
          <div className="w-full lg:w-1/2">
            <AbdominoDetailsGallery images={contraindicationImages} />
          </div>
        </div>

        {/* Заключна примітка */}
        <div className="text-center mt-12 bg-blue-100/80 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 shadow-lg border-2 border-blue-300 dark:border-blue-800">
          <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200">
            Рішення про хірургічне втручання приймає спеціаліст на основі стану здоров&apos;я
            пацієнта та клінічних досліджень.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbdominoDetails;
