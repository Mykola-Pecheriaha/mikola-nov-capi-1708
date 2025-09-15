import React from "react";
import GalleryGangLigamentum from "./GalleryGangLigamentum";

const types = [
  "Мукозна. Виникає захворюванні суглобів - деформуючому артрозі.",
  "Післятравматична - після  пошкодження суглоба.",
  "Сухожилкова  - після  травм чи патологічних змін оболонки сухожилків.",
];
const sizes = [
  "маленькі: менше 1 см в діаметрі;",
  "середні: від 1 до 3 см в діаметрі;",
  "великі: більше 3 см в діаметрі.",
];
const symptoms = [
  "тупий біль на постійній основі;",
  "больові відчуття після навантаження;",
  "біль, що іррадіює в інші області по ходу нерва та судин, задіяних у патологічний процес.",
];

const GangLigamentum: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12 flex flex-col gap-8">
      {/* По центру сторінки */}
      <div className="flex justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Гігроми</h2>
      </div>
      {/* Інформативний блок на всю ширину */}
      <div className="w-full bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 text-base text-blue-900">
  <span className="font-semibold">Ганглії (або гігроми) кисті</span> – це доброякісні кістоподібні утворення, що наповнені желеподібною рідиною і розташовуються біля суглобів або сухожиль, найчастіше на тильній стороні зап&rsquo;ястя. <br/>
        Хоча вони не є злоякісними, їх поява вимагає медичного огляду, оскільки в деяких випадках вони можуть викликати біль, обмежувати рухливість або бути косметичним дефектом
      </div>
      {/* Дві частини: зліва текст, справа галерея */}
      <div className="flex flex-col md:flex-row gap-8 items-start mt-8">
        <div className="md:w-2/3 w-full">
          <div className="mb-4">
            <span className="font-semibold">Гігроми бувають:</span><br/>
            За своєю будовою гігроми бувають однокамерні та багатокамерні.
          </div>
          <div className="mb-4">
            <span className="font-semibold">Залежно від причини, гігроми поділяються на такі види:</span>
            <ul className="list-disc pl-6 space-y-2">
              {types.map((t, idx) => <li key={idx}>{t}</li>)}
            </ul>
          </div>
          <div className="mb-4">
            <span className="font-semibold">За розміром гігроми можуть бути:</span>
            <ul className="list-disc pl-6 space-y-2">
              {sizes.map((s, idx) => <li key={idx}>{s}</li>)}
            </ul>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Симптоми гігроми:</span>
            <ul className="list-disc pl-6 space-y-2">
              {symptoms.map((s, idx) => <li key={idx}>{s}</li>)}
            </ul>
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <GalleryGangLigamentum />
        </div>
      </div>
      {/* Інфокартка на всю ширину */}
      <div className="w-full bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900">
        Пацієнт відчуває наявність новоутворення під шкірою. У деяких випадках гігрома може ніяк не виявлятися або викликати тільки дискомфортні відчуття при навантаженнях на пошкоджений суглоб або сухожилки. Якщо гігрома знаходиться поблизу нервів, може виникнути відчуття поколювання чи оніміння в пальцях руки чи ноги залежно від локалізації.
      </div>
    </div>
  );
};

export default GangLigamentum;
