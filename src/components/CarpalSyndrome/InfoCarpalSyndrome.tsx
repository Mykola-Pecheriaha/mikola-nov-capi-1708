import React from "react";

const InfoCarpalSyndrome: React.FC = () => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 text-base text-blue-900 mb-8">
      <span className="inline-flex items-center gap-2 font-bold text-lg mb-2">
        <span className="bg-blue-200 text-blue-600 rounded-full px-2 py-1 text-base">i</span>
        Карпальний синдром (тунельний синдром)
      </span>
      <div className="mt-2">
        <span className="font-semibold">Попри його багато назв (cиндро́м запя́стного каналу, синдром друкарки, хвороба офісних працівників…) </span>
  є тим захворюванням яке виникає в людей, чия професія пов&rsquo;язана з одноманітними рухами зап&rsquo;ястя та незручним положенням рук при виконанні роботи.<br/>
  <span className="font-semibold">Суть процесу:</span> в процесі цих рухів кисті поступово виникає потовщення і ущільнення оболонок сухожилків згиначів, які проходять з передпліччя на кисть через вузький канал на зап&rsquo;ястку. Цей канал називається карпальним, є досить обмежений і в зв&rsquo;язку з тим що він утворений з трьох сторін кістками зап&rsquo;ястка, а з однієї сторони — щільною карпальною зв&rsquo;язкою, яка не в змозі розтягуватися. Тому місця в цьому каналі досить обмежено і через ці потовщення оболонок сухожилок приводить до здавлення нерва (серединного), який також там проходить.
      </div>
    </div>
  );
};

export default InfoCarpalSyndrome;
