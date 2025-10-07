"use client";

import { GalleryPararectalFistulaDiagnos } from "./GalleryPararectalFistulaDiagnos";

export default function ProctoPararectFistulaDiagnos() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Методи діагностики нориці прямої кишки</h2>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Захворювання ануса і прямої кишки (наприклад, геморой, тріщинаі нориця заднього проходу) мають схожі симптоми, тому за появи болю, печіння, припухлості або набряку тканин необхідна консультація проктолога.</span>
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Діагностика діагностики нориці прямої кишки включає:</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li>фізичний огляд. Включає візуальну і тактильну оцінку аноректальної зони для виявлення ознак запалення, набряку, почервоніння, наявності патологічних ходів, а також ущільнень і пухлин;</li>
            <li>магнітно-резонансну томографію (МРТ). Дозволяє детально дослідити тканини та зміни структур тазового дна для виявлення локалізації та оцінки довжини внутрішньої або неповної нориці прямої кишки;</li>
            <li>ендоскопічне ультразвукове дослідження. Передбачає введення ендоскопа з датчиком, що генерує високочастотні звукові хвилі, в аноректальну ділянку для оцінки стану м&apos;язів сфінктера та навколишніх тканин;</li>
            <li>фістулографію. Рентгенологічне дослідження, під час якого вводять контрастну речовину в ділянку ануса і прямої кишки, що дає змогу отримати зображення патологічних структур, включно з норицями й абсцесами;</li>
            <li>аноскопію.  Процедура, під час якої в пряму кишку вводиться ендоскоп (тонка трубка з камерою і джерелом світла на кінці) на шість-вісім см, що дає змогу лікареві візуально оцінити стан слизової оболонки і виявити патологічні зміни;</li>
            <li>ректоскопію. Дає змогу оглянути задній прохід і пряму кишку за допомогою введення ендоскопа на глибину до 20 см;</li>
            <li>колоноскопію. Застосовується в разі підозри на ураження норицею товстого кишківника, передбачає введення тонкої трубки в кишку для оцінки змін у слизовій оболонці.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryPararectalFistulaDiagnos />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Нориціі зазвичай характеризуються вираженим больовим синдромом, тому дотики до запаленої ділянки або здійснення медичних маніпуляцій зазвичай проводять під знеболенням.  Метод лікування підбирається лікарем за результатами діагностики.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
