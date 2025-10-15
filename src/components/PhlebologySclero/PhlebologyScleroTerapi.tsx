"use client";

import { GalleryPhlebologySclero } from "./GalleryPhlebologySclero";
import React from "react";

const PhlebologyScleroTerapi: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Склеротерапія варикозорозширених вен
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Склеротерапія – це нехірургічний метод лікування варикозу, який полягає в введенні спеціальної речовини, відомої як склерозуюча агент, безпосередньо в пошкоджені вени. Цей агент призводить до “склеювання” стінок пошкоджених вен, що призводить до їх зникнення або зменшення розміру
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <ul className="list-disc list-inside space-y-3 text-blue-900 text-base font-medium mb-4">
            <li>висока ефективність та моментальний результат;</li>
            <li>малоінвазивність;</li>
            <li>безпека – біоклей не викликає алергії або інших ускладнень, а згодом повністю розсмоктується, як і склеєна вена;</li>
            <li>безболісність – не потрібен наркоз або складна анестезія, знеболюють тільки місце проколу;</li>
            <li>естетичність результату – відсутні шви, шрами або інші пошкодження шкіри;</li>
            <li>відсутність періоду реабілітації – не потрібно носити компресійні панчохи або дотримуватися інших обмежень;</li>
            <li>можливість проведення пацієнтам з протипоказаннями до наркозу та анестезії.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryPhlebologySclero />
        </div>
      </div>
    </div>
  );
};

export default PhlebologyScleroTerapi;
