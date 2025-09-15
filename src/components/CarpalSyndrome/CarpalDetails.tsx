import React from "react";
import GalleryCarpalDetails from "./GalleryCarpalDetails";
import GalleryDetails from "./GalleryDetails";

const factors = [
  {
    icon: "🔹",
    text: [<strong key="bold">Повторювані рухи рук</strong>, " — часте виконання одних і тих самих дій (наприклад, приготування їжі, прасування, робота на комп`ютері) може спричинити подразнення сухожиль і набряк."]
  },
  {
    icon: "🔹",
    text: [<strong key="bold">Незручне положення руки та зап`ястя</strong>, " — екстремальні чи тривалі згинання можуть збільшити тиск у каналі."]
  },
  {
    icon: "🔹",
    text: [<strong key="bold">Вагітність</strong>, " — гормональні зміни можуть спричинити набряк тканин."]
  },
  {
    icon: "🔹",
    text: [<strong key="bold">Спадковість</strong>, " — анатомічні особливості зап`ястного каналу можуть передаватися генетично."]
  },
  {
    icon: "🔹",
    text: [<strong key="bold">Захворювання</strong>, " — діабет, ревматоїдний артрит, проблеми з щитоподібною залозою можуть бути супутніми причинами."]
  },
  {
    icon: "🔹",
    text: [<strong key="bold">Травми та мікротравми</strong>, " — переломи або постійне мікронавантаження зап`ястя."]
  },
  {
    icon: "🔹",
    text: [<strong key="bold">Професійні фактори</strong>, " — робота за комп`ютером, малярство, механіка, кулінарія тощо."]
  }
];

const CarpalDetails: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Верхній блок: дві частини */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch mb-8">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Синдром зап`ястного каналу.</h1>
          <p className="text-blue-900 text-base mb-4">
            Синдром зап`ястного каналу — це стан, при якому серединний нерв, що проходить через вузький прохід у зап`ясті, стискається, викликаючи оніміння, слабкість і біль у руці та пальцях. Це один із найпоширеніших нервових розладів, особливо серед людей, чия робота пов`язана з повторюваними рухами рук.
          </p>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryCarpalDetails />
        </div>
      </div>

      {/* Горизонтальна риска */}
      <div className="w-full h-[1mm] bg-blue-300 rounded my-8" />

      {/* Нижній блок: дві частини */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Причини здавлення серединного нерва</h2>
          <p className="text-blue-900 text-base mb-4">Більшість випадків синдрому зап`ястного каналу спричинені поєднанням кількох факторів:</p>
          <ul className="space-y-3 mb-4">
            {factors.map((f, idx) => (
              <li key={idx} className="flex items-start gap-2 text-blue-900 text-base font-medium">
                <span className="text-xl mt-1">{f.icon}</span>
                <span>{Array.isArray(f.text) ? f.text.map((part, i) => <React.Fragment key={i}>{part}</React.Fragment>) : f.text}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryDetails />
        </div>
      </div>
    </div>
  );
};

export default CarpalDetails;
