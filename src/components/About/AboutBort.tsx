'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AboutBort: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Функція для перевірки доступності зображення
  const checkImageAvailability = async (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = window.Image ? new window.Image() : document.createElement('img');
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  };

  // Перевірка доступності зображення при монтуванні компонента
  useEffect(() => {
    const checkImage = async () => {
      const isAvailable = await checkImageAvailability(
        '/images/bigbort/about-bord1-removebg-preview.png', // Можна змінити на потрібне зображення
      );
      setImageLoaded(isAvailable);
    };
    checkImage();

    // Перевірка темної теми
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    // Слухач змін теми
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок вверху по середині */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900 dark:text-blue-100 mb-12 md:mb-16">
          Про лікаря
        </h1>

        {/* ПЕРША СЕКЦІЯ: Дві колонки - текст зліва, зображення справа */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-16 md:mb-20">
          {/* Ліва колонка - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify">
                <span className="font-bold text-blue-900 dark:text-blue-300">
                  Вибір пластичного хірурга
                </span>{' '}
                — це важливий крок на шляху до досягнення бажаного результату та покращення якості
                життя. Кожен пацієнт заслуговує на індивідуальний підхід, професіоналізм та увагу до
                деталей. Кожному пацієнту хочеться більше дізнатися про спеціаліста, якому він чи
                вона довіряє своє здоров&apos;я, життя та красу. Я розумію це, тому хочу поділитися
                з вами історією мого шляху в пластичній хірургії.
              </p>

              <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify">
                Моя кар&apos;єра почалася з вступу на медичний факультет. Після закінчення навчання,
                я пройшов численні курси, стажування та міжнародні тренінги, щоб освоїти
                найсучасніші методики та технології.
              </p>

              <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify">
                Моїм головним принципом є безпека пацієнтів та мінімальні ризики при максимальному
                естетичному результаті. Сьогодні я з гордістю можу сказати, що мої пацієнти
                отримують не тільки результат, що відповідає їхнім очікуванням, але й високий рівень
                догляду на кожному етапі лікування.
              </p>
            </div>
          </div>

          {/* Права колонка - зображення */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {imageLoaded ? (
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/images/bigbort/about-bord1-removebg-preview.png"
                  alt="Доктор Микола Печеріга"
                  fill
                  className="object-contain"
                  sizes="(max-width: 568px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full h-64 md:h-80 lg:h-96 bg-blue-50 dark:bg-gray-700 border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-blue-400 dark:text-blue-300 text-lg">
                  Завантаження зображення...
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ДРУГА СЕКЦІЯ: Дві колонки - 1/3 зліва, 2/3 справа */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Ліва колонка - 1/3 */}
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 text-center shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                PlastikP
              </h3>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-1">
                Mykola
              </h2>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-800 dark:text-blue-200">
                Pecheriaha
              </h2>
            </div>
          </div>

          {/* Права колонка - 2/3 */}
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border-l-4 border-blue-500">
              <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify">
                Щастя бути красивим – те, що може дозволити собі кожна людина. Моя робота — це не
                лише про техніку виконання операцій, але й про розуміння емоційних та психологічних
                аспектів, які супроводжують кожну трансформацію. Адже для мене пластична хірургія —
                це не просто зміна зовнішності, а допомога в досягненні внутрішнього балансу,
                підвищення впевненості та самопочуття.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBort;
