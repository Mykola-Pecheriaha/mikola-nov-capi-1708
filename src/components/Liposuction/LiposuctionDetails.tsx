'use client';
import { LiposuctionGallery } from './LiposuctionGallery';
import type { GalleryImage } from './LiposuctionGallery';

export function LiposuctionDetails() {
  // Зображення для головної галереї
  const mainGalleryImages: GalleryImage[] = [
    {
      src: '/images/liposuction/liposuction18.jpg',
      alt: 'Ілюстрація процедури ліпосакції',
      width: 800,
      height: 600,
      title: 'Ділянки ліпосакції',
    },
    {
      src: '/images/liposuction/liposuction17.jpg',
      alt: 'Результати ліпосакції',
      width: 800,
      height: 600,
      title: 'Результати ліпосакції',
    },
    {
      src: '/images/liposuction/indication2.jpg',
      alt: 'Сучасні пристрої для ліпосакції',
      width: 800,
      height: 600,
      title: 'Шийний горб',
    },
  ];

  // Зображення для галереї першого сегменту
  const firstSegmentGalleryImages: GalleryImage[] = [
    {
      src: '/images/liposuction/abdominoplastic2.jpg',
      alt: 'Консультація перед ліпосакцією',
      width: 800,
      height: 600,
      title: 'Консультація перед ліпосакцією',
    },
    {
      src: '/images/liposuction/liposuction6.jpg',
      alt: 'Підготовка до ліпосакції',
      width: 800,
      height: 600,
      title: 'Підготовка до ліпосакції',
    },
    {
      src: '/images/liposuction/liposuction7.jpg',
      alt: 'Підготовка до ліпосакції',
      width: 800,
      height: 600,
      title: 'Підготовка до ліпосакції',
    },
    {
      src: '/images/liposuction/liposuction8.jpg',
      alt: 'Підготовка до ліпосакції',
      width: 800,
      height: 600,
      title: 'Підготовка до ліпосакції',
    },
  ];

  // Зображення для галереї другого сегменту
  const secondSegmentGalleryImages: GalleryImage[] = [
    {
      src: '/images/liposuction/liposuction12.jpg',
      alt: 'Тумесцентна ліпосакція',
      width: 800,
      height: 600,
      title: 'Тумесцентна ліпосакція',
    },
    {
      src: '/images/liposuction/liposuction9.jpg',
      alt: 'Вакуумна ліпосакція',
      width: 800,
      height: 600,
      title: 'Вакуумна ліпосакція',
    },
    {
      src: '/images/liposuction/liposuction11.jpg',
      alt: 'Ультразвукова ліпосакція',
      width: 800,
      height: 600,
      title: 'Ультразвукова ліпосакція',
    },
    {
      src: '/images/liposuction/liposuction13.jpg',
      alt: 'Радіочастотна ліпосакція',
      width: 800,
      height: 600,
      title: 'Радіочастотна ліпосакція',
    },
    {
      src: '/images/liposuction/liposuction10.jpg',
      alt: 'Лазерна ліпосакція',
      width: 800,
      height: 600,
      title: 'Лазерна ліпосакція',
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Головна секція */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              <span className="text-blue-500 dark:text-blue-400 mr-2">✦</span> Що таке Ліпосакція?
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              <span className="text-blue-500 dark:text-blue-400 mr-2">🔹</span> Ліпосакція
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Ліпосакція — це хірургічна процедура, яка видаляє{' '}
              <span className="font-bold text-gray-800 dark:text-gray-100">жирові відкладення</span>{' '}
              з певних ділянок тіла, таких як:
            </p>
            <ul className="list-none space-y-2 mb-6 ml-6">
              <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                живіт
              </li>
              <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                стегна
              </li>
              <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                сідниці
              </li>
              <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                руки
              </li>
              <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                шия
              </li>
            </ul>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 rounded-lg mb-4">
              <p className="text-lg text-yellow-800 dark:text-yellow-200 font-medium">
                <span className="mr-2">⚠️</span>
                <strong>Важливо:</strong> Ліпосакція{' '}
                <span className="font-semibold text-yellow-900 dark:text-yellow-100">
                  не є методом схуднення
                </span>
                .
              </p>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Це спосіб{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                контурного моделювання тіла
              </span>{' '}
              для покращення його форми та пропорцій.
            </p>
          </div>
          <div className="flex-1">
            <LiposuctionGallery images={mainGalleryImages} />
          </div>
        </div>

        {/* Розділювач */}
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent my-12 rounded"></div>

        {/* Перший сегмент */}
        <div className="mb-12">
          {/* Верхня частина першого сегменту */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              <span className="text-blue-500 dark:text-blue-400 mr-2">✦</span> Ліпосакція —
              мистецтво ліній і форм
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Ліпосакція — це не просто хірургічна процедура, а естетичне вдосконалення тіла. Вона
              спрямована на делікатне моделювання фігури: усунення стійких жирових відкладень для
              досягнення бажаної форми та пропорцій. Процедура проводиться на різних зонах — живіт,
              стегна, боки, руки, підборіддя — щоб відкрити природну красу контурів.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-lg">
              <p className="text-lg text-blue-800 dark:text-blue-200">
                <span className="mr-2">📊</span>З 2015 року ліпосакція входить до трійки
                найпопулярніших пластичних операцій у США та Європі. Це вибір тих, хто прагне
                гармонії у зовнішності без зайвих компромісів.
              </p>
            </div>
          </div>

          {/* Нижня частина першого сегменту */}
          <div className="flex flex-col lg:flex-row gap-8 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-lg">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                <span className="text-blue-500 dark:text-blue-400 mr-2">🔹</span> Ліпосакція — не
                для схуднення
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Багато хто помилково вважає ліпосакцію швидким способом позбутися зайвої ваги. Проте
                це — міф. Операція не знижує масу тіла, а лише підкреслює лінії тіла, викреслюючи
                надлишкові обєми з точністю художника.
              </p>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-lg mb-6">
                <p className="text-lg text-red-800 dark:text-red-200">
                  <span className="mr-2">❗️</span>
                  Ліпосакція не призначена для боротьби з ожирінням. Ідеальний пацієнт — це людина з
                  стабільною вагою, яка хоче позбутися локальних жирових відкладень, що
                  накопичуються у так званих «депо-зонах» — найстійкіших ділянках тіла.
                </p>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                <span className="text-blue-500 dark:text-blue-400 mr-2">🔹</span> Ліпосакція — для
                всіх
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Стереотип, що ліпосакція — це виключно жіноча процедура, давно застарів. Все більше
                чоловіків обирають цей шлях, щоб підкреслити рельєфність, вдосконалити фігуру та
                повернути собі впевненість.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-5 rounded-lg mb-6">
                <p className="text-lg text-green-800 dark:text-green-200 italic">
                  <span className="mr-2">💬</span>
                  Краса не має статі — вона має форму, гармонію і впевненість.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-2 font-medium">
                  🔹 Ліпосакція — це не про втечу від зайвого, а про шлях до себе справжнього.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                  🔹 Це про баланс, легкість, і той особливий момент, коли ти дивишся у дзеркало й
                  бачиш гармонію.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <LiposuctionGallery images={firstSegmentGalleryImages} />
            </div>
          </div>
        </div>

        {/* Розділювач */}
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent my-12 rounded"></div>

        {/* Другий сегмент */}
        <div>
          {/* Верхня частина другого сегменту */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              <span className="text-blue-500 dark:text-blue-400 mr-2">✦</span> Види ліпосакції
              живота
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Відповідаючи на питання, як проводиться ліпосакція живота, важливо розглянути її
              основні методики. Сучасні клініки пластичної хірургії застосовують такі технології:
            </p>
            <h4 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              <span className="text-blue-500 dark:text-blue-400 mr-2">✅</span> Тумесцентна
              ліпосакція
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Одна з найпоширеніших технік так званих вологих операцій. У зону втручання пластичний
              хірург вводить розчин Кляйна, що містить:
            </p>
            <ul className="list-none space-y-2 mb-4 ml-6">
              <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                анестетик (лідокаїн),
              </li>
              <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                сольовий розчин,
              </li>
              <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                адреналін.
              </li>
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Цей коктейль знеболює тканини та розріджує жирові відкладення, полегшуючи їх
              виведення. Після цього виконується вакуумне відсмоктування жиру.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-5 rounded-lg mb-6">
              <p className="text-lg text-red-800 dark:text-red-200">
                <span className="mr-2">⚠️</span>
                Недолік тумесцентної ліпосакції — підвищений ризик набряків і синців.
              </p>
            </div>
            <h4 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              <span className="text-blue-500 dark:text-blue-400 mr-2">✅</span> Вакуумна ліпосакція
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Найбільш популярний і ефективний метод боротьби з жировими відкладеннями. Через
              мікропроколи за допомогою канюлі, під`єднаної до вакуумного апарата, пластичний хірург
              делікатно видаляє жирову клітковину.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-5 rounded-lg">
              <p className="text-lg text-green-800 dark:text-green-200">
                <span className="mr-2">✅</span>
                Методика впливає саме на жирові клітини, ефективно зменшуючи обʼєм тканин та
                мінімізуючи ризик утворення синців.
              </p>
            </div>
          </div>

          {/* Нижня частина другого сегменту */}
          <div className="flex flex-col lg:flex-row gap-8 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-lg">
            <div className="flex-1">
              <h4 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                <span className="text-blue-500 dark:text-blue-400 mr-2">✅</span> Ультразвукова
                ліпосакція
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                На жирові відкладення спрямовується ультразвук, який:
              </p>
              <ul className="list-none space-y-2 mb-4 ml-6">
                <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                  розігріває тканини,
                </li>
                <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                  руйнує жировий шар.
                </li>
              </ul>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Особливо ефективна при невеликих обсягах жиру.
              </p>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                <span className="text-blue-500 dark:text-blue-400 mr-2">✅</span> Радіочастотна
                ліпосакція
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Процедура відбувається за допомогою електрода та випромінювача:
              </p>
              <ul className="list-none space-y-2 mb-4 ml-6">
                <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                  електрод поміщають під шкіру,
                </li>
                <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                  випромінювач залишають на поверхні.
                </li>
              </ul>
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-5 rounded-lg mb-6">
                <p className="text-lg text-green-800 dark:text-green-200">
                  <span className="mr-2">✔️</span>
                  Між ними створюється радіохвильова енергія, яка руйнує жирові клітини.
                </p>
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                <span className="text-blue-500 dark:text-blue-400 mr-2">✅</span> Лазерна ліпосакція
              </h4>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Одна з найсучасніших методик — використання лазерного зонда, який не лише:
              </p>
              <ul className="list-none space-y-2 mb-4 ml-6">
                <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                  видаляє жир,
                </li>
                <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                  але й стимулює вироблення колагену,
                </li>
                <li className="text-lg text-gray-600 dark:text-gray-300 before:content-['–'] before:text-blue-500 before:font-bold before:mr-2">
                  покращує якість і пружність шкіри.
                </li>
              </ul>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Відмінність між ними полягає у способі руйнування жирових тканин та клітин.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-2 font-medium">
                  🔹 Кожен метод має свої особливості.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                  🔹 Вибір техніки визначає хірург залежно від анатомії пацієнта та бажаного
                  результату.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <LiposuctionGallery images={secondSegmentGalleryImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiposuctionDetails;
