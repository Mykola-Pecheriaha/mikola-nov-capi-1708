'use client';

import React from 'react';
import { GalleryPhlebologyScleroTechnic } from './GalleryPhlebologyScleroTechnic';

const PhlebologyScleroTechnic: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Техніка проведення склеротерапії
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Перший крок – це прийти на консультацію хірурга, флеболога. Він огляне ноги, проведе
            пальпацію, визначить стадію та тип захворювання. Додатково перед процедурою слід пройти
            доплерографію (УЗД вен нижніх кінцівок) та призначенні лікарем обстеження.
          </div>
        </div>
      </div>
      {/* Дві частини: текст та галерея */}
      <div className="flex flex-col lg:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-start">
        {/* Ліва частина */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <ol className="list-decimal list-inside space-y-3 text-blue-900 text-base font-medium mb-4">
            <li>
              Пацієнт розміщується у зручному положенні – він лягає на кушетку на спину та підкладає
              під ноги валик.
            </li>
            <li>Лікар оглядає уражену ділянку, обробляє шкіру на ній антисептиком.</li>
            <li>
              За допомогою спеціального шприца з мікроголкою у змінені судини вводять склерозуючий
              препарат. Щоб контролювати правильність введення, використовують апарат УЗД.
            </li>
            <li>
              На місце ін’єкції накладають еластичний бинт – допомагає створити компресію.
              Компресійна склеротерапія дозволяє здавити судини, щоб їх стінки склеїлися, і кровотік
              ними припинився.
            </li>
          </ol>
        </div>
        {/* Права частина: галерея */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <GalleryPhlebologyScleroTechnic />
        </div>
      </div>
    </div>
  );
};

export default PhlebologyScleroTechnic;
