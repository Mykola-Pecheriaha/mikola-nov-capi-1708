import React from "react";
import { GalleryMiniAdvant } from "./GalleryMiniAdvant";

const PhlebologyMiniAdvant: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Заголовок по центру */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Переваги та недоліки мініфлебектомії
      </h1>
      {/* Опис на всю ширину */}
      <div className="w-full mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            Багато клінік досі роблять операцію звичайним хірургічним способом. Однак прогрес іде вперед і метод мініфлебектомії є найкращим вирішенням проблеми на сьогоднішній день.
          </div>
        </div>
      </div>
      {/* Дві частини: ліворуч текст, праворуч галерея */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Переваги</h2>
          <ul className="list-disc list-inside space-y-3 text-blue-900 text-base font-medium mb-4">
            <li>малоінвазивність;</li>
            <li>місцевий наркоз;</li>
            <li>маленький прокол ділянки вени;</li>
            <li>сучасні інструменти для операції;</li>
            <li>швидке відновлення;</li>
            <li>загоєння шкіри без рубців.</li>
          </ul>
        </div>
        {/* Права частина: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryMiniAdvant />
        </div>
      </div>
      {/* Недоліки на всю ширину */}
      <div className="w-full mt-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">⚠️</span>
          <div className="text-blue-900 text-base">
            Недолік мініфлебектомії лише в тому, що може залишитися невеликий рубець на шкірі. Але це суто індивідуально і є особливістю відновлення організму. У перший час після операції можуть залишитися синці в ділянці видаленої вени. Також необхідно обмежити фізичні навантаження в повсякденному житті. Для кращого загоєння ран лікар призначає носіння спеціальних компресійних панчіх.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhlebologyMiniAdvant;
