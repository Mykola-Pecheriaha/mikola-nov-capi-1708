"use client";

import { GalleryHerniaDiagnos } from "./GalleryHerniaDiagnos";

export default function GeneralHerniaDiagnos() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Покази до операції грижесічення (герніотомія)</h2>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина (2/3) */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <p className="text-base md:text-lg text-gray-700 mb-2">Наявність грижі у хворого — абсолютний показ до операції</p>
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Покази до планової операції</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 mb-4">
            <li>Наявність грижі є показом до планової операції</li>
          </ul>
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Покази до ургентної (невідкладної) операції</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-red-600 mb-4">
            <li>❗Наявність защемленої грижі</li>
          </ul>
          <h4 className="text-base md:text-lg font-bold text-blue-900 mb-2">Ознаки защемленої грижі:</h4>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 mb-4">
            <li>Грижеве випинання, про яке хворий знає:</li>
            <li>Перестало вправлятись</li>
            <li>Почало дуже боліти</li>
            <li>Біль часто досить сильний</li>
            <li>Стан може супроводжуватися нудотою і блюванням</li>
          </ul>
          <h3 className="text-lg md:text-xl font-bold text-red-700 mb-2">Протипокази до операції грижесічення (герніотомія)</h3>
          <h4 className="text-base md:text-lg font-bold text-blue-900 mb-2">Протипокази до планової операції</h4>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 mb-4">
            <li>Усі хронічні захворювання в стадії декомпенсації, зокрема:</li>
            <li>серцева недостатність та інші патології серцево-судинної системи</li>
            <li>хронічні захворювання печінки та нирок</li>
            <li>цукровий діабет</li>
            <li>порушення згортання крові</li>
            <li>онкологічні захворювання в термінальних стадіях</li>
          </ul>
          <h4 className="text-base md:text-lg font-bold text-blue-900 mb-2">Протипокази до ургентної операції</h4>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 mb-4">
            <li>Агонуючий стан хворого</li>
            <li>Категорична відмова дієздатного хворого<br /><span className="text-red-700">з письмовою розпискою у присутності лікарів і родичів</span></li>
          </ul>
        </div>
        {/* Права частина: галерея (1/3) */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryHerniaDiagnos />
        </div>
      </div>
    </section>
  );
}
