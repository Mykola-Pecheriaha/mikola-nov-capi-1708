import React from "react";
import StartCarpalSyndromeGallery from "./StartCarpalSyndromeGallery";

const benefits = [
  "Зникнення болі в кисті",
  "Зникнення відчуття заніміння в кінчиках пальців",
  "Набуття сили в м`язах кисті",
];
const nerveFunctions = [
  "відчувати перші чотири пальці",
  "відповідає за координацію руху кисті, дрібну моторику кисті",
  "звуження і розширення кровоносних судин від дії зовнішніх подразників",
  "регулює роботу потових залоз долоні",
];

const StartCarpalSyndrome: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mt-12 flex flex-col gap-8">
      {/* Верхній блок: заголовок, переваги, зображення справа */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-2/3 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Карпальний синдром.</h1>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Розпізнання і фахове лікування</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg font-semibold text-green-800 mb-0">
            {benefits.map((b, idx) => (
              <li key={idx} className="text-gray-900 font-bold">{b}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 w-full flex items-center justify-center">
          {/* Зображення справа */}
          <img src="/images/hand/carpal/carpale17-removebg-preview.png" alt="Карпальний синдром" className="rounded-xl shadow-lg w-full max-w-[320px] h-auto object-cover" />
        </div>
      </div>
      {/* Опис захворювання на всю ширину — інформативний блок */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow mt-6">
        <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
        <div className="text-blue-900 text-base">
          <p className="mb-2">
            <span className="font-semibold">Карпальний синдром (тунельний синдром)</span> — це захворювання, яке виникає в людей, чия професія пов&rsquo;язана з одноманітними рухами зап&rsquo;ястя та незручним положенням рук при виконанні роботи.<br/>
            <span className="block mt-1">Попри його багато назв (cиндро́м запя́стного каналу, синдром друкарки, хвороба офісних працівників…)</span>
          </p>
          <p>
            <span className="font-semibold">Суть процесу:</span> в процесі цих рухів кисті поступово виникає потовщення і ущільнення оболонок сухожилків згиначів, які проходять з передпліччя на кисть через вузький канал на зап&rsquo;ястку. Цей канал називається карпальним, є досить обмежений і в зв&rsquo;язку з тим що він утворений з трьох сторін кістками зап&rsquo;ястка, а з однієї сторони — щільною карпальною зв&rsquo;язкою, яка не в змозі розтягуватися. Тому місця в цьому каналі досить обмежено і через ці потовщення оболонок сухожилок приводить до здавлення нерва (серединного), який також там проходить.
          </p>
        </div>
      </div>
      {/* Друга секція: анатомія і функції */}
      <div className="flex flex-col md:flex-row gap-8 items-start mt-8">
        <div className="md:w-2/3 w-full">
          <h3 className="text-xl font-semibold mb-2 text-blue-900">Анатомія карпального каналу</h3>
          <p className="mb-2">
            Карпальний канал - це вузький прохід на долонній стороні зап`ястя, через який проходять серединний нерв і сухожилля згиначів пальців. Стінки каналу утворені кістками зап`ястя і поперечною карпальною зв`язкою.
            При карпальному синдромі відбувається здавлення серединного нерва, що призводить до болю, оніміння та слабкості в руці і пальцях.
          </p>
          <h4 className="text-lg font-semibold mb-2 text-blue-900">Функція серединного нерву</h4>
          <ul className="list-disc pl-6 space-y-2">
            {nerveFunctions.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <StartCarpalSyndromeGallery />
        </div>
      </div>
    </div>
  );
};

export default StartCarpalSyndrome;
