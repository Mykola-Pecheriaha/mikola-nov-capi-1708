"use client";

import { GalleryProctoHemorrhoiOper } from "./GalleryProctoHemorrhoiOper";

export default function ProctoHemorrhoiOper() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок + опис у стилі ProctoHemorrhoiTerapi */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Лікування геморою оперативне</h2>
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Хірургічне лікування геморою призначається, коли консервативні методи не дають бажаного результату.</span> Захворювання проявляється надто вираженими симптомами або перебуває на 3-4 стадії розвитку. Основні варіанти хірургічного лікування:
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <ol className="list-decimal list-inside space-y-3 text-blue-900 text-base font-medium mb-4">
            <li><span className="font-bold">Гемороїдектомія</span> – хірургічне лікування, при якому видаляються зовнішні та внутрішні гемороїдальні вузли . Розрізняють закриту (методом Фергюсона), відкриту (Міллігана–Моргана)та підслизову (Метод Паркса.)гемороїдектомію. Повне відновлення настає за два-три тижні.</li>
            <li><span className="font-bold">Зшита гемороїдопексія</span> –(операція Лонґо) гемороїдальні шишки підтягуються і фіксуються всередині каналу при використанні скоб. Мета операції – відновити анатомічне положення вузлів та припинити їх випадання. Відновлення після цього хірургічного лікування проходить швидше і менш болісно порівняно з традиційною гемороїдектомією.</li>
            <li><span className="font-bold">Перев’язка гемороїдальних артерій</span> – це метод, при якому перев’язуються артерії, що живлять вузли, внаслідок чого вони зменшуються. Вона виконується під доплерівським контролем УЗД для точного визначення розташування артерій. Відновлення після хірургічного лікування займає кілька днів, болі та дискомфорт мінімальні.</li>
          </ol>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryProctoHemorrhoiOper />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Загальні правила коригування способу життя після хірургічного лікування:</span> необхідно уникати важких навантажень і збільшити в раціоні кількість клітковини. У перші дні після операції можливе призначення знеболювальних препаратів. Також необхідні регулярні огляди у лікаря з метою оцінки процесу загоєння після хірургічного втручання чи консервативного лікування.
          </div>
        </div>
      </div>
    </section>
  );
}
