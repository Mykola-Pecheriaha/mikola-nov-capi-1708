"use client";

import { GalleryСoccyxСystSimptom } from "./GalleryСoccyxСystSimptom";

export default function ProctoСoccyxСystSimptom() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок + опис */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Симптоми та діагностика кісти куприка</h2>
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">При розвитку запального процесу гнійний вміст проникає в навколишні тканини, руйнуючи порожнину куприкового ходу, і проявляється наступними симптомами:</span>
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Хвороба маніфестує наступними симптомами:</h3>
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
              <li>болі в крижово-куприковому відділі,</li>
              <li>виділення гною з отвору в меж&apos;ягодічной області,</li>
              <li>підвищення температури тіла,</li>
              <li>набряклість,</li>
              <li>почервоніння,</li>
              <li>свербіж,</li>
              <li>ущільнення шкіри між&apos;ягодичної складки,</li>
              <li>cлабкість.</li>
            </ul>
            <p className="mt-2 text-base md:text-lg text-gray-700">Лікар хірург ставить діагноз на основі огляду і пальцевого дослідження прямої кишки.</p>
            <p className="mt-2 text-base md:text-lg text-gray-700">У сумнівних випадках призначається:</p>
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
              <li>УЗД;</li>
              <li>ректороманоскопія;</li>
              <li>фіброколоноскопія.</li>
            </ul>
          </div>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryСoccyxСystSimptom />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Епітеліальний куприковий хід легко діагностується у лікарні.</span> Якщо патологія має неускладнену форму, діагностувати її вдається у процесі візуального огляду складки між сідницями та наявних первинних отворів. За наявності у пацієнта запалення, що прогресує, та численних свищів ставиться діагноз &laquo;ускладнений епітеліальний куприковий хід&raquo;.
          </div>
        </div>
      </div>
    </section>
  );
}
