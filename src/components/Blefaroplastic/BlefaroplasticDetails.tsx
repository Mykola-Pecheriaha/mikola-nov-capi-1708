'use client';

import type React from 'react';
import { useEffect, useState, useRef } from 'react';
import BlefaroplasticDetailsGallery, { type GalleryImage } from './BlefaroplasticDetailsGallery';

interface BlefaroplasticDetailsProps {
  backgroundColor?: string;
}

const BlefaroplasticDetails: React.FC<BlefaroplasticDetailsProps> = ({
  backgroundColor = '#f0f9ff',
}) => {
  const initialRenderRef = useRef(true);
  const [isClient, setIsClient] = useState(false);

  // Масив зображень для першої галереї (показання)
  const indicationsImages: GalleryImage[] = [
    {
      src: '/images/blepharoplastytDetails/blepharoplastytDetails10.jpg',
      alt: 'Показання до блефаропластики 1',
      width: 500,
      height: 700,
      title: 'Показання до блефаропластики',
    },
    {
      src: '/images/blepharoplastytDetails/blepharoplastytDetailsі11.jpg',
      alt: 'Показання до блефаропластики 2',
      width: 500,
      height: 700,
      title: 'Показання до блефаропластики',
    },
    {
      src: '/images/blepharoplastytDetails/blepharoplastytDetailsі13.jpg',
      alt: 'Показання до блефаропластики 3',
      width: 500,
      height: 700,
      title: 'Показання до блефаропластики',
    },
    {
      src: '/images/blepharoplastytDetails/blepharoplastytDetailsі14.jpg',
      alt: 'Показання до блефаропластики 4',
      width: 500,
      height: 700,
      title: 'Показання до блефаропластики',
    },
    {
      src: '/images/blepharoplastytDetails/blepharoplastytDetailsі15.jpg',
      alt: 'Показання до блефаропластики 5',
      width: 400,
      height: 700,
      title: 'Показання до блефаропластики',
    },
  ];

  // Масив зображень для другої галереї (протипоказання)
  const contraindicationsImages: GalleryImage[] = [
    {
      src: '/images/blepharoplastytDetails/blepharoplastytDetailsі16.jpg',
      alt: 'Протипоказання до блефаропластики',
      width: 400,
      height: 400,
      title: 'Протипоказання до блефаропластики',
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
    <div
      className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-900 dark:text-gray-100 text-center mb-6 sm:mb-8 font-bold">
          Покази та протипокази до операції блефаропластики
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 text-justify">
          Блефаропластика — популярна процедура, яка дозволяє повернути відкритий, свіжий та молодий
          погляд. Найчастіше її рекомендують пацієнтам середнього віку, коли шкіра повік втрачає
          пружність і з&apos;являється птоз (надлишкове провисання шкіри), зморшки, «мішки» під
          очима.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-8 sm:mb-10">
          <div className="flex-[2]">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-blue-900 dark:text-blue-400 mb-3 sm:mb-4 font-semibold flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">✅</span> Перші ознаки вікових змін:
            </h3>
            <ul className="list-none pl-0 mb-5 sm:mb-6">
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                дрібні або глибокі зморшки навколо очей;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                жирові грижі (випинання);
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                набряки та «мішки» під очима;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                надлишок шкіри на верхніх і нижніх повіках;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                опущені куточки очей.
              </li>
            </ul>

            <div className="bg-blue-100/60 dark:bg-blue-900/30 p-3 sm:p-4 rounded-lg mb-5 sm:mb-6 border-l-4 border-blue-500 dark:border-blue-400">
              <span className="text-xl sm:text-2xl mr-2"></span>
              <span className="text-gray-800 dark:text-gray-200">
                Блефаропластику також проводять у молодшому віці — при наявності анатомічних
                особливостей, які формують втому чи тяжкість погляду.
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl text-blue-900 dark:text-blue-400 mb-3 sm:mb-4 font-semibold flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">✅</span> Основні показання до операції:
            </h3>
            <ul className="list-none pl-0 mb-5 sm:mb-6">
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                надлишок шкіри на верхніх повіках (птоз) або нижніх повіках («похмурий погляд»);
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                жирові випинання (псевдогрижі) з надлишком шкіри;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                грижі під очима;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                зморшки навколо очей;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                анатомічне опущення нижніх куточків очей.
              </li>
            </ul>

            <div className="bg-blue-50/80 dark:bg-blue-900/20 p-4 sm:p-5 rounded-lg mt-5 sm:mt-6 shadow-sm">
              <h4 className="text-lg sm:text-xl md:text-2xl text-blue-900 dark:text-blue-400 mt-0 mb-3 sm:mb-4 font-semibold flex items-center gap-2">
                <span className="text-xl sm:text-2xl">✅</span> Результат, який змінює життя
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Блефаропластика — одна з найефективніших омолоджувальних операцій. У випадках, коли
                шкіра вже втратила еластичність, жодна косметологічна процедура не дає такого
                результату.
              </p>
              <h5 className="text-base sm:text-lg text-blue-900 dark:text-blue-400 mt-3 sm:mt-4 mb-2 font-semibold flex items-center gap-2">
                <span className="text-lg sm:text-xl">✅</span> Професійно виконана операція:
              </h5>
              <ul className="list-none pl-0 mb-0">
                <li className="relative pl-6 mb-2 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['✓'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                  освіжає погляд;
                </li>
                <li className="relative pl-6 mb-2 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['✓'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                  омолоджує обличчя на роки вперед;
                </li>
                <li className="relative pl-6 mb-2 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['✓'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
                  дарує стійкий, естетично довготривалий ефект.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-[1.5]">
            {isClient && (
              <BlefaroplasticDetailsGallery
                images={indicationsImages}
                galleryId="indications-gallery"
              />
            )}
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 dark:text-blue-400 mt-8 sm:mt-10 mb-4 sm:mb-5 font-semibold">
          Протипоказання до блефаропластики
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 text-justify">
          Попри ефективність та популярність пластики повік, є ситуації, коли проведення операції не
          рекомендовано або повністю протипоказано.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="flex-[2]">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-red-900 dark:text-red-900 mb-3 sm:mb-4 font-semibold flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">❗</span> Операція не проводиться у разі:
            </h3>
            <ul className="list-none pl-0 mb-5 sm:mb-6">
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-red-900 dark:before:text-red-900 before:font-bold">
                Хронічних захворювань серцево-судинної системи або інших важливих органів;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-red-900 dark:before:text-red-900 before:font-bold">
                Онкологічних захворювань будь-якого типу;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-red-900 dark:before:text-red-900 before:font-bold">
                Цукрового діабету у стадії декомпенсації;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-red-900 dark:before:text-red-900 before:font-bold">
                Гострих інфекційних процесів (грип, ГРВІ, тощо);
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-red-900 dark:before:text-red-900 before:font-bold">
                Порушення згортання крові;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-red-900 dark:before:text-red-900 before:font-bold">
                Інфаркту або інсульту в анамнезі;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-red-900 dark:before:text-red-900 before:font-bold">
                Вагітності та періоду грудного вигодовування;
              </li>
              <li className="relative pl-5 mb-3 leading-relaxed text-gray-700 dark:text-gray-300 before:content-['•'] before:absolute before:left-0 before:text-red-900 dark:before:text-red-900 before:font-bold">
                Хронічної недостатності печінки або нирок.
              </li>
            </ul>
          </div>
          <div className="flex-[1.5]">
            {isClient && (
              <BlefaroplasticDetailsGallery
                images={contraindicationsImages}
                galleryId="contraindications-gallery"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlefaroplasticDetails;
