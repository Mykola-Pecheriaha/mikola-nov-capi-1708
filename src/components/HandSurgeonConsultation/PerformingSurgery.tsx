import React from "react";
import GalleryPerformingSurgery from "./GalleryPerformingSurgery";

const stages = [
  {
    title: "Підготовка",
    desc: "консультація хірурга, діагностика, вибір методу знеболювання.",
  },
  {
    title: "Знеболювання",
    desc: "застосовується місцева, провідникова або загальна анестезія залежно від обсягу втручання.",
  },
  {
    title: "Хірургічне втручання",
    desc: "виконання необхідних маніпуляцій: усунення компресії нервів, пластика тканин або видалення новоутворень.",
  },
  {
    title: "Завершення операції",
    desc: "накладення швів, стерильної пов’язки, за необхідності — встановлення фіксувальних конструкцій для правильного загоєння.",
  },
];

const PerformingSurgery: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12 flex flex-col gap-8">
      {/* Верхній блок: заголовок і текст */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Проведення операцій на кисті</h2>
        <p className="text-base text-gray-900 mb-2">
          Операції на кисті вимагають високої точності, оскільки ця область відповідає за тонку моторику і чутливість. Сучасні хірургічні методи дають змогу виконувати втручання з мінімальною травматичністю і високою ефективністю. У більшості випадків мікрохірургія кисті займає від 30 хвилин до двох годин.
        </p>
      </div>
      {/* Нижній блок: дві частини 2/3 і 1/3 */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Ліва частина: етапи операції */}
        <div className="md:w-2/3 bg-[#e7eeef]  w-full">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Основні етапи операції:</h3>
          <ul className="list-disc pl-6 space-y-4 text-base">
            {stages.map((s, idx) => (
              <li key={idx}>
                <span className="font-semibold text-blue-900">{s.title}</span> — {s.desc}
              </li>
            ))}
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full">
          <GalleryPerformingSurgery />
        </div>
      </div>
      {/* Інфокартка на всю ширину */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900">
        <span className="block">
          Вибір оптимального методу операції та точне виконання всіх етапів — ключ до швидкого відновлення функції кисті та мінімізації ризиків.
        </span>
      </div>
    </div>
  );
};

export default PerformingSurgery;
