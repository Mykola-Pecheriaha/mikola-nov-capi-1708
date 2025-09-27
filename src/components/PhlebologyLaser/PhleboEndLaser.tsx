import React from "react";
import { GalleryPhleboEndLaser } from "./GalleryPhleboEndLaser";

const PhleboEndLaser: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок по центру */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Плюси та мінуси ендовазальної лазерної коагуляції вен
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Основними перевагами лікування варикозу методом ЕВЛК є:
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Переваги та особливості</h2>
          <ul className="list-disc list-inside space-y-3 text-blue-900 text-base font-medium mb-4">
            <li><span className="font-semibold text-blue-700">безболісність та безпека процедури</span> завдяки місцевій анестезії та чіткому контролю процесу за допомогою УЗД;</li>
            <li><span className="font-semibold text-blue-700">швидке проведення операції</span>, всього за 30-40 хв, та можливість позбутися патології всього за 1 день;</li>
            <li><span className="font-semibold text-blue-700">ефективність</span>, неможливість рецидиву захворювання;</li>
            <li><span className="font-semibold text-blue-700">відмінний косметичний ефект</span>; відсутність шрамів;</li>
            <li><span className="font-semibold text-blue-700">можливість повернутися до нормального ритму життя</span> відразу після операції, лише з тимчасовими обмеженнями щодо підняття тяжкості, бігу та стрибків.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryPhleboEndLaser />
        </div>
      </div>
    </div>
  );
};

export default PhleboEndLaser;
