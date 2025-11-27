'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import OttoFAQGallery, { type GalleryImage } from './OttoFAQGallery';

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  images: GalleryImage[];
}

export default function OttoFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Дані для FAQ з галереями
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'Які проблеми вирішує пластика вух?',
      answer: (
        <div className="space-y-4">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Отопластика — це естетична хірургічна процедура, спрямована на усунення вроджених або
            набутих дефектів вушних раковин.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Вона дозволяє:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
              <span className="text-blue-800 dark:text-blue-800 mr-3 mt-1 flex-shrink-0">🔹</span>
              <span>виправити клаповухість;</span>
            </li>
            <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
              <span className="text-blue-800 dark:text-blue-600 mr-3 mt-1 flex-shrink-0">🔹</span>
              <span>змінити форму мочки або відновити її цілісність;</span>
            </li>
            <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
              <span className="text-blue-800 dark:text-blue-600 mr-3 mt-1 flex-shrink-0">🔹</span>
              <span>
                реконструювати природній рельєф вуха у випадках післятравматичних деформацій.
              </span>
            </li>
          </ul>
          <h4 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-6 mb-3">
            З якого віку можна робити отопластику?
          </h4>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Операція доступна пацієнтам будь-якого віку, однак у дітей вона потребує особливого
            підходу.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Рекомендований вік — від 6 років, адже:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
              <span className="text-blue-800 dark:text-blue-600 mr-3 mt-1 flex-shrink-0">✔️</span>
              <span>до цього моменту завершене формування вушної раковини;</span>
            </li>
            <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
              <span className="text-blue-800 dark:text-blue-600 mr-3 mt-1 flex-shrink-0">✔️</span>
              <span>можна чітко оцінити ступінь клаповухості.</span>
            </li>
          </ul>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-800 dark:border-blue-600 rounded-r-lg p-4 md:p-5 mt-6">
            <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🧠 Важливо:</p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Дитина повинна усвідомлювати суть змін і прагнути покращити зовнішність. Лише тоді
              процес пройде спокійно, без психологічного стресу.
            </p>
          </div>
        </div>
      ),
      images: [
        {
          src: '/images/ottoFAQ/ottoFAQ.jpg',
          alt: 'Клаповухість до корекції',
          width: 500,
          height: 400,
          title: 'Клаповухість до корекції',
        },
        {
          src: '/images/ottoFAQ/ottoFAQ1.jpg',
          alt: 'Процес корекції вушної раковини',
          width: 500,
          height: 400,
          title: 'Процес корекції вушної раковини',
        },
        {
          src: '/images/ottoFAQ/ottoFAQ3.jpg',
          alt: 'Результат після отопластики',
          width: 500,
          height: 400,
          title: 'Результат після отопластики',
        },
      ],
    },
    {
      id: 2,
      question: 'Як проходить операція з отопластики (пластики вух)?',
      answer: (
        <div className="space-y-4">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            ✅ Найчастіше отопластика виконується під місцевою анестезією — амбулаторно, без потреби
            у госпіталізації. Уже через 1 годину після втручання пацієнт може їхати додому з
            індивідуальними рекомендаціями.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            За бажанням пацієнта можливе проведення операції під загальним наркозом. У клініці
            стандартно застосовується інгаляційний наркоз (відомий як «газовий»).
          </p>
          <h4 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-6 mb-3">
            Хід операції:
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
              <span className="text-blue-800 dark:text-blue-600 mr-3 mt-1 flex-shrink-0">🔹</span>
              <span>
                Пластичний хірург формує правильне положення хряща, при необхідності видаляючи його
                частину;
              </span>
            </li>
            <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
              <span className="text-blue-800 dark:text-blue-600 mr-3 mt-1 flex-shrink-0">🔹</span>
              <span>
                Вушна раковина фіксується у новій позиції за допомогою внутрішніх швів та
                спеціального косметичного шва;
              </span>
            </li>
            <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
              <span className="text-blue-800 dark:text-blue-600 mr-3 mt-1 flex-shrink-0">🔹</span>
              <span>
                Післяопераційний рубець — малопомітний, розташований позаду вуха, повністю
                прихований та з часом набуває кольору шкіри.
              </span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Операція проходить максимально делікатно, з естетичним результатом та мінімальними
            слідами втручання.
          </p>
        </div>
      ),
      images: [
        {
          src: '/images/ottoFAQ/ottoFAQ9.jpg',
          alt: 'Підготовка до операції',
          width: 400,
          height: 300,
          title: 'Підготовка до операції',
        },
        {
          src: '/images/ottoFAQ/ottoFAQ4.jpg',
          alt: 'Процес хірургічного втручання',
          width: 400,
          height: 300,
          title: 'Процес хірургічного втручання',
        },
        {
          src: '/images/ottoFAQ/ottoFAQ6.jpg',
          alt: 'Накладання швів',
          width: 400,
          height: 300,
          title: 'Накладання швів',
        },
      ],
    },
    {
      id: 3,
      question: 'Скільки триває операція з пластики вух?',
      answer: (
        <div className="space-y-4">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            🔹 Завдяки використанню сучасних хірургічних методик, операція займає всього 30–40
            хвилин.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            🔹 Тривалість може варіюватися в залежності від індивідуальних анатомічних особливостей
            пацієнта.
          </p>
        </div>
      ),
      images: [
        {
          src: '/images/ottoFAQ/ottoFAQ14.jpg',
          alt: 'Операційна',
          width: 400,
          height: 300,
          title: 'Операційна',
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 md:mb-12">
          Поширені запитання
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100 dark:border-blue-900"
            >
              <button
                className={`w-full flex justify-between items-center p-5 md:p-6 text-left transition-colors duration-300 ${
                  expandedIndex === index
                    ? 'bg-blue-50 dark:bg-blue-900/20'
                    : 'bg-white dark:bg-gray-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10'
                }`}
                onClick={() => toggleItem(index)}
                aria-expanded={expandedIndex === index}
              >
                <span className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 pr-4">
                  {item.question}
                </span>
                <div className="text-blue-800 dark:text-blue-400 flex-shrink-0">
                  {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>

              {expandedIndex === index && (
                <div className="p-5 md:p-6 bg-white dark:bg-gray-800 animate-fadeIn">
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                    <div className="flex-[2]">{item.answer}</div>
                    <div className="flex-[1.5]">
                      <OttoFAQGallery images={item.images} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Заклик до дії */}
        <div className="mt-12 md:mt-16 text-center bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-10 shadow-md">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <Link href="/ask-doctor">
            <button className="bg-blue-800 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-base md:text-lg">
              Зв&apos;язатися з нами
            </button>
          </Link>
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
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}
