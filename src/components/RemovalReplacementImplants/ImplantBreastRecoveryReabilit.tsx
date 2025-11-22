'use client';
import type { FC } from 'react';
import { useState } from 'react';
import ImplantBreastReabilitGallery from './ImplantBreastReabilitGallery';
import type { ImageType } from './ImplantBreastReabilitGallery';
import Link from 'next/link';

const ImplantBreastRecoveryReabilit: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `Вже наступного дня після операції пацієнтка повертається додому з детальними рекомендаціями щодо догляду та відновлення.

У перші дні можливі незначні дискомфортні відчуття: загальна слабкість, набряклість, тиск у ділянці грудної клітки, поява синців. Ці симптоми є нормальними та швидко зникають завдяки призначеним знеболювальним препаратам.

Шви не потребують зняття — ми використовуємо сучасні саморозсмоктувальні нитки та спеціальний медичний клей, що забезпечує естетичне загоєння шкіри.

Компресійну білизну необхідно носити цілодобово протягом перших 14 днів, а ще два тижні — лише на ніч. Протягом двох місяців слід утриматися від активних фізичних навантажень, відвідування сауни та лазні.

Повне відновлення триває близько 2–3 тижнів, а оцінити фінальний результат можна вже через місяць після операції.`;

  const truncatedText = fullText.substring(0, 200) + '...';

  // Масив зображень для галереї
  const galleryImages: ImageType[] = [
    {
      src: '/images/ImplantBreastRecoveryReabilit/reabilitatio1.jpg',
      alt: 'Реабілітаційний період після заміни імплантів',
      width: 800,
      height: 600,
      title: 'Відновлення після операції',
    },
    {
      src: '/images/ImplantBreastRecoveryReabilit/reabilitatio1.jpg',
      alt: 'Компресійна білизна',
      width: 800,
      height: 600,
      title: 'Компресійна білизна',
    },
    {
      src: '/images/ImplantBreastRecoveryReabilit/reabilitatio1.jpg',
      alt: 'Догляд після операції',
      width: 800,
      height: 600,
      title: 'Догляд та рекомендації',
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6">
        <div className="w-full">
          {/* Заголовок */}
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-blue-900 dark:text-blue-400 leading-tight relative pb-4">
            Реабілітаційний період після заміни імплантів молочних залоз
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[3px]"
              style={{ backgroundColor: '#8EAAB8' }}
            />
          </h2>

          {/* Основний контент блок */}
          <div
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg mb-8 sm:mb-10 border transition-all hover:shadow-xl"
            style={{ borderColor: '#8EAAB8' }}
          >
            {/* Заголовок секції */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 text-blue-900 dark:text-blue-400">
              <span className="text-3xl sm:text-4xl">🏥</span>
              <span>Реабілітаційний період</span>
            </h3>

            {/* Макет контенту */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-start">
              {/* Текстовий контент - зліва */}
              <div className="w-full lg:w-[60%]">
                <div className="mb-4 sm:mb-5">
                  <p className="text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200 mb-5 whitespace-pre-line text-justify">
                    {isExpanded ? fullText : truncatedText}
                  </p>
                  <button
                    onClick={toggleExpand}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white rounded-full shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #8EAAB8 0%, #7491a3 100%)',
                    }}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Показати менше' : 'Показати більше'}
                    <span className="text-xs sm:text-sm transition-transform">
                      {isExpanded ? '▲' : '▼'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Галерея - справа */}
              <div className="w-full lg:w-[40%]">
                <ImplantBreastReabilitGallery images={galleryImages} />
              </div>
            </div>
          </div>

          {/* Заклик до дії */}
          <div
            className="relative overflow-hidden rounded-2xl p-8 sm:p-10 md:p-12 text-center border"
            style={{
              background:
                'linear-gradient(135deg, rgba(142, 170, 184, 0.08) 0%, rgba(142, 170, 184, 0.05) 100%)',
              borderColor: '#8EAAB8',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: 'linear-gradient(90deg, #8EAAB8 0%, #7491a3 100%)',
              }}
            />
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100">
                Потрібна консультація?
              </h3>
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-7 md:mb-8 text-gray-800 dark:text-gray-200 leading-relaxed">
                Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію
                та підтримку на всіх етапах відновлення.
              </p>
              <Link href="/ask-doctor" className="inline-block">
                <button
                  className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #8EAAB8 0%, #7491a3 100%)',
                  }}
                >
                  <span className="font-semibold">Зв&apos;язатися з нами</span>
                  <span className="text-lg sm:text-xl transition-transform">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantBreastRecoveryReabilit;
