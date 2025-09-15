import React from "react";
import Image from "next/image";

const PrychynyCarpalSyndrome: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: текст */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Причини та механізм розвитку карпального синдрому</h2>
          <p className="mb-2">
            <span className="font-semibold">Попри його багато назв (cиндро́м запя́стного каналу, синдром друкарки, хвороба офісних працівників…) є тим захворюванням яке виникає в людей, чия професія повязана з одноманітними рухами запястя та незручним положенням рук при виконанні роботи.</span>
          </p>
          <p className="mb-2">
            Суть захворювання зводиться до того, що в процесі цих рухів кисті поступово виникає потовщення і ущільнення оболонок сухожилків згиначів, які проходять з передпліччя на кисть через вузький канал на запястку. Цей канал називається карпальним, є досить обмежений і в звязку з тим що він утворений з трьох сторін кістками запястка. А з однієї сторони досить щільною карпальною звязкою, яка не в змозі розтягуватися. Тому місця в цьому каналі досить обмежено і через ці потовщення оболонок сухожилок приводить до здавлення нерва (серединного) який також там проходить.
          </p>
        </div>
        {/* Права частина: малюнок */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <Image
            src="/images/carpal/carpal-main.jpg"
            alt="Причини карпального синдрому"
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
            Карпальний синдром найчастіше виникає у людей, які виконують багато одноманітних рухів кистю або працюють у незручному положенні рук. Вчасна діагностика і лікування дозволяють уникнути ускладнень та зберегти функцію кисті.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrychynyCarpalSyndrome;
