'use client';

import type React from 'react';
import { useState } from 'react';
import AbdominoPreparationGallery from './AbdominoPreparationGallery';

interface AbdominoPreparationProps {
  backgroundColor?: string;
}

export const AbdominoPreparation: React.FC<AbdominoPreparationProps> = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const preparationImages = [
    {
      src: '/images/abdominoPreparation/abdominoPreparation3.jpg',
      alt: 'Консультація перед абдомінопластикою',
      width: 600,
      height: 600,
      title: 'Консультація перед абдомінопластикою',
    },
    {
      src: '/images/abdominoPreparation/abdominoPreparation4.jpg',
      alt: 'Передопераційне обстеження',
      width: 600,
      height: 600,
      title: 'Передопераційне обстеження',
    },
    {
      src: '/images/abdominoPreparation/abdominoPreparation5.jpg',
      alt: 'Підготовка до операції',
      width: 500,
      height: 500,
      title: 'Підготовка до операції',
    },
    {
      src: '/images/abdominoPreparation/preparation1.jpg',
      alt: 'Підготовка до операції',
      width: 500,
      height: 500,
      title: 'Підготовка до операції',
    },
  ];

  const classicImages = [
    {
      src: '/images/abdominoPreparation/abdominoPreparation11.jpg',
      alt: 'Класична абдомінопластика - техніка',
      width: 500,
      height: 400,
      title: 'Класична абдомінопластика - техніка',
    },
    {
      src: '/images/abdominoPreparation/abdominoPreparation12.jpg',
      alt: 'Результат класичної абдомінопластики',
      width: 500,
      height: 600,
      title: 'Результат класичної абдомінопластики',
    },
    {
      src: '/images/abdominoPreparation/abdominoPreparation13.jpg',
      alt: 'Результат класичної абдомінопластики',
      width: 500,
      height: 600,
      title: 'Результат класичної абдомінопластики',
    },
    {
      src: '/images/abdominoPreparation/abdominoPreparation14.jpg',
      alt: 'Результат класичної абдомінопластики',
      width: 800,
      height: 600,
      title: 'Результат класичної абдомінопластики',
    },
    {
      src: '/images/abdominoPreparation/abdominoPreparation15.jpg',
      alt: 'Результат класичної абдомінопластики',
      width: 800,
      height: 600,
      title: 'Результат класичної абдомінопластики',
    },
  ];

  const verticalImages = [
    {
      src: '/images/abdominoPreparation/abdominoPreparation19.jpg',
      alt: 'Абдомінопластика з вертикальним розрізом',
      width: 800,
      height: 600,
      title: 'Абдомінопластика з вертикальним розрізом',
    },
    {
      src: '/images/abdominoPreparation/abdominoPreparation17.jpg',
      alt: 'Результат вертикальної абдомінопластики',
      width: 800,
      height: 600,
      title: 'Результат вертикальної абдомінопластики',
    },
    {
      src: '/images/abdominoPreparation/abdominoPreparation16.jpg',
      alt: 'Абдомінопластика з вертикальним розрізом',
      width: 800,
      height: 600,
      title: 'Абдомінопластика з вертикальним розрізом',
    },
  ];

  const miniImages = [
    {
      src: '/images/abdominoPreparation/abdominoPreparation22.jpg',
      alt: 'Мініабдомінопластика - техніка',
      width: 800,
      height: 600,
      title: 'Мініабдомінопластика - техніка',
    },
    {
      src: '/images/abdominoPreparation/abdominoPreparation24.jpg',
      alt: 'Результат мініабдомінопластики',
      width: 800,
      height: 600,
      title: 'Результат мініабдомінопластики',
    },
    {
      src: '/images/abdominoPreparation/abdominoPreparation15.jpg',
      alt: 'Результат мініабдомінопластики',
      width: 800,
      height: 600,
      title: 'Результат мініабдомінопластики',
    },
  ];

  const lipoImages = [
    {
      src: '/images/abdominoPreparation/abdominoPreparation25.jpg',
      alt: 'Абдомінопластика з ліпосакцією',
      width: 800,
      height: 600,
      title: 'Абдомінопластика з ліпосакцією',
    },
    {
      src: '/images/abdominoPreparation/abdominoPreparation26.jpg',
      alt: 'Результат абдомінопластики з ліпосакцією',
      width: 800,
      height: 600,
      title: 'Результат абдомінопластики з ліпосакцією',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 py-0">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Заголовок */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-blue-900 dark:text-blue-400">
          Абдомінопластика: підготовка до операції
        </h2>

        {/* Вступний текст */}
        <div className="w-full mb-8">
          <p className="text-center text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            🔹 Перший крок до пласького живота — це індивідуальна консультація з пластичним хірургом
            Миколою Печеряга у Чернівцях. Також можлива зручна відеоконсультація для іногородніх
            пацієнтів.
          </p>
        </div>

        {/* Основний контент: текст + галерея */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                ✅ На консультації в клініці:
              </h4>
              <ul className="space-y-2 text-gray-800 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">•</span>
                  <span>Обговорюються побажання пацієнта</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">•</span>
                  <span>Уточнюються деталі та нюанси операції</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">•</span>
                  <span>Призначається передопераційне обстеження, яке займає лише 1 день</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                ✅ Для пацієнтів з інших міст:
              </h4>
              <p className="font-bold text-blue-900 dark:text-blue-400 text-base md:text-lg pl-4 border-l-4 border-blue-600 dark:border-blue-400">
                Консультація + обстеження + операція — в 1 візит!
              </p>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                ✅ Передопераційна підготовка:
              </h4>
              <ul className="space-y-3 text-gray-800 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 dark:text-red-400 flex-shrink-0">❗</span>
                  <span>За 10 днів — припинити прийом медикаментів, які розріджують кров</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 dark:text-red-400 flex-shrink-0">❗</span>
                  <span>За 10 днів до операції — утриматися від куріння</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 dark:text-red-400 flex-shrink-0">❗</span>
                  <span>Після операції — не палити щонайменше 1–1,5 місяці</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 dark:text-red-400 flex-shrink-0">❗</span>
                  <span>За 2 дні до операції — обмежити калорійність їжі, пити більше води</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 dark:text-red-400 flex-shrink-0">❗</span>
                  <span>У день операції — не можна їсти та пити</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <AbdominoPreparationGallery images={preparationImages} />
          </div>
        </div>

        {/* Нижній текст на всю ширину */}
        <div className="w-full space-y-8 mb-10">
          <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg p-5 text-center">
            <p className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-400">
              🔔 Правильна підготовка — запорука швидкої реабілітації та чудового результату.
              Плануйте свою трансформацію відповідально!
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent my-6"></div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-blue-900 dark:text-blue-400">
              Види абдомінопластики
            </h3>
            <p className="text-center text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
              Сучасна абдомінопластика має кілька варіантів, що підбираються індивідуально залежно
              від стану тканин та естетичних побажань пацієнта.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent my-6"></div>
        </div>

        {/* Акордеон */}
        <div className="space-y-4 mb-10">
          {/* Класична абдомінопластика */}
          <AccordionItem
            title="✅ Класична абдомінопластика"
            isOpen={openSection === 'classic'}
            onToggle={() => toggleSection('classic')}
            images={classicImages}
          >
            <div className="space-y-4">
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">📍 Показання:</p>
                <p className="text-gray-800 dark:text-gray-300">
                  Наявність вираженого «шкірно-жирового фартуха», діастазу, грижі.
                </p>
              </div>
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">📍 Техніка:</p>
                <ul className="space-y-2 text-gray-800 dark:text-gray-300 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Горизонтальний розріз над пахвинною зоною</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Додатковий розріз навколо пупка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Видалення надлишкових тканин</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Вшивання м&apos;язів</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Формування нового пупкового кільця</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">📍 Результат:</p>
                <p className="text-gray-800 dark:text-gray-300">
                  Відновлення м&apos;язового корсета, нова талія, покращення контурів тіла.
                </p>
              </div>
            </div>
          </AccordionItem>

          {/* Абдомінопластика з вертикальним розрізом */}
          <AccordionItem
            title="✅ Абдомінопластика з вертикальним розрізом"
            isOpen={openSection === 'vertical'}
            onToggle={() => toggleSection('vertical')}
            images={verticalImages}
          >
            <div className="space-y-4">
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">📍 Особливість:</p>
                <p className="text-gray-800 dark:text-gray-300">
                  Розріз проходить по середній лінії живота, а не над лобковою зоною.
                </p>
              </div>
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">📍 Переваги:</p>
                <ul className="space-y-2 text-gray-800 dark:text-gray-300 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Менш травматичне втручання</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Видалення тканин від боків до центру</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Локальна корекція невеликих ділянок</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">
                  📍 Кому підходить:
                </p>
                <p className="text-gray-800 dark:text-gray-300">
                  Пацієнтам із локалізованими надлишками тканин та збереженою еластичністю шкіри.
                </p>
              </div>
            </div>
          </AccordionItem>

          {/* Мініабдомінопластика */}
          <AccordionItem
            title="✅ Мініабдомінопластика"
            isOpen={openSection === 'mini'}
            onToggle={() => toggleSection('mini')}
            images={miniImages}
          >
            <div className="space-y-4">
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">📍 Показання:</p>
                <p className="text-gray-800 dark:text-gray-300">
                  М&apos;які дефекти нижнього живота без вираженого діастазу чи обвисання.
                </p>
              </div>
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">📍 Техніка:</p>
                <ul className="space-y-2 text-gray-800 dark:text-gray-300 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Розріз у зоні бікіні</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Відсікання надлишкової шкіри та жиру</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Без переносу пупка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Без втручання в м&apos;язи</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">📍 Переваги:</p>
                <p className="text-gray-800 dark:text-gray-300">
                  Малоінвазивність, короткий період реабілітації, мінімальні рубці.
                </p>
              </div>
            </div>
          </AccordionItem>

          {/* Абдомінопластика з ліпосакцією */}
          <AccordionItem
            title="🧩 Абдомінопластика з ліпосакцією"
            isOpen={openSection === 'lipo'}
            onToggle={() => toggleSection('lipo')}
            images={lipoImages}
          >
            <div className="space-y-4">
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">📍 Суть методики:</p>
                <p className="text-gray-800 dark:text-gray-300">
                  Поєднання пластики живота зі зменшенням жирових відкладень через ліпосакцію.
                </p>
              </div>
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">📍 Техніка:</p>
                <ul className="space-y-2 text-gray-800 dark:text-gray-300 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Видалення шкірно-жирового фартуха</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Ушивання м&apos;язів</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>Ліпосакція фланків (боків) через мікропроколи</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-400 mb-2">📍 Переваги:</p>
                <p className="text-gray-800 dark:text-gray-300">
                  Більш виражений естетичний результат завдяки комплексній роботі з формою тіла.
                </p>
              </div>
            </div>
          </AccordionItem>
        </div>

        {/* Заключний текст */}
        <div className="w-full text-center">
          <p className="text-base md:text-lg font-bold text-blue-900 dark:text-blue-400 p-5">
            🧑‍⚕️ Рішення про хірургічне втручання приймає спеціаліст на основі стану здоров&apos;я
            пацієнта та клінічних досліджень.
          </p>
        </div>
      </div>
    </div>
  );
};

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  images: Array<{ src: string; alt: string; width: number; height: number; title: string }>;
  children: React.ReactNode;
}

function AccordionItem({ title, isOpen, onToggle, images, children }: AccordionItemProps) {
  return (
    <div className="border border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm dark:shadow-md">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 md:p-5 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 text-left">
          {title}
        </h3>
        <span
          className={`text-blue-600 dark:text-blue-400 text-sm transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-90' : ''
          }`}
        >
          ▶
        </span>
      </button>

      {isOpen && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5 md:p-6 border-t border-blue-200 dark:border-blue-800">
          <div className="lg:col-span-2 space-y-4">{children}</div>
          <div className="lg:col-span-1">
            <AbdominoPreparationGallery images={images} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AbdominoPreparation;
