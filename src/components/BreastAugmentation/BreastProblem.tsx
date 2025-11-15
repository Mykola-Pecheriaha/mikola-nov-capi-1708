'use client';

import React, { type ReactElement, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

interface ProblemData {
  id: string;
  title: string;
  problem: string;
  solution: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function BreastProblem(): ReactElement {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const problemsData: ProblemData[] = [
    {
      id: 'small-breasts',
      title: 'Маленькі груди від природи',
      problem:
        'Маленькі груди можуть бути джерелом дискомфорту для багатьох жінок. Це може впливати на самооцінку та впевненість у собі. Крім того, деякі жінки відчувають труднощі при виборі одягу або купальників.',
      solution:
        'Збільшення грудей за допомогою імплантів може допомогти досягти бажаного розміру та форми. Сучасні методи дозволяють створити природний вигляд та відчуття. Ми підбираємо оптимальний розмір та форму імплантів, враховуючи індивідуальні особливості тіла та побажання пацієнтки. На сьогоднішній день спільнотою пластичних хірургів заборонено проводити збільшення грудей методом інєкції "різних" наповнювачів. Використовуються тільки імпланти з "оболонками"',
      beforeImage: '/images/before-after/breast/small-breasts-before.jpg',
      afterImage: '/images/before-after/breast/small-breasts-after.jpg',
      beforeAlt: 'Маленькі груди - до операції',
      afterAlt: 'Збільшення грудей - результат',
    },
    {
      id: 'asymmetry',
      title: 'Асиметричність форми',
      problem:
        'Асиметрія грудей - це поширена проблема, яка може бути помітною або незначною. Вона може виникнути через генетичні фактори, гормональні зміни або в результаті попередніх операцій. Асиметрія може викликати дискомфорт при носінні бюстгальтерів та одягу. Крайня форма асеметрії грудей, це синдром Поланда - різке зменшення однієї груді, або її відсутність.',
      solution:
        'Корекція асиметрії може включати збільшення меншої груді, зменшення більшої, або комбінацію обох підходів для досягнення симетрії. Ми використовуємо індивідуальний підхід, який може включати використання імплантів різного розміру, ліпофілінг або підтяжку грудей для досягнення оптимального результату.',
      beforeImage: '/images/before-after/breast/asymmetry-before.jpg',
      afterImage: '/images/before-after/breast/asymmetry-after.jpg',
      beforeAlt: 'Асиметрія грудей - до корекції',
      afterAlt: 'Корекція асиметрії - результат',
    },
    {
      id: 'tubular',
      title: 'Тубулярні груди (у формі конуса)',
      problem:
        'Тубулярні груди характеризуються вузькою основою та видовженою формою. Ця проблема виникає через недостатній розвиток тканин грудей під час статевого дозрівання. Тубулярні груди можуть бути джерелом значного психологічного дискомфорту.',
      solution:
        'Корекція тубулярних грудей зазвичай включає розширення основи груді та покращення її форми. Ми використовуємо комплексний підхід, який може включати розширення тканин, встановлення імплантів та, за необхідності, корекцію ареоли. Результатом є більш природна та пропорційна форма грудей.',
      beforeImage: '/images/before-after/breast/tubular-breasts-before.jpg',
      afterImage: '/images/before-after/breast/tubular-breasts-after.jpg',
      beforeAlt: 'Тубулярні груди - до корекції',
      afterAlt: 'Корекція тубулярних грудей - результат',
    },
    {
      id: 'empty-sack',
      title: 'Синдром «пустого мішка»',
      problem:
        "Цей стан часто виникає після вагітності, годування груддю або значної втрати ваги. Груди втрачають об'єм та пружність, шкіра стає надлишковою, а форма грудей змінюється. Це може призвести до втрати впевненості у собі та незадоволення своїм зовнішнім виглядом.",
      solution:
        "Підтяжка грудей (мастопексія) з або без імплантів може відновити об'єм та покращити форму грудей. Ми видаляємо надлишкову шкіру, піднімаємо тканини грудей та, за необхідності, встановлюємо імпланти для додаткового об'єму. Результатом є більш молодий та підтягнутий вигляд грудей.",
      beforeImage: '/images/before-after/breast/empty-sack-before.jpg',
      afterImage: '/images/before-after/breast/empty-sack-after.jpg',
      beforeAlt: 'Синдром пустого мішка - до лікування',
      afterAlt: 'Мастопексія - результат',
    },
    {
      id: 'sagging',
      title: 'Зменшення або обвисання грудей після годування чи вагітності, втрата ваги',
      problem:
        "Після вагітності, годування груддю або значної втрати ваги груди можуть втратити об'єм та пружність. Шкіра розтягується, а тканини грудей опускаються, що призводить до обвисання. Це може викликати не тільки естетичний дискомфорт, але й фізичні незручності.",
      solution:
        "Мастопексія (підтяжка грудей) з можливим збільшенням може відновити молодіжний вигляд грудей. Ми видаляємо надлишкову шкіру, піднімаємо та формуємо тканини грудей. За бажанням пацієнтки, можемо встановити імпланти для додаткового об'єму. Результатом є підтягнуті, пружні груди з покращеною формою та розташуванням.",
      beforeImage: '/images/before-after/breast/sagging-breasts-before.jpg',
      afterImage: '/images/before-after/breast/sagging-breasts-after.jpg',
      beforeAlt: 'Обвисання грудей після вагітності',
      afterAlt: 'Підтяжка грудей - результат',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Заголовок */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
            Скарги на розміри і форми молочних залоз
          </h2>
        </div>

        {/* Акордеон */}
        <div className="flex flex-col gap-4 md:gap-6">
          {problemsData.map((problem) => {
            const isExpanded = expandedSection === problem.id;

            return (
              <div
                key={problem.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl hover:border-blue-300"
              >
                {/* Заголовок акордеона */}
                <button
                  className="w-full bg-none border-none p-4 md:p-6 cursor-pointer flex items-center justify-between text-left transition-colors hover:bg-blue-50"
                  onClick={() => toggleSection(problem.id)}
                  aria-expanded={isExpanded}
                >
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-blue-900 flex-1 pr-4">
                    {problem.title}
                  </h3>
                  <div className="text-blue-500 transition-transform flex-shrink-0">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>

                {/* Контент акордеона */}
                {isExpanded && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-blue-100 bg-blue-50/30">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 pt-4 md:pt-6">
                      {/* Ліва частина - текст */}
                      <div className="flex flex-col gap-4 md:gap-6">
                        <div className="flex flex-col">
                          <h4 className="text-base md:text-lg font-semibold text-blue-600 mb-2 md:mb-3">
                            Проблема:
                          </h4>
                          <p className="text-sm md:text-base leading-relaxed text-gray-700">
                            {problem.problem}
                          </p>
                        </div>

                        <div className="flex flex-col">
                          <h4 className="text-base md:text-lg font-semibold text-blue-600 mb-2 md:mb-3">
                            Вирішення:
                          </h4>
                          <p className="text-sm md:text-base leading-relaxed text-gray-700">
                            {problem.solution}
                          </p>
                        </div>
                      </div>

                      {/* Права частина - зображення до/після */}
                      <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center">
                        <div className="relative w-full md:w-1/2 aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                          <Image
                            src={problem.beforeImage}
                            alt={problem.beforeAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 md:p-3">
                            <p className="text-white text-xs md:text-sm font-medium text-center">
                              До
                            </p>
                          </div>
                        </div>
                        <div className="relative w-full md:w-1/2 aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                          <Image
                            src={problem.afterImage}
                            alt={problem.afterAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600/70 to-transparent p-2 md:p-3">
                            <p className="text-white text-xs md:text-sm font-medium text-center">
                              Після
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
