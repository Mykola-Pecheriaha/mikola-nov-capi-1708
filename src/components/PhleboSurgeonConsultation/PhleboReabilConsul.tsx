import GalleryPhleboReabilConsul from './GalleryPhleboReabilConsul';

export default function PhleboReabilConsul() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 mt-8 text-center w-full">
        Реабілітація після видалення вени - загальні вимоги
      </h2>
      <div className="w-full max-w-5xl mb-8">
        <div
          className="bg-blue-50 rounded-xl p-4 text-blue-900 text-base font-medium shadow-sm border-l-8 border-blue-400"
          style={{ borderLeftColor: '#3b82f6' }}
        >
          Вени після операції на варикоз потребують особливого догляду, оскільки процес відновлення
          є обов’язковою частиною повного оздоровлення організму. Тривалість цього етапу залежить
          відтаких чинників: Реабілітація після операції на варикоз може супроводжуватися больовими
          відчуттями, появою набряку, тому лікар прописує знеболюючі препарати (зазвичай не більше
          ніж три дні). Крім того, важливо носити компресійний трикотаж, зазвичай на термін від
          трьох тижнів до 2 місяців (залежно від методики).
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-8 items-start">
        <div className="w-full lg:w-2/3">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              носити панчохи після операції на вени до 2 місяців, точний термін залежить від
              конкретного випадку;
            </li>
            <li>
              медикаментозне лікування для усунення больових відчуттів, приведення в тонус вен та
              посилення кровотоку для профілактики виникнення тромбів;
            </li>
            <li>
              уникати гарячої ванни, сауни й лазні, приймати душ можна буде вже через 3 дні, але
              фахівець визначить індивідуально точний термін;
            </li>
            <li>упродовж 2 місяців не засмагати й не відвідувати солярій.</li>
            <li>Фізичне навантаження (піднімання ваги): + - 10% від маси тіла</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <GalleryPhleboReabilConsul />
        </div>
      </div>
    </div>
  );
}
