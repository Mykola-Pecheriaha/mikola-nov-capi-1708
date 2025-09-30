"use client";

import React from "react";
import { GalleryProctoHemorrhoiStages } from "./GalleryProctoHemorrhoiStages";

const ProctoHemorrhoiStages: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Стадії (ступені) геморою
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Геморой може розвиватися поступово, переходячи з однієї стадії в іншу. Залежно від тяжкості симптомів та розміру гемороїдальних вузлів, виділяють чотири основні стадії (ступені):
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <ul className="list-disc list-inside space-y-2 text-blue-900 text-base font-medium mb-4">
            <li><b>I (перша) стадія</b> — На цій стадії гемороїдальні вузли лише починають формуватися і знаходяться всередині прямої кишки. Симптоми можуть бути слабо вираженими і включати легкий дискомфорт або незначну кровотечу під час дефекації.</li>
            <li><b>II (друга) стадія</b> — Гемороїдальні вузли збільшуються і можуть випадати з анального отвору під час дефекації, але вони самостійно повертаються назад. Симптоми стають більш вираженими, з’являються біль і свербіж.,</li>
            <li><b>III (третя) стадія</b> — Вузли випадають з анального отвору не тільки під час дефекації, але й при фізичних навантаженнях. Вони можуть бути повернуті на місце тільки вручну. На цій стадії біль і дискомфорт можуть бути значними.,</li>
            <li><b>IV (четверта) стадія</b> — Гемороїдальні вузли постійно знаходяться зовні і не можуть бути повернуті на місце вручну. Ця стадія супроводжується постійним болем, запаленням і ризиком тромбозу..</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryProctoHemorrhoiStages />
        </div>
      </div>
    </div>
  );
};

export default ProctoHemorrhoiStages;
