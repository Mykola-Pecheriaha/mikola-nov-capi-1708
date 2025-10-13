"use client";

import { GalleryHerniaOperClasic } from "./GalleryHerniaOperClasic";

export default function GeneralHerniaOperClasic() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Герніотомія : Види операцій</h2>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Сучасні операції при грижах мають кілька варіантів, що підбираються індивідуально залежно від вида грижі та стану хворого.</span>
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина (2/3) */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Покази:</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 mb-4">
            <li>Наявність вираженого грижі, діастазу прямих м&#96;язів живота</li>
          </ul>
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Техніка:</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 mb-4">
            <li>Виконується розріз над випинанням</li>
            <li>Прицинзійно розділяються тканини в ділянці грижового мішка до грижових воріт.</li>
            <li>Розсічення грижового мішка і якщо він має вміст, оцінюються органи які там знаходяться (пасмо чепця, кишкивник та інші)</li>
            <li>Вправляються органи в черевну порожнину</li>
            <li>Виконується вшивання алотрансплантату в ділянку грижових воріт для їх закривання і укріплення тканин в цій ділянці.</li>
            <li>Накладення шви на рану. При потребі дренування.</li>
          </ul>
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Результат:</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 mb-4">
            <li>Відновлення черевної стінки з укріпленням слабкого місця аллогенним трансплантатом.</li>
          </ul>
        </div>
        {/* Права частина: галерея (1/3) */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryHerniaOperClasic />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Правильна підготовка — запорука швидкої реабілітації та чудового результату.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
