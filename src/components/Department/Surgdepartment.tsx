'use client';
import React from 'react';
import SurgdepartmentGaleri from './SurgdepartmentGaleri';

const Surgdepartment: React.FC = () => {
  return (
    <div className="w-full space-y-8 md:space-y-12">
      {/* Заголовок */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-900 dark:text-blue-100 px-4">
        Хірургічне відділення
      </h1>

      {/* Основний контент */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Текстовий блок */}
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-700 p-6 md:p-8 lg:p-10">
            <div className="space-y-6 text-gray-800 dark:text-gray-300">
              {/* Перший абзац */}
              <p className="text-base md:text-lg leading-relaxed text-justify">
                <span className="font-bold text-blue-900 dark:text-blue-300">
                  Хірургічне відділення №1
                </span>{' '}
                було створене в результаті реформи медичних закладів м. Чернівці наприкінці 2021
                року. Воно фор мувалося на базі «Міського центру хірургії», який, у свою чергу, був
                створений на основі хірургічного відділення залізничної лікарні.
              </p>

              {/* Другий абзац */}
              <p className="text-base md:text-lg leading-relaxed text-justify border-l-4 border-blue-500 pl-4 md:pl-6 bg-blue-50 dark:bg-blue-900/20 p-4 md:p-6 rounded-lg">
                Раніше я очолював це відділення, однак свідомо прийняв рішення зосередитися виключно
                на лікувальній практиці та залишив адміністративну посаду. Для мене
                <span className="font-bold text-blue-900 dark:text-blue-300">
                  {' '}
                  відданість пацієнтам і якість хірургічної допомоги
                </span>{' '}
                є значно важливішими, ніж управлінська робота.
              </p>

              {/* Третій абзац */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 md:p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-base md:text-lg leading-relaxed text-justify text-blue-900 dark:text-blue-100">
                  Мій основний принцип - забезпечення найвищого рівня медичної допомоги кожному
                  пацієнту з застосуванням сучасних хірургічних методик та технологій. Постійне
                  підвищення кваліфікації та випробування нових методів лікування дозволяють нам
                  досягати найращих результатів у лікуванні найскладніших хірургічних патологій.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <SurgdepartmentGaleri />
    </div>
  );
};

export default Surgdepartment;
