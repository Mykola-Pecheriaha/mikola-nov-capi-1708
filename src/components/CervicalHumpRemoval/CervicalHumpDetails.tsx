'use client';
import React from 'react';
import CervicalHumpDetailsGallery, { GalleryImage } from './CervicalHumpDetailsGallery';

const cervicalHumpImages: GalleryImage[] = [
  {
    src: '/images/cervical-hump/liposuction26.jpg',
    alt: 'Гормональний дисбаланс',
    width: 800,
    height: 600,
    title: 'Гормональний дисбаланс',
  },
  {
    src: '/images/cervical-hump/liposuction27.jpg',
    alt: 'Хвороба Іценка-Кушинга',
    width: 800,
    height: 600,
    title: 'Хвороба Іценка-Кушинга',
  },
  {
    src: '/images/cervical-hump/liposuction32.jpg',
    alt: 'Наслідки шийного горба',
    width: 800,
    height: 600,
    title: 'Зайва вага та наслідки',
  },
  {
    src: '/images/cervical-hump/liposuction29.jpg',
    alt: 'Лікування шийного горба',
    width: 800,
    height: 600,
    title: 'Травми хребта',
  },
];

export default function CervicalHumpDetails() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-12 md:mb-16">
          Причини виникнення шийного горба
        </h2>

        {/* Дві колонки: текст зліва, галерея справа */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Ліва колонка - текст з причинами */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-blue-100 dark:border-blue-900">
              <ul className="space-y-5 md:space-y-6">
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-semibold">Порушення гормонального фону.</span> - Зниження
                    синтезу гормонів у період клімаксу, що призводить до посиленого утворення
                    жирової тканини.
                  </div>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-semibold">Хвороба Іценка-Кушинга</span> – утворення
                    надлишку гормонів у надниркових залозах.
                  </div>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-semibold">Зайва вага</span>, яка часто стає причиною тих
                    же гормональних порушень.
                  </div>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-semibold">Генетична схильність</span>. Якщо у вашому роді
                    у когось була ця патологія, велика ймовірність її виникнення у вас.
                  </div>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-semibold">Травми хребта</span>. Через травму може
                    обмежуватися рухливість, що спричиняє активне скупчення жиру у комірній зоні.
                  </div>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-semibold">Остеопороз</span>, який проявляється нестачею
                    кальцію в кістках.
                  </div>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-semibold">Шийний остеохондроз</span>, що супроводжується
                    відкладенням солей, у результаті з&apos;являється жировий валик.
                  </div>
                </li>
                <li className="flex items-start text-base md:text-lg text-gray-800 dark:text-gray-200">
                  <span className="text-2xl mr-3 md:mr-4 flex-shrink-0">🔹</span>
                  <div>
                    <span className="font-semibold">Неправильна постава</span> (особливо під час
                    роботи за комп&apos;ютером) та малорухливий спосіб життя
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Права колонка - галерея */}
          <div className="w-full lg:w-1/2">
            <CervicalHumpDetailsGallery images={cervicalHumpImages} />
          </div>
        </div>

        {/* Секція на всю ширину - небезпека */}
        <div className="w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6 md:mb-8">
            Чим небезпечний клімактеричний горб?
          </h3>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 md:p-6 border-l-4 border-blue-500 dark:border-blue-400">
              <p className="text-base md:text-lg text-blue-900 dark:text-blue-100 leading-relaxed">
                <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">⇒</span>
                Крім того, що вдовиний горб завдає естетичного дискомфорту (його складно сховати
                навіть під одягом), насамперед це – захворювання, яке може призвести до погіршення
                якості життя людини.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 md:p-6 border-l-4 border-blue-500 dark:border-blue-400">
              <p className="text-base md:text-lg text-blue-900 dark:text-blue-100 leading-relaxed">
                <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">⇒</span>
                Скупчення жиру тисне на м&apos;язи, скелет і судини, що призводить до атрофії
                м&apos;язів у цій галузі, а це спричиняє викривлення хребта.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 md:p-6 border-l-4 border-blue-500 dark:border-blue-400">
              <p className="text-base md:text-lg text-blue-900 dark:text-blue-100 leading-relaxed">
                <span className="text-blue-500 dark:text-blue-400 font-bold mr-2">⇒</span>
                Також збільшення горба призводить до порушення кровотоку до голови, від чого
                з&apos;являється хронічна втома, дратівливість, хронічні болі в області шиї та
                хребта. Розберемося ж як позбутися горба на спині?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
