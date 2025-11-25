'use client';
import { useEffect, useState, useRef } from 'react';
import ConsultationGallery, { type GalleryImage } from './ConsultationGallery';

const FaceliftConsultation: React.FC = () => {
  const initialRenderRef = useRef(true);
  const [isClient, setIsClient] = useState(false);

  const indicationsImages: GalleryImage[] = [
    {
      src: '/images/FaceliftDetails/faceliftDetalis1.jpg',
      alt: 'Показання до фейсліфтингу 1',
      width: 500,
      height: 600,
      title: 'Показання до фейсліфтингу',
    },
    {
      src: '/images/FaceliftDetails/faceliftDetalis15.jpg',
      alt: 'Показання до фейсліфтингу 2',
      width: 500,
      height: 600,
      title: 'Показання до фейсліфтингу',
    },
    {
      src: '/images/FaceliftDetails/faceliftDetalis9.jpg',
      alt: 'Показання до фейсліфтингу 3',
      width: 500,
      height: 600,
      title: 'Показання до фейсліфтингу',
    },
    {
      src: '/images/FaceliftDetails/faceliftDetalis21.jpg',
      alt: 'Показання до фейсліфтингу 4',
      width: 500,
      height: 650,
      title: 'Показання до фейсліфтингу',
    },
    {
      src: '/images/FaceliftDetails/faceliftDetalis26.jpg',
      alt: 'Показання до фейсліфтингу 5',
      width: 500,
      height: 400,
      title: 'Показання до фейсліфтингу',
    },
    {
      src: '/images/FaceliftDetails/faceliftDetalis126.jpg',
      alt: 'Показання до фейсліфтингу 6',
      width: 500,
      height: 400,
      title: 'Показання до фейсліфтингу',
    },
  ];

  const contraindicationsImages: GalleryImage[] = [
    {
      src: '/images/FaceliftDetails/abdomino125-24.jpg',
      alt: 'Протипоказання до фейсліфтингу',
      width: 400,
      height: 400,
      title: 'Протипоказання до фейсліфтингу',
    },
  ];

  useEffect(() => {
    if (initialRenderRef.current) {
      setIsClient(true);
      initialRenderRef.current = false;
    }
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Заголовок */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8 sm:mb-10 md:mb-12">
          Покази та протипокази до операції підтяжки обличчя та шиї
        </h2>

        {/* Секція показань */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-10 sm:mb-12 md:mb-16">
          {/* Текстова частина */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl md:text-4xl">✅</span>
              <span>Показання до фейсліфтингу</span>
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                'помітному опущенні зовнішніх куточків очей;',
                'провисанні м`яких тканин шкіри в районі лоба та брів;',
                'появі глибоких зморшок в області щік;',
                'появі «брилів», провисанні м`яких тканин щік;',
                'появі другого підборіддя;',
                'формуванні складок та зморшок в області шиї;',
                'втраті тонусу шийнопідборідного кута.',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-base sm:text-lg text-gray-800 dark:text-gray-200"
                >
                  <span className="text-blue-600 dark:text-blue-400 font-bold mr-2 sm:mr-3 mt-1 flex-shrink-0">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Галерея */}
          <div className="w-full lg:w-1/2">
            {isClient && <ConsultationGallery images={indicationsImages} />}
          </div>
        </div>

        {/* Три абзаци на всю ширину */}
        <div className="w-full max-w-5xl mx-auto space-y-4 sm:space-y-6 mb-10 sm:mb-12 md:mb-16">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              <span className="text-xl sm:text-2xl mr-2">✅</span>
              <strong>Корекція овалу обличчя</strong> рекомендується пацієнтам після{' '}
              <strong>45 років</strong> за наявності відповідних показів. До цього віку пластичну
              операцію можна замінити безопераційними методиками, до прикладу контурною пластикою
              обличчя.
            </p>
          </div>

          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              <strong>Контурна пластика обличчя</strong> — ін`ієкційна процедура з використанням
              філерів на основі гіалуронової кислоти, які заповнюють зморшки й складки, створюючи
              підтягнутий овал.
            </p>
          </div>

          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              Також ефективний <strong>ліпофілінг</strong> — омолодження власною жировою тканиною.
            </p>
          </div>
        </div>

        {/* Секція протипоказань */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-10 sm:mb-12">
          {/* Текстова частина */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-600 dark:text-yellow-400 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl md:text-4xl">⚠️</span>
              <span>Протипоказання</span>
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                'онкологічні захворювання;',
                'серцево-судинні патології та захворювання;',
                'ендокринологічні захворювання на стадії загострення;',
                'захворювання та інфекційні ураження шкіри;',
                'вагітність та лактація;',
                'алергічні реакції;',
                'психічні розлади.',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-base sm:text-lg text-gray-800 dark:text-gray-200"
                >
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold mr-2 sm:mr-3 mt-1 flex-shrink-0">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Галерея */}
          <div className="w-full lg:w-1/2">
            {isClient && <ConsultationGallery images={contraindicationsImages} />}
          </div>
        </div>

        {/* Фінальний абзац */}
        <div className="w-full max-w-5xl mx-auto">
          <div
            className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 sm:p-6 text-blue-900 dark:text-blue-100 text-base sm:text-lg font-medium shadow-sm border-l-8"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              <span className="text-xl sm:text-2xl mr-2">✅</span>
              <strong>Рішення про хірургічне втручання</strong> приймає спеціаліст на основі стану
              здоров`я пацієнта та клінічних досліджень.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaceliftConsultation;
