"use client";

import { GalleryPararectalFistulaSimptom } from "./GalleryPararectalFistulaSimptom";

export default function ProctoPararectFistulaSimptom() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Симптоми та діагностика нориці прямої кишки</h2>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Клінічні прояви можуть загострюватися або, навпаки, затихати в період ремісії. Так, при гострому парапроктиті виникає різка болючість, утворення інфільтрату (припухлості) в періанальній ділянці, підвищення температури тіла, можливе виділення гною.</span>
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Серед основних ознак наявності параректальної нориці слід назвати:</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li>почервоніння та припухлість у періанальній області;</li>
            <li>болісне ущільнення навколо анального отвору;</li>
            <li>часті запори, спричинені порушеннями у роботі сфінктера;</li>
            <li>виділення із заднього проходу гною, сукровиці, серозної рідини та крові;</li>
            <li>дискомфорт в області ануса: біль, свербіж, печіння, відчуття стороннього тіла всередині;</li>
            <li>гострий біль при дефекації;</li>
            <li>наявність отвору фістули в області ануса.</li>
            <li>При появі перших симптомів нориці прямої кишки необхідно негайно звернутися до проктолога.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryPararectalFistulaSimptom />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Варто зазначити, що параректальна нориця дуже небезпечне захворювання та несвоєчасне звернення може привести до важких наслідків у тому числі септичного стану, рубцювання стінки анального каналу, його деформації та розвитку недостатності анального сфінктера. Не треба боятися звернутися до лікаря з будь-якими неприємними відчуттями в ділянці заднього проходу. Варто боятися ускладнень пов’язаних зі зволіканням.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
