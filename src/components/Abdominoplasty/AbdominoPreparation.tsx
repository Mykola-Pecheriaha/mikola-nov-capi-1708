'use client';
import { useState } from 'react';
import AbdominoPreparationGallery from './AbdominoPreparationGallery';
import type { GalleryImage } from './AbdominoPreparationGallery';

export const AbdominoPreparation: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Зображення для галереї
  const preparationImages: GalleryImage[] = [
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

  const classicImages: GalleryImage[] = [
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

  const verticalImages: GalleryImage[] = [
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

  const miniImages: GalleryImage[] = [
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

  const lipoImages: GalleryImage[] = [
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
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container-custom">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
          Абдомінопластика: підготовка до операції
        </h2>

        {/* Вступний текст */}
        <p className="text-base md:text-lg leading-relaxed text-center mb-12 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          🔹 Перший крок до плаского живота — це індивідуальна консультація з пластичним хірургом
          Миколою Печеряга у Чернівцях. Також можлива зручна відеоконсультація для іногородніх
          пацієнтів.
        </p>

        {/* Основний контент: текст + галерея */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          {/* Текстова колонка */}
          <div className="w-full lg:w-1/2">
            <div className="bg-blue-50/80 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 shadow-lg">
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                ✅ На консультації в клініці:
              </h4>
              <ul className="space-y-3 mb-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">•</span>
                  <span>Обговорюються побажання пацієнта</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">•</span>
                  <span>Уточнюються деталі та нюанси операції</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1">•</span>
                  <span>Призначається передопераційне обстеження, яке займає лише 1 день</span>
                </li>
              </ul>

              <h4 className="text-lg md:text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                ✅ Для пацієнтів з інших міст пропонується максимально зручний формат:
              </h4>
              <p className="font-semibold text-blue-600 dark:text-blue-400 mb-6 pl-4">
                Консультація + обстеження + операція — в 1 візит!
              </p>

              <h4 className="text-lg md:text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                ✅ Передопераційна підготовка:
              </h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 dark:text-red-400 mr-3 mt-1">🔸</span>
                  <span>За 10 днів — припинити прийом медикаментів, які розріджують кров</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 dark:text-red-400 mr-3 mt-1">🔸</span>
                  <span>За 10 днів до операції — утриматися від куріння</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 dark:text-red-400 mr-3 mt-1">🔸</span>
                  <span>Після операції — не палити щонайменше 1–1,5 місяці</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 dark:text-red-400 mr-3 mt-1">🔸</span>
                  <span>За 2 дні до операції — обмежити калорійність їжі, пити більше води</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 dark:text-red-400 mr-3 mt-1">🔸</span>
                  <span>У день операції — не можна їсти та пити</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Галерея */}
          <div className="w-full lg:w-1/2">
            <AbdominoPreparationGallery images={preparationImages} />
          </div>
        </div>

        {/* Нижній текст */}
        <div className="bg-blue-100/80 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 text-center mb-12 border border-blue-200 dark:border-blue-900">
          <p className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400">
            🔔 Правильна підготовка — запорука швидкої реабілітації та чудового результату. Плануйте
            свою трансформацію відповідально!
          </p>
        </div>

        {/* Розділювач */}
        <div className="w-full h-px bg-blue-200 dark:bg-blue-800 my-12"></div>

        {/* Види абдомінопластики */}
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
          Види абдомінопластики
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-center mb-12 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          Сучасна абдомінопластика має кілька варіантів, що підбираються індивідуально залежно від
          стану тканин та естетичних побажань пацієнта.
        </p>

        <div className="w-full h-px bg-blue-200 dark:bg-blue-800 mb-8"></div>

        {/* Акордеон */}
        <div className="space-y-4 mb-12">
          {/* Класична */}
          <div className="border border-blue-200 dark:border-blue-900 rounded-xl overflow-hidden bg-white dark:bg-gray-800">
            <button
              className="w-full flex justify-between items-center p-6 bg-blue-50/50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => toggleSection('classic')}
              aria-expanded={openSection === 'classic'}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                ✅ Класична абдомінопластика
              </h3>
              <span
                className={`text-blue-500 dark:text-blue-400 text-xl transition-transform duration-300 ${
                  openSection === 'classic' ? 'rotate-90' : ''
                }`}
              >
                &#9654;
              </span>
            </button>
            {openSection === 'classic' && (
              <div className="p-6 border-t border-blue-100 dark:border-blue-900 bg-white dark:bg-gray-800">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/3">
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Показання:
                    </p>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                      Наявність вираженого «шкірно-жирового фартуха», діастазу, грижі.
                    </p>
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Техніка:
                    </p>
                    <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Горизонтальний розріз над пахвинною зоною</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Додатковий розріз навколо пупка</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Видалення надлишкових тканин</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Вшивання м&apos;язів</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Формування нового пупкового кільця</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Результат:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Відновлення м&apos;язового корсета, нова талія, покращення контурів тіла.
                    </p>
                  </div>
                  <div className="lg:w-1/3">
                    <AbdominoPreparationGallery images={classicImages} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Вертикальна */}
          <div className="border border-blue-200 dark:border-blue-900 rounded-xl overflow-hidden bg-white dark:bg-gray-800">
            <button
              className="w-full flex justify-between items-center p-6 bg-blue-50/50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => toggleSection('vertical')}
              aria-expanded={openSection === 'vertical'}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                ✅ Абдомінопластика з вертикальним розрізом
              </h3>
              <span
                className={`text-blue-500 dark:text-blue-400 text-xl transition-transform duration-300 ${
                  openSection === 'vertical' ? 'rotate-90' : ''
                }`}
              >
                &#9654;
              </span>
            </button>
            {openSection === 'vertical' && (
              <div className="p-6 border-t border-blue-100 dark:border-blue-900 bg-white dark:bg-gray-800">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/3">
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Особливість:
                    </p>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                      Розріз проходить по середній лінії живота, а не над лобковою зоною.
                    </p>
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Переваги:
                    </p>
                    <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Менш травматичне втручання</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Видалення тканин від боків до центру</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Локальна корекція невеликих ділянок</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Кому підходить:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Пацієнтам із локалізованими надлишками тканин та збереженою еластичністю
                      шкіри.
                    </p>
                  </div>
                  <div className="lg:w-1/3">
                    <AbdominoPreparationGallery images={verticalImages} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Міні */}
          <div className="border border-blue-200 dark:border-blue-900 rounded-xl overflow-hidden bg-white dark:bg-gray-800">
            <button
              className="w-full flex justify-between items-center p-6 bg-blue-50/50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => toggleSection('mini')}
              aria-expanded={openSection === 'mini'}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                ✅ Мініабдомінопластика
              </h3>
              <span
                className={`text-blue-500 dark:text-blue-400 text-xl transition-transform duration-300 ${
                  openSection === 'mini' ? 'rotate-90' : ''
                }`}
              >
                &#9654;
              </span>
            </button>
            {openSection === 'mini' && (
              <div className="p-6 border-t border-blue-100 dark:border-blue-900 bg-white dark:bg-gray-800">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/3">
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Показання:
                    </p>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                      М&apos;які дефекти нижнього живота без вираженого діастазу чи обвисання.
                    </p>
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Техніка:
                    </p>
                    <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Розріз у зоні бікіні</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Відсікання надлишкової шкіри та жиру</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Без переносу пупка</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Без втручання в м&apos;язи</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Переваги:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Малоінвазивність, короткий період реабілітації, мінімальні рубці.
                    </p>
                  </div>
                  <div className="lg:w-1/3">
                    <AbdominoPreparationGallery images={miniImages} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* З ліпосакцією */}
          <div className="border border-blue-200 dark:border-blue-900 rounded-xl overflow-hidden bg-white dark:bg-gray-800">
            <button
              className="w-full flex justify-between items-center p-6 bg-blue-50/50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => toggleSection('lipo')}
              aria-expanded={openSection === 'lipo'}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                🧩 Абдомінопластика з ліпосакцією
              </h3>
              <span
                className={`text-blue-500 dark:text-blue-400 text-xl transition-transform duration-300 ${
                  openSection === 'lipo' ? 'rotate-90' : ''
                }`}
              >
                &#9654;
              </span>
            </button>
            {openSection === 'lipo' && (
              <div className="p-6 border-t border-blue-100 dark:border-blue-900 bg-white dark:bg-gray-800">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/3">
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Суть методики:
                    </p>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                      Поєднання пластики живота зі зменшенням жирових відкладень через ліпосакцію.
                    </p>
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Техніка:
                    </p>
                    <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Видалення шкірно-жирового фартуха</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Ушивання м&apos;язів</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>Ліпосакція фланків (боків) через мікропроколи</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      📍 Переваги:
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Більш виражений естетичний результат завдяки комплексній роботі з формою тіла.
                    </p>
                  </div>
                  <div className="lg:w-1/3">
                    <AbdominoPreparationGallery images={lipoImages} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Заключний текст */}
        <div className="text-center mt-12 bg-blue-100/80 dark:bg-gray-800/80 rounded-xl p-6 md:p-8">
          <p className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400">
            🧑‍⚕️ Рішення про хірургічне втручання приймає спеціаліст на основі стану здоров&apos;я
            пацієнта та клінічних досліджень.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbdominoPreparation;
