import GalleryPhleboSurgeonLaser from './GalleryPhleboSurgeonLaser';

export default function PhleboSurgeonLaser() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 mt-8 text-center w-full">
        Лазерне лікування варикозу - ЕВЛК
      </h2>
      <div className="w-full max-w-5xl mb-8">
        <div
          className="bg-blue-50 rounded-xl p-4 text-blue-900 text-base font-medium shadow-sm border-l-8 border-blue-400"
          style={{ borderLeftColor: '#3b82f6' }}
        >
          Лазерне лікування варикозу — це малоінвазивний метод, який передбачає нагрівання ураженої
          вени лазером через введений світлодіод, що призводить до &quot;склеювання&quot; її стінок
          і поступового розсмоктування.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-8 items-start">
        <div className="w-full lg:w-2/3">
          <h3 className="text-xl font-bold mb-4">Етапи процедури</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>
              <span className="font-bold">Введення світлодіода:</span> Під контролем ультразвуку в
              уражену вену через прокол вводиться тонкий катетер зі світловодом.
            </li>
            <li>
              <span className="font-bold">Тепловий вплив:</span> Лазерне випромінювання нагріває
              стінки вени, спричиняючи їх &quot;склеювання&quot; та деструкцію ендотелію.
            </li>
            <li>
              <span className="font-bold">&quot;Запаювання&quot; вени:</span> Завдяки тепловому
              впливу вена &quot;заварюється&quot; та вимикається з кровотоку, поступово
              перетворюючись на сполучну тканину.
            </li>
            <li>
              <span className="font-bold">Кінцевий результат:</span> Пошкоджену вену не видаляють, а
              дозволяють їй самостійно зникнути, не порушуючи кровопостачання завдяки глибоким
              венозним судинам.
            </li>
          </ol>
          <h3 className="text-xl font-bold mb-4">Переваги методу</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">Малоінвазивність:</span> Немає розрізів, тільки проколи як
              при звичайному уколі.
            </li>
            <li>
              <span className="font-bold">Безболісність:</span> Проводиться під місцевою анестезією.
            </li>
            <li>
              <span className="font-bold">Швидке відновлення:</span> Пацієнт може одразу повернутись
              додому та до звичного життя.
            </li>
            <li>
              <span className="font-bold">Відсутність рубців:</span> Не залишає шрамів.
            </li>
            <li>
              <span className="font-bold">Висока ефективність:</span> Дозволяє позбутись варикозу
              навіть у запущених випадках та при трофічних виразках.
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <GalleryPhleboSurgeonLaser />
        </div>
      </div>
    </div>
  );
}
