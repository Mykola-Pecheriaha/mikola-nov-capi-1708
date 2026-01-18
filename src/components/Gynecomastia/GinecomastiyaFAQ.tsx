'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import GinecomastiyaFAQGallery, { type GalleryImage } from './GinecomastiyaFAQGallery';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  images: GalleryImage[];
}

const GinecomastiyaFAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Скільки триває операція з видалення гінекомастії',
      answer:
        'Хірургічне втручання займає до 1 години залежно від обсягу. Використовується інгаляційний наркоз на Севофлурані. Він забезпечує комфортний вхід у медикаментозний сон та вихід без галюцинацій.\n\nЛіпосакція проводиться під місцевою анестезією (пацієнт свідомий) і займає 30-40 хвилин. За кілька годин пацієнт може їхати додому із рекомендаціями від фахівця. Госпіталізація не потрібна.',
      images: [
        {
          src: '/images/GinecomastiyaFAQ/photoFAQ1.jpg',
          alt: 'Тривалість операції гінекомастії',
          width: 600,
          height: 400,
          title: 'Операція займає до 1 години',
        },
        {
          src: '/images/GinecomastiyaFAQ/photoFAQ2 .jpg',
          alt: 'Анестезія при гінекомастії',
          width: 600,
          height: 400,
          title: 'Інгаляційний наркоз на Севофлурані',
        },
      ],
    },
    {
      question: 'Чи залишаються шрами після операції?',
      answer:
        'При справжній гінекомастії розріз здійснюється по краю ареоли, що робить шрам практично непомітним після загоєння. Через кілька місяців він повністю зливається з кольором шкіри соска.\n\nПри хибній гінекомастії, коли проводиться ліпосакція, залишаються лише невеликі проколи (2-3 мм), які швидко загоюються і не залишають помітних слідів.',
      images: [
        {
          src: '/images/GinecomastiyaFAQ/ginecomas20.jpg',
          alt: 'Шрами після гінекомастії по краю ареоли',
          width: 600,
          height: 400,
          title: 'Розріз по краю ареоли',
        },
        {
          src: '/images/GinecomastiyaFAQ/ginecomas24.jpg',
          alt: 'Мінімальні сліди після ліпосакції',
          width: 600,
          height: 400,
          title: 'Невеликі проколи при ліпосакції',
        },
      ],
    },
    {
      question: 'Який період реабілітації після операції?',
      answer:
        'Після хірургічного втручання пацієнт проводить у стаціонарі одну добу під наглядом медичного персоналу. Можливий дискомфорт в області грудей легко усувається знеболюючими препаратами.\n\nПротягом 2-3 тижнів рекомендується носити компресійну білизну. Фізичні навантаження та спорт можна відновити через 4 тижні після операції. Повне відновлення відбувається протягом 1-2 місяців.',
      images: [
        {
          src: '/images/GinecomastiyaFAQ/ginecomas22.jpg',
          alt: 'Компресійна білизна після гінекомастії',
          width: 600,
          height: 500,
          title: 'Компресійна білизна 2-3 тижні',
        },
        {
          src: '/images/GinecomastiyaFAQ/ginecomas12.jpg',
          alt: 'Етапи відновлення після гінекомастії',
          width: 600,
          height: 500,
          title: 'Повне відновлення 1-2 місяці',
        },
      ],
    },
  ];

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Заголовок */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-900 dark:text-blue-100 mb-10 md:mb-12">
          Поширені запитання
        </h1>

        {/* FAQ список */}
        <div className="flex flex-col gap-5 mb-10 md:mb-12">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 dark:border-blue-900/30 rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              {/* Питання */}
              <div
                className="flex justify-between items-center p-5 md:p-6 bg-blue-50 dark:bg-gray-700/50 cursor-pointer transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-700/70 border-b border-blue-100 dark:border-blue-900/20"
                onClick={() => toggleItem(index)}
              >
                <h2 className="text-lg md:text-xl font-semibold text-blue-900 dark:text-blue-100 pr-4 flex-1">
                  {item.question}
                </h2>
                <div className="text-blue-500 dark:text-blue-400 transition-transform duration-300 flex items-center justify-center flex-shrink-0">
                  {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>

              {/* Відповідь */}
              {expandedIndex === index && (
                <div className="flex flex-col lg:flex-row p-5 md:p-6 gap-5 md:gap-6 bg-white dark:bg-gray-800 animate-fadeIn">
                  {/* Текст відповіді */}
                  <div className="flex-[2] min-w-0">
                    {item.answer.split('\n\n').map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 last:mb-0 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Галерея */}
                  <div className="flex-1 min-w-[280px] lg:min-w-[300px]">
                    <GinecomastiyaFAQGallery images={item.images} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease;
        }
      `}</style>
    </section>
  );
};

export default GinecomastiyaFAQ;
