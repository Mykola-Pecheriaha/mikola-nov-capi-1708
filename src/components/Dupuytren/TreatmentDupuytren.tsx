import React from "react";
import { TreatmentDupuytrenClinic } from "./TreatmentDupuytrenClinic";

const TreatmentDupuytren: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: текст */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">
            <span className="font-semibold text-blue-900">Методи лікування контрактури Дюпюїтрена</span>
          </h2>
          <div className="text-base mb-4">
            Враховуючи те що пацієнти звертаються за медичною допомогою при винекненні захворювання як правило не раніше другої стадії захворювання, то на перший план виходять оперативні (хірургічні) методи.
          </div>
          <ul className="list-disc pl-6 space-y-2 text-base mb-2">
            <li><span className="font-semibold text-blue-900">Фасцієктомія:</span> Хірургічне видалення змінених тканин апоневрозу долоні для відновлення рухливості суглобів.</li>
          </ul>
          <div className="text-base mb-2">і краще щоб оперативне втручання виконував хірург з знаннями в пластичній хірургії.</div>
          <ul className="list-disc pl-6 space-y-1 text-base mb-2">
            <li><span className="font-semibold text-blue-900">Звернення саме до пластичного хірурга</span>, має ряд переваг, головне з яких – естетичний вигляд.</li>
            <li><span className="font-semibold text-blue-900">Пластичні хірурги</span> набагато більш делікатні і акуратні в процесі оперування.</li>
          </ul>
          <div className="text-base font-semibold mt-4 mb-2">До нехірургічних методів відносяться</div>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li><span className="font-semibold text-blue-900">Ін’єкційна терапія:</span> Застосування ін’єкцій препаратів, наприклад колагенази, для руйнування уражених тканин та покращення рухливості пальців.</li>
            <li><span className="font-semibold text-blue-900">Фізіотерапія:</span> Комплекс вправ і процедур, спрямованих на покращення рухливості та зменшення симптомів контрактури Дюпюїтрена.</li>
            <li><span className="font-semibold text-blue-900">Лазерна терапія:</span> Застосування лазерного випромінювання для покращення кровообігу та зменшення запалення в уражених тканинах.</li>
            <li><span className="font-semibold text-blue-900">Радіочастотна абляція:</span> Використання радіочастотних хвиль для нейтралізації змін у апоневрозі та зменшення симптомів контрактури Дюпюїтрена.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <TreatmentDupuytrenClinic />
        </div>
      </div>
      {/* Info card: summary text, full width, styled as в попередніх компонентах */}
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900 flex items-start gap-3">
          <span className="text-2xl mt-1 select-none">ℹ️</span>
          <span className="block">
            З огляду на специфічність перебігу цього захворювання, оперативне лікування на раніх стадіях дозволяє повністю відновити функцію кисті. При початкових ступенях контрактури Дюпюїтрена, як правило, проводиться часткове видалення долонно апоневрозу, в запущених випадках - повне.<br />
            Іншими методами лікування контрактури Дюпюїтрена (ін’єкції препаратів, наприклад, колагенази, лазерна терапія і радіочастотна абляція) можуть бути застосовані для покращення симптомів та зменшення обмеження рухливості пальців. Однак вибір оптимального методу лікування завжди повинен базуватися на індивідуальних характеристиках та симптомах пацієнта.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDupuytren;
