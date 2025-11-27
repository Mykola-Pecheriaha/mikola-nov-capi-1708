'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import BlepharoFAQGallery, { type GalleryImage } from './BlepharoFAQGallery';

interface BlepharoFAQProps {
  backgroundColor?: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  images: GalleryImage[];
}

export default function BlepharoFAQ({ backgroundColor = '#f0f9ff' }: BlepharoFAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Дані для FAQ з галереями
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'Час проведення операції?',
      answer: (
        <div className="w-full">
          <div className="w-full">
            <p className="text-base sm:text-lg text-blue-900  dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
              Тривалість блефаропластики залежить від обсягу втручання та індивідуальних
              особливостей пацієнта.
            </p>
            <p className="text-base sm:text-lg text-blue-800 dark:text-blue-400 font-semibold mb-2">
              🔷 Орієнтовна тривалість процедур:
            </p>
            <ul className="ml-5 sm:ml-6 mb-4 list-disc marker:text-blue-500 dark:marker:text-blue-400">
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                Верхні повіки – приблизно 30 хвилин
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                Нижні повіки – близько 40 хвилин
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                Транскон&apos;юнктивальна пластика – лише 15 хвилин
              </li>
            </ul>
            <p className="text-base sm:text-lg text-blue-800 dark:text-blue-400 font-semibold">
              🔷 Якщо виконується кругова блефаропластика (комплексне втручання на верхніх і нижніх
              повіках), процедура триває 1–1,5 години.
            </p>
          </div>
        </div>
      ),
      images: [
        {
          src: '/images/blepharoFAQ/blepharoplastyPreparatio28.jpg',
          alt: 'Блефаропластика верхніх повік',
          width: 500,
          height: 400,
          title: 'Блефаропластика верхніх повік',
        },
        {
          src: '/images/blepharoFAQ/blepharoplastyPreparatio31.jpg',
          alt: 'Блефаропластика нижніх повік',
          width: 500,
          height: 400,
          title: 'Блефаропластика нижніх повік',
        },
        {
          src: '/images/blepharoFAQ/blepharoplastyPreparatio30.jpg',
          alt: 'Кругова блефаропластика',
          width: 500,
          height: 400,
          title: 'Кругова блефаропластика',
        },
      ],
    },
    {
      id: 2,
      question: '🧊 Реабілітація та відновлення після підтяжки повік',
      answer: (
        <div className="w-full">
          <div className="w-full">
            <p className="text-base sm:text-lg text-blue-900 dark:text-blue-400 font-semibold mb-3">
              ✅ Одразу після операції на очі накладаються охолоджені гелеві подушечки, що
              допомагають зменшити набряклість.
            </p>
            <p className="text-base sm:text-lg text-blue-800 dark:text-blue-400 font-semibold mb-3">
              🔷 У клініці пацієнт перебуває під наглядом медичного персоналу приблизно 1 годину,
              після чого вирушає додому з усіма необхідними рекомендаціями.
            </p>
            <p className="text-base sm:text-lg text-blue-800 dark:text-blue-400 font-semibold mt-4 mb-2">
              🔷 Після блефаропластики можуть виникати:
            </p>
            <ul className="ml-5 sm:ml-6 mb-4 list-disc marker:text-blue-800 dark:marker:text-blue-400">
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                почервоніння очей
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">печіння</li>
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">свербіж</li>
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                підвищена сльозогінність
              </li>
            </ul>
            <p className="text-base sm:text-lg text-blue-800 dark:text-blue-400 font-semibold mb-4">
              🔷 Для полегшення симптомів призначаються протизапальні очні краплі.
            </p>
            <p className="text-base sm:text-lg text-blue-800 dark:text-blue-400 font-semibold mt-4 mb-2">
              🚫 Обмеження у відновлювальний період:
            </p>
            <ul className="ml-5 sm:ml-6 mb-4 list-disc marker:text-blue-500 dark:marker:text-blue-400">
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                тимчасова відмова від фізичних навантажень
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                уникнення сонця та засмаги на відкритому повітрі
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                виключення саун, лазень та тренувань на 2 тижні
              </li>
            </ul>
            <p className="text-base sm:text-lg text-blue-800 dark:text-blue-400 font-semibold mt-4 mb-2">
              🔷 Період відновлення:
            </p>
            <ul className="ml-5 sm:ml-6 mb-4 list-disc marker:text-blue-800 dark:marker:text-blue-400">
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                Післяопераційне відновлення триває 10–14 днів
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                До звичного ритму роботи можна повернутися через 14 днів
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                Кінцевий результат буде помітним через 1 місяць
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                Ефект – довгостроковий та стабільний
              </li>
            </ul>
            <p className="text-base sm:text-lg text-blue-800 dark:text-blue-400 font-semibold mt-4 mb-2">
              🔷 Транскон&apos;юнктивальна блефаропластика забезпечує:
            </p>
            <ul className="ml-5 sm:ml-6 mb-4 list-disc marker:text-blue-800 dark:marker:text-blue-400">
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                відновлення за 3 дні
              </li>
              <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                відсутність синців і набряків
              </li>
            </ul>
            <p className="text-base sm:text-lg text-blue-700 dark:text-blue-400 font-semibold mt-4">
              🔷 Повторна корекція, за потреби, можлива не раніше ніж через 10–15 років, залежно від
              індивідуальних особливостей.
            </p>
          </div>
        </div>
      ),
      images: [
        {
          src: '/images/blepharoFAQ/blepharoplastyPreparatio26.jpg',
          alt: 'Відновлення після блефаропластики',
          width: 500,
          height: 300,
          title: 'Відновлення після блефаропластики',
        },
        {
          src: '/images/blepharoFAQ/blepharoplastyPreparatio32.jpg',
          alt: 'Догляд після операції',
          width: 500,
          height: 300,
          title: 'Догляд після операції',
        },
        {
          src: '/images/blepharoFAQ/blepharoplastyPreparatio33.jpg',
          alt: 'Результати блефаропластики',
          width: 500,
          height: 300,
          title: 'Результати блефаропластики',
        },
      ],
    },
  ];

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-800 dark:text-gray-100 text-center mb-8 sm:mb-10 font-bold">
          Поширені запитання
        </h2>
        <div className="w-full flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl"
            >
              <button
                className={`w-full flex justify-between items-center p-4 sm:p-5 border-none text-left cursor-pointer transition-colors duration-300 ${
                  expandedIndex === index
                    ? 'bg-blue-100/50 dark:bg-blue-900/30'
                    : 'bg-blue-50/30 dark:bg-gray-700/30'
                } hover:bg-blue-50/50 dark:hover:bg-blue-900/20`}
                onClick={() => toggleItem(index)}
                aria-expanded={expandedIndex === index}
              >
                <span className="text-lg sm:text-xl text-gray-800 dark:text-gray-100 font-semibold m-0 pr-4">
                  {item.question}
                </span>
                <div className="text-blue-800 dark:text-blue-800 flex items-center justify-center flex-shrink-0">
                  {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              {expandedIndex === index && (
                <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 animate-fadeIn">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    <div className="flex-[2]">{item.answer}</div>
                    <div className="flex-[2]">
                      <BlepharoFAQGallery images={item.images} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Заклик до дії */}
        <div className="mt-8 sm:mt-10 text-center p-6 sm:p-8 md:p-10 bg-blue-100/60 dark:bg-blue-900/40 rounded-2xl shadow-lg">
          <p className="text-lg sm:text-xl mb-5 text-gray-800 dark:text-gray-100 font-medium">
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <Link href="/ask-doctor">
            <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white border-none px-6 sm:px-7 py-3 text-base sm:text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Зв&apos;язатися з нами
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
