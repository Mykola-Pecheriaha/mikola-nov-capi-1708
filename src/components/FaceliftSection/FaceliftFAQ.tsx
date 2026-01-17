'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import FaceliftFAQGallery, { type GalleryImage } from './FaceliftFAQGallery';

interface FaceliftFAQProps {
  backgroundColor?: string;
}

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  images: GalleryImage[];
}

const FaceliftFAQ: React.FC<FaceliftFAQProps> = ({ backgroundColor = '#f0f9ff' }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Як проводиться підтяжка обличчя та шиї?',
      answer: (
        <>
          <h3 className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mt-0 mb-4 font-semibold">
            <span role="img" aria-label="Doctor"></span> Підготовка до підтяжки обличчя та шиї
          </h3>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            Перший етап — консультація з пластичним хірургом Миколою Печерягою у нашій клініці в
            Чернівцях. Фахівець приймає пацієнтів з усієї України.
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            На індивідуальній зустрічі лікар:
          </p>
          <ul className="list-none pl-0 mb-4">
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              <span role="img" aria-label="Document"></span> докладно розповість про можливі
              варіанти пластики овалу обличчя
            </li>
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              <span role="img" aria-label="Clipboard"></span> допоможе підібрати найвідповіднішу
              методику — з урахуванням:
              <ul className="list-none pl-5 mt-2">
                <li className="relative pl-5 mb-2 text-gray-700 dark:text-gray-300 before:content-['◦'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400">
                  якості шкіри (товщина, пружність, еластичність)
                </li>
                <li className="relative pl-5 mb-2 text-gray-700 dark:text-gray-300 before:content-['◦'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400">
                  зони втручання
                </li>
                <li className="relative pl-5 mb-2 text-gray-700 dark:text-gray-300 before:content-['◦'] before:absolute before:left-0 before:text-blue-500 dark:before:text-blue-400">
                  типу хірургічного розрізу
                </li>
              </ul>
            </li>
          </ul>
          <h4 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mt-5 mb-3 font-semibold">
            <span role="img" aria-label="Speech"></span> Консультація включає:
          </h4>
          <ul className="list-none pl-0 mb-4">
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              <span role="img" aria-label="Handshake"></span> Обговорення побажань пацієнта та
              очікуваного результату
            </li>
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              <span role="img" aria-label="Camera"></span> Перегляд прикладів до / після на основі
              схожих випадків
            </li>
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              <span role="img" aria-label="Crystal Ball"></span> Прогнозування майбутнього вигляду
              обличчя
            </li>
          </ul>
          <h4 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mt-5 mb-3 font-semibold">
            <span role="img" aria-label="Test Tube"></span> Передопераційна підготовка
          </h4>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            Перед хірургічним втручанням лікар призначає комплексне обстеження, яке проводиться на
            базі нашої клініки — лише за кілька годин.
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            На основі медичних даних та анатомічних особливостей пацієнта обирається
            найоптимальніший метод підтяжки, що відповідає поставленим цілям.
          </p>
          <h4 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mt-5 mb-3 font-semibold">
            <span role="img" aria-label="Hospital Bed"></span> Хірургічне втручання
          </h4>
          <ul className="list-none pl-0 mb-4">
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              Проводиться під загальною анестезією
            </li>
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              Застосовується сучасний, безпечний інгаляційний наркоз
            </li>
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              Тривалість операції — до 3 годин
            </li>
          </ul>
        </>
      ),
      images: [
        {
          src: '/images/FaceliftFAQ/faceliftFAQ4.jpg',
          alt: 'Підготовка до підтяжки обличчя',
          width: 400,
          height: 300,
          title: 'Підготовка до операції',
        },
        {
          src: '/images/FaceliftFAQ/faceliftFAQ6.jpg',
          alt: 'Консультація з хірургом',
          width: 400,
          height: 300,
          title: 'Консультація',
        },
        {
          src: '/images/FaceliftFAQ/faceliftFAQ7.jpg',
          alt: 'Хірургічне втручання',
          width: 400,
          height: 300,
          title: 'Операція',
        },
      ],
    },
    {
      question: 'Як довго зберігається результат після підтяжки обличчя?',
      answer: (
        <>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            Стійкість результату після хірургічної підтяжки може зберігатися до 15–20 років — усе
            залежить від індивідуальних факторів.
          </p>
          <h4 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 mt-5 mb-3 font-semibold">
            <span role="img" aria-label="Pin"></span> На тривалість ефекту впливають:
          </h4>
          <ul className="list-none pl-0 mb-4">
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              <span role="img" aria-label="DNA"></span> Вік пацієнта
            </li>
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              <span role="img" aria-label="Herb"></span> Стан шкіри до операції (еластичність,
              тонус)
            </li>
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              <span role="img" aria-label="Cigarette"></span> Шкідливі звички (куріння, алкоголь)
            </li>
            <li className="relative pl-7 mb-3 text-gray-700 dark:text-gray-300 leading-relaxed before:content-['•'] before:absolute before:left-2.5 before:text-blue-500 dark:before:text-blue-400 before:font-bold">
              <span role="img" aria-label="Stethoscope"></span> Дотримання рекомендацій хірурга у
              післяопераційний період
            </li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            <span role="img" aria-label="Repeat"></span> Повторна підтяжка може бути актуальною лише
            через 15–20 років — за потреби та за бажанням пацієнта.
          </p>
        </>
      ),
      images: [
        {
          src: '/images/FaceliftFAQ/faceliftFAQ.jpg',
          alt: 'Результати підтяжки обличчя',
          width: 400,
          height: 300,
          title: 'Результати операції',
        },
        {
          src: '/images/FaceliftFAQ/faceliftFAQ3.jpg',
          alt: 'Тривалість ефекту',
          width: 400,
          height: 300,
          title: 'Тривалість ефекту',
        },
      ],
    },
  ];

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-100 text-center mb-8 sm:mb-10 md:mb-12 font-bold">
          Поширені запитання
        </h2>
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl"
            >
              <div
                className={`flex justify-between items-center p-4 sm:p-5 cursor-pointer transition-colors duration-300 ${
                  expandedIndex === index
                    ? 'bg-blue-100/50 dark:bg-blue-900/30'
                    : 'bg-blue-50/30 dark:bg-gray-700/30'
                }`}
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg sm:text-xl text-gray-800 dark:text-gray-100 m-0 font-semibold pr-4">
                  {item.question}
                </h3>
                <div className="text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>
              {expandedIndex === index && (
                <div className="flex flex-col md:flex-row p-4 sm:p-6 animate-fadeIn">
                  <div className="flex-[1.5] pr-0 md:pr-6 mb-6 md:mb-0">{item.answer}</div>
                  <div className="flex-[1.5]">
                    <FaceliftFAQGallery images={item.images} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaceliftFAQ;
