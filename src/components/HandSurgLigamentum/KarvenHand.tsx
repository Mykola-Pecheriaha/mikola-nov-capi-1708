import React from "react";
import GalleryKarvenHand from "./GalleryKarvenHand";
import Image from "next/image";

const symptoms = [
  "біль та дискомфорт в області сухожилків згиначів (основа великого пальця);",
  "набряк та запалення навколо сухожилків; обмеження руху у суглобі;",
  "хрускіт, скрип або тріскання під час руху; почуття застрявання або 'заїдання' сухожилків під час руху;",
  "посилення симптомів при фізичній активності чи після періоду спокою;",
  "можливе обмеження функціональності суглоба, атрофія м'язів",
];

const diagnostics = [
  "Рентген , МРТ-кальцинозу в області кістково-фіброзного каналу;",
  "УЗД для оцінки стану сухожилків, їх товщини, структури, наявності запалення та рідини;",
  "Лабораторні дослідження, такі як аналізи крові та маркери запалення,",
  "Діагностичні ін'єкції з локальними анестетиками та кортикостероїдами для підтвердження діагнозу та зняття больового синдрому;",
];

const KarvenHand: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12 flex flex-col gap-8">
      {/* Верхній блок: заголовок і текст */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Хвороба де Кервена</h2>
        <p className="text-base text-gray-900 mb-2">
          Або стенозуючий тендовагініт – хронічна патологія запального генезу, що повільно прогресує.<br />
          Основна причина розвитку синдрому де Кервена — мікротравми сухожилля, які виникають через повторення одноманітних рухів пальців та кисті, надмірні навантаження
        </p>
      </div>
      {/* Нижній блок: дві частини 2/3 і 1/3 */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Ліва частина: симптоми і діагностика */}
        <div className="md:w-2/3 w-full">
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Типові симптоми:</h3>
          <ul className="list-disc pl-6 space-y-2 text-base mb-4">
            {symptoms.map((s, idx) => (
              <li key={idx}>{s.replace("'", "&apos;")}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Діагностика хвороби де Кервена:</h3>
          <ul className="list-disc pl-6 space-y-2 text-base">
            {diagnostics.map((d, idx) => (
              <li key={idx}>{d.replace("'", "&apos;")}</li>
            ))}
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full">
          <GalleryKarvenHand />
        </div>
      </div>
      {/* Інфокартка на всю ширину */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900">
        <span className="block font-semibold">Тест Фінкельштейна.</span> Використовують з метою виявлення недуги за наявності у пацієнта больового синдрому в ділянці променево-зап`ясткового суглоба. У ході діагностики людину просять притиснути перший палець до долоні, потім з&apos;єднати його з іншими пальцями, і на завершення - зігнути кисть у напрямку п&apos;ятого пальця.
      </div>
      {/* Два малюнки в рядочок */}
      <div className="flex flex-row gap-4 mt-6 justify-center">
        <Image src="/images/hand/karven-test1.jpg" alt="Тест Фінкельштейна 1" width={350} height={220} className="rounded-xl object-cover shadow" />
        <Image src="/images/hand/karven-test2.jpg" alt="Тест Фінкельштейна 2" width={350} height={220} className="rounded-xl object-cover shadow" />
      </div>
      {/* Інфокартка на всю ширину */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900">
        <span className="block">
          Крім того, вищезгадана патологія може призвести до втрати можливості утримувати предмети за допомогою великого пальця. Перевірити цей момент можна, якщо дати пацієнту відразу кілька речей (наприклад, коробку зі сірниками та ручки): за наявності захворювання він не зможе тримати предмети першим та другим пальцями.
        </span>
      </div>
    </div>
  );
};

export default KarvenHand;
