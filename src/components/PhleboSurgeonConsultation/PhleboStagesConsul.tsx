import GalleryStagesAtmentConsul from "./GalleryStagesAtmentConsul";

export default function PhleboStagesConsul() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mt-8 mb-6">Стадії розвитку варикозної хвороби</h2>
      <div className="flex w-full max-w-5xl gap-8">
        {/* Ліва частина 2/3 */}
        <div className="w-2/3">
          <section className="mb-6">
            <ul className="pl-0">
              <li className="mb-2 text-blue-900">· <span className="font-semibold">C0</span> — помітні ознаки відсутні, відхилення не виявляються під час візуального огляду або за допомогою пальпації.</li>
              <li className="mb-2 text-blue-900">· <span className="font-semibold">C1</span> — з’являються телеангіектазії (сітка з судин) або ретикулярні вени (збільшені в діаметрі судини калібру 2-3 мм).</li>
              <li className="mb-2 text-blue-900">· <span className="font-semibold">C2</span> — варикозна зміна розташованих під шкірою вен з діаметром понад 3 мм.</li>
              <li className="mb-2 text-blue-900">· <span className="font-semibold">C3</span> — поява набряків в області гомілок, кісточок і ступень, що не проходять (або не повністю проходять) після відпочинку;</li>
              <li className="mb-2 text-blue-900">· <span className="font-semibold">C4</span> — патологічні зміни шкірних покривів та підшкірних тканин, пов’язані з порушенням трофіки (приєднуються дерматити, гіперпігментація, посилюється біль, свербіж, печіння в ногах)</li>
              <li className="mb-2 text-blue-900">· <span className="font-semibold">C5</span> — наявність трофічних виразок, які загоїлися.</li>
              <li className="mb-2 text-blue-900">· <span className="font-semibold">C6</span> — утворення трофічних виразок відкритого типу.</li>
            </ul>
          </section>
        </div>
        {/* Права частина 1/3 */}
        <div className="w-1/3 flex items-center justify-center">
          <GalleryStagesAtmentConsul />
        </div>
      </div>
    </div>
  );
}
