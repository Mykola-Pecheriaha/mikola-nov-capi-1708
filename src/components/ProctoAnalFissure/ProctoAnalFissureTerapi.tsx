"use client";

import { GalleryAnalFissureTerapi } from "./GalleryAnalFissureTerapi";

export default function ProctoAnalFissureTerapi() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок + опис */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Лікування хронічної анальної тріщини</h2>
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Гостру анальну тріщину можна вилікувати консервативно, тобто за допомогою ректальних свічок, мазей та інших препаратів.</span> Лікувати хронічні тріщини цими способами неефективно. Для їх усунення використовують малоінвазивні методики та хірургічні операції.
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">1. Консервативне лікування</h3>
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
              <li>лікування закрепу, теплі сидячі ванночки</li>
              <li>місцеві анестетики (2 % лідокаїновий гель)</li>
              <li>протизапальні супозиторії (з ГКС)</li>
              <li>блокатор кальцієвих каналів місцевої дії (мазь дилтіазем  2 %)</li>
              <li>місцево ЛЗ, що поліпшує процес кровопостачання анального каналу (нітрогліцеринова мазь 0,2 %).</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">2. Інвазивне лікування</h3>
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
              <li>ботулотоксин в ін’єкціях.</li>
              <li>хірургічне втручання показано, коли консервативне лікування є неефективним</li>
              <li>висічення тріщини з надрізом поверхневих волокон внутрішнього анального сфінктера</li>
              <li>лівобічна сфінктеротомія при тріщинах з підвищеним тонусом встановленої етіології</li>
            </ul>
          </div>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryAnalFissureTerapi />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Щоб уникнути цих наслідків, важливо не зволікати з лікуванням.</span> Чим раніше ви звернетеся до фахівця, тим легше та ефективніше пройде терапія.<br />
            Відновлювальний період становить 2-3 дні стаціонару з перев’язками та дезінфекцією. Після виписки не можна часто перебувати в сидячому положенні, це негативно позначиться на процесі загоєння. Реабілітаційний термін триває 3-5 тижнів залежно від складності форми проктологічної хвороби.
          </div>
        </div>
      </div>
    </section>
  );
}
