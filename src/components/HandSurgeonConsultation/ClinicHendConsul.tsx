import React from "react";
import { GalleryHeandConsult } from "./GalleryHeandConsult";

const ClinicHendConsul: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: текст */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">
            <span className="font-semibold text-blue-900">Коли потрібна консультація кистьового хірурга</span>
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-base">
            <li><span className="font-semibold">Больові відчуття</span> — регулярний або періодичний біль у кисті, що посилюється під час навантаження або в спокої.</li>
            <li><span className="font-semibold">Обмежена рухливість</span> — труднощі при згинанні або розгинанні пальців, зниження сили хвата.</li>
            <li><span className="font-semibold">Оніміння і поколювання</span> — особливо в нічний час або під час фізичної активності, що може бути ознакою здавлювання нервів.</li>
            <li><span className="font-semibold">Деформація кисті або пальців</span> — зміни форми суглобів, вкорочення або викривлення пальців.</li>
            <li><span className="font-semibold">Пухлини та новоутворення</span> — поява щільних утворень, які збільшуються в розмірі або спричиняють дискомфорт.</li>
            <li><span className="font-semibold">Травми, які довго не загоюються</span>, — якщо після перелому, вивиху або іншого ушкодження кисті залишаються порушення функції або болі.</li>





   
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryHeandConsult />
        </div>
      </div>
      {/* Info card: summary text, full width, styled as в Dupuytren.tsx */}
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900">
          <span className="block">
            Консультація  хірурга необхідна при появі симптомів, що вказують на можливі патології. Що раніше буде проведено діагностику, то вищі шанси на швидке й ефективне лікування.<br />
            Своєчасне звернення в нашу  клініку  допомагає уникнути ускладнень і значно прискорює відновлення після операції на кисті руки.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClinicHendConsul;
