import GalleryPhleboAtmentConsul from "./GalleryPhleboAtmentConsul";

export default function PhleboAtmentConsul() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mt-8 mb-6">Лікування варикозної хвороби нижніх кінцівок</h2>
      {/* На всю ширину сторінки */}
      <div className="w-full max-w-5xl mb-8">
        <div className="bg-blue-50 rounded-xl p-4 text-blue-900 text-base font-medium shadow-sm border-l-8 border-blue-400" style={{borderLeftColor:'#3b82f6'}}>
          Застосовують комплексний та індивідуальний підхід до лікування кожного пацієнта. Неможливо позбутися варикозу лише прийомом лікарських засобів та компресійною терапією (ці методи більше спрямовані на профілактику).<br />
          <span className="font-bold">Запам’ятайте!</span> Компресійний трикотаж призначає тільки лікар, з урахуванням ваших антропометричних даних та стадії захворювання!<br />
          <span className="font-bold">«Золотий стандарт»</span> у лікуванні варикозної хвороби нижніх кінцівок – хірургічна малоінвазивна операція, яку виконує хірург, флеболог.
        </div>
      </div>
      <div className="flex w-full max-w-5xl gap-8">
        {/* Ліва частина 2/3 */}
        <div className="w-2/3">
          <section className="mb-6">
            <h3 className="font-bold text-lg mb-2">Види хірургічного лікування:</h3>
            <ul className="pl-0 mb-4">
              <li className="mb-2 text-blue-900">
                <span className="font-semibold">• Флебектомія та стрипінг.</span> Класичне оперативне втручання, при якому пошкодженні вени вилучаються за допомогою спеціальних зондів.
              </li>
              <li className="mb-2 text-blue-900">
                <span className="font-semibold">• Мініфлебектомія.</span> Операція, аналогічна попередній, з тією лише різницею, що для видалення вен роблять не розрізи, а проколи, що дозволяє косметично усунути варикоз.
              </li>
              <li className="mb-2 text-blue-900">
                <span className="font-semibold">• Лазерна коагуляція.</span> Проблема варикозного розширення вен вирішується за допомогою лазерного променя. Під його впливом, пошкоджені стінки склеюються та судина зникає.
              </li>
              <li className="mb-2 text-blue-900">
                <span className="font-semibold">• Радіочастотна облітерація.</span> Новітній метод, який дозволяє під впливом радіочастоти «запаювати» хворі вени.
              </li>
              <li className="mb-2 text-blue-900">
                <span className="font-semibold">• Склеротерапія.</span> Під час такої операції вводиться спеціальна речовина — склерозант. Вона склеює найдрібніші судинки і дозволяє усувати «судинні зірочки».
              </li>
            </ul>
            <h3 className="font-bold text-lg mb-2">Втручання дозволяє:</h3>
            <ul className="pl-0">
              <li className="mb-2 text-blue-900">• попередити розвиток варикозного синдрому (розширення підшкірних вен);</li>
              <li className="mb-2 text-blue-900">• попередити потемніння шкіри гомілок (яка потім не стає світлішою);</li>
              <li className="mb-2 text-blue-900">• попередити утворення трофічних виразок на шкірі;</li>
              <li className="mb-2 text-blue-900">• покращити кровообіг (відтік крові), ліквідувавши постійну втому, біль та важкість у ногах;</li>
              <li className="mb-2 text-blue-900">• попередити утворення гострого тромбофлебіту;</li>
            </ul>
          </section>
        </div>
        {/* Права частина 1/3 */}
        <div className="w-1/3 flex items-center justify-center">
          <GalleryPhleboAtmentConsul />
        </div>
      </div>
      {/* Нижній блок на всю ширину */}
      <div className="w-full max-w-5xl mt-8">
        <div className="bg-blue-50 rounded-xl p-4 text-blue-900 text-base font-medium shadow-sm border-l-8 border-blue-400" style={{borderLeftColor:'#3b82f6'}}>
          Сучасне лікування варикозу вен – комфортне і безпечне. Щоб не жаліти, що час згаяно, вчасно звертайтесь по допомогу до фахівців.<br />
          Втручання на венах (лазером або РЧА) — найбільш ефективний варіант лікування варикозного розширення вен. Процедури проводяться без наркозу, а пацієнт у короткий термін повертається до нормального життя.
        </div>
      </div>
    </div>
  );
}
