'use client';

import React, { type ReactElement } from 'react';
import Image from 'next/image';

export default function BreastAugmentationStart(): ReactElement {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-900 mb-8 md:mb-12">
          Збільшення молочних залоз
        </h1>

        {/* Дві колонки: текст і зображення */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Ліва частина - текст */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-center text-base md:text-lg text-gray-800">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></span>
                <span className="font-medium">Бажаний об&apos;єм</span>
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-800">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></span>
                <span className="font-medium">Ідеальна форма</span>
              </li>
              <li className="flex items-center text-base md:text-lg text-gray-800">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></span>
                <span className="font-medium">Довічний результат</span>
              </li>
            </ul>
          </div>

          {/* Права частина - зображення */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/breast-augmento/cartca5-removebg-preview.png"
                alt="Збільшення грудей"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Три інформаційні блоки на всю ширину */}
        <div className="w-full max-w-5xl mx-auto space-y-6 md:space-y-8">
          {/* Перший блок */}
          <div
            className="bg-blue-50 rounded-xl p-4 md:p-6 text-blue-900 text-sm md:text-base font-medium shadow-sm border-l-8 border-blue-400"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              <span className="text-xl md:text-2xl mr-2">⇒</span>
              <span className="font-bold">Збільшення грудей (мамопластика)</span> — це сучасна
              хірургічна процедура, що дозволяє досягти бажаного об&apos;єму та форми грудей за
              допомогою високоякісних імплантатів. Завдяки новітнім технологіям і матеріалам
              результат виглядає максимально природно та зберігається на довгі роки.
            </p>
          </div>

          {/* Другий блок */}
          <div
            className="bg-blue-50 rounded-xl p-4 md:p-6 text-blue-900 text-sm md:text-base font-medium shadow-sm border-l-8 border-blue-400"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              <span className="text-xl md:text-2xl mr-2">⇒</span>
              <span className="font-bold">
                Ми застосовуємо індивідуальний підхід до кожної пацієнтки
              </span>
              , враховуючи її анатомічні особливості, побажання та спосіб життя, щоб досягти
              найкращого естетичного результату. У своїй роботі використовуємо лише сучасні
              імплантати, які забезпечують природний вигляд і комфортні відчуття. Особливу увагу
              приділяємо безпеці пацієнтки та зведенню до мінімуму періоду відновлення.
            </p>
          </div>

          {/* Третій блок */}
          <div
            className="bg-blue-50 rounded-xl p-4 md:p-6 text-blue-900 text-sm md:text-base font-medium shadow-sm border-l-8 border-blue-400"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <p className="leading-relaxed">
              <span className="text-xl md:text-2xl mr-2">⇒</span>
              <span className="font-bold">Перед операцією проводиться детальна консультація</span>,
              під час якої хірург разом із пацієнткою підбирає оптимальний розмір, форму й тип
              імплантатів, а також обговорюються всі аспекти процедури та відновлення. Наша мета —
              не лише покращити зовнішність, а й підвищити впевненість у собі та якість життя кожної
              жінки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
