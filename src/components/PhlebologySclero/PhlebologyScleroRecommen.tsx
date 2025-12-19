"use client";

import React from "react";
import { GalleryScleroRecommen } from "./GalleryScleroRecommen";

const PhlebologyScleroRecommen: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Рекомендації відновлювального періоду
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Відразу після процедури пацієнту замотують ноги еластичним бинтом – його не можна знімати 2-3 дні. Щойно сеанс завершився, потрібно походити у швидкому темпі 40-60 хвилин – це посилить компресію.<br/><br/>
            Після того, як пацієнту провели видалення вен (склеротерапія), йому потрібний час на реабілітацію. Її терміни залежить від ступеню важкості захворювання та особливостей організму. В одних цей процес займає 2-3 тижні, в інших – до 2 місяців. Щоб відновлення пройшло успішно, рекомендується:
          </div>
        </div>
      </div>
      {/* Дві частини: текст та галерея */}
      <div className="flex flex-col lg:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-start">
        {/* Ліва частина */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <ul className="list-disc list-inside space-y-3 text-blue-900 text-base font-medium mb-4">
            <li>носити еластичний бинт;</li>
            <li>уникати тривалого сидіння чи стояння;</li>
            <li>частіше гуляти пішки;</li>
            <li>відмовитися від важких фізичних навантажень;</li>
            <li>не відвідувати сауну та лазню;</li>
            <li>замість ванни купатися під душем.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <GalleryScleroRecommen />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">⚠️</span>
          <div className="text-blue-900 text-base">
            Якщо не дотримуватись цих рекомендацій після склеротерапії, наслідки можуть бути серйозними. На шкірі у місці уколів може утворитися гіперпігментація, запальний процес чи некроз. Також можливі тромбози та інші ускладнення.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhlebologyScleroRecommen;
