'use client';

import type React from 'react';
import BlepharoPreparationGallery, { type GalleryImage } from './BlepharoPreparationGallery';

interface BlepharoPreparationProps {
  backgroundColor?: string;
}

const BlepharoPreparation: React.FC<BlepharoPreparationProps> = ({
  backgroundColor = '#e8f5e8',
}) => {
  // Зображення для першої галереї (підготовка до операції)
  const preparationImages: GalleryImage[] = [
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio5.jpg',
      alt: 'Консультація з пластичним хірургом',
      width: 600,
      height: 400,
      title: 'Консультація з пластичним хірургом',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio15.jpg',
      alt: 'Підготовка до операції блефаропластики',
      width: 600,
      height: 400,
      title: 'Підготовка до операції',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio4.jpg',
      alt: 'Етапи підготовки до блефаропластики',
      width: 600,
      height: 400,
      title: 'Підготовка до операції',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio2.jpg',
      alt: 'Медичне обстеження перед операцією',
      width: 600,
      height: 400,
      title: 'Підготовка до операції',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio3.jpg',
      alt: 'Результати блефаропластики',
      width: 600,
      height: 400,
      title: 'Результати блефаропластики',
    },
  ];

  // Зображення для другої галереї (пластика верхніх повік)
  const upperEyelidImages: GalleryImage[] = [
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio9.jpg',
      alt: 'Розмітка верхніх повік перед операцією',
      width: 600,
      height: 400,
      title: 'Розмітка верхніх повік',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio7.jpg',
      alt: 'Етапи операції пластики верхніх повік',
      width: 600,
      height: 500,
      title: 'Етапи операції пластики верхніх повік',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio8.jpg',
      alt: 'Післяопераційний шов верхніх повік',
      width: 600,
      height: 400,
      title: 'Післяопераційний шов верхніх повік',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio11.jpg',
      alt: 'Результат пластики верхніх повік',
      width: 600,
      height: 400,
      title: 'Результат пластики верхніх повік',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio10.jpg',
      alt: 'Фінальний результат пластики верхніх повік',
      width: 600,
      height: 400,
      title: 'Результат пластики верхніх повік',
    },
  ];

  // Зображення для третьої галереї (пластика нижніх повік)
  const lowerEyelidImages: GalleryImage[] = [
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio21.jpg',
      alt: 'Процедура пластики нижніх повік',
      width: 500,
      height: 400,
      title: 'Процедура пластики нижніх повік',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio16.jpg',
      alt: 'Етапи пластики нижніх повік',
      width: 500,
      height: 400,
      title: 'Процедура пластики нижніх повік',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio17.jpg',
      alt: 'Кругова блефаропластика',
      width: 500,
      height: 400,
      title: 'Кругова блефаропластика',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio20.jpg',
      alt: 'Освіження погляду після блефаропластики',
      width: 500,
      height: 600,
      title: 'Освіження погляду',
    },
    {
      src: '/images/blepharoPreparation/blepharoplastyPreparatio22.jpg',
      alt: 'Результат кругової блефаропластики',
      width: 500,
      height: 500,
      title: 'Кругова блефаропластика',
    },
  ];

  return (
    <div
      className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-gray-100 text-center mb-8 sm:mb-10 font-bold">
          Пластика повік - блефаропластика
        </h2>

        {/* Перша секція: підготовка до операції */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            <div className="flex-[1.5]">
              <h3 className="text-2xl sm:text-3xl text-blue-900 dark:text-blue-400 mb-4 sm:mb-5 font-semibold">
                Пластика повік (блефаропластика): підготовка до операції
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                Перший крок до молодості та краси — консультація з пластичним хірургом Миколою
                Печерага в Чернівцях.
              </p>
              <p className="text-base sm:text-lg mb-3 sm:mb-4 leading-relaxed">
                <span className="text-blue-900 dark:text-blue-900 font-medium">
                  🔹 Прийом пацієнтів з усієї України
                </span>
                <br />
                <span className="text-blue-900 dark:text-blue-900 font-medium">
                  🔹 Доступна відеоконсультація
                </span>
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                На індивідуальній зустрічі у клініці Vidnova:
              </p>
              <p className="text-base sm:text-lg mb-2 leading-relaxed">
                <span className="text-blue-900 dark:text-blue-900 font-medium">
                  Пацієнт та хірург обговорюют:
                </span>
              </p>
              <ul className="ml-5 sm:ml-6 mb-4 sm:mb-5 list-disc marker:text-blue-900 dark:marker:text-blue-900">
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  особливості майбутньої операції
                </li>
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  нюанси періоду реабілітації
                </li>
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  очікуваний результат
                </li>
              </ul>
              <p className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed">
                <span className="text-blue-900 dark:text-blue-900 font-medium">
                  Фото до і після дають чітке уявлення про ефект хірургічного втручання.
                </span>
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                Обов&apos;язкова підготовка:
              </p>
              <p className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed">
                <span className="text-blue-900 dark:text-blue-900 font-medium">
                  🔹 Медичні аналізи — здаються у власній лабораторії клініки
                </span>
                <br />
                <span className="text-blue-900 dark:text-blue-900 font-medium">
                  🔹Процедура триває до 10 хвилин
                </span>
                <br />
                <span className="text-blue-900 dark:text-blue-900 font-medium">
                  🔹Результати видаються одразу
                </span>
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                Що варто врахувати:
              </p>
              <p className="text-base sm:text-lg mb-2 leading-relaxed">
                <span className="text-blue-900 dark:text-blue-900 font-medium">
                  За 2 тижні до операції бажано:
                </span>
              </p>
              <ul className="ml-5 sm:ml-6 mb-4 sm:mb-5 list-disc marker:text-blue-900 dark:marker:text-blue-900">
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  припинити прийом медикаментів, що впливають на згортання крові (за погодженням з
                  лікарем)
                </li>
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  уникати стресів та перенавантажень
                </li>
              </ul>
              <p className="text-base sm:text-lg leading-relaxed">
                <span className="text-blue-900 dark:text-blue-900 font-medium">
                  ✨ Блефаропластика — це не лише про красу, а й про впевненість у собі. Зробіть
                  перший крок вже сьогодні!
                </span>
              </p>
            </div>
            <div className="flex-[1.5]">
              <BlepharoPreparationGallery
                images={preparationImages}
                galleryId="preparation-gallery"
              />
            </div>
          </div>
        </div>

        {/* Текстовий блок на всю ширину */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl text-blue-900 dark:text-blue-400 mb-4 sm:mb-5 font-semibold">
            Процес проведення операції
          </h3>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
            У клініці діє сучасний формат «хірургія одного дня» — консультація, обстеження та саме
            оперативне втручання відбуваються в один день!
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
            Особливості блефаропластики:
          </p>
          <p className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed">
            <span className="text-blue-900 dark:text-blue-900 font-medium">
              🔹 Місцева анестезія — без загального наркозу
            </span>
            <br />
            <span className="text-blue-900 dark:text-blue-900 font-medium">
              🔹 Стаціонар не потрібен — вже через кілька годин після процедури пацієнт повертається
              додому
            </span>
            <br />
            <span className="text-blue-900 dark:text-blue-900 font-medium">
              🔹 Пацієнт отримує індивідуальні рекомендації від пластичного хірурга
            </span>
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
            Комплексний підхід до омолодження:
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
            Блефаропластика часто поєднується з іншими процедурами, такими як:
          </p>
          <ul className="ml-5 sm:ml-6 mb-4 sm:mb-5 list-disc marker:text-blue-900 dark:marker:text-blue-900">
            <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              підтяжка обличчя
            </li>
            <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">ліпофілінг</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
            Це дозволяє досягнути максимально вираженого ефекту омолодження.
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
            Які види блефаропластики виконує в нашій клініці:
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            <span className="text-blue-900 dark:text-blue-900 font-medium">
              🔹 Пластика верхніх повік
            </span>
            <br />
            <span className="text-blue-900 dark:text-blue-900 font-medium">
              🔹 Пластика нижніх повік
            </span>
          </p>
        </div>

        {/* Друга секція: пластика верхніх повік */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            <div className="flex-[1.5]">
              <h3 className="text-2xl sm:text-3xl text-blue-900 dark:text-blue-400 mb-4 sm:mb-5 font-semibold">
                Пластика верхніх повік
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                Показання до операції:
              </p>
              <ul className="ml-5 sm:ml-6 mb-4 sm:mb-5 list-disc marker:text-blue-900 dark:marker:text-blue-900">
                <li className="mb-2 sm:mb-3 leading-relaxed">
                  <span className="text-blue-900 dark:text-blue-900 font-medium">
                    ✦ Надлишок шкіри у ділянці верхньої повіки (нависання над війним краєм);
                  </span>
                </li>
                <li className="mb-2 sm:mb-3 leading-relaxed">
                  <span className="text-blue-900 dark:text-blue-900 font-medium">
                    ✦ Підшкірна жирова грижа, яка формує похмурий та втомлений погляд.
                  </span>
                </li>
              </ul>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                <span className="text-blue-900 dark:text-blue-900 font-bold mr-2">⟶</span>
                Надлишок шкіри в цій зоні не лише візуально постарює, але й може погіршувати зір,
                спричиняти втому очей, ускладнювати нанесення макіяжу.
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 leading-relaxed">
                Операція «розплющує» око, освіжає погляд, прибирає зморшки та надає обличчю більш
                молодий вигляд.
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                Як проходить операція:
              </p>
              <p className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed">
                <span className="text-blue-900 dark:text-blue-900 font-medium">
                  🔹 Хірургічний доступ здійснюється через верхню повіку.
                </span>
                <br />
                <span className="text-blue-900 dark:text-blue-900 font-medium">
                  🔹 Шов розміщується у природній складці — після загоєння він стає практично
                  непомітним.
                </span>
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                Особливості процедури:
              </p>
              <ul className="ml-5 sm:ml-6 mb-4 list-disc marker:text-blue-900 dark:marker:text-blue-900">
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Проводиться амбулаторно, під місцевою анестезією
                </li>
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Використовуються високоякісні внутрішньошкірні косметичні нитки
                </li>
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Стаціонар не потрібен — через кілька годин після втручання пацієнт може йти додому
                </li>
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Комфортний період реабілітації
                </li>
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Зняття швів відбувається на 6–7 день
                </li>
              </ul>
            </div>
            <div className="flex-[1.5]">
              <BlepharoPreparationGallery
                images={upperEyelidImages}
                galleryId="upper-eyelid-gallery"
              />
            </div>
          </div>
        </div>

        {/* Третя секція: пластика нижніх повік */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            <div className="flex-[1.5]">
              <h3 className="text-2xl sm:text-3xl text-blue-900 dark:text-blue-900 mb-4 sm:mb-5 font-semibold">
                Пластика нижніх повік
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 leading-relaxed">
                Нижня блефаропластика — це делікатне хірургічне втручання, спрямоване на видалення
                жирових гриж (мішків під очима) та надлишків в&apos;ялої шкіри.
              </p>
              <p className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed">
                <span className="text-blue-00 dark:text-blue-900 font-medium">
                  🔹 Розріз виконується безпосередньо під лінією вій, що дозволяє приховати рубець у
                  природній складці шкіри.
                </span>
                <br />
                <span className="text-blue-900 dark:text-blue-00 font-medium">
                  🔹 Операція проводиться амбулаторно, під місцевою анестезією.
                </span>
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                Що дає операція:
              </p>
              <ul className="ml-5 sm:ml-6 mb-4 sm:mb-5 list-none">
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="text-blue-900 dark:text-blue-900 font-bold mr-2">✔</span>
                  Усунення жирових гриж
                </li>
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="text-blue-900 dark:text-blue-900 font-bold mr-2">✔</span>
                  Позбавлення від набряклості під очима
                </li>
                <li className="mb-2 sm:mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="text-blue-900 dark:text-blue-900 font-bold mr-2">✔</span>
                  Освіження погляду
                </li>
              </ul>
              <div className="bg-blue-100/60 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-400 p-3 sm:p-4 mb-4 sm:mb-5 rounded">
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 mb-2 leading-relaxed">
                  <span className="text-red-500 font-bold mr-2">⚠️</span>
                  Зморшки у зоні гусячих лапок не завжди зникають повністю після операції.
                </p>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 mb-0 leading-relaxed">
                  Для досягнення ідеального результату рекомендовано додатково застосовувати
                  косметологічні процедури, наприклад: — ін&apos;єкції ботулотоксину (ботокс).
                </p>
              </div>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                Реабілітація:
              </p>
              <ul className="ml-5 sm:ml-6 mb-4 sm:mb-5 list-disc marker:text-blue-500 dark:marker:text-blue-400">
                <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Шви знімаються на 6–7 день
                </li>
                <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Період відновлення зазвичай проходить комфортно та швидко
                </li>
              </ul>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 leading-relaxed font-semibold">
                Кругова блефаропластика
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                Пластика нижніх повік часто поєднується з верхньою — така комбінована процедура
                називається круговою блефаропластикою.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  💫 Вона дозволяє миттєво омолодити та освіжити зону навколо очей, надаючи обличчю
                  відпочилого та молодшого вигляду.
                </span>
              </p>
            </div>
            <div className="flex-[1.5]">
              <BlepharoPreparationGallery
                images={lowerEyelidImages}
                galleryId="lower-eyelid-gallery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlepharoPreparation;
