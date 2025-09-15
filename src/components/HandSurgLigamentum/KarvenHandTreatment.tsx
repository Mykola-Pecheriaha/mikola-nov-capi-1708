import React from "react";
import GalleryKarvenHandTreatment from "./GalleryKarvenHandTreatment";

const treatments = [
  "протизапальні препарати місцевої дії та для внутрішнього застосування, у тому числі — гормональні засоби;",
  "знеболювальні засоби;",
  "блокада під УЗД-контролем з гормональним препаратом;",
  "іммобілізація великого пальця та променево-зап’ясткового суглоба, надалі — уникнення одноманітних рухів та великого навантаження на кисть руки;",
  "фізіотерапевтичні процедури.",
];

const KarvenHandTreatment: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12 flex flex-col gap-8">

      {/* Верхній блок: заголовок і текст */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Лікування хвороби де Кервена</h2>
        <p className="text-base text-gray-900 mb-2">
          При лікуванні синдрома де Кервена застосовуються як консервативні методи, так і хірургічні. У першу чергу призначаються
        </p>
      </div>
      {/* Нижній блок: дві частини 2/3 і 1/3 */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Ліва частина: методи лікування */}
        <div className="md:w-2/3 w-full">
          <ul className="list-disc pl-6 space-y-3 text-base">
            {treatments.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full">
          <GalleryKarvenHandTreatment />
        </div>
      </div>
            {/* Інформативний блок про операцію */}
      <div className="mt-0">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <p>
              Операція за хвороби де Кервена проводиться, якщо консервативна терапія не забезпечує покращення стану протягом двох місяців. Під час хірургічного втручання лікар розтинає замкнений канал, у якому спостерігається стиснення сухожилля (лігаментотомія). Операція проводиться з відкритим доступом або методом ендоскопії.
            </p>
          </div>
        </div>
      </div>
      {/* Інфокартка на всю ширину */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900">
        <span className="block font-semibold">Профілактика хвороби де Кервена</span><br />
  Для профілактики стенозуючого тендовагініту потрібно уникати тривалого навантаження на великий палець руки. Якщо професійна діяльність пов&rsquo;язана з такими рухами, а також при тривалому використанні смартфона необхідно робити регулярні перерви для відпочинку. Під час роботи з комп&rsquo;ютером бажано користуватися підставками, що розвантажують лікті та кисті рук.
      </div>
    </div>
  );
};

export default KarvenHandTreatment;
