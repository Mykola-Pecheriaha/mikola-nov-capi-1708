"use client";

import React from "react";
import { GalleryProctoPreparationConsul } from "./GalleryProctoPreparationConsul";

const ProctoPreparationConsul: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Підготовка до огляду проктолога
      </h1>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <p className="mb-4 text-blue-900 text-base font-semibold">
            Правильна підготовка до відвідування проктолога дозволяє точніше діагностувати захворювання.
          </p>
          <ul className="list-disc list-inside space-y-2 text-blue-900 text-base font-medium mb-4">
            <li>Механічне очищення із застосуванням клізми. Друга клізма ставиться у проміжку 15 - 30 хвилин. Ці маніпуляції проводять увечері напередодні візиту до лікаря. Втретє клізму ставлять уранці за 2 години до прийому.</li>
            <li>Очищення кишечника проводять за допомогою мікроклізм з м&apos;яким засобом мікролакс. Цей препарат розм&apos;якшує калові маси, збільшує об&apos;єм рідини, внаслідок чого через 15 хвилин після введення в анус настає випорожнення.</li>
            <li>Для очищення кишечника можна застосовувати проносний засіб («Фортранс») згідно з інструкцією.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryProctoPreparationConsul />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">⚠️</span>
          <div className="text-blue-900 text-base">
            <strong>Важливо!</strong> За дві доби до відвідування лікаря проктолога слід виключити з раціону продукти, що викликають інтенсивне газоутворення чи запори.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProctoPreparationConsul;
