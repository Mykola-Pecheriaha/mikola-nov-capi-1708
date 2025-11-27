'use client';
import { useEffect, useState, useRef } from 'react';
import OttoDetailsGallery, { type GalleryImage } from './OttoDetailsGallery';

export default function OttoDetails() {
  const initialRenderRef = useRef(true);
  const [isClient, setIsClient] = useState(false);

  // Масив зображень для першої галереї (показання)
  const indicationsImages: GalleryImage[] = [
    {
      src: '/images/ottodetails/ottoDetails3.jpg',
      alt: 'Показання до отопластики 1',
      width: 500,
      height: 700,
      title: 'Корекція клаповухості - приклад 1',
    },
    {
      src: '/images/ottodetails/ottoDetails4.jpg',
      alt: 'Показання до отопластики 2',
      width: 500,
      height: 500,
      title: 'Корекція клаповухості - приклад 2',
    },
    {
      src: '/images/ottodetails/ottoDetails5.jpg',
      alt: 'Показання до отопластики 3',
      width: 500,
      height: 500,
      title: 'Результат отопластики - корекція деформації вуха',
    },
    {
      src: '/images/ottodetails/ottoDetails1.jpg',
      alt: 'Показання до отопластики 4',
      width: 500,
      height: 500,
      title: 'Результат отопластики - корекці дольки вуха',
    },
    {
      src: '/images/ottodetails/ottoDetails2.jpg',
      alt: 'Показання до отопластики 5',
      width: 700,
      height: 500,
      title: 'Результат отопластики - корекція розриву дольки вуха',
    },
  ];

  // Масив зображень для другої галереї (протипоказання)
  const contraindicationsImages: GalleryImage[] = [
    {
      src: '/images/ottodetails/abdomino125-24.jpg',
      alt: 'Протипоказання до отопластики',
      width: 500,
      height: 500,
      title: 'Консультація перед отопластикою',
    },
  ];

  // Перевірка, чи код виконується на клієнті
  useEffect(() => {
    if (initialRenderRef.current) {
      setIsClient(true);
      initialRenderRef.current = false;
    }
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 md:mb-12">
          Показання до пластики вух
        </h2>

        {/* Вступний текст на всю ширину */}
        <div className="mb-8 md:mb-12">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Отопластика — це не лише шлях до гармонійного зовнішнього вигляду, а й спосіб усунути
            фізіологічні або вроджені особливості, що можуть спричиняти дискомфорт.
          </p>
        </div>

        {/* Секція показань - дві колонки */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Текстовий контент */}
          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-gray-700">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-6 flex items-center gap-3">
                <span className="text-2xl">🔹</span>
                Основні причини для звернення до хірурга:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>Вроджена клаповухість (з одного або обох боків);</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>Інші деформації вушної раковини, що мають вроджене походження;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>
                    Надмірне прилягання вушної раковини до голови, яке порушує симетрію обличчя;
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>
                    Повторна корекція, якщо попередня операція не дала бажаного результату;
                  </span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>Корекція мочки вуха — наприклад, при її розриві або деформації.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Галерея */}
          <div className="w-full md:w-1/2">
            {isClient && <OttoDetailsGallery images={indicationsImages} />}
          </div>
        </div>

        {/* Підзаголовок протипоказань */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-blue-800 dark:text-blue-400 mb-6 md:mb-8">
          🚫 Протипоказання до отопластики
        </h3>

        {/* Текст протипоказань на всю ширину */}
        <div className="mb-8 md:mb-12">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            Попри доволі легкий характер втручання, операція на вушних раковинах має певні
            обмеження.
          </p>
        </div>

        {/* Секція протипоказань - дві колонки */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Текстовий контент */}
          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-gray-700">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-6 flex items-center gap-3">
                Операція не рекомендована, якщо:
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>Дитині ще не виповнилося 6 років;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>Є тяжка форма цукрового діабету;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>Спостерігаються порушення згортання крові;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>Діагностовано онкологічне захворювання;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>Є захворювання шкіри в зоні втручання;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>Присутні гострі інфекційні або вірусні стани;</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>Жінка перебуває у періоді вагітності чи лактації.</span>
                </li>
              </ul>

              {/* Примітка */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 rounded-r-lg p-4 md:p-5">
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0 text-xl">
                    🔹
                  </span>
                  <span>
                    Зверніть увагу: частина протипоказань є тимчасовими. Наприклад, після
                    перенесеної інфекції операцію можна провести вже після повного відновлення.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Галерея */}
          <div className="w-full md:w-1/2">
            {isClient && <OttoDetailsGallery images={contraindicationsImages} />}
          </div>
        </div>
      </div>
    </section>
  );
}
