import React from "react";
import GalleryGangConserAtment from "./GalleryGangConserAtment";
import GalleryGangOperAtment from "./GalleryGangOperAtment";
import GalleryGangReabAtment from "./GalleryGangReabAtment";

const conservativeText = (
  <>
    <h3 className="text-xl font-semibold mb-2 text-blue-900">Консервативне лікування гігроми</h3>
    <p className="mb-4 text-base text-gray-900">
  З консервативних методів застосовують фізіотерапію, лікувальні грязі, парафінові аплікації, ЛФК спрямовано на зміцнення суглоба та зв&rsquo;язок. Також проводять пунктування з наступним введенням препарату, що склерозує (препарату, який склеює стінки порожнини) або глюкокортикостероїду. Всі перераховані вище методи показані при одиничних і дрібних утвореннях. На жаль, за статистикою, консервативні методи лікування дають до 80% рецидивів, особливо у суглобових гігром.
    </p>
  </>
);

const operationText = (
  <>
    <h3 className="text-xl font-semibold mb-2 text-blue-900">Оперативне лікування гігроми</h3>
    <p className="mb-4 text-base text-gray-900">
      Гігроми, розмір яких перевищує 3 см, рекомендується видаляти хірургічним шляхом. Такі операції призначаються фахівцями для радикального розв&rsquo;язання проблеми. Вирізняється кілька видів лікування гігроми оперативним шляхом.
    </p>
    <p className="mb-4 text-base text-gray-900">
  Це найпоширеніший вид хірургічного втручання. Найчастіше операція виконується під місцевої (провідникової) анестезією. Хірург робить невеликий розріз шкіри над гігромою, видаляє її порожнину та ушиває пошкоджений суглоб або сухожильну сумку, тим самим запобігаючи рецидиву. Після операції рана ушивається, а суглоб фіксується на кілька тижнів ортезом або полімерною шиною, щоб запобігти повторній появі гігроми.
    </p>
  </>
);


const GangLigamentAtment: React.FC = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col gap-12">
      {/* Лікування гігроми: консервативне */}
      <div className="flex flex-col md:flex-row bg-[#e7eeef] gap-8 items-stretch">
        <div className="md:w-2/3 w-full flex flex-col justify-center">{conservativeText}</div>
        <div className="md:w-1/3 w-full flex items-center justify-center"><GalleryGangConserAtment /></div>
      </div>
      {/* Оперативне лікування гігроми */}
      <div className="flex flex-col bg-[#e7eeef] md:flex-row gap-8 items-stretch">
        <div className="md:w-2/3 w-full flex flex-col justify-center">{operationText}</div>
        <div className="md:w-1/3 w-full flex items-center justify-center"><GalleryGangOperAtment /></div>
      </div>
      {/* Реабілітація: заголовок і текст на всю ширину */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 text-base text-gray-900 mb-8">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Реабілітація</h3>
        <p>
          Тривалість реабілітації після видалення гігром залежить від багатьох факторів, включаючи розмір і місцезнаходження новоутворення, тип операції, вік і загальне здоров&apos;я пацієнта. Як правило, у період відновлення лікарі дотримуються класичних принципів.
        </p>
      </div>
      {/* Ділимо на дві частини: зліва текст, справа галерея */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch mt-2">
        <div className="md:w-2/3 bg-[#e7eeef] w-full flex flex-col justify-center">
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><span className="font-semibold">Іммобілізація кінцівки</span> – накладання пов&rsquo;язок для фіксації суглоба та запобігання руху в ділянці рани.</li>
            <li><span className="font-semibold">Фізичне навантаження</span> – комплекс вправ починають виконувати після зняття пов&rsquo;язки.</li>
            <li><span className="font-semibold">Фізіотерапія</span> – після повного загоєння рани рекомендується масаж.</li>
            <li><span className="font-semibold">Медикаментозна терапія</span> – призначаються протизапальні та знеболювальні препарати, а в окремих випадках – профілактична антибіотикотерапія.</li>
            <li><span className="font-semibold">Харчування</span> – необхідно вживати білкові продукти, фрукти та овочі.</li>
            <li><span className="font-semibold">Контроль за рубцем</span> – регулярний огляд і обробка післяопераційної рани.</li>
          </ul>
        </div>
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryGangReabAtment />
        </div>
      </div>
    </div>
  );
};

export default GangLigamentAtment;

            {/* Реабілітація: заголовок і текст на всю ширину */}
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow p-6 text-base text-gray-900 mb-8">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Реабілітація</h3>
              <p>
                Тривалість реабілітації після видалення гігром залежить від багатьох факторів, включаючи розмір і місцезнаходження новоутворення, тип операції, вік і загальне здоров&apos;я пацієнта. Як правило, у період відновлення лікарі дотримуються класичних принципів.
              </p>
            </div>
