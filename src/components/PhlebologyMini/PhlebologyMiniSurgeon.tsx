import React from "react";
import { GalleryPhlebologyMini } from "./GalleryPhlebologyMini";

const PhlebologyMiniSurgeon: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок по центру */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Мініфлебектомія
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Мініфлебектомія – це операція з видалення розширених вен через невеликі проколи. Застосовується для лікування варикозної хвороби та дає ефективні результати. Суть методу полягає в тому, що після видалення розширених вен кровотік відновлюється за рахунок здорових.
          </div>
        </div>
      </div>
      {/* Дві частини: текст та галерея */}
      <div className="flex flex-col lg:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-start">
        {/* Ліва частина */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Переваги мініфлебектомії</h2>
          <ul className="list-disc list-inside space-y-3 text-blue-900 text-base font-medium mb-4">
            <li>Швидкий та якісний результат, причому ефект одержують як лікувальний, так і естетичний;</li>
            <li>Відсутність післяопераційних рубців, шрамів;</li>
            <li>Мінімальний період відновлення;</li>
            <li>Безболісність та мінімальний дискомфорт для пацієнта під час процедури;</li>
            <li>Зважаючи на місцеве знеболювання, є можливість проводити маніпуляцію навіть із протипоказаннями для загального наркозу;</li>
            <li>Збереження підшкірних структур, нервів;</li>
            <li>Відсутність потреби госпіталізації пацієнта;</li>
            <li>Можливість проведення операції, незалежно від місця локалізації патології.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <GalleryPhlebologyMini />
        </div>
      </div>
    </div>
  );
};

export default PhlebologyMiniSurgeon;
