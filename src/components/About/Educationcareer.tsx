'use client';
import React, { useState } from 'react';

const Educationcareer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок вверху по середині */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900 dark:text-blue-100 mb-12 md:mb-16">
          Освіта та кар&apos;єра
        </h1>

        {/* Основна інформація на ширину всієї сторінки */}
        <div className="w-full bg-blue-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-blue-500 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            Печеряга Микола Миколайович
          </h2>

          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              Пластичний хірург Вищої кваліфікаційної категорії, міжнародний член American Society
              of Plastic Surgeons, міжнародний член International Society of Aesthetic Plastic
              Surgery, член Всеукраїнської асоціації пластичних, реконструктивних та естетичних
              хірургів.
            </p>

            <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              Пластичний хірург Вищої кваліфікаційної категорії, міжнародний член American Society
              of Plastic Surgeons, міжнародний член International Society of Aesthetic Plastic
              Surgery, член Всеукраїнської асоціації пластичних, реконструктивних та естетичних
              хірургів.
            </p>
          </div>
        </div>

        {/* Кнопка показати все */}
        {!isExpanded && (
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setIsExpanded(true)}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg"
            >
              Показати все
            </button>
          </div>
        )}

        {/* Розгорнута інформація */}
        {isExpanded && (
          <div className="space-y-8">
            {/* Моя сім'я */}
            <div className="w-full bg-blue-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                Моя сім&apos;я
              </h3>
              <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                18 лютого 1968 року. Батько двох дітей. Старший син - хірург, молодший вчиться в
                ліцеї.
              </p>
            </div>

            {/* Вища освіта */}
            <div className="w-full bg-blue-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                Вища освіта
              </h3>
              <ul className="space-y-3">
                <li className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                  1989-1995 рр. – Одеський державний медичний університет, спеціальність
                  &quot;Лікувальна справа&quot;. Закінчив з відзнакою.
                </li>
                <li className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                  1995-1997 рр. - первинна спеціалізація по хірургії, Буковинська державна медична
                  академія.
                </li>
                <li className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                  1997-1999р. – Клінічна ординатура по хірургії, Буковинська державна медична
                  академія.
                </li>
              </ul>
            </div>

            {/* Кар'єра та практика */}
            <div className="w-full bg-blue-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                Кар&apos;єра та практика
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>Лікар - хірург Торакального відділення ОКЛ</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    Лікар-хірург хірургічного відділення. Чернівецький військовий Базовий госпіталь
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    Лікар хірург хірургічного відділення. Лікар Онколог. Вузлової клінічної лікарні
                    ст.Чернівці
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    Завідувач відділенням хірургії. Районний хірург. Снятинська ЦРЛ
                    Івано-Франківська обл.
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>Завідувач міським центром хірургії. Міська лікарня №1 м.Чернівці</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>Завідувач відділенням хірургії. ЦМКЛ м. Чернівці</span>
                </li>
              </ul>
            </div>

            {/* Професійні курси та майстер-класи */}
            <div className="w-full bg-blue-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                Професійні курси та майстер-класи
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    1995р.-1997р. – первинна спеціалізація по хірургії, Буковинська державна медична
                    академія.
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    1997-1999р. – Клінічна ординатура по хірургії, Буковинська державна медична
                    академія.
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2001р – інтенсивний курс по пластичні і реконструктивні хірургії. Росія.
                    Ярославль
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2001р. - Інтенсивний курс по пластичні, естетичні та реконструктивні хірургії.
                    Росія. Москва.
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>2001р. - тематичний курс удосконалення по ендоскопічні хірургії</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2002р. – тематичне удосконалення по пластичні, естетичні, та реконструктивні
                    хірургії, Росія Ярославль.
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>2003р. - Лапараскопічна хірургія. Тематичне удосконалення. Одеса</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>2004р. - Тематичне удосконалення по пластичні хірургії Росія, Іваново</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2004р. - Міжнародний інтенсивний курс по пластичні і реконструктивні хірургії.
                    Росія Єкатеринбург
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2006р. - Міжнародний дев&apos;ятий інтенсивний курс по пластичній та
                    реконструктивній хірургії. Росія Москва.
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2008р. - спеціалізації по онкології при Національній медичні академії після
                    діпломної освіти ім. П.Л. Шупика. (Київ)
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2008р. - Передатестаційний цикл за фахом «Хірургія» при Буковинському державному
                    медичному університеті м.Чернівці.
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2010р. - Цикл тематичного удосконалення «Актуальні питання малоінвазивної
                    хірургії». Чернівці
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2011р. - Цикл тематичного удосконалення « Пластична та реконструктивна
                    хірургія». Київ.
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2013р. - Цикл тематичного удосконалення « Непухлинні захворювання прямої кишки»
                    Чернівці.
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2017р. - Навчання на циклі тематичного удосконалення «Актуальні питання
                    гемотрансфузійної терапії в практиці хірурга» - – ВДНЗУ БДМУ
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2017р. - Навчання на циклі тематичного удосконалення «Актуальні питання опікової
                    та холодової травми » – ВДНЗУ БДМУ, 2017р.
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2018р. - Навчання на циклі тематичного удосконалення «Невідкладна та
                    малоінвазивна проктологія» - 2 тижні – ВДНЗУ БДМУ, 2018р.
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2019р. - Передатестаційний цикл за фахом «Хірургія», ВДНЗУ БДМУ, 2019р
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2020р. - Навчання на циклі тематичного удосконалення «Нове в методиці лікування
                    септичних станів» - 2 тижні – ВДНЗУ БДМУ, 2020
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>2024р. - спеціалізації по Гінекології при ВДНЗУ БДМУ, 2024р</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <span>
                    2024р. - науково практична конференція Актуальні питання ендокринології та
                    ендокринної хірургії. УНПЦЕХ м.Київ.
                  </span>
                </li>
              </ul>
            </div>

            {/* Кнопка показати менше */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg"
              >
                Показати менше
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Educationcareer;
