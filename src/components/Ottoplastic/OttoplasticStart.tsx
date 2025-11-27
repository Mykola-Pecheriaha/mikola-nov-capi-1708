'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import OttoplasticGallery, { type GalleryImage } from './OttoplasticGallery';

export default function OttoplasticStart() {
  const [imageSrc, setImageSrc] = useState('/images/ottoplastic/otto2-removebg-preview.png');
  const [imageLoaded, setImageLoaded] = useState(false);

  // Перевірка доступності зображення
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkImageExists = async () => {
      try {
        const response = await fetch(imageSrc, { method: 'HEAD' });
        if (!response.ok) {
          setImageSrc('/placeholder.svg?height=400&width=500');
        }
        setImageLoaded(true);
      } catch (error) {
        console.error('Помилка завантаження зображення:', error);
        setImageSrc('/placeholder.svg?height=400&width=500');
        setImageLoaded(true);
      }
    };

    checkImageExists();
  }, [imageSrc]);

  // Масив зображень для галереї
  const galleryImages: GalleryImage[] = [
    {
      src: '/images/ottoplastic/otto6.jpg',
      alt: 'До і після отопластики - приклад 1',
      width: 800,
      height: 700,
      title: 'До і після отопластики - приклад 1',
    },
    {
      src: '/images/ottoplastic/otto5.jpg',
      alt: 'До і після отопластики - приклад 2',
      width: 800,
      height: 1000,
      title: 'До і після отопластики - приклад 2',
    },
    {
      src: '/images/ottoplastic/otto7.jpg',
      alt: 'До і після отопластики - приклад 3',
      width: 800,
      height: 1000,
      title: 'До і після отопластики - приклад 3',
    },
    {
      src: '/images/ottoplastic/otto3.jpg',
      alt: 'До і після отопластики - приклад 4',
      width: 800,
      height: 1000,
      title: 'До і після отопластики - приклад 4',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Верхня секція - дві колонки */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Ліва колонка */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 md:mb-8 leading-tight">
              Отопластика — корекція форми вушних раковин та дольки вух
            </h1>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-gray-700">
              <p className="text-lg md:text-xl font-semibold text-blue-800 dark:text-blue-700 mb-4 flex items-center">
                <span className="text-2xl mr-2">🔹</span>
                Основні переваги:
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 dark:text-green-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    ✔️
                  </span>
                  <span>Бажана форма та розмір вушних раковин</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 dark:text-green-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    ✔️
                  </span>
                  <span>Виправлення асиметрії</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 dark:text-green-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    ✔️
                  </span>
                  <span>Без гематом і помітних рубців</span>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-green-500 dark:text-green-400 mr-3 mt-1 flex-shrink-0 text-xl">
                    ✔️
                  </span>
                  <span>Корекція вродженої та набутої деформації дольки вуха</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - зображення */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            {imageLoaded ? (
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src={imageSrc}
                  alt="Отопластика - корекція клаповухості"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-80 md:h-96 lg:h-[500px] bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500">Завантаження...</span>
              </div>
            )}
          </div>
        </div>

        {/* Середня секція - на всю ширину */}
        <div className="mb-12 md:mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-gray-700">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              <span className="text-2xl mr-2">🔹</span>
              <strong className="text-blue-800 dark:text-blue-800">Отопластика </strong>— це
              популярна пластична операція, що дозволяє ефективно скоригувати:
            </p>
            <ul className="space-y-2 md:space-y-3 mb-6 list-disc list-inside text-base md:text-lg text-gray-700 dark:text-gray-300 pl-4">
              <li>асиметрію вушних раковин</li>
              <li>клаповухість</li>
              <li>надмірну відстовбурченість вух</li>
              <li>порушення структури вушних раковин</li>
              <li>вроджену чи набуту деформацію дольки вух</li>
            </ul>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Операція виконується як для{' '}
              <strong className="text-blue-800 dark:text-blue-800">дорослих</strong>, так і для{' '}
              <strong className="text-blue-800 dark:text-blue-400">дітей</strong>, за медичними чи
              естетичними показаннями.
            </p>
          </div>
        </div>

        {/* Нижня секція - дві колонки */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Ліва колонка */}
          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-gray-700 h-full">
              <p className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">🌟</span>
                Результат отопластики:
              </p>
              <ul className="space-y-2 md:space-y-3 list-disc list-inside text-base md:text-lg text-gray-700 dark:text-gray-300 pl-4">
                <li>усунення фізичних вад</li>
                <li>гармонізація рис обличчя</li>
                <li>підвищення впевненості в собі</li>
                <li>позбавлення психологічного дискомфорту</li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full md:w-1/2">
            <OttoplasticGallery images={galleryImages} />
          </div>
        </div>

        {/* Остання секція - на всю ширину */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 md:p-8 border-l-8 border-blue-500 dark:border-blue-400 shadow-md">
          <p className="text-lg md:text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4 flex items-center">
            <span className="text-2xl mr-2">🔍</span>
            Цікаво знати:
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Клаповухість — є одна з найпоширеніших вушних деформацій. За статистикою, вона
            зустрічається у{' '}
            <strong className="text-blue-600 dark:text-blue-400">близько 5% людей</strong>. І хоча
            це не загрожує здоров`ю, така особливість часто стає{' '}
            <strong className="text-blue-600 dark:text-blue-400">
              причиною заниженої самооцінки
            </strong>
            , особливо в підлітковому віці.
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Порушення структури дольки вух — є набута чи вроджена деформація. На сьогоднішній день
            дуже частою деформацією дольки є{' '}
            <strong className="text-blue-600 dark:text-blue-400">носіння різних прикрас</strong>, що
            значно змінює (деформує) її. І хоча це не загрожує здоров`ю, при досягненні більш
            зрілого віку або зміні навколишнього соціуму{' '}
            <strong className="text-blue-600 dark:text-blue-400">
              є причиною зміни самооцінки
            </strong>
            . Також потрібно враховувати травми дольки кримінального характеру.
          </p>
        </div>
      </div>
    </section>
  );
}
