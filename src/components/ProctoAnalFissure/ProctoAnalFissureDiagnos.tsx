"use client";

import { GalleryAnalFissureDiagnos } from "./GalleryAnalFissureDiagnos";

export default function ProctoAnalFissureDiagnos() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок + опис */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Діагностика анальної тріщини</h2>
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Проктолог може діагностувати анальну тріщину під час огляду.</span> Він визначає розташування, розмір та глибину рани, оцінює її краї, наявність рубців та горбків, характерних для хронічної стадії.<br />
              Після огляду лікар може призначити аналізи та інструментальні дослідження. План діагностики залежить від наявності супутніх захворювань. Під час консультації лікар запитує пацієнта, що його турбує та коли з&apos;явилися симптоми, чи є інші скарги та діагностовані захворювання.
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Для діагностики анальних тріщин проводять:</h3>
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
              <li>пальцеве обстеження – проктолог проводить огляд анального отвору, щоб виявити тріщину та вивчити її особливості;</li>
              <li>аноскопію – з її допомогою лікар обстежує анальний канал та пряму кишку на відстані 10-12 см.</li>
              <li>ректороманоскопію – процедура дозволяє оглянути анальний отвір та 20-25 см прямої кишки;</li>
              <li>колоноскопію – це ендоскопічне обстеження прямої кишки, яке призначають при підозрі у пацієнта хвороби Крона, виразкового коліту або іншого захворювання;</li>
              <li>лабораторні аналізи – лікар може призначити загальні аналізи крові, сечі та калу та інші (біохімія крові, посів на мікрофлору).</li>
            </ul>
          </div>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryAnalFissureDiagnos />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Щоб уникнути цих наслідків, важливо не зволікати з лікуванням.</span> Чим раніше ви звернетеся до фахівця, тим легше та ефективніше пройде терапія.
          </div>
        </div>
      </div>
    </section>
  );
}
