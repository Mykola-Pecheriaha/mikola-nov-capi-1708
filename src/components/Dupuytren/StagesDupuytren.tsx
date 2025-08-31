import React from "react";
import { GalleryDupuytren } from "./GalleryDupuytren";

const StagesDupuytren: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: текст */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Основні стадії контрактури Дюпюїтрена</h2>
          <p className="mb-2">Виділяють 4 стадії контрактури Дюпюїтрена:</p>
          <ol className="list-decimal pl-6 space-y-3 text-base">
            <li>
              <span className="font-bold">I стадія</span>
              <ul className="list-disc pl-6">
                <li>Невеликі вузлики чи ущільнення в долоні</li>
                <li>Рухливість пальців збережена</li>
                <li>Кут контрактури: відсутній</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">II стадія</span>
              <ul className="list-disc pl-6">
                <li>Формуються щільні тяжі</li>
                <li>Пальці частково згинаються</li>
                <li>Кут контрактури: до 45°</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">III стадія</span>
              <ul className="list-disc pl-6">
                <li>Виражене згинання пальців</li>
                <li>Помітне обмеження рухів</li>
                <li>Кут контрактури: 45°–90°</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">IV стадія</span>
              <ul className="list-disc pl-6">
                <li>Сильна деформація кисті</li>
                <li>Пальці практично не розгинаються</li>
                <li>Кут контрактури: понад 90°</li>
              </ul>
            </li>
          </ol>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryDupuytren />
        </div>
      </div>
            {/* Текст на всю ширину внизу */}
      <div className="mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Надзвичайно важливо діагностувати контрактуру Дюпюїтрена на ранніх термінах, аби запобігти ускладненням і максимально зберегти рухливість кисті.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StagesDupuytren;
