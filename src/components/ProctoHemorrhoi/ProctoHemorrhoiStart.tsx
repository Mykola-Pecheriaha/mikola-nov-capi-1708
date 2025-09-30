"use client";

import React from "react";
import Image from "next/image";

const ProctoHemorrhoiStart: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Геморой
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Геморой— це захворювання, пов&apos;язане з розширенням і запаленням гемороїдальних вузлів, що виникає через порушення кровообігу в ділянці прямої кишки та анального отвору.<br/>
            Також однією з причин є порушення обмінних процесів на клітинному рівні, внаслідок чого відбуваються структурні зміни у тканинах м&apos;язів та зв&apos;язок.
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч малюнок */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-900">Причини геморою та фактори, які сприяють його прогресу:</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-900 text-base font-medium mb-4">
            <li>спадковість та схильність</li>
            <li>запальні процеси та пухлин у кишечнику та печінці</li>
            <li>порушення стільця (запори або проноси)</li>
            <li>малорухливий сидячий спосіб життя</li>
            <li>вагітність і пологи</li>
            <li>зловживання алкоголем</li>
            <li>ожиріння</li>
            <li>травматична дивульсія анусу та ампули прямої кишки</li>
            <li>анальний секс</li>
            <li>важка фізична робота</li>
            <li>звичка подовгу сидіти в туалеті</li>
          </ul>
        </div>
        {/* Права частина: малюнок */}
<Image
  src="/images/procto/hemorroi/hemorroi1.jpg"
  alt="Геморой"
  width={600}        // ⬅️ збільшив з 420 до 600
  height={600}       // ⬅️ збільшив з 420 до 600
  className="rounded-lg object-contain max-h-[500px]" // ⬅️ збільшив max-h
/>

      </div>
    </div>
  );
};

export default ProctoHemorrhoiStart;
