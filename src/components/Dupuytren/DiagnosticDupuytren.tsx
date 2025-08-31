import React from "react";
import { DiagnostDupuytrenClinic } from "./DiagnostDupuytrenClinic";

const DiagnosticDupuytren: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: текст */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">
            <span className="font-semibold">Діагностика</span>
          </h2>
          <div className="text-base mb-4">Для встановлення діагнозу може знадобитися додаткове обстеження:</div>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li><span className="font-semibold text-blue-900">рентгенографія;</span></li>
            <li><span className="font-semibold text-blue-900">біопсія апоневроза;</span></li>
            <li><span className="font-semibold text-blue-900">УЗД;</span></li>
            <li><span className="font-semibold text-blue-900">КТ, МРТ;</span></li>
            <li><span className="font-semibold text-blue-900">реовазографія;</span></li>
            <li><span className="font-semibold text-blue-900">електронейрографія.</span></li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <DiagnostDupuytrenClinic />
        </div>
      </div>
      {/* Info card: summary text, full width, styled as в попередніх компонентах */}
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900 flex items-start gap-3">
          <span className="text-2xl mt-1 select-none">ℹ️</span>
          <span className="block">
            З огляду на специфічність клінічної картини, досвідченому лікарю зазвичай достатньо збору анамнезу та огляду кисті, щоб запідозрити діагноз. Для виявлення контрактури проводиться <span className="font-semibold text-blue-900">спеціальний тест</span>, під час якого пацієнта просять покласти руку на рівну тверду поверхню долонею вниз. Якщо рука не повністю торкається столу, а згинається у вигляді «будиночка», результат вважається позитивним.
          </span>
        </div>
      </div>
    </div>
    );
  }

export default DiagnosticDupuytren;
