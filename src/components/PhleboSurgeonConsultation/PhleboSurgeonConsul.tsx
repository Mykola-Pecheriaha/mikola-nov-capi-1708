import GalleryPhleboConsult from './GalleryPhleboConsult';

export default function PhleboSurgeonConsul() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-8 items-start">
        {/* Ліва частина 2/3 */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6 mt-8">
            Коли потрібна консультація хірурга-флеболога
          </h2>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>
              <span className="font-bold">Діагностика:</span> лікар оцінить стан ваших вен, можливо,
              призначить додаткові обстеження, такі як Узд вен (дуплексне сканування).
            </li>
            <li>
              <span className="font-bold">Визначення стадії варикозу:</span> лікар встановить, на
              якій стадії знаходиться захворювання.
            </li>
            <li>
              <span className="font-bold">Вибір лікування:</span> на основі діагностики лікар
              запропонує найкращий метод лікування, який може включати:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <span className="font-bold">Лазерне лікування:</span> ефективний метод для
                  видалення варикозних вен за допомогою лазера.
                </li>
                <li>
                  <span className="font-bold">Склеротерапія:</span> введення спеціального препарату,
                  що склеює венозні стінки.
                </li>
                <li>
                  <span className="font-bold">Мініфлебектомія:</span> хірургічне видалення уражених
                  вен через невеликі проколи.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Рекомендації з профілактики:</span> лікар надасть поради
              щодо зміни способу життя для запобігання розвитку варикозу або його ускладнень.
            </li>
          </ol>
          <section className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Підготовка до консультації:</h3>
            <ul className="list-disc pl-6">
              <li>Приготуйте список симптомів, які вас турбують.</li>
              <li>Запишіть усі ліки, які ви приймаєте.</li>
              <li>Якщо є, візьміть з собою результати попередніх обстежень.</li>
            </ul>
          </section>
        </div>
        {/* Права частина 1/3 */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <GalleryPhleboConsult />
        </div>
      </div>
      {/* Нижній блок на всю ширину */}
      <div className="w-full max-w-5xl mt-8">
        <div
          className="bg-blue-50 rounded-xl p-4 text-blue-900 text-base font-medium shadow-sm border-l-8 border-blue-400"
          style={{ borderLeftColor: '#3b82f6' }}
        >
          Консультація хірурга (або флеболога) при варикозі необхідна для діагностики, вибору методу
          лікування та профілактики захворювання, особливо при появі судинних &quot;зірочок&quot;,
          &quot;павутинок&quot; чи болючих судом у ногах. Лікар проведе огляд, призначить необхідні
          обстеження, а також пояснить, як змінити спосіб життя та які процедури (наприклад, лазерне
          лікування чи склеротерапія) найкраще підійдуть для вашого випадку.
        </div>
      </div>
    </div>
  );
}
