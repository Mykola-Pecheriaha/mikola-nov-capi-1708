"use client";

import { GalleryСoccyxСystRelapse } from "./GalleryСoccyxСystRelapse";

export default function ProctoСoccyxСystRelapse() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок + опис */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Рецидив епітеліального куприкового ходу</h2>
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Після успішного загоєння всі ці обмеження скасовуються. Також важливо пам’ятати, що жінкам можна планувати вагітність через рік після операції.</span>
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Важливо пам’ятати кілька моментів:</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li><span className="font-bold">регулярно голити волосся</span> поблизу рани;</li>
            <li><span className="font-bold">носити білизну</span>, яка виготовлена з натуральних матеріалів і не тисне;</li>
            <li><span className="font-bold">не нехтувати якісною гігієною</span> міжсідничної області.</li>
            <li><span className="font-bold">Уникнення травм куприка.</span> Травми можуть сприяти відкриттю ходу та розвитку запалення.</li>
            <li><span className="font-bold">Зменшення тиску на куприк.</span> Тривале сидіння або надмірний тиск можуть підвищити ризик виникнення запалення.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryСoccyxСystRelapse />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Після успішного загоєння всі ці обмеження скасовуються. Також важливо пам’ятати, що жінкам можна планувати вагітність через рік після операції. Загалом, все індивідуально й залежить від віку пацієнта, особливостей організму, обсягу втручання та інших факторів. У тих, хто звернувся по допомогу на ранніх стадіях захворювання, буде простіше й швидше проходити відновлення після операції на кісті куприка. Якщо ж патологія ускладнена, й операція проводилася з великим висіченням тканин, то потрібно приготуватися до тривалої реабілітації та ретельно виконувати всі рекомендації лікаря. Також важливо з’являтися на контрольні огляди, щоб відстежувати динаміку загоєння тканин. Зазвичай їх призначають через 1-2 тижні, потім 6 та 12 місяців після операції.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
