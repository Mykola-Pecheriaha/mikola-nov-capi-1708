'use client';
import React from 'react';
import Image from 'next/image';
import { FacetummorDiagnozGallery } from './FacetummorDiagnozGallery';

const FacetummorDiagnoz: React.FC = () => {
  const tumorSections = [
    {
      id: 'nevus',
      title: 'НЕВУС',
      fullText: `це доброякісне новоуворення, яке виникає на шкірі у вигляді пігментної плями (родимки). Більшість невусів не становлять небезпеки, однак у певних випадках їх рекомендовано видаляти — зокрема, якщо вони:
• розташовані в місцях постійного тертя або травмування;
• мають ознаки потенційного переродження у злоякісну пухлину.

Наявність множинних невусів, а також обтяжений сімейний анамнез (випадки меланоми чи передракових захворювань шкіри серед родичів) потребують регулярного дерматологічного контролю.`,
      imageSrc: '/images/skintumors/dpkUlcer.jpg',
      imageAlt: 'Невус (родимка)',
    },
    {
      id: 'papilloma',
      title: 'ПАПІЛОМА',
      fullText: `Папілома — це доброякісне новоутворення, що з'являється на шкірі або слизових оболонках. Основною причиною її виникнення є вірус папіломи людини (ВПЛ).

Ці утворення можуть значно відрізнятися за формою, розміром і кольором: від світло-бежевого до темно-коричневого. Їхня поверхня часто має вигляд дрібних наростів або виростів, що нагадують цвітну капусту або сосочкоподібні структури.`,
      imageSrc: '/images/skintumors/papiloma.jpg',
      imageAlt: 'Папілома',
    },
    {
      id: 'atheroma',
      title: 'АТЕРОМА',
      fullText: `Атерома — це епітеліальна кіста, тобто доброякісне новоутворення, яке виникає внаслідок закупорки сальної залози. 

Атерома має вигляд безболісного, м'якого на дотик ущільнення, схожого на підшкірний прищ або "кульку". Зазвичай не завдає фізичного дискомфорту, окрім естетичного. Проте у разі інфікування може виникати запалення, біль та нагноєння.`,
      imageSrc: '/images/skintumors/teroma.jpg',
      imageAlt: 'Атерома',
    },
    {
      id: 'hemangioma',
      title: 'ГЕМАНГІОМА',
      fullText: `Гемангіома — це доброякісне пухлинне утворення, яке складається з кровоносних судин. Воно має вигляд яскраво-червоного плямистого наросту, який трохи виступає над поверхнею шкіри. При натисканні гемангіома блідне, але миттєво відновлює свій колір, форму та об'єм.`,
      imageSrc: '/images/skintumors/gemangioma.jpg',
      imageAlt: 'Гемангіома',
    },
    {
      id: 'lipoma',
      title: 'ЛІПОМА',
      fullText: `Доброякісна жирова пухлина. Це новоутворення, яке формується з жирового прошарку, тому його друга назва – «жировик». Це часточка жирової тканини, яка легко рухається при дотику і зазвичай не викликає болю. Ліпоми можуть з'являтися де завгодно на тілі, але найчастіше вони з'являються на спині, тулубі, руках, плечах і шиї.`,
      imageSrc: '/images/skintumors/lipoma.jpg',
      imageAlt: 'Ліпома',
    },
    {
      id: 'fibroma',
      title: 'ФІБРОМА',
      fullText: `Фіброма — це доброякісне новоутворення, яке формується з волокнистої сполучної тканини. Вона часто супроводжується розростанням інших тканин, таких як м'язова (фіброміома), судинна (ангіофіброма) або залозиста (фіброаденома).

Фіброма найчастіше діагностується в молодому віці, особливо у жінок. Вона може мати різний колір — від сірого до чорного, а її поверхня, як правило, гладка. Відрізняється повільним зростанням, що зазвичай не супроводжується болем чи дискомфортом.`,
      imageSrc: '/images/skintumors/fibroma.jpg',
      imageAlt: 'Фіброма',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12 lg:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Заголовок */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 dark:text-blue-400 mb-4 relative pb-4 transition-colors duration-300">
            Пухлини шкіри
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-400 rounded-full"></span>
          </h1>
        </div>

        {/* Секції з пухлинами */}
        {tumorSections.map((section) => (
          <div key={section.id} className="mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10">
              {/* Текст */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-400 mb-4 md:mb-6 flex items-center gap-2 transition-colors duration-300">
                  <span className="text-2xl">🔬</span>
                  {section.title}
                </h3>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-lg p-4 sm:p-6 md:p-8 transition-colors duration-300">
                  <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line transition-colors duration-300">
                    {section.fullText}
                  </p>
                </div>
              </div>

              {/* Зображення */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl">
                  <Image
                    src={
                      section.imageSrc || '/placeholder.svg?height=400&width=400&query=skin tumor'
                    }
                    alt={section.imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Розділова лінія */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent my-6 md:my-8"></div>
          </div>
        ))}

        {/* Інформаційна секція з галереєю */}
        <div className="mt-12 md:mt-16">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12">
            {/* Ліва колонка - текст */}
            <div className="w-full lg:w-2/3">
              {/* Симптоми */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 rounded-r-lg p-4 sm:p-6 md:p-8 mb-6 md:mb-8 transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-900 dark:text-yellow-300 mb-4 md:mb-6 flex items-center gap-2 transition-colors duration-300">
                  <span className="text-2xl">⚠️</span>
                  Симптоми, які вимагають негайного звернення до лікаря:
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    'швидке збільшення новоутворення',
                    'випадіння волосся з його поверхні',
                    'зміна кольору, кровоточивість, зміна консистенції',
                    'зменшення, зміна форми або розмитий контур',
                    'поява запалення, свербежу, тріщин',
                  ].map((symptom, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-base sm:text-lg md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300"
                    >
                      <span className="text-lg md:text-xl mr-3 md:mr-4 flex-shrink-0">🔸</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Профілактика */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-lg p-4 sm:p-6 md:p-8 mb-6 md:mb-8 transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4 md:mb-6 flex items-center gap-2 transition-colors duration-300">
                  <span className="text-2xl">✅</span>
                  Профілактичні рекомендації:
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    'Уникайте тривалого перебування на сонці',
                    'Своєчасно звертайтеся до лікаря',
                    'Регулярно проходьте діагностику за допомогою дерматоскопа',
                  ].map((rec, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-base sm:text-lg md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300"
                    >
                      <span className="text-lg md:text-xl mr-3 md:mr-4 flex-shrink-0">🔹</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Дерматоскопія */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-lg p-4 sm:p-6 md:p-8 transition-colors duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4 md:mb-6 flex items-center gap-2 transition-colors duration-300">
                  <span className="text-2xl">🧪</span>
                  Цифрова дерматоскопія
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4 md:mb-6 transition-colors duration-300">
                  Метод, що дає можливість детально розглянути новоутворення під великим
                  збільшенням. Дає змогу оцінити:
                </p>
                <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  {[
                    'пігментацію',
                    'будову епідермісу',
                    'межу між дермою та епідермісом',
                    'сосочковий шар',
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-base sm:text-lg md:text-lg text-gray-800 dark:text-gray-200 transition-colors duration-300"
                    >
                      <span className="text-lg md:text-xl mr-3 md:mr-4 flex-shrink-0">🔹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-lg p-4 md:p-5 border border-blue-300 dark:border-blue-700 transition-colors duration-300">
                  <p className="text-base sm:text-lg md:text-lg text-blue-900 dark:text-blue-200 font-medium flex items-start gap-3 transition-colors duration-300">
                    <span className="text-lg md:text-xl flex-shrink-0">💡</span>
                    <span>
                      Зображення виводиться на екран комп&apos;ютера для точнішої діагностики.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Права колонка - Галерея */}
            <div className="w-full lg:w-1/3 flex items-start justify-center">
              <FacetummorDiagnozGallery />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacetummorDiagnoz;
