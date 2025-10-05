"use client";

import { GalleryAnalFissureSimptom } from "./GalleryAnalFissureSimptom";

export default function ProctoAnalFissureSimptom() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок + опис */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Види і Симптоми тріщин прямої кишки</h2>
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Сучасна медицина поділяє проктологічне захворювання на дві форми — гостру та хронічну.</span> Відрізнити їх можна за загальною клінічною симптоматикою недуги та шляхом візуального огляду із застосуванням обладнання. Якщо не лікувати гостру стадію, вона перейде в запущену (хронічну), а отже, і тактика лікування буде іншою.
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Гостра анальна тріщина і її симптоми:</h3>
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
              <li>Дискомфорт та біль коло ануса;</li>
              <li>Спазми сфінктера;</li>
              <li>Поява кровотечі;</li>
              <li>Біль під час випорожнення кишківника;</li>
              <li>В деяких випадках – свербіж та зуд.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Хронічна анальна тріщина і її симптоми:</h3>
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
              <li>кал з домішками крові;</li>
              <li>гнійні виділення;</li>
              <li>біль під час тривалого сидіння на одному місці;</li>
              <li>поява закрепів.</li>
            </ul>
          </div>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryAnalFissureSimptom />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Як відрізнити ректальної тріщини від геморою?</span> При геморої біль не настільки виражений, як під час тріщини біля заднього проходу. Біль триває не настільки довго, на відміну від ректальної тріщини. При появі будь-яких симптомів тріщини заднього проходу, болю, кровотечі, необхідно звернутися по медичну допомогу.
          </div>
        </div>
      </div>
    </section>
  );
}
