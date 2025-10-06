"use client";

import { GalleryСoccyxСystTerapi } from "./GalleryСoccyxСystTerapi";

export default function ProctoСoccyxСystTerapi() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок + опис */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Лікування  кісти куприка</h2>
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Якщо з’явився свищ на куприку, консервативне лікування абсолютно неефективне.</span> Щоб позбутися такого захворювання, потрібне обов’язкове хірургічне втручання.
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-4">
            <li><span className="font-bold">Неускладнена кіста куприка.</span> Знадобиться повне висічення та усунення первинних отворів.</li>
            <li><span className="font-bold">Гостра форма патології.</span> Потрібне видалення свища на куприку разом із пошкодженими навколишніми тканинами та гнійними свищами. У запущених випадках виникає потреба у двоетапному хірургічному втручанні.</li>
            <li><span className="font-bold">Абсцесна форма кісти.</span> Найефективнішим є двоетапний метод. Після розтину абсцесу його ретельно чистять, потім закривають рану, залишаючи невеликий дренажний отвір.</li>
            <li><span className="font-bold">Лазерна абляція кісти куприка</span> — ефективний, щадний метод з високим рівнем успіху та швидким відновленням, особливо на ранніх або неускладнених стадіях захворювання.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryСoccyxСystTerapi />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">При хронічних, складних формах може бути потрібна класична операція або комбінований підхід.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
