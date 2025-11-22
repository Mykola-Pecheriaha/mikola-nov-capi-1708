'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import MastopexyInfoGallery from './MastopexyInfoGallery';
import type { GalleryImage } from './MastopexyInfoGallery';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  images: GalleryImage[];
}

// Секції мастопексії
const MASTOPEXY_SECTIONS: AccordionItem[] = [
  {
    id: 'periareolar',
    title: '🔹 Періареолярна мастопексія',
    content:
      'Рекомендується пацієнткам із мінімальним птозом, коли сосок розташований на рівні підгрудної складки. Це одна з найделікатніших методик.\nРозріз виконується по краю ареоли. Видаляється надлишок шкіри, тканини залози перерозподіляються, а ареола переноситься вище та зменшується у розмірі.\nПісляопераційний рубець має довжину 3–4 см і легко маскується завдяки природному відтінку тканин.',
    images: [
      {
        src: '/images/mastopexy/breast-preparation12.jpg',
        alt: 'Періареолярна мастопексія - техніка виконання',
        width: 400,
        height: 600,
        title: 'Періареолярна техніка',
      },
      {
        src: '/images/mastopexy/breast-preparation15.jpg',
        alt: 'Результат періареолярної мастопексії',
        width: 400,
        height: 600,
        title: 'Результат операції',
      },
    ],
  },
  {
    id: 'vertical',
    title: '🔹 Вертикальна мастопексія',
    content:
      'Оптимальний варіант для пацієнток із помірним птозом, коли сосок знаходиться на 1–3 см нижче інфрамамарної складки, але не досягає нижнього полюса залози.\nРозріз проходить навколо ареоли та вертикально вниз, дозволяючи значно покращити форму грудей.',
    images: [
      {
        src: '/images/mastopexy/breast-preparation13.jpg',
        alt: 'Вертикальна мастопексія - схема розрізів',
        width: 400,
        height: 600,
        title: 'Вертикальна техніка',
      },
      {
        src: '/images/mastopexy/breast-preparation16.jpg',
        alt: 'Результат вертикальної мастопексії',
        width: 400,
        height: 600,
        title: 'Результат операції',
      },
    ],
  },
  {
    id: 'anchor',
    title: '🔹 Т-подібна (якорна) мастопексія',
    content:
      "Застосовується у випадках вираженого птозу — коли сосок опускається нижче підгрудної складки більш ніж на 3 см і 'дивиться' вниз.\nМетодика включає вертикальний розріз, поєднаний з додатковим розрізом у складці під молочною залозою у формі перевернутої літери 'Т'.",
    images: [
      {
        src: '/images/mastopexy/breast-preparation14.jpg',
        alt: 'Т-подібна мастопексія - схема розрізів',
        width: 400,
        height: 600,
        title: 'Якорна техніка',
      },
      {
        src: '/images/mastopexy/breast37.bmp',
        alt: 'Результат Т-подібної мастопексії',
        width: 400,
        height: 600,
        title: 'Результат операції',
      },
    ],
  },
];

const CORRECTION_SECTIONS: AccordionItem[] = [
  {
    id: 'areola',
    title: '🔸 Зменшення ареоли',
    content:
      'Соски неправильної форми, занадто великі або втягнуті можуть засмучувати багатьох жінок. Спроби приховати недолік призводять до погіршення якості особистого життя, зниження самооцінки. Деформації ареоли і сосків бувають вродженими і набутими, але переважну більшість з них можна виправити.\nПолягає у видаленні надлишків пігментованої шкіри. Розріз виконується на межі темної та світлої шкіри, а тканини ушиваються внутрішнім косметичним швом. Це дозволяє зменшити ареолу та надати грудям естетичного вигляду.',
    images: [
      {
        src: '/images/mastopexy/breast29.bmp',
        alt: 'Зменшення ареоли - до та після',
        width: 400,
        height: 600,
        title: 'Корекція ареоли',
      },
      {
        src: '/images/mastopexy/breast-preparation18.jpg',
        alt: 'Техніка зменшення ареоли',
        width: 400,
        height: 600,
        title: 'Техніка операції',
      },
    ],
  },
  {
    id: 'nipple',
    title: '🔸 Зменшення сосків',
    content:
      "Здійснюється шляхом видалення надлишку шкіри зі 'стебла' соска без ушкодження молочних проток. У деяких випадках виконується часткове клиновидне висічення для досягнення симетрії.",
    images: [
      {
        src: '/images/mastopexy/breast-preparation19.jpg',
        alt: 'Зменшення сосків - техніка виконання',
        width: 400,
        height: 600,
        title: 'Корекція сосків',
      },
    ],
  },
];

export default function MastopexyInfo() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openCorrectionSection, setOpenCorrectionSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const toggleCorrectionSection = (id: string) => {
    setOpenCorrectionSection(openCorrectionSection === id ? null : id);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-blue-900 dark:text-gray-100 mb-12 relative">
            Підтяжки грудей та корекції сосково-ареолярної ділянки -{' '}
            <span style={{ color: '#1E3A8A' }}>особливості проведення</span>
            <span
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
              style={{ backgroundColor: '#8EAAB8' }}
            ></span>
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-700 dark:text-gray-300 text-justify max-w-4xl mx-auto">
            Методика проведення операції залежить від ступеня опущення молочних залоз (птозу). Існує
            кілька варіантів мастопексії, які підбираються індивідуально:
          </p>

          {/* Секції мастопексії */}
          <div className="mb-12 space-y-5">
            {MASTOPEXY_SECTIONS.map((section) => (
              <div
                key={section.id}
                className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="flex justify-between items-center p-5 sm:p-6 cursor-pointer transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #8EAAB8 0%, #7A98A8 100%)',
                  }}
                  onClick={() => toggleSection(section.id)}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3">
                    {section.title}
                  </h3>
                  <ChevronDown
                    className={`text-white flex-shrink-0 transition-transform duration-300 ${
                      openSection === section.id ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </div>
                {openSection === section.id && (
                  <div className="flex flex-col lg:flex-row p-6 sm:p-8 gap-6 lg:gap-8 bg-white dark:bg-gray-800">
                    <div className="flex-[2]">
                      {section.content.split('\n').map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-base md:text-lg leading-relaxed mb-5 text-gray-700 dark:text-gray-300 text-justify last:mb-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="flex-1 min-w-[300px]">
                      <MastopexyInfoGallery images={section.images} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Інформаційний блок */}
          <div
            className="rounded-2xl p-6 sm:p-8 mb-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{
              background:
                'linear-gradient(135deg, rgba(142, 170, 184, 0.15) 0%, rgba(142, 170, 184, 0.08) 100%)',
              borderLeft: '4px solid #8EAAB8',
            }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <span className="text-4xl flex-shrink-0" style={{ color: '#8EAAB8' }}>
                💡
              </span>
              <div className="flex-1">
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                  У деяких випадках хірург може рекомендувати поєднання підтяжки з{' '}
                  <strong style={{ color: '#8EAAB8' }}>установкою імплантатів</strong> для
                  досягнення wow-ефекту. Імплантати виступають своєрідним внутрішнім каркасом, який
                  утримує бюст у природному положенні та додає об`єму.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Метод остаточно підбирається хірургом, з урахуванням анатомічних особливостей та
                  побажань пацієнтки.
                </p>
              </div>
            </div>
          </div>

          {/* Розділювач */}
          <div
            className="h-1 my-12 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #8EAAB8 50%, transparent 100%)',
            }}
          ></div>

          {/* Підзаголовок */}
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900 dark:text-gray-100 flex items-center justify-center gap-4 text-center flex-col sm:flex-row">
            <span className="text-3xl sm:text-4xl" style={{ color: '#1E3A8A' }}>
              🔸
            </span>
            Корекція сосків та ареоли: як проходить операція
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-700 dark:text-gray-300 text-justify max-w-4xl mx-auto">
            Процедура зменшення сосків або зміни форми ареоли проводиться амбулаторно під місцевою
            анестезією. Остаточна методика визначається під час первинної консультації з урахуванням
            індивідуальних факторів, зокрема планування грудного вигодовування.
          </p>

          {/* Секції корекції */}
          <div className="mb-12 space-y-5">
            {CORRECTION_SECTIONS.map((section) => (
              <div
                key={section.id}
                className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="flex justify-between items-center p-5 sm:p-6 cursor-pointer transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #8EAAB8 0%, #7A98A8 100%)',
                  }}
                  onClick={() => toggleCorrectionSection(section.id)}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-3">
                    {section.title}
                  </h3>
                  <ChevronDown
                    className={`text-white flex-shrink-0 transition-transform duration-300 ${
                      openCorrectionSection === section.id ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </div>
                {openCorrectionSection === section.id && (
                  <div className="flex flex-col lg:flex-row p-6 sm:p-8 gap-6 lg:gap-8 bg-white dark:bg-gray-800">
                    <div className="flex-[2]">
                      {section.content.split('\n').map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-base md:text-lg leading-relaxed mb-5 text-gray-700 dark:text-gray-300 text-justify last:mb-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="flex-1 min-w-[300px]">
                      <MastopexyInfoGallery images={section.images} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Інформація про час */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{
              background:
                'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%)',
              borderLeft: '4px solid #f59e0b',
            }}
          >
            <span className="text-3xl sm:text-4xl text-amber-500 flex-shrink-0">🕒</span>
            <div className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
              <strong className="text-amber-600 dark:text-amber-400">Швидке відновлення:</strong>{' '}
              Уже через 1,5 години після втручання пацієнтка може повертатися додому з чіткими
              рекомендаціями від хірурга. Госпіталізація не потрібна.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
