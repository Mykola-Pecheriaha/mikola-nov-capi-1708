import GalleryPhleboSimptomConsul from "./GalleryPhleboSimptomConsul";

export default function PhleboSimptomConsul() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mt-8 mb-6">Симптоми захворювання</h2>
      <div className="flex w-full max-w-5xl gap-8">
        {/* Ліва частина 2/3 */}
        <div className="w-2/3">
          <section className="mb-6">
            <p className="mb-2 font-medium">Зазвичай ранні стадії варикозної хвороби протікають майже непомітно. Проте з часом можуть з’являтися характерні симптоми:</p>
            <ul className="pl-0">
              <li className="mb-2 text-blue-900 font-semibold">- Пульсуючий біль у ногах</li>
              <li className="mb-2 text-blue-900 font-semibold">- Біль після тривалої ходьби</li>
              <li className="mb-2 text-blue-900 font-semibold">- Нічні судоми та свербіж у м’язах</li>
              <li className="mb-2 text-blue-900 font-semibold">- Набряки нижніх кінцівок</li>
              <li className="mb-2 text-blue-900 font-semibold">- Відчуття важкості та розпирання в ногах</li>
              <li className="mb-2 text-blue-900 font-semibold">- Судинні “зірочки” на шкірі</li>
              <li className="mb-2 text-blue-900 font-semibold">- Зміни шкіри – <span className="font-normal">сухість, потемніння, втрата еластичності</span></li>
              <li className="mb-2 text-blue-900 font-semibold">- Видимі вени – <span className="font-normal">покручені, видовжені, з часом утворюють вузлики</span></li>
            </ul>
          </section>
        </div>
        {/* Права частина 1/3 */}
        <div className="w-1/3 flex items-center justify-center">
          <GalleryPhleboSimptomConsul />
        </div>
      </div>
      {/* Нижній блок на всю ширину */}
      <div className="w-full max-w-5xl mt-8">
        <div className="bg-blue-50 rounded-xl p-4 text-blue-900 text-base font-medium shadow-sm border-l-8 border-blue-400" style={{borderLeftColor:'#3b82f6'}}>
          При перших проявах варикозу варто звернутися до лікаря, який надасть вичерпну інформацію щодо вашого стану, можливих ускладнень та призначить лікування.<br />
          <span className="font-bold">Пам’ятайте!</span> Вчасне звернення до лікаря зменшує ризик виникнення небезпечних ускладнень.
        </div>
      </div>
    </div>
  );
}
