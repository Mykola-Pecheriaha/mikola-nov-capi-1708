"use client";

import { GalleryAnalFissureComplic } from "./GalleryAnalFissureComplic";

export default function ProctoAnalFissureComplic() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок + опис */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Ускладнення при анальній тріщин</h2>
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Анальна тріщина — це не лише болюче, але й потенційно небезпечне захворювання.</span> Без своєчасного лікування навіть незначна фісура може призвести до серйозних ускладнень, які потребуватимуть складнішого та тривалішого лікування.
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-4">
            <li><span className="font-bold">Хронізація процесу.</span> Найчастіше гостра тріщина переходить у хронічну форму. Краї дефекту ущільнюються, з’являються рубці, бахромки або навіть анальні поліпи. У такому стані фісура не загоюється самостійно й вимагає хірургічного втручання.</li>
            <li><span className="font-bold">Розвиток парапроктиту.</span> Це гнійне запалення тканин навколо прямої кишки, яке виникає через інфікування рани. Парапроктит може викликати лихоманку, загальну слабкість, інтенсивний біль і потребує термінової медичної допомоги.</li>
            <li><span className="font-bold">Формування анального свища.</span> Хронічне запалення призводить до утворення патологічного ходу між прямою кишкою та шкірою навколо ануса. Свищі викликають постійний дискомфорт, гнійні виділення та потребують оперативного лікування.</li>
            <li><span className="font-bold">Постійна кровотеча та анемія.</span> Навіть незначна, але регулярна втрата крові з тріщини може спричинити розвиток залізодефіцитної анемії, особливо у людей зі зниженим гемоглобіном.</li>
            <li><span className="font-bold">Рефлекторна затримка дефекації.</span> Біль та спазм сфінктера можуть викликати страх перед спорожненням, що призводить до утворення “замкнутого кола”: затримка стільця → ще більші закрепи → ще глибша тріщина.</li>
            <li><span className="font-bold">Вторинні інфекції.</span> Відкритий дефект слизової — це “вхідні ворота” для бактерій. Інфікування може поширюватися глибше, викликаючи абсцеси, запалення або навіть системні ускладнення.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryAnalFissureComplic />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Щоб уникнути цих наслідків, важливо не зволікати з лікуванням.</span> Чим раніше ви звернетеся до фахівця, тим легше та ефективніше пройде терапія.
          </div>
        </div>
      </div>
    </section>
  );
}
