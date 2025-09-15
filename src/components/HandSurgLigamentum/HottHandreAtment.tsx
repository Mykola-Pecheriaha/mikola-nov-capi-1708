import React from "react";
import GalleryNottaAtment from "./GalleryNottaAtment";

const conservativeList = [
  "Електрофорез, лікувальний масаж.",
  "Прогрівання за допомогою ванн із лікувальними травами та ін.",
];

const operationSteps = [
  "Виконання розрізу шкіри довжиною не більше 1 см.",
  "Відкриття доступу до кільцеподібної зв’язки.",
  "Розсічення зв’язки за допомогою скальпеля, ревізія стану сухожилків.",
  "Накладання швів на шкіру.",
];

const postopList = [
  "Періодичні перев’язки.",
  "Рухи з перших днів після операції.",
  "Призначення антибіотиків, анальгетиків і фізіопроцедур (за необхідності).",
  "Зняття швів через 10–14 днів.",
];

const HottHandreAtment: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12 flex flex-col gap-8">
      {/* Верхній блок: заголовок */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-2/3 w-full">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Лікування хвороби Нотта</h2>
        </div>

      </div>
      {/* Блок на всю ширину: консервативний та оперативний методи */}
      <div className="w-full bg-white rounded-xl shadow p-6 text-base text-gray-900">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Консервативний.</span> Медикаментозна терапія корисна тільки на початкових стадіях хвороби, коли уражений суглоб ще має можливість згинатися. Але подібний спосіб вимагають довготривалого лікування, можуть поліпшити стан хворого суглоба з подальшим рецидивом, але не зможуть повністю звільнити від захворювання.
          </li>
          <li>
            <span className="font-semibold">Оперативний.</span> Більш ефективний метод порятунку від патології. Операція полягає у видаленні відділу кільцеподібної зв’язки, що не дає нормально рухатися пальцю.
          </li>
        </ul>
      </div>
      {/* Друга секція: 2/3 і 1/3 */}
      <div className="flex flex-col md:flex-row gap-8 items-start mt-8">
        <div className="md:w-2/3 w-full">
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Консервативне лікування</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            {conservativeList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
                    <h3 className="text-xl font-semibold mb-2 text-blue-900">Оперативне лікування</h3>
          <div className="mb-2 font-semibold">Кроки під час операції:</div>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            {operationSteps.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="mb-2 font-semibold">Післяопераційний період:</div>
          <ul className="list-disc pl-6 space-y-2">
            {postopList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryNottaAtment />
        </div>
      </div>
      {/* Профілактика та прогноз */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 mt-8 text-base text-gray-900">
        <span className="block font-semibold mb-2">Профілактика та прогноз</span>
        <p>Загалом «клацаючий палець» дає лікарям-ортопедам підстави для сприятливого прогнозу за умови послідовного та ретельного дотримання всіх рекомендацій.<br/>
        Для запобігання рецидивам фахівці радять пацієнтам переглянути свій рід діяльності й, за можливості, зменшити навантаження на кисть у повсякденному житті, а також проходити регулярне лікування.<br/>
        Як профілактичні заходи пацієнтів навчають методиці масажу проблемної ділянки, а також іншим вправам для самостійного виконання в домашніх умовах.<br/>
        Дотримання всіх лікарських рекомендацій, своєчасне обстеження та грамотно проведена подальша консервативна терапія дозволяють уникнути ускладнень і повністю відновити функцію кисті при стенозувальному лігаментиті.</p>
      </div>
    </div>
  );
};

export default HottHandreAtment;
