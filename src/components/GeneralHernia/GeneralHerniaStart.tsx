"use client";

import { GalleryHerniaStart } from "./GalleryHerniaStart";

export default function GeneralHerniaStart() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-10 py-8 px-2 md:px-8">
      {/* Заголовок по центру */}
      <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-2">Лікування гриж черевної стінки</h2>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Грижі передньої черевної стінки – патологічні стани, які пов&apos;язані з випинанням органів під шкіру через пупкове кільце, паховий канал та інші слабкі місця передньої черевної стінки.</span>
            <br /><br />
            Основна причина виникнення патології – дисбаланс між внутрішньочеревним тиском і здатністю стінки живота йому протидіяти. Перерахуємо фактори, які призводять до її розвитку:
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина (2/3) */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">Для появи грижі живота, причини можуть бути такими:</h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-2">
            <li>Особливості анатомічної будови і конституції, в першу чергу спадкова схильність.</li>
            <li>спадкові особливості розташування та формування м&apos;язів, з недорозвиненням м&apos;язів в окремих ділянках живота;</li>
            <li>закрепи;</li>
            <li>захворювання із сильним кашлем;</li>
            <li>порушення сечовипускання (характерно для чоловіків віком з аденомою простати);</li>
            <li>робота, пов&apos;язана із фізичними навантаженнями;</li>
            <li>неправильний вибір ваги для занять у тренажерному залі;</li>
            <li>у жінок – вагітність, пологи через родові шляхи;</li>
            <li>ожиріння з відкладенням великої кількості абдомінального жиру;</li>
            <li>пухлини черевної порожнини.</li>
          </ul>
        </div>
        {/* Права частина: галерея (1/3) */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryHerniaStart />
        </div>
      </div>
      {/* Опис на всю ширину після галереї */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <span className="font-bold">Грижа - це поширене захворювання, яке у дорослої людини можна усунути тільки оперативним шляхом. Грижа ніколи не проходить самостійно і доставляє пацієнтові багато болісних відчуттів.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
