import React from "react";
import Image from "next/image";

const StartHendConsul: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: текст */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">
            <span className="font-semibold text-blue-900">Хірургія кисті</span>
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-base">
            <li><span className="font-semibold">Ваші руки — наша турбота.</span> Ми допомагаємо повернути рухливість і силу кисті, щоб ви знову могли комфортно працювати та жити без болю.</li>
            <li><span className="font-semibold">Чутливий підхід.</span> Дбайливо проводимо операції, щоб зберегти рухливість та чутливість пальців.</li>
            <li><span className="font-semibold">Здоров’я без болю</span> Виконуємо лікування контрактури Дюпюїтрена та синдрому зап’ясткового каналу для полегшення рухів.</li>
            <li><span className="font-semibold">Турбота про красу та функцію.</span> Проводимо видалення гігроми, кіст та корекцію рубцевих змін, щоб відновити не лише функцію, а й естетику кисті.</li>
            <li><span className="font-semibold">Вирішення вроджених проблем.</span> Допомагаємо при аномаліях розвитку кисті для кращої якості життя.</li>
            <li><span className="font-semibold">Індівідуальний підхід.</span> Ми враховуємо індивідуальні потреби кожного пацієнта, поєднуючи професійність і турботу.</li>
          </ul>
        </div>
        {/* Права частина: малюнок */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <Image src="/images/hand/Start-hend.jpg" alt="Хірургія кисті" width={350} height={350} className="rounded-xl object-cover shadow" />
        </div>
      </div>
      {/* Info card: summary text, full width, styled as в Dupuytren.tsx */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900">
        <span className="block">
          Нам завжди хочеться взяти в свої руки життя, робочі процеси, побут. Але іноді трапляється так, що руки втрачають не лише можливість тримати все під контролем, а й власну силу.
        </span>
      </div>
    </div>
  );
};

export default StartHendConsul;
