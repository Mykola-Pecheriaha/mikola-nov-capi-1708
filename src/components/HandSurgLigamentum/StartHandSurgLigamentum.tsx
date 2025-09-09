import React from "react";
import GalleryHandSurgLigamentum from "./GalleryHandSurgLigamentum";

const items = [
  {
    title: "Ваші руки — наша турбота.",
    desc: "Ми допомагаємо повернути рухливість і силу кисті, щоб ви знову могли комфортно працювати та жити без болю.",
  },
  {
    title: "Синдром де Кервена",
    desc: "теносиновіїт сухожилків І пальця кисті",
  },
  {
    title: "Стенозуючий лігаментит або хвороба Нотта",
    desc: "захворювання, при якому порушується ковзання сухожилків згиначів , 'клацающий палець'.",
  },
  {
    title: "Доброякісні утворення кисті.",
    desc: "Видалення гангліом та інших новоутворень з відновленням природного вигляду та функції кисті.",
  },
  {
    title: "Чутливий підхід.",
    desc: "Ми враховуємо індивідуальні потреби кожного пацієнта, поєднуючи професійність і турботу.",
  },
];

const StartHandSurgLigamentum: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12 flex flex-col gap-8">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: текст */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Хірургія кисті - хвороби сухожилок</h2>
          <ul className="list-disc pl-6 space-y-3 text-base">
            {items.map((item, idx) => (
              <li key={idx}>
                <span className="font-semibold text-blue-900">{item.title}</span> {item.desc}
              </li>
            ))}
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryHandSurgLigamentum />
        </div>
      </div>
      {/* Інфокартка на всю ширину */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900">
        <span className="block">
          Нам завжди хочеться взяти в свої руки життя, робочі процеси, побут. Але іноді трапляється так, що руки втрачають не лише можливість тримати все під контролем, а й власну силу.
        </span>
      </div>
    </div>
  );
};

export default StartHandSurgLigamentum;
