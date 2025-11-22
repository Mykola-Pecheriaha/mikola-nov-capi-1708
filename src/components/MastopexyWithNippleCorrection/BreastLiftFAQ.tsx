'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import BreastLiftFAQGallery from './BreastLiftFAQGallery';
import type { GalleryImage } from './BreastLiftFAQGallery';

interface FAQItem {
  id: string;
  title: string;
  content: string;
  images: GalleryImage[];
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'operation-duration',
    title: '🔹 Скільки триває операція з підтяжки грудей',
    content: `Підтяжка молочних залоз проводиться під загальною анестезією. У клініці застосовується якісний та безпечний інгаляційний наркоз на Севофлурані. Він забезпечує планомірне занурення у медикаментозний сон, а також легкий та комфортний вихід без галюцинацій.\n\nТривалість операції – від 1,5 до 3 годин (залежно від застосовуваної методики).`,
    images: [
      {
        src: '/images/BreastLiftFAQ/BreastLiftFAQ1.jpg',
        alt: 'Тривалість операції з підтяжки грудей',
        width: 400,
        height: 600,
        title: 'Операційна зала',
      },
    ],
  },
  {
    id: 'rehabilitation',
    title: '🔹 Реабілітація після підтяжки грудей',
    content: `Після операції пацієнтка обов'язково перебуває у стаціонарі протягом доби. Потім із рекомендаціями від фахівця вона їде додому.\n\nДодатковий догляд за рубцями не вимагається. Також для прискорення загоєння рубців застосовується спеціальний медичний клей для шкіри. Ми отримуємо високі естетичні результати – через 1 місяць рубець виглядає, як через 6-8 місяців.\n\nСлід носити компресійну білизну, що фіксує положення грудей, 2-4 тижні.\n\nПеріод реабілітації триває 2-3 тижні. Рекомендується обмеження фізичного навантаження, відвідування саун, бань басейнів до 2-х місяців.`,
    images: [
      {
        src: '/images/BreastLiftFAQ/removalInfo9.jpg',
        alt: 'Реабілітація після підтяжки грудей',
        width: 400,
        height: 600,
        title: 'Період відновлення',
      },
    ],
  },
  {
    id: 'correction-problems',
    title: '🔸 Які проблеми вирішує корекція сосків та корекція ареол',
    content: `Хірургічна корекція соска проводиться у таких випадках:\n\n• Гіпертрофія. Непропорційно великі соски виглядають неестетично і спричиняють дискомфорт.\n\n• Мегареоли (надто велика пігментована частина). У нормі діаметр ареоли становить 2,5-4 см. При перевищенні цього діаметра (більше 5 см) потрібна корекція за естетичними ознаками. Хірургічне зменшення ареоли є частиною операцій з підтяжки та зменшення грудей.\n\n• Асиметрія. Часте явище після вагітності та грудного вигодовування. Якщо асиметрія у розмірі правого та лівого сосково-ареолярного комплексу досягає 2-х разів, то жінка має показання для звернення до пластичного хірурга.`,
    images: [
      {
        src: '/images/BreastLiftFAQ/BreastLiftFAQ4.jpg',
        alt: 'Корекція сосків та ареол',
        width: 400,
        height: 600,
        title: 'Корекція сосків',
      },
    ],
  },
  {
    id: 'areola-rehabilitation',
    title: '🔸 Реабілітація після корекції ареоли',
    content: `Якщо операція проводилася амбулаторно під місцевою анестезією, пацієнт може через 1,5 години залишити клініку. За умови використання загального наркозу пацієнт виписується наступної доби після втручання.\n\nПеріод реабілітації комфортний, пацієнтка не випадає із соціального життя. Рекомендується обмежити активне фізичне навантаження на 4-6 тижнів. Протягом цього терміну небажано відвідувати лазні, сауни, пляжі та басейни.\n\nРубці через місяць виглядають естетично, вони приймають колір шкіри і схожі на невелику «котячу подряпину».`,
    images: [
      {
        src: '/images/BreastLiftFAQ/BreastLiftFAQ7.jpg',
        alt: 'Реабілітація після корекції ареоли',
        width: 400,
        height: 600,
        title: 'Відновлення після корекції',
      },
    ],
  },
  {
    id: 'operation-time',
    title: '🔸 Скільки триває операція',
    content: `Тривалість залежить від обсягу: найчастіше займається час від 30 хвилин до 1 години. На індивідуальній зустрічі хірург обговорює це питання.`,
    images: [
      {
        src: '/images/BreastLiftFAQ/BreastLiftFAQ8.jpg',
        alt: 'Тривалість операції корекції',
        width: 400,
        height: 600,
        title: 'Час операції',
      },
    ],
  },
];

export default function BreastLiftFAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 dark:text-gray-100 mb-4 flex items-center justify-center gap-4 flex-wrap">
            <span className="text-4xl md:text-5xl"></span>
            <span>Поширені запитання при підтяжці грудей і корекції ареоли та соска</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ background: '#8EAAB8' }}
          ></div>
        </div>

        {/* FAQ */}
        <div className="space-y-5 mb-12">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-5 sm:p-6 text-left transition-all duration-300"
                style={{ background: '#8EAAB8' }}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white pr-4">
                  {item.title}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-white flex-shrink-0 transition-transform duration-300 ${
                    openItem === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItem === item.id && (
                <div className="p-6 sm:p-8 bg-white dark:bg-gray-800 animate-fadeIn">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Текстовий контент */}
                    <div className="flex-[2]">
                      {item.content.split('\n').map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="mb-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Галерея */}
                    <div className="flex-1 min-w-[280px] lg:min-w-[300px]">
                      <BreastLiftFAQGallery images={item.images} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA секція */}
        <div
          className="relative rounded-2xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 overflow-hidden border-t-4 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ borderTopColor: '#5A7480' }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <span className="text-5xl sm:text-6xl flex-shrink-0" style={{ color: '#8EAAB8' }}>
              💬
            </span>

            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                Потрібна консультація?
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію
                та підтримку на всіх етапах лікування.
              </p>
              <Link href="/ask-doctor">
                <button
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: '#8EAAB8' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#7a99ab')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#8EAAB8')}
                >
                  <span>Звязатися з нами</span>
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </div>
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
