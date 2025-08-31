import React from "react";
import Image from "next/image";

const Dupuytren: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: текст */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Контрактура Дюпюїтрена</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-center gap-3 text-blue-900 text-base font-medium">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold">✓</span>
              Сучасне лікування контрактури Дюпюїтрена
            </li>
            <li className="flex items-center gap-3 text-blue-900 text-base font-medium">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold">✓</span>
              Ефективне відновлення функції кисті
            </li>
            <li className="flex items-center gap-3 text-blue-900 text-base font-medium">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold">✓</span>
              Професійна допомога при контрактурі
            </li>
            <li className="flex items-center gap-3 text-blue-900 text-base font-medium">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold">✓</span>
              Діагностика та лікування без зволікань
            </li>
            <li className="flex items-center gap-3 text-blue-900 text-base font-medium">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg font-bold">✓</span>
              Відновлення рухливості пальців — надійно та безпечно
            </li>
          </ul>
        </div> {/* ← закрив ліву частину */}

        {/* Права частина: малюнок */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <Image
            src="/images/hand/dupuytren-removebg-preview.png"
            alt="Контрактура Дюпюїтрена"
            width={320}
            height={320}
            className="rounded-lg object-contain max-h-[320px]"
          />
        </div>
      </div>

      {/* Опис процесу на всю ширину */}
      <div className="mt-6">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <p className="mb-2">
              <span className="font-semibold">Контрактура Дюпюїтрена (долонний фіброматоз)</span> — це захворювання, при якому в тканинах долоні утворюються вузлики та щільні тяжі. Вони поступово стягують пальці, обмежуючи їх розгинання.<br/>
              <span className="block mt-1">Найчастіше уражаються безіменний палець і мізинець, переважно у чоловіків віком 40–60 років.</span>
            </p>
            <p>
              <span className="font-semibold">Суть процесу:</span> потовщення та вкорочення апоневроза. З цієї причини розвиваються зміни в сухожиллях і формуються підшкірні тяжі. Як наслідок, виникає контрактура — обмежена рухливість пальців. Візуально це виглядає як зігнуті до долоні пальці, які неможливо самостійно розігнути.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dupuytren;
