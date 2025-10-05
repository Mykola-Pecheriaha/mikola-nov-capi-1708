"use client";

import Image from "next/image";

export default function ProctoAnalFissureStart() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок + опис у стилі геморою */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Анальна тріщина</h2>
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Анальна тріщина — це лінійне ушкодження слизової оболонки анального каналу, що викликає гострий біль під час дефекації, дискомфорт та періодичні кровотечі.</span>
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч малюнок */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Причини анальних тріщин, та фактори, які сприяють її прогресу:</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li>твердий і сухий кал;</li>
            <li>закреп, діарея;</li>
            <li>великий обсяг випорожнень;</li>
            <li>напруження під час акту дефекації;</li>
            <li>потуги під час пологової діяльності;</li>
            <li>анальні статеві контакти;</li>
            <li>непрофесійно виконані медичні процедури;</li>
            <li>неправильно поставлена клізма;</li>
            <li>наявність сторонніх предметів у прямій кишці;</li>
            <li>використання неякісного та твердого туалетного паперу.</li>
          </ul>
        </div>
        {/* Права частина: малюнок */}
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <Image src="/images/procto/fissure/fissure11.jpg" alt="Схематичний малюнок анальної тріщини" width={600} height={600} className="rounded-lg object-contain max-h-[900px] w-full" />
        </div>
      </div>
    </section>
  );
}
