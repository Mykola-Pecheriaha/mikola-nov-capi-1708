'use client';
import Link from 'next/link';
import { ButtockRehabilitationGallery, type GalleryImage } from './ButtockRehabilitationGallery';
import { ButtockReabilstBrazilGallery } from './ButtockReabilstBrazilGallery';

// Зображення для галереї після встановлення імплантів
const implantImages: GalleryImage[] = [
  {
    src: '/images/buttockAugment/buttock-augment34.jpg',
    alt: 'Реабілітація після встановлення імплантів',
    width: 800,
    height: 600,
    title: 'Реабілітація - день 1',
  },
  {
    src: '/images/buttockAugment/buttock-augment35.jpg',
    alt: 'Компресійна білизна',
    width: 800,
    height: 600,
    title: 'Компресійна білизна',
  },
  {
    src: '/images/buttockAugment/buttock-augment36.jpg',
    alt: 'Процес одужання',
    width: 800,
    height: 600,
    title: 'Процес одужання',
  },
  {
    src: '/images/buttockAugment/buttock-augment32.jpg',
    alt: 'Результат після реабілітації',
    width: 800,
    height: 600,
    title: 'Результат',
  },
];

// Зображення для галереї після бразильської підтяжки
const brazilianLiftImages: GalleryImage[] = [
  {
    src: '/images/buttockAugment/buttock-augment33.jpg',
    alt: 'Бразильська підтяжка - реабілітація',
    width: 800,
    height: 600,
    title: 'Після операції',
  },
  {
    src: '/images/buttockAugment/buttock-augment37.jpg',
    alt: 'Компресійна білизна для бразильської підтяжки',
    width: 800,
    height: 600,
    title: 'Компресійна білизна',
  },
  {
    src: '/images/buttockAugment/buttock-augment38.jpg',
    alt: 'Процес відновлення',
    width: 800,
    height: 600,
    title: 'Відновлення',
  },
  {
    src: '/images/buttockAugment/buttock-augment39.jpg',
    alt: 'Результат бразильської підтяжки',
    width: 800,
    height: 600,
    title: 'Фінальний результат',
  },
];

export default function ButtockRehabilitation() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Реабілітаційний період
        </h2>

        {/* Перша секція: Після встановлення імплантатів */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Після встановлення імплантатів
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Текстова частина */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Протягом перших кількох днів пацієнти можуть відчувати значний біль та
                    дискомфорт у ділянці сідниць. Можна прийняти знеболювальні препарати, які
                    призначив лікар.
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 text-xl mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        носити компресійну білизну для підтримки тканин сідниць
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 text-xl mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        не приймати душ впродовж 48 годин після операції
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 text-xl mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        не сидіти та не спати на спині протягом трьох тижнів після встановлення
                        імплантів
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 text-xl mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        відмовитися від відвідування лазні, солярію, сауни впродовж двох місяців
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Галерея */}
                <div>
                  <ButtockRehabilitationGallery images={implantImages} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Друга секція: Після бразильської підтяжки */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Після бразильської підтяжки
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Текстова частина */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Безпосередньо після операції виникають біль, набряки та синці як у ділянці
                    сідниць, так і в місцях забору жиру. Лікар призначить знеболювальні препарати та
                    компресійну білизну для зменшення набряків та формування нових контурів тіла.
                  </p>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 text-xl mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Протягом перших 24-48 годин пацієнти повинні уникати сидіння та тиску на
                        сідниці
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 text-xl mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Рекомендується лежати на животі чи боці
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 text-xl mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Компресійну білизну необхідно постійно носити, щоб підтримувати рівномірний
                        розподіл жиру
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 text-xl mr-3 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Протягом двох тижнів бажано уникати інтенсивних фізичних тренувань і
                        намагатись менше сидіти
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Галерея */}
                <div>
                  <ButtockReabilstBrazilGallery images={brazilianLiftImages} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Третя секція: Загальна інформація */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border-l-8 border-blue-500">
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            Після глютеопластики не можна робити уколи в сідниці, щоб не пошкодити цілісність
            імплантів. Також не рекомендується займатися спортом впродовж двох-трьох місяців після
            збільшення сідниць. Повна реабілітація займає чотири тижні.
          </p>
        </div>

        {/* Заклик до дії */}
        <div className="mt-10 text-center p-10 md:p-8 sm:p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-md border border-blue-100 dark:border-blue-900 backdrop-blur-sm">
          <p className="text-xl md:text-lg mb-5 text-gray-800 dark:text-gray-100">
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <Link href="/ask-doctor">
            <button className="bg-blue-500 dark:bg-blue-600 text-white border-none px-7 py-3 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 shadow-md hover:bg-blue-600 dark:hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg">
              Зв&apos;язатися з нами
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
