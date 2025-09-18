import GalleryCarpalCarpalReabilitation from "./GalleryCarpalCarpalReabilitation";

export default function CarpalReabilitation() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mt-8 mb-6">Відновлення після операції</h2>
      <div className="flex w-full max-w-5xl gap-8">
        {/* Ліва частина 2/3 */}
        <div className="w-2/3 bg-[#e7eeef] rounded-lg p-2">
          <section className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Одразу після втручання вам порекомендують:</h3>
            <ul className="list-disc pl-6">
              <li><span className="font-bold">Піднімати руку вище рівня серця</span>, щоб зменшити набряк.</li>
              <li><span className="font-bold">Рухати пальцями</span>, щоб запобігти скутості суглобів.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Що очікувати після операції:</h3>
            <ul className="list-disc pl-6">
              <li><span className="font-bold">Легкий або помірний біль, набряк і скутість</span> — це нормальні реакції.</li>
              <li><span className="font-bold">Біль у долоні може зберігатися</span> від кількох тижнів до кількох місяців.</li>
              <li><span className="font-bold">Сила стискання та щипання</span> зазвичай відновлюється через 2–3 місяці, але в складніших випадках — до 6–12 місяців.</li>
            </ul>
          </section>
          <section>
            <h3 className="font-semibold text-lg mb-2">Додаткові рекомендації:</h3>
            <ul className="list-disc pl-6">
              <li><span className="font-bold">Можливо, доведеться носити шину або бандаж</span> упродовж кількох тижнів.</li>
              <li><span className="font-bold">Вам буде дозволено виконувати легкі повсякденні дії</span> досить швидко — у терміни, узгоджені з вашим лікарем.</li>
            </ul>
          </section>
        </div>
        {/* Права частина 1/3 */}
        <div className="w-1/3 flex items-center justify-center">
          <GalleryCarpalCarpalReabilitation />
        </div>
      </div>
        <div className="w-full max-w-5xl mt-6">
          <div className="bg-blue-50 rounded-lg p-4 text-blue-900 text-base font-medium flex items-center gap-2">
            <span role="img" aria-label="motivation">🎯</span>
            Терпіння та регулярне спостереження допоможуть вам повернутися до звичного ритму життя максимально комфортно та безпечно.
          </div>
        </div>
    </div>
  );
}
