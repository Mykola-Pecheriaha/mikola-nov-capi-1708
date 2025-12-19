import React from 'react';
import { GalleryPhleboReabLaser } from './GalleryPhleboReabLaser';

const PhleboReabilLaser: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок по центру */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Рекомендації для післяопераційного періоду
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Як свідчать численні відгуки про лазерне лікування варикозу, відновлення після
            коагуляції вен відбувається швидше та з мінімальними ризиками, якщо дотримуватися таких
            рекомендацій:
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col lg:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-start">
        {/* Ліва частина */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Рекомендації</h2>
          <ul className="list-disc list-inside space-y-3 text-blue-900 text-base font-medium mb-4">
            <li>
              постійно носити{' '}
              <span className="font-semibold text-blue-700">компресійну білизну</span>,
              запропоновану лікарем, протягом встановленого ним строку;
            </li>
            <li>
              здійснювати{' '}
              <span className="font-semibold text-blue-700">щоденні піші прогулянки</span> (не менш
              5 км на день);
            </li>
            <li>
              самостійно{' '}
              <span className="font-semibold text-blue-700">
                проводити легкий масаж для поліпшення кровообігу
              </span>
              , якщо після видалення вен лазером у вас болить нога;
            </li>
            <li>
              не відмовлятися від{' '}
              <span className="font-semibold text-blue-700">помірного фізичного навантаження</span>{' '}
              – занять лікувальною фізкультурою, плаванням або легкими пробіжками;
            </li>
            <li>
              на 2 тижні утриматися від інтенсивних занять спортом, особливо гімнастикою, важкою
              атлетикою, аеробікою, велоспортом і фітнесом з використанням тренажерів;
            </li>
            <li>
              відмовитися від{' '}
              <span className="font-semibold text-blue-700">алкоголю та куріння</span> у перші 2 дні
              після процедури;
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                уникати перебування в одному положенні
              </span>{' '}
              (сидячому або стоячому) довше години, регулярно міняти його та розминатися;
            </li>
            <li>
              утриматися від відвідування лазні, сауни або солярію на термін до 2 тижнів після
              операції;
            </li>
            <li>
              відмовитися на 2 тижні{' '}
              <span className="font-semibold text-blue-700">
                від взуття на високих підборах і з вузькою колодкою
              </span>
              ;
            </li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <GalleryPhleboReabLaser />
        </div>
      </div>
    </div>
  );
};

export default PhleboReabilLaser;
