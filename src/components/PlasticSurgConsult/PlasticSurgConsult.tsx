"use client";
import React, { useState } from "react";
import BurgerConsultationModal from "@/components/Header/BurgerConsultationModal";
import Image from "next/image";
import PlasticSurgConsultSidebar from "./PlasticSurgConsultSidebar";
export default function PlasticSurgConsult() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="w-full flex flex-col gap-8 my-8">
      {/* Верхній блок (без Sidebar) */}
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden relative z-10 min-h-[320px]">
          {/* Ліва частина */}
          <div className="md:w-1/2 w-full flex flex-col justify-between p-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Консультація пластичного хірурга</h2>
              <p className="mb-2">
                <strong>Пластична хірургія</strong> — це поєднання сучасних медичних технологій та мистецтва вдосконалення зовнішності.<br/>
                Перший крок до бажаних змін починається з індивідуальної консультації.<br/>
                Саме тут ви отримаєте відповіді на всі запитання, дізнаєтесь про можливості сучасної медицини, етапи підготовки та відновлення.<br/>
                Консультація допомагає оцінити очікуваний результат, обрати оптимальний метод і забезпечити максимальну безпеку.
              </p>
              <p className="mb-2">
                <strong>Я — пластичний хірург</strong> із понад 25-річним досвідом, член Європейської асоціації пластичних хірургів.<br/>
                Навчався у провідних спеціалістів світу та виконую всі види пластичних операцій.<br/>
                Понад <strong>2600 пацієнтів із різних країн</strong> вже довірили мені свою красу.
              </p>
              <p className="mb-2">
                Ми всі різні. Хтось мріє про тонкий прямий носик чи підтягнуту шкіру, інші — про гармонійні форми та струнку фігуру.<br/>
                Жінки прагнуть виразних очей, привабливих грудей і витонченої талії, чоловіки — мужніх рис обличчя та підтягнутого тіла.<br/>
                Такі зміни впливають не лише на зовнішність, але й на самопочуття, впевненість і навіть життєвий успіх.<br/>
                Разом із моєю командою ми допомагаємо втілити ці бажання, створюючи красу, яка підкреслює <strong>вашу індивідуальність</strong>.
              </p>
            </div>
            <div className="mt-6">
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                onClick={() => setShowForm(true)}
              >
                записатися на прийом
              </button>
            </div>
            <BurgerConsultationModal open={showForm} onClose={() => setShowForm(false)} />
          </div>
          {/* Права частина - зображення лікаря */}
          <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-50 p-4 min-h-[320px]">
            <Image src="/images/gallery-images/gallery-images1.jpg" alt="Пластичний хірург" width={350} height={350} className="rounded-lg object-cover object-top w-full h-[320px] max-w-[350px]" />
          </div>
        </div>
      </div>
      {/* Далі flex-row: секції + Sidebar */}
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* Лівий контейнер: усі секції */}
        <div className="w-full md:w-3/4 flex flex-col gap-8">
          {/* Передопераційний період */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-2">Передопераційний період</h3>
            <p>
              Це важливий етап успішної пластичної операції. Його головна мета — знизити ризики та можливі ускладнення. Операція є стресом для організму, тому потрібно врахувати всі фактори. Щоб спрогнозувати результат і підготуватися до втручання, пацієнт має отримати максимум інформації під час консультацій з хірургом.
            </p>
            {/* Дві колонки: зображення + текст */}
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              {/* Зображення зліва (1/3) */}
              <div className="md:w-1/3 w-full flex items-center justify-center bg-gray-50 p-4 rounded-xl">
                <Image src="/images/gallery-images/gallery-images1.jpg" alt="Консультація" width={260} height={180} className="rounded-lg object-contain object-top h-[180px] max-h-[180px] w-auto max-w-full" />
              </div>
              {/* Текст справа (2/3) */}
              <div className="md:w-2/3 w-full flex flex-col justify-center">
                <h4 className="text-lg font-semibold mb-2">Первинна консультація в клініці пластичної хірургії</h4>
                <p className="mb-2">Першим кроком до пластичної операції є консультація. Хоча інформація про хірургію доступна у відкритих джерелах, кожен пацієнт унікальний, як і кожна операція. Саме лікар може пояснити протипоказання, терміни реабілітації , тому особиста зустріч є надзвичайно важливою.</p>
                <div>
                  <span className="font-bold block mb-1">На консультації обговорюють:</span>
                  <ul className="list-disc pl-6 mb-2">
                    <li>варіанти вирішення проблеми;</li>
                    <li>хід операції;</li>
                    <li>реабілітаційний період; організаційні питання.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Текст на всю ширину під секцією */}
            <div className="mt-6">
              <p>
                Пацієнт і хірург мають досягти взаєморозуміння щодо очікувань і можливих ризиків. Лікар повинен переконатися, що пацієнт усвідомлює як позитивні, так і можливі негативні наслідки втручання, а також реальні межі результату. Пацієнт зобов’язаний повідомити лікаря про попередні операції, хронічні захворювання (цукровий діабет, гіпертонія, варикозна хвороба, тромбофлебіт, туберкульоз, гепатит, ВІЛ тощо), алергії, спадкові хвороби та препарати, які приймав останні два тижні.
              </p>
            </div>
          </div>
          {/* Види обстеження */}
          <div className="bg-white rounded-xl shadow p-6 mt-8">
            <h3 className="text-xl font-bold mb-2">Види обстеження перед операцією</h3>
            <ul className="list-disc pl-6 mb-2">
              <li>Загальний аналіз крові та сечі</li>
              <li>Біохімічний аналіз крові</li>
              <li>Коагулограма</li>
              <li>Група крові та резус-фактор</li>
              <li>ЕКГ, флюорографія</li>
              <li>Консультації суміжних спеціалістів (за потреби)</li>
            </ul>
          </div>
          {/* Самостійна підготовка */}
          <div className="bg-white rounded-xl shadow p-6 mt-8">
            <h3 className="text-xl font-bold mb-2">Самостійна підготовка пацієнта перед операцією</h3>
            <ul className="list-disc pl-6 mb-2">
              <li>Відмова від куріння та алкоголю мінімум за тиждень</li>
              <li>Відміна препаратів, що впливають на згортання крові</li>
              <li>Дотримання рекомендацій лікаря щодо харчування та режиму</li>
              <li>Відмова від косметичних процедур перед операцією</li>
            </ul>
          </div>
          {/* День операції */}
          <div className="bg-white rounded-xl shadow p-6 mt-8">
            <h3 className="text-xl font-bold mb-2">День операції в клініці</h3>
            <ul className="list-disc pl-6 mb-2">
              <li>Мати при собі всі аналізи, паспорт, зручний одяг</li>
              <li>Не користуватися косметикою чи парфумерією</li>
              <li>Повідомити лікаря про зміни в самопочутті</li>
              <li>При операціях на обличчі взяти темні окуляри</li>
              <li>Бажано, щоб після виписки вас супроводжували родичі</li>
            </ul>
          </div>
          {/* Проведення операції */}
          <div className="bg-white rounded-xl shadow p-6 mt-8">
            <h3 className="text-xl font-bold mb-2">Проведення пластичної операції</h3>
            <p>
              Пацієнта доставляють в операційну. Тривалість втручання залежить від його складності та може тривати від 40 хвилин до 6 годин. Після операції пацієнт переводиться в палату. При амбулаторних втручаннях додому можна повернутися вже через 2 години. Якщо ж застосовується наркоз, необхідне перебування в клініці щонайменше добу під наглядом персоналу.
            </p>
          </div>
        </div>
        {/* Sidebar справа (md:w-1/4) */}
        <div className="w-full md:w-1/4 flex-shrink-0">
          <PlasticSurgConsultSidebar />
        </div>
      </div>
    </div>
  );
}

