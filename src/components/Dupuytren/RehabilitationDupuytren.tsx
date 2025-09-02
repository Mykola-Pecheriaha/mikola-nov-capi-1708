import React from "react";
import { GalleryRehabilitationy } from "./GalleryRehabilitationy";

const RehabilitationDupuytren: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: текст */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">
            <span className="font-semibold text-blue-900">Профілактика контрактури Дюпюїтрена</span>
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li><span className="font-semibold text-blue-900">Регулярні вправи для рук:</span> Підтримка гнучкості суглобів та м’язів рук може призвести до профілактики контрактури Дюпюїтрена.</li>
            <li><span className="font-semibold text-blue-900">Контроль ваги:</span> Запобігання ожиріння знижує навантаження на суглоби та зв’язки.</li>
            <li><span className="font-semibold text-blue-900">Здорове харчування:</span> Раціональне і збалансоване харчування збагачує організм необхідними поживними речовинами.</li>
            <li><span className="font-semibold text-blue-900">Відмова від шкідливих звичок:</span> Уникання куріння та вживання алкоголю знижує ймовірність виникнення захворювань зв’язок та суглобів.</li>
            <li><span className="font-semibold text-blue-900">Регулярні медичні огляди:</span> Проведення періодичних медичних обстежень з урахуванням віку та індивідуальних особливостей може допомогти виявити початкові ознаки контрактури Дюпюїтрена на ранній стадії та прийняти заходи щодо її профілактики та лікування.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryRehabilitationy />
        </div>
      </div>
      {/* Info card: summary text, full width, styled as в попередніх компонентах */}
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900 flex items-start gap-3">
          <span className="text-2xl mt-1 select-none">ℹ️</span>
          <span className="block">
            Профілактика контрактури Дюпюїтрена полягає у підтримці здоров’я рук та зниженні ризику розвитку захворювання. Регулярні вправи допомагають зберігати рухливість пальців, а правильне харчування, контроль ваги та відмова від шкідливих звичок зміцнюють суглоби й зв’язки. Особливо важливо після 50 років проходити профілактичні огляди й звертатися до лікаря при перших ознаках хвороби, адже своєчасне лікування дозволяє уникнути ускладнень.
          </span>
        </div>
      </div>
    </div>
  );
};

export default RehabilitationDupuytren;
