import React from "react";
import GalleryCarpalOperTreatm from "./GalleryCarpalOperTreatm";

export default function CarpalOperTreatm() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Оперативне лікування</h2>
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Ліва частина 2/3 */}
        <div className="md:w-2/3 w-full bg-[#e7eeef] rounded-lg flex flex-col justify-center p-2">
          <div className="mb-6">
            <p className="mb-2">Якщо нехірургічні методи не дають бажаного ефекту, лікар може рекомендувати операцію з вивільнення карпального тунелю. Її проводять під місцевим або загальним наркозом. Існує два основні методи:</p>
            <ul className="list-none space-y-2 text-base mb-4">
              <li>🔹 <span className="font-bold">Відкрита операція</span></li>
              <li>🔹 <span className="font-bold">Ендоскопічна хірургія</span></li>
            </ul>
            <p className="mb-2">Обидва методи мають подібні результати, але відрізняються технікою виконання. Ваш хірург пояснить, який варіант найкраще підходить саме вам.</p>
          </div>
          <div className="mb-6">
            <span className="font-semibold text-lg mb-2 block">Відкрите вивільнення карпального тунелю</span>
            <p className="mb-2">Під час відкритої операції хірург:</p>
            <ul className="list-none space-y-2 text-base mb-4">
              <li>🔹 Робить невеликий розріз на долоні.</li>
              <li>🔹 Отримує доступ до поперечної карпальної зв&apos;язки (даху тунелю).</li>
              <li>🔹 Розсікає зв&apos;язку, що збільшує простір усередині тунелю та зменшує тиск на серединний нерв.</li>
            </ul>
            <p className="mb-2">Після операції зв&apos;язка може зростись, але тиск у каналі вже не повертається до попереднього рівня, що забезпечує довготривале полегшення симптомів.</p>
          </div>
          <div className="mb-6">
            <span className="font-semibold text-lg mb-2 block">Ендоскопічне вивільнення карпального тунелю</span>
            <p className="mb-2">Під час цієї менш інвазивної процедури:</p>
            <ul className="list-none space-y-2 text-base mb-4">
              <li>🔹 Хірург робить 1–2 маленькі розрізи.</li>
              <li>🔹 Вводить ендоскоп — крихітну камеру, що дозволяє бачити структури зап&apos;ястя зсередини.</li>
              <li>🔹 Через ендоскопічні інструменти розсікає поперечну зв&apos;язку, як і при відкритій операції.</li>
            </ul>
            <p className="mb-2">Цей метод часто дозволяє:</p>
            <ul className="list-none space-y-2 text-base mb-4">
              <li>🔹 Скоротити час відновлення</li>
            </ul>
          </div>
        </div>
        {/* Права частина 1/3: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryCarpalOperTreatm />
        </div>
      </div>
    </div>
  );
}
