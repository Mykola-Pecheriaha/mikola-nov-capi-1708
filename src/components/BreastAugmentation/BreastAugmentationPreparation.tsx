'use client';
import type React from 'react';
import PreparationGallery from './PreparationGallery';

interface BreastAugmentationPreparationProps {
  backgroundColor?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
}

const BreastAugmentationPreparation: React.FC<BreastAugmentationPreparationProps> = ({
  backgroundColor,
}) => {
  // Функція для обробки тексту з markdown-форматуванням
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold text-blue-900 dark:text-blue-300">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  // Масиви зображень для галерей
  const implantsGalleryImages: GalleryImage[] = [
    {
      src: '/images/breast-augmentation-preparation/implant4.jpg',
      alt: 'Різні типи грудних імплантів',
      title: 'Типи імплантів',
      width: 800,
      height: 600,
    },
    {
      src: '/images/breast-augmentation-preparation/access3.jpg',
      alt: 'Анатомічні імпланти',
      title: 'Анатомічні імпланти',
      width: 800,
      height: 600,
    },
    {
      src: '/images/breast-augmentation-preparation/implant1.jpg',
      alt: 'Круглі імпланти',
      title: 'Круглі імпланти',
      width: 800,
      height: 600,
    },
    {
      src: '/images/breast-augmentation-preparation/implant6.jpg',
      alt: 'Порівняння різних імплантів',
      title: 'Порівняння імплантів',
      width: 800,
      height: 600,
    },
  ];

  const examinationGalleryImages: GalleryImage[] = [
    {
      src: '/images/breast-augmentation-preparation/preparation4.jpg',
      alt: 'Консультація перед операцією',
      title: 'Консультація',
      width: 800,
      height: 600,
    },
    {
      src: '/images/breast-augmentation-preparation/USD1.jpg',
      alt: 'УЗД молочних залоз',
      title: 'УЗД обстеження',
      width: 800,
      height: 600,
    },
    {
      src: '/images/breast-augmentation-preparation/mamograft15.jpg',
      alt: 'Мамографія',
      title: 'Мамографія',
      width: 800,
      height: 600,
    },
    {
      src: '/images/breast-augmentation-preparation/ecg.jpg',
      alt: 'ЕКГ обстеження',
      title: 'ЕКГ',
      width: 800,
      height: 600,
    },
  ];

  const placementGalleryImages: GalleryImage[] = [
    {
      src: '/images/breast-augmentation-preparation/implant7.jpg',
      alt: "Розташування імпланту під м'язом",
      title: "Під м'язом",
      width: 800,
      height: 600,
    },
    {
      src: '/images/breast-augmentation-preparation/access1.jpg',
      alt: 'Розташування імпланту під залозою',
      title: 'Під залозою',
      width: 800,
      height: 600,
    },
    {
      src: '/images/breast-augmentation-preparation/implant11.jpg',
      alt: 'Комбіноване розташування імпланту',
      title: 'Комбіноване розташування',
      width: 800,
      height: 600,
    },
    {
      src: '/images/breast-augmentation-preparation/implant5.jpg',
      alt: 'Порівняння методів розташування',
      title: 'Порівняння методів',
      width: 800,
      height: 600,
    },
  ];

  // Тексти для блоків
  const implantsText = `🟣 **Види грудних імплантів**
Вибір імплантатів — один із найважливіших етапів для пацієнтки. Необхідно визначитися з формою, структурою поверхні та типом наповнювача.
Грудні імплантати класифікуються за кількома критеріями:
 🔹 **Поверхня оболонки:**
  - мікротекстурована
  - макротекстурована
  - мікрополіуританова
 🔹 **Форма:**
  - кругла
  - анатомічна (краплеподібна)
 🔹 **Наповнювач:**
  - різні типи силіконового гелю
 Підбір імплантатів проводиться індивідуально, з урахуванням анатомічних особливостей організму та естетичних побажань пацієнтки. Це дозволяє досягти максимально природної, гармонійної та красивої форми грудей.`;

  const examinationText = `🟣 **Обстеження перед імплантацією грудей**
Операція зі збільшення грудей вимагає ретельної підготовки. Техніка проведення втручання визначається лише після комплексного обстеження пацієнтки.
🔹**До обстеження входить:**
 - УЗД молочних залоз
 - Мамографія (за потреби)
 - Огляд профільних спеціалістів
 - Загальні та спеціальні аналізи
 - ЕКГ 
 - Флюорографія (ФОГК)
🔹 **Для іногородніх пацієнтів** передбачена можливість поєднати консультацію, обстеження та здачу аналізів в один день, а також провести операцію під час того ж візиту. Це значно економить час і є зручним варіантом для пацієнтів з інших міст.`;

  const placementText = `🟣 **Розташування імпланту** під час операції зі збільшення грудей
Місце встановлення імплантату залежить від вихідного стану молочної залози: її об'єму, наявного опущення, товщини підшкірної клітковини та інших анатомічних особливостей. Вибір способу розміщення імпланту ухвалюється пластичним хірургом індивідуально.
🔹 **Можливі варіанти розташування імплантату:**
-  Під залозу (над м'язом)
-  Під м'яз
-  Комбіновано (частково під м'язом, частково під залозою)
-  Пояснення технік:
🔹 **Під залозу**
Імплантат розміщується між тканиною молочної залози та великим грудним м'язом.
Мінус: у пацієнток із тонкою шкірою або невеликою кількістю підшкірного жиру імплантат може бути помітним або прощупуватися, викликаючи ефект контурованості.
🔹 **Під м'яз**
Імплантат розміщується між великим і малим грудними м'язами. Цей варіант забезпечує кращу маскування імпланту, зменшує ризик контурованості, а також стабілізує його положення.
🔹 **Важливо: остаточне рішення щодо місця встановлення імплантату — над м'язом чи під ним — приймає хірург, враховуючи всі анатомічні особливості пацієнтки.**
Рекомендуємо довіритися його професійній думці.`;

  return (
    <div
      className="w-full py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Заголовок */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-blue-900 dark:text-gray-100">
          Що потрібно знати перед операцією з мамопластики
        </h2>

        {/* Перший блок - Види імплантів */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 md:p-6 shadow-lg border border-blue-100 dark:border-gray-700 h-full">
              <div className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed text-sm md:text-base">
                {formatText(implantsText)}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <PreparationGallery images={implantsGalleryImages} />
          </div>
        </div>

        {/* Другий блок - Обстеження */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 md:p-6 shadow-lg border border-blue-100 dark:border-gray-700 h-full">
              <div className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed text-sm md:text-base">
                {formatText(examinationText)}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <PreparationGallery images={examinationGalleryImages} />
          </div>
        </div>

        {/* Третій блок - Розташування імпланту */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 md:p-6 shadow-lg border border-blue-100 dark:border-gray-700 h-full">
              <div className="text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed text-sm md:text-base">
                {formatText(placementText)}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <PreparationGallery images={placementGalleryImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastAugmentationPreparation;
