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

      {/* Додаткова інформація */}
      <section className="w-full bg-white dark:bg-gray-800 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Карточка 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 rounded-xl p-6 md:p-8 border border-blue-200 dark:border-blue-700 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-lg">
                  ✓
                </span>
                Сучасне обладнання
              </h3>
              <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                Відділення оснащено найсучаснішим медичним обладнанням, що дозволяє проводити
                найскладніші хірургічні операції на найвищому рівні.
              </p>
            </div>

            {/* Карточка 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/40 rounded-xl p-6 md:p-8 border border-green-200 dark:border-green-700 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center">
                <span className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-lg">
                  ✓
                </span>
                Професійна команда
              </h3>
              <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                Наша команда складається з висококваліфікованих лікарів та медсестер з багатолітнім
                досвідом у галузі хірургії.
              </p>
            </div>

            {/* Карточка 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40 rounded-xl p-6 md:p-8 border border-purple-200 dark:border-purple-700 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center">
                <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 text-lg">
                  ✓
                </span>
                Комфорт пацієнтів
              </h3>
              <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                Палати та кімнати відділення спроектовані з урахуванням комфорту та здоров`я
                пацієнтів, а також проведення ефективного лікування.
              </p>
            </div>

            {/* Карточка 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/40 dark:to-orange-800/40 rounded-xl p-6 md:p-8 border border-orange-200 dark:border-orange-700 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center">
                <span className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center mr-3 text-lg">
                  ✓
                </span>
                Сучасні методики
              </h3>
              <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                Застосування передових хірургічних методик та мініінвазивних технік дозволяє
                скоротити період реабілітації та покращити результати лікування.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Surgdepartment;
