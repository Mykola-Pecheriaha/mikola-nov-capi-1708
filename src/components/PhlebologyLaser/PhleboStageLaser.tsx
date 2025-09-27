import React from "react";
import { GalleryPhleboStageLaser } from "./GalleryPhleboStageLaser";

const PhleboStageLaser: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок по центру */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Етапи лазерного лікування варикозу - ЕВЛК
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Зазвичай ендовазальна лазерна коагуляція проводиться у кілька етапів. Ось як лікують варикоз лазером:
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Етапи процедури</h2>
          <ol className="list-decimal list-inside space-y-3 text-blue-900 text-base font-medium mb-4">
            <li>Пацієнт лягає на операційний стіл. Лікар робить розмітку на шкірі під контролем УЗД — вказує місця з’єднання вени з притоками та зворотний потік крові.</li>
            <li>Пацієнту вводять знеболювальне. Флеболог проколює хвору судину і вставляє в неї катетер із лазером.</li>
            <li>Лікар обробляє тканини навколо вени місцевим анестетиком. Тому пацієнт не відчуває болю та впливу лазером на стінки судин.</li>
            <li>Лікар руйнує вену зсередини. Венозні стінки запаюються і перекривають доступ крові, тому потік крові на цій ділянці припиняється. Кров рухається іншими, здоровими венами.</li>
            <li>Пацієнт одягає компресійний трикотаж.</li>
            <li>Процедура продовжується до 60 хвилин.</li>
          </ol>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryPhleboStageLaser />
        </div>
      </div>
    </div>
  );
};

export default PhleboStageLaser;
