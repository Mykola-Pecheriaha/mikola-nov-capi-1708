import React from "react";
import Image from "next/image";

const PrychynyDyupyitrena: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: текст */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Причини та фактори розвитку контрактури Дюпюїтрена</h2>
          <p className="mb-2">
            <span className="font-semibold">Точні причини виникнення цього захворювання залишаються не до кінця з’ясованими. Однак лікарі виділяють кілька основних факторів ризику:</span>
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li><span className="font-bold">Травми кисті</span> – переломи, вивихи, пошкодження м’язів, зв’язок чи сухожиль.</li>
            <li><span className="font-bold">Ураження периферичних нервів.</span></li>
            <li><span className="font-bold">Спадковість</span> – анатомічна особливість сухожильної пластинки (надмірна ширина, наявність колагенових та еластичних волокон).</li>
            <li><span className="font-bold">Вік</span> – ризик зростає після 50 років.</li>
            <li><span className="font-bold">Стать</span> – у чоловіків контрактура трапляється частіше.</li>
            <li><span className="font-bold">Супутні захворювання</span> – цукровий діабет, епілепсія та інші патологічні стани.</li>
          </ul>
        </div>
        {/* Права частина: малюнок */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <Image
            src="/images/hand/dupuytren2-removebg-preview.png"
            alt="Причини контрактури Дюпюїтрена"
            width={320}
            height={320}
            className="rounded-lg object-contain max-h-[320px]"
          />
        </div>
      </div>
      {/* Текст на всю ширину внизу */}
      <div className="mt-8 mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            На практиці контрактура Дюпюітрена зустрічається частіше у чоловіків середнього і старшого віку, а якщо вона розвивається у молодих, то зазвичай прогресує швидше.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrychynyDyupyitrena;
