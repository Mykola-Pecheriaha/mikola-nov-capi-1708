'use client';
import React from 'react';
import { CruroIndicationGallery, type GalleryImage } from './CruroIndicationGallery';
import { CruroContraIndicationGallery } from './CruroContraIndicationGallery';

// Зображення для показань
const indicationImages: GalleryImage[] = [
  {
    src: '/images/cruroplasty/cruroplasty10.jpg',
    alt: 'Покази до пластики гомілок',
    width: 800,
    height: 600,
    title: 'Покази до круропластики',
  },
  {
    src: '/images/cruroplasty/cruroplasty14.jpg',
    alt: 'Корекція деформації гомілок',
    width: 800,
    height: 600,
    title: 'Корекція деформації',
  },
  {
    src: '/images/cruroplasty/cruroplasty15.jpg',
    alt: 'Реконструкція гомілки',
    width: 800,
    height: 600,
    title: 'Реконструкція',
  },
];

// Зображення для протипоказань
const contraindicationImages: GalleryImage[] = [
  {
    src: '/images/cruroplasty/Contraindicatio1.jpg',
    alt: 'Протипокази до пластики гомілок',
    width: 800,
    height: 600,
    title: 'Протипокази',
  },
  {
    src: '/images/cruroplasty/cruroplastyContraindicatio9.jpg',
    alt: 'Медичні обмеження',
    width: 800,
    height: 600,
    title: 'Медичні обмеження',
  },
];

const CruroplastyIndication: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Секція: Покази */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
            Покази до пластики гомілок: медичні та естетичні
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
            {/* Текст зліва */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-blue-100 dark:border-blue-900">
                <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>вроджені дефекти гомілок (спадковість);</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>реконструкція гомілки після перенесеної травми;</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>
                      атрофія м&apos;язів гомілки (як результат тривалої гіпсової іммобілізації);
                    </span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>корекція Х– або О–подібної деформації гомілок;</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>корекція наслідків неврологічних захворювань (поліомієліту);</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>
                      бажання пацієнта збільшити розміри гомілок через психологічний дискомфорт.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Галерея справа */}
            <div className="w-full lg:w-1/2">
              <CruroIndicationGallery images={indicationImages} />
            </div>
          </div>
        </div>

        {/* Секція: Протипокази */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-8 md:mb-12">
            Протипокази до пластики гомілок (круропластики)
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
            {/* Текст зліва */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-blue-100 dark:border-blue-900">
                <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>вагітність</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>грудне годування</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>онкологічне захворювання</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>серцево-судинна патологія</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>ниркова та печінкова недостатність</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>декомпенсований цукровий діабет</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>інфекційні захворювання</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>хронічні хвороби у гострій фазі</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>шкірні захворювання, що зачіпають область проведення операції</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>варикозне розширення вен, тромбофлебіт</span>
                  </li>
                  <li className="flex items-start text-base md:text-lg">
                    <span className="mr-3 mt-1 text-blue-500 dark:text-blue-400 font-bold">•</span>
                    <span>порушення згортання крові</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Галерея справа */}
            <div className="w-full lg:w-1/2">
              <CruroContraIndicationGallery images={contraindicationImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CruroplastyIndication;
