'use client';
import React from 'react';
import SurgdopertGaleri from './SurgdopertGaleri';

const Surgoper: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок вверху по середині */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
          Операційна
        </h2>

        {/* Текстовий блок */}
        <div className="w-full max-w-5xl mx-auto mb-12 md:mb-16">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-blue-500">
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify mb-6">
              <span className="font-bold text-blue-900 dark:text-blue-300">
                Операційний блок хірургічного відділення №1
              </span>{' '}
              розташований на п&apos;ятому поверсі лікувального закладу, безпосередньо поруч із
              відділенням реанімації. Він складається з двох сучасно обладнаних операційних залів.
            </p>
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify">
              Операційні повністю забезпечені необхідним хірургічним інструментарієм та
              високотехнологічною апаратурою. У блоці працює висококваліфікований медичний персонал
              із великим практичним досвідом. Під час проведення оперативних втручань суворо
              дотримуються всіх правил асептики та антисептики, що перебуває під постійним
              контролем.
            </p>
          </div>
        </div>

        {/* Галерея */}
        <SurgdopertGaleri />

        {/* Переваги операційної */}
        <div className="w-full max-w-4xl mx-auto mt-12 md:mt-16">
          {/* Заголовок секції */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-6 md:mb-10">
            Наші переваги
          </h3>

          {/* Сітка з карточками */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Карточка 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 rounded-xl p-6 md:p-8 border border-blue-200 dark:border-blue-700 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-lg">
                  ✓
                </span>
                Сучасне обладнання
              </h4>
              <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                Відділення оснащено найсучаснішим медичним обладнанням, що дозволяє проводити
                найскладніші хірургічні операції на найвищому рівні.
              </p>
            </div>

            {/* Карточка 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/40 rounded-xl p-6 md:p-8 border border-green-200 dark:border-green-700 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center">
                <span className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-lg">
                  ✓
                </span>
                Професійна команда
              </h4>
              <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                Наша команда складається з висококваліфікованих лікарів та медсестер з багатолітнім
                досвідом у галузі хірургії.
              </p>
            </div>

            {/* Карточка 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40 rounded-xl p-6 md:p-8 border border-purple-200 dark:border-purple-700 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center">
                <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 text-lg">
                  ✓
                </span>
                Комфорт пацієнтів
              </h4>
              <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                Палати та кімнати відділення спроектовані з урахуванням комфорту та здоров`я
                пацієнтів, а також проведення ефективного лікування.
              </p>
            </div>

            {/* Карточка 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/40 dark:to-orange-800/40 rounded-xl p-6 md:p-8 border border-orange-200 dark:border-orange-700 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl md:text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center">
                <span className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center mr-3 text-lg">
                  ✓
                </span>
                Сучасні методики
              </h4>
              <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                Застосування передових хірургічних методик та мініінвазивних технік дозволяє
                скоротити період реабілітації та покращити результати лікування.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Surgoper;
