import GalleryPhleboPreparConsul from "./GalleryPhleboPreparConsul";

export default function PhleboPreparConsul() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 mt-8 text-center w-full">Підготовка до операції</h2>
      <div className="w-full max-w-5xl mb-8">
        <div className="bg-blue-50 rounded-xl p-4 text-blue-900 text-base font-medium shadow-sm border-l-8 border-blue-400" style={{borderLeftColor:'#3b82f6'}}>
          Перед проведенням операції необхідно пройти обстеження у хірурга, що включає загальний огляд та УЗД вен нижніх кінцівок. Діагностика виявить патологічні зміни у венах, допоможе визначити потрібний обсяг оперативного лікування. Після цього призначають дату проведення операції та додаткові аналізи та дослідження:
        </div>
      </div>
      <div className="flex w-full max-w-5xl gap-8">
        <div className="w-2/3">
          <h3 className="text-xl font-bold mb-4">Види хірургічного лікування:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>клінічний аналіз крові;</li>
            <li>клінічний аналіз сечі;</li>
            <li>коагулограма;</li>
            <li>група крові і резусфактор;</li>
            <li>аналіз крові на HBsAg, HCV, ВІЛ;</li>
            <li>флюорографія ОГК;</li>
            <li>ЕКГ;</li>
            <li>консультація лікаря-терапевта;</li>
            <li>біохімічний аналіз крові (печінкові проби, вимірювання рівня креатиніну та сечовини);</li>
            <li>визначення рівня глюкози (цукору) у крові.</li>
          </ul>
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <GalleryPhleboPreparConsul />
        </div>
      </div>
    </div>
  );
}
