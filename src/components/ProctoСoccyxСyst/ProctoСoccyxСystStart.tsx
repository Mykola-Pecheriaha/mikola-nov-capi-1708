"use client";

import Image from "next/image";

export default function ProctoСoccyxСystStart() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок + опис */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Кіста куприка - Пілонідальна кіста</h2>
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Кіста куприка – це вроджена патологія у вигляді дефекту, який являє собою вузький хід і відкривається в області межсідничної складки одним або декількома отворами.</span> Утворення розташовується в підшкірно-жировій клітковині куприково-крижової області. З плином часу в цій порожнини можуть збиратися клітини ороговілої шкіри, волосся, секрет потових і сальних залоз, що призводить до розвитку запального процесу. Найчастіше вона виникає у чоловіків, ніж у жінок, і в молодому віці.
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч малюнок */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Фактори розвитку:</h3>
          <ol className="list-decimal pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li>Порушення функцій потових і сальних залоз.</li>
            <li>Травми куприкової області.</li>
            <li>Сидяча робота.</li>
            <li>Надлишкова маса тіла.</li>
            <li>Знижена рухова активність.</li>
            <li>Носіння тісної нижньої білизни.</li>
            <li>Надмірний ріст волосся на тілі.</li>
            <li>Порушення правил особистої гігієни.</li>
          </ol>
        </div>
        {/* Права частина: малюнок */}
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <Image src="/images/procto/coccyxcyst/coccyx.jpg" alt="Схематичний малюнок кісти куприка" width={800} height={800} className="rounded-lg object-contain max-h-[900px] w-full" />
        </div>
      </div>
    </section>
  );
}
