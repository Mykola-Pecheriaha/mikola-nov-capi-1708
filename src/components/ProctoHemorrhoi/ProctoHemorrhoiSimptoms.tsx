"use client";

import React from "react";
import { GalleryProctoHemorrhoiSimptoms } from "./GalleryProctoHemorrhoiSimptoms";

const ProctoHemorrhoiSimptoms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Симптоми геморою
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Симптоми геморою можуть варіюватися залежно від його стадії та виду. Розглянемо клінічні прояви гострої та хронічної форм цієї патології.
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-900">Симптоми гострого геморою:</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-900 text-base font-medium mb-4">
            <li>різкий біль у ділянці заднього проходу, що посилюється під час дефекації;</li>
            <li>набряк і запалення гемороїдальних вузлів, видимих під час огляду;</li>
            <li>кровотеча під час дефекації, зазвичай яскравого кольору;</li>
            <li>свербіж і печіння в анальній ділянці;</li>
            <li>можливе підвищення температури тіла;</li>
            <li>відчуття стороннього тіла в задньому проході.</li>
          </ul>
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-blue-900">Симптоми хронічного геморою:</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-900 text-base font-medium mb-4">
            <li>періодичний дискомфорт у ділянці заднього проходу;</li>
            <li>виділення крові під час дефекації, зазвичай у невеликій кількості;</li>
            <li>випадання гемороїдальних вузлів, особливо після дефекації;</li>
            <li>відчуття неповного випорожнення кишечника;</li>
            <li>анальний свербіж;</li>
            <li>виділення слизу;</li>
            <li>можливі труднощі з гігієною анальної ділянки.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryProctoHemorrhoiSimptoms />
        </div>
      </div>
    </div>
  );
};

export default ProctoHemorrhoiSimptoms;
