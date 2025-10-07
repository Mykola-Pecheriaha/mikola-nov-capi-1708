"use client";

import { GalleryPararectalFistulaOper } from "./GalleryPararectalFistulaOper";

export default function ProctoPararectFistulaOper() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">ВИДАЛЕННЯ ПАРАРЕКТАЛЬНОЇ НОРИЦІ</h2>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Єдиний спосіб ефективного лікування параректальної нориці — це його видалення шляхом операції. Методика хірургічного втручання залежить від стадії захворювання і його локалізації. Її призначає лікар. На сьогоднішній день можна виділити два найбільш популярних методи видалення параректальної нориці:</span>
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li>класична операція (проводиться під загальним наркозом і спрямована на висічення норицевого ходу і гнійних кишень)</li>
            <li>видалення свища за допомогою лазера (сучасна і малотравматична методика, при якій припікають прості свищі без гнійних порожнин. Ця процедура ефективна і не вимагає довгого реабілітаційного періоду)</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryPararectalFistulaOper />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Оперативне втручання проводять під загальгим знеболенням а частіше під спиномозговою анастезією. Раній післяопераційний період потребуги адекватної знеболюючої анастезії.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
