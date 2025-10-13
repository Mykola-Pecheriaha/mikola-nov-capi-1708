"use client";

import { GalleryGeneralSurgUrgent } from "./GalleryGeneralSurgUrgent";

export default function GeneralSurgUrgent() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Приводами для невідкладного візиту до хірурга є:</h2>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина (2/3) */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li>абсцеси, фурункули чи інші гнійні запальні утворення;</li>
            <li>гострий, що раптово почався і не проходить біль у животі або грудній клітці;</li>
            <li>задишка, що раптово з’явилася;</li>
            <li>Різні травми шкіри: порізи, рани (як з кровотечею, так і без нього);</li>
            <li>травми живота, голови чи грудей;</li>
            <li>виникла мерзлякуватість ніг (стоп і пальців стоп), яка супроводжується кульгавістю і швидкою стомлюваністю;</li>
            <li>припухлість, почервоніння та біль будь-якої локалізації, що зазвичай свідчить про гнійне запалення;</li>
            <li>тяжкі випадки вростання нігтя та панариції. Також, якщо біль у місці запалення не дає Вам за...</li>
          </ul>
        </div>
        {/* Права частина: галерея (1/3) */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryGeneralSurgUrgent />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Пам’ятайте, відвідування будь-якого лікаря потребує підготовки, оскільки від цього залежить ефективність лікування Вашого захворювання. Хірург – це досвідчений спеціаліст, здатний виконувати широкий спектр оперативних втручань різного профілю. Тому саме консультація хірурга є обов’язковою та регулярною. Адже завжди діє правило: чим раніше Ви почали лікування, тим легше воно пройде. Тому періодично потрібно записуватись на консультацію до цього лікаря, щоб бути впевненим у своєму здоровому майбутньому.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
