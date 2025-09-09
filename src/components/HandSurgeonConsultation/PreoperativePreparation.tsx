import React from "react";
import GalleryPreoperativePreparation from "./GalleryPreoperativePreparation";

const diagnostics = [
  {
    title: "Огляд хірурга",
    desc: "хірург оцінює рухливість кисті, силу хвата, наявність набряків, болю, оніміння або деформацій.",
  },
  {
    title: "Рентгенографія",
    desc: "допомагає виявити переломи, вивихи, артрози та інші кісткові патології.",
  },
  {
    title: "Ультразвукове дослідження (УЗД)",
    desc: "застосовується для діагностики запальних процесів, пошкоджень сухожиль, зв’язок, кіст та інших м’якотканинних утворень.",
  },
  {
    title: "Комп’ютерна та магнітно-резонансна томографія (КТ, МРТ)",
    desc: "дають детальне зображення суглобів, сухожиль, нервових і судинних структур, що особливо важливо в разі складних травм.",
  },
  {
    title: "Лабораторні аналізи",
    desc: "загальний і біохімічний аналіз крові, коагулограма та інші показники, які допомагають оцінити загальний стан пацієнта і підготуватися до хірургічного втручання.",
  },
];

const PreoperativePreparation: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12 flex flex-col gap-8">
      {/* Верхній блок: заголовок і текст */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Передопераційна діагностика патологій кисті</h2>
        <p className="text-base text-gray-900 mb-2">
          Перед оперативним втручанням важливо провести ретельне обстеження, щоб точно визначити природу патології, ступінь ушкодження тканин і вибрати найбільш ефективну тактику лікування. Комплексна діагностика дає змогу мінімізувати ризики та підвищити успішність операції кисті руки.
        </p>
      </div>
      {/* Нижній блок: дві частини 2/3 і 1/3 */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Ліва частина: методи діагностики */}
        <div className="md:w-2/3 w-full">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Основні методи діагностики:</h3>
          <ul className="list-disc pl-6 space-y-4 text-base">
            {diagnostics.map((d, idx) => (
              <li key={idx}>
                <span className="font-semibold text-blue-900">{d.title}</span> — {d.desc}
              </li>
            ))}
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full">
          <GalleryPreoperativePreparation />
        </div>
      </div>
      {/* Інфокартка на всю ширину */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900">
        <span className="block">
          Грамотна діагностика — запорука успішної хірургії кисті, оскільки дає змогу визначити точну причину патології та підібрати найефективніший метод її усунення.
        </span>
      </div>
    </div>
  );
};

export default PreoperativePreparation;
