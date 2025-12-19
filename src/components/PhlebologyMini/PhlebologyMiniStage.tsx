import React from 'react';
import { GalleryMiniStage } from './GalleryMiniStage';

const PhlebologyMiniStage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок по центру */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Види операції мініфлебектомії
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Є декілька методів мініфлебектомії - Метод Роберта Мюллера, Золтана Вараді. Різниця в
            розмірі розрізу (1-2 мм і 5 мм)
          </div>
        </div>
      </div>
      {/* Дві частини: текст та галерея */}
      <div className="flex flex-col lg:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-start">
        {/* Ліва частина */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Основні етапи</h2>
          <ul className="list-disc list-inside space-y-3 text-blue-900 text-base font-medium mb-4">
            <li>місцеве знеболювання;</li>
            <li>проколи шкіри (1-2 мм або 5 мм);</li>
            <li>введення хірургічних гачків для вилучення уражених судин для їх висічення;</li>
            <li>висічення уражених варикозом вен та накладення компресії;</li>
            <li>накладання шва чи пластиру на прокол.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <GalleryMiniStage />
        </div>
      </div>
    </div>
  );
};

export default PhlebologyMiniStage;
