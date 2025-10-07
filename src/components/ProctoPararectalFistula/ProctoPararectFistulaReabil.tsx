"use client";

import { GalleryPararectalFistulaReabil } from "./GalleryPararectalFistulaReabil";

export default function ProctoPararectFistulaReabil() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Яких правил потрібно дотримуватися після видалення параректальної нориці?</h2>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Після видалення нориці важливо регулярно робити перев&apos;язки післяопераційної рани. Лікар може призначити антисептичні розчини для обробки швів для запобігання інфікуванню. Рекомендації для післяопераційного періоду після видалення нориці прямої кишки:</span>
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li>прийом лікарських препаратів (наприклад, антибіотиків), призначених лікарем;</li>
            <li>постільний режим у перші дні після операції;</li>
            <li>відмова від інтенсивної фізичної активності;</li>
            <li>уникнення різких нахилів і поворотів;</li>
            <li>застосування м&apos;яких серветок після дефекації для очищення заднього проходу.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryPararectalFistulaReabil />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Лікар порекомендує дотримання дієти з великою кількістю клітковини, яка міститься у фруктах, овочах, зернових і бобах (горосі, квасолі, сочевиці). Після операції для лікування нориці також потрібно відмовитися від жирних, смажених, гострих і кислих продуктів, алкогольних напоїв, напівфабрикатів. Корекція харчування необхідна для запобігання закрепам і зниження ризику подразнення шкіри заднього проходу.<br /><br />Протягом кількох днів після висічення нориці пацієнт може відчувати біль і дискомфорт у ділянці впливу, набряк тканин навколо швів. Нориця після операції зазвичай гоїться протягом одного-трьох тижнів, проте тривалість загоєння може залежати від типу хірургічного втручання. Реабілітація після видалення нориці прямої кишки в середньому триває до двох-трьох тижнів (за малоінвазивного втручання), до півтора місяця – за відкритої операції.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
