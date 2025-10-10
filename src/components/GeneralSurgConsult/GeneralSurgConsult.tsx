"use client";

import { GalleryGeneralSurgConsult } from "./GalleryGeneralSurgConsult";

export default function GeneralSurgConsult() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Консультація загального хірурга</h2>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Консультація загального хірурга потрібна при болях у животі, травмах, появі гнійних процесів на шкірі (фурункули, абсцеси), грижах, а також при болях і набряках нижніх кінцівок, що вказують на варикозне розширення вен. На консультації хірург опитує пацієнта, вивчає історію хвороби, проводить огляд і пальпацію, а потім призначає додаткові обстеження або лікування.</span>
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина (2/3) */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Коли варто звернутися до хірурга:</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li><span className="font-bold">Болі в животі:</span> Інтенсивні болі, нудота, проблеми з дефекацією.</li>
            <li><span className="font-bold">Травми:</span> Різані, колоті рани, гематоми, болі після падінь.</li>
            <li><span className="font-bold">Шкірні проблеми:</span> Гнійні процеси, фурункули, абсцеси, рани, що довго не загоюються, нагноєння нігтьових пластинок.</li>
            <li><span className="font-bold">Новоутворення:</span> Поява будь-яких новоутворень на тілі.</li>
            <li><span className="font-bold">Грижі:</span> Випинання в паховій області або на животі.</li>
            <li><span className="font-bold">Проблеми з кінцівками:</span> Біль, набряк, зміна температури та кольору нижньої кінцівки.</li>
            <li><span className="font-bold">Збільшені лімфовузли:</span> Шийні, пахові або під пахвами.</li>
            <li><span className="font-bold">Захворювання прямої кишки:</span> Неприємні відчуття або кров під час дефекації.</li>
          </ul>
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mt-6 mb-2">Як проходить консультація:</h3>
          <ol className="list-decimal pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li><span className="font-bold">Опитування:</span> Лікар розпитує про симптоми, скарги, історію травм та операцій.</li>
            <li><span className="font-bold">Огляд:</span> Хірург оглядає шкірні покриви, перевіряє наявність запалень, травм, новоутворень.</li>
            <li><span className="font-bold">Діагностика:</span> За потреби лікар може призначити додаткові дослідження, наприклад, аналізи або УЗД.</li>
            <li><span className="font-bold">Призначення лікування:</span> На основі огляду та обстежень призначається подальше лікування, яке може включати медикаментозне лікування або направлення на операцію.</li>
          </ol>
        </div>
        {/* Права частина: галерея (1/3) */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryGeneralSurgConsult />
        </div>
      </div>
    </section>
  );
}
