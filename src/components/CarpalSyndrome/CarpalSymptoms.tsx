import React from "react";
import GalleryCarpalSymptoms from "./GalleryCarpalSymptoms";

export default function CarpalSymptoms() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Симптоми синдрому зап&apos;ястного каналу</h2>
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Ліва частина 2/3 */}
        <div className="md:w-2/3 bg-[#e7eeef] w-full flex flex-col justify-center">
          <div className="mb-6">
            <span className="font-semibold text-lg mb-2 block">Вони можуть включати:</span>
            <ul className="list-none space-y-3 text-base">
              <li>🔹 <span className="font-bold">Оніміння, поколювання, печіння та біль</span> — зазвичай у великому, вказівному, середньому та частково безіменному пальцях.</li>
              <li>🔹 <span className="font-bold">Оніміння або поколювання долоні.</span></li>
              <li>🔹 <span className="font-bold">Раптові відчуття ударів</span> — біль або поколювання, що віддає у великий палець і пальці.</li>
              <li>🔹 <span className="font-bold">Відчуття набряку</span> — дискомфорт або припухлість у ділянці зап&apos;ястя.</li>
              <li>🔹 <span className="font-bold">Біль, що поширюється вгору</span> — поколювання або біль можуть підніматися до передпліччя.</li>
              <li>🔹 <span className="font-bold">Слабкість та незграбність</span> — важко виконувати дрібну моторику (застібнути ґудзик, взяти голку тощо).</li>
              <li>🔹 <span className="font-bold">Падіння предметів</span> — через знижену чутливість або м&apos;язову слабкість у руці.</li>
              <li>🔹 <span className="font-bold">Слабке зчеплення або труднощі з носінням сумок</span> — одна з найпоширеніших скарг.</li>
              <li>🔹 <span className="font-bold">Атрофія м&apos;яза під великим пальцем</span> — у тривалих або занедбаних випадках.</li>
            </ul>
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-600 text-xl"></span>
              <span className="font-semibold text-black-700">Як проявляються симптоми?</span>
            </div>
            <ul className="list-none space-y-2 text-base">
              <li>🔹 <span className="font-bold">У більшості випадків симптоми починаються поступово</span></li>
              <li>🔹 <span className="font-bold">Нічні симптоми</span> — Під час сну, пацієнти можуть прокидатися від болю або оніміння.</li>
              <li>🔹 <span className="font-bold">Денні симптоми</span> — часто виникають при тривалому утриманні предметів.</li>
              <li>🔹 <span className="font-bold">Полегшення симптомів</span> — струшування рук або розминання тимчасово зменшує неприємні відчуття.</li>
            </ul>
          </div>
        </div>
        {/* Права частина 1/3: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryCarpalSymptoms />
        </div>
      </div>
    </div>
  );
}
