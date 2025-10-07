"use client";

import Image from "next/image";

export default function ProctoPararectFistulaStart() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Параректальна нориця</h2>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Параректальна нориця — це патологічний канал, який з&#96;єднує пряму кишку з навколишніми м&#96;якими тканинами. Через цей хід можуть виділятися гній, кров та сукровиця, що завдає значного дискомфорту та загрожує серйозними ускладненнями. Цей стан суттєво знижує якість життя і потребує професійної медичної допомоги.</span>
            <br /><br />
            <span className="font-bold">Причини утворення параректальної нориці</span><br />
            Найчастіше нориці формуються на фоні хронічного парапроктиту — гнійного запалення в ділянці прямої кишки. Якщо запалення не лікувати, гнійник розкривається самостійно, утворюючи отвір і патологічний хід — норицю.
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч малюнок */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Види нориць прямої кишки</h3>
          <div className="mb-2">
            <span className="font-bold">За кількістю отворів:</span>
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
              <li>Неповна — один вхідний отвір;</li>
              <li>Повна — має вхід та вихід (з кишки до шкіри);</li>
              <li>Внутрішня — обидва отвори знаходяться в прямій кишці.</li>
            </ul>
          </div>
          <div className="mb-2">
            <span className="font-bold">За розташуванням:</span>
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
              <li>Інтрасфінктерна — прохід під сфінктером;</li>
              <li>Транссфінктерна — проходить крізь сфінктер;</li>
              <li>Екстрасфінктерна — йде від кишки повз сфінктер у промежину.</li>
            </ul>
          </div>
          <div className="mb-2">
            <span className="font-bold">Стадії розвитку патології</span>
            <ol className="list-decimal pl-6 text-base md:text-lg text-gray-700 space-y-2">
              <li>Формується вузький канал у тканинах.</li>
              <li>Починається запалення та рубцювання.</li>
              <li>Накопичується гній, посилюється запалення.</li>
              <li>Розплавлення тканин, розширення отвору, глибоке ураження.</li>
            </ol>
          </div>
        </div>
        {/* Права частина: малюнок */}
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <Image src="/images/procto/pararectal-fistula/parafistula1.jpg" alt="Параректальна нориця" width={600} height={800} className="rounded-lg shadow-lg object-contain w-full h-auto max-h-[300px]" />
        </div>
      </div>
    </section>
  );
}
