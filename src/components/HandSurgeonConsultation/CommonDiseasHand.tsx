import React from "react";
import GalleryCommonDiseasHand from "./GalleryCommonDiseasHand";

const diseases = [
  {
    title: "Контрактура Дюпюїтрена",
    desc: "генетично обумовлене захворювання, що уражає долонний апоневроз, формує його фіброзне переродження з залученням сухожилків згиначів та судинно-нервових пучків у важчих випадках",
  },
  {
    title: "Синдром де Кервена",
    desc: "теносиновіїт сухожилків короткого розгинача та довгого м’язу, що відводить І палець кисті",
  },
  {
    title: "Тендовагініт",
    desc: "запальний процес сухожилка та сухожильної піхви.",
  },
  {
    title: "Тунельні синдроми",
    desc: "стан, коли в природньому ході периферичного нерва відбувається його компресія.",
  },
  {
    title: "Гігроми або ганглії",
    desc: "пухлиноподібне доброякісне утворення, що виникає в проекції суглобів зазвичай, яке може викликати локальний біль.",
  },
  {
    title: "Стенозуючий лігаментит або хвороба Нотта",
    desc: "захворювання, при якому порушується ковзання сухожилків згиначів через анулярну зв’язку А1, коли виникає характерний звук «клацання» при згинанні/розгинанні пальця кисті.",
  },
  {
    title: "Синдактилії",
    desc: "вроджені захворювання кисті.",
  },
];

const CommonDiseasHand: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12 flex flex-col md:flex-row gap-8 items-start">
      {/* Ліва частина: заголовок і список */}
      <div className="md:w-2/3 bg-[#e7eeef] w-full">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Поширені захворювання кисті рук</h2>
        <ul className="list-disc pl-6 space-y-4 text-base">
          {diseases.map((d, idx) => (
            <li key={idx}>
              <span className="font-semibold text-blue-900">{d.title}</span> – {d.desc}
            </li>
          ))}
        </ul>
      </div>
      {/* Права частина: галерея */}
      <div className="md:w-1/3 w-full">
        <GalleryCommonDiseasHand />
      </div>
    </div>
  );
};

export default CommonDiseasHand;
