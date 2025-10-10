"use client";

import { GalleryGeneralSurgDiagnos } from "./GalleryGeneralSurgDiagnos";

export default function GeneralSurgDiagnos() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Додаткові обстеження на консультації хірурга</h2>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Для підтвердження попереднього діагнозу та розробки оптимальної тактики лікування лікар може призначити:</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина (2/3) */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Додаткові методи обстеження</h4>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li>Ультразвукове дослідження — дозволяє отримати зображення внутрішніх органів.</li>
            <li>Рентгенографія — використовується для діагностики травм, захворювань грудної клітки та черевної порожнини.</li>
            <li>Комп’ютерна томографія (КТ) і магнітно-резонансна томографія (МРТ) — дозволяють отримати детальні зображення внутрішніх органів і тканин.</li>
            <li>Гастроскопія і колоноскопія — використовуються для огляду шлунка та кишківника.</li>
            <li>Лабораторні аналізи крові та сечі — дають додаткову інформацію для виявлення запальних процесів чи інфекцій.</li>
          </ul>
        </div>
        {/* Права частина: галерея (1/3) */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryGeneralSurgDiagnos />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Візит у таких випадках включає огляд, призначення та проведення аналізів та додаткових інструментальних чи апаратних досліджень із постановкою чи підтвердженням діагнозу, консультацією для визначення подальшого порядку дій. Пацієнту потрібно заздалегідь підготуватися, якщо, наприклад, має бути обстеження кишечника, шлунка або сечового міхура – на момент огляду ці органи повинні бути порожні. Також слід врахувати, що жінкам і дівчатам слід планувати візит на період після менструації, якщо, звичайно, не невідкладний випадок.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
