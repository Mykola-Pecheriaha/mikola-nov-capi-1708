"use client";

import React from "react";
import { GalleryProctoSimptomConsul } from "./GalleryProctoSimptomConsul";

const ProctoSimptomConsul: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Симптоми захворювання
      </h1>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <p className="mb-4 text-blue-900 text-base">
            Зазвичай ранні стадії варикозу проходять непомітно, але з часом з’являються наступні симптоми:
          </p>
          <ul className="list-disc list-inside space-y-2 text-blue-900 text-base font-medium mb-4">
            <li>гострі або тупі болі в області промежини та ануса. Болісні відчуття посилюються під час ходьби чи сидіння;</li>
            <li>виділення крові, слизу чи гною з ануса;</li>
            <li>поява новоутворень або змін шкірного покриву в зоні промежини та ануса;</li>
            <li>відчуття сверблячки та печіння в зоні ануса;</li>
            <li>хвороблива дефекація;</li>
            <li>хронічні запори чи проноси, їх чергування;</li>
            <li>нетримання калу;</li>
            <li>вихід з ануса гемороїдальних шишок;</li>
            <li>травматичні ушкодження заднього проходу;</li>
            <li>стороннє тіло у прямій кишці.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryProctoSimptomConsul />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Як проходить прийом проктолога</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <p className="mb-2">
              Прийом починається зі стандартної процедури збирання анамнезу. Лікар з&apos;ясовує скарги пацієнта, як давно відчуває дискомфорт, чи є хронічні захворювання.
            </p>
            <p className="mb-2">
              Потім проводиться зовнішній огляд зони промежини та анусу, а також ректальне обстеження.
            </p>
            <p className="mb-2">
              У ряді випадків цього достатньо для встановлення діагнозу геморою, випадання прямої кишки, анальних тріщин, поліпів, кондилом.
            </p>
            <p className="mb-2">
              Якщо для діагностики потрібні додаткові дослідження, призначаються:
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>аноскопія,</li>
              <li>ректороманоскопія,</li>
              <li>колоноскопія.</li>
            </ul>
            <p className="mb-2">
              У першому випадку за допомогою анаскопа досліджується нижній відділ прямої кишки.
            </p>
            <p>
              Ректороманоскопія дозволяє обстежити пряму кишку на глибину 25 см, а колоноскопія – весь товстий кишечник.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProctoSimptomConsul;
