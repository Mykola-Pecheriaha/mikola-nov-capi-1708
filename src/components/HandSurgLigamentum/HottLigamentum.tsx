import React from "react";
import GalleryHottLigamentum from "./GalleryHottLigamentum";

const stages = [
  "на першій – обмежується мобільність, з’являються клацання при згинанні-розгинанні пальця;",
  "на другий – рухи виконуються із зусиллям;",
  "на третій – палець фіксується у зігнутому положенні;",
  "на четвертій – до хвороби приєднується деформація суглоба, захворювання стає необоротним.",
];

const HottLigamentum: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12 flex flex-col gap-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">Хвороба Нотта</h2>
      {/* Інформативний блок на всю ширину */}
      <div className="mt-0">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <p>
              <span className="font-semibold">Стенозуючий лігаментит, або хвороба Нотта</span> – це захворювання сухожилля згинача пальця. У народі патологію називають клацаючим пальцем через характерний звук при згинанні пальця. Часто пацієнти вважають, що клацає сам суглоб, але це не так.<br/>
              Головна небезпека захворювання в тому, що при відсутності лікування палець може зафіксуватися в зігнутому стані, і розпрямити його без втручання лікаря буде неможливо. При запущеній стадії хвороби Нотта з’являється обмеження рухливості.
            </p>
          </div>
        </div>
      </div>
      {/* Дві частини: зліва текст, справа галерея */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Ліва частина: заголовок і стадії */}
        <div className="md:w-2/3 w-full">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Стадії розвитку хвороби Нотта</h2>
          <ul className="list-disc pl-6 space-y-3 text-base">
            {stages.map((s, idx) => (
              <li key={idx}><span className="font-semibold">{s.split("–")[0]} –</span>{s.split("–")[1]}</li>
            ))}
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full">
          <GalleryHottLigamentum />
        </div>
      </div>
      {/* Інфокартка на всю ширину */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900">
        <span className="block font-semibold">Важливо!</span><br />
        При появі перших симптомів недуги важливо відразу відправиться до лікаря. Він проведе діагностику і підбере ефективне лікування в залежності від особливостей прояву симптомів, стадії занедбаності та інших чинників.
      </div>
    </div>
  );
};

export default HottLigamentum;
