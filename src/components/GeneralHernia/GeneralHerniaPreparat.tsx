"use client";

import { GalleryHerniaPreparat } from "./GalleryHerniaPreparat";

export default function GeneralHerniaPreparat() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Герніотомія : підготовка до операції</h2>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Перший крок до вирішення проблеми оперативного лікування грижі — це індивідуальна консультація з хірургом ЦМКЛ у Чернівцях. Також можлива зручна відеоконсультація для іногородніх пацієнтів.</span>
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина (2/3) */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">На консультації в клініці:</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 mb-4">
            <li>Обговорюються побажання пацієнта і пояснюємо за і протів різних сучасних оперативних методик герніотомій</li>
            <li>Уточнюються деталі та нюанси вибраної методики операції</li>
            <li>Призначається передопераційне обстеження.</li>
          </ul>
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Для пацієнтів з інших міст пропонується максимально зручний формат:</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 mb-4">
            <li>За 10 днів — припинити прийом медикаментів, які розріджують кров</li>
            <li>За 10 днів до операції — утриматися від куріння</li>
            <li>Після операції — не палити щонайменше 1–1,5 місяці</li>
            <li>За 2 дні до операції — обмежити калорійність їжі, пити більше води</li>
            <li>У день операції — не можна їсти та пити</li>
          </ul>
        </div>
        {/* Права частина: галерея (1/3) */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryHerniaPreparat />
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
