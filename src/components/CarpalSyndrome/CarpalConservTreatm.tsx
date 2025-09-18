import React from "react";
import GalleryCarpalConserTreatm from "./GalleryCarpalConserTreatm";

export default function CarpalConservTreatm() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Консервативне лікування синдрому зап&apos;ястного каналу</h2>
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Ліва частина 2/3 */}
        <div className="md:w-2/3 w-full bg-[#e7eeef] rounded-lg flex flex-col justify-center p-2">
          <div className="mb-6">
            <span className="font-semibold text-lg mb-2 block">Ваш лікар може порадити наступне:</span>
            <ul className="list-none space-y-3 text-base">
              <li>🔹 <span className="font-bold">Носіння шини на зап&apos;ястя вночі</span> протягом кількох тижнів. Якщо не дає результату — шину можна носити і вдень.</li>
              <li>🔹 <span className="font-bold">Уникайте сну з зігнутими запястками.</span></li>
              <li>🔹 <span className="font-bold">Компреси</span> — чергуйте теплі та холодні на уражену ділянку для зменшення болю та запалення.</li>
            </ul>
          </div>
          <div className="mb-6">
            <span className="font-semibold text-lg mb-2 block">Зміни на робочому місці для зменшення навантаження на зап&apos;ястя:</span>
            <ul className="list-none space-y-2 text-base">
              <li>🔹 <span className="font-bold">Використовуйте ергономічні пристрої:</span> спеціальні клавіатури, мишки, м&apos;які килимки, полиці для клавіатури.</li>
              <li>🔹 <span className="font-bold">Попросіть когось оцінити вашу позу під час роботи</span> — наприклад, клавіатура повинна бути досить низько, щоб зап&apos;ястя залишалися рівними.</li>
              <li>🔹 <span className="font-bold">За потреби лікар може порекомендувати ерготерапевта.</span></li>
              <li>🔹 <span className="font-bold">Змініть або обмежте домашні та спортивні активності, що подразнюють зап&apos;ястя</span> — особливо ті, що передбачають використання вібраційних інструментів.</li>
            </ul>
          </div>
          <div className="mb-6">
            <span className="font-semibold text-lg mb-2 block">Медикаментозне лікування:</span>
            <ul className="list-none space-y-2 text-base">
              <li>🔹 <span className="font-bold">НПЗП (нестероїдні протизапальні препарати)</span> — такі як ібупрофен або напроксен, для зменшення болю та набряку.</li>
              <li>🔹 <span className="font-bold">Ін&apos;єкції кортикостероїдів</span> — можуть вводитись у зону карпального каналу для тимчасового полегшення симптомів.</li>
            </ul>
          </div>
        </div>
        {/* Права частина 1/3: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryCarpalConserTreatm />
        </div>
      </div>
    </div>
  );
}
