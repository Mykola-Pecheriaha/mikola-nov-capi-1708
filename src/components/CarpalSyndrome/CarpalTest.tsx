import React from "react";
import GalleryCarpalTest from "./GalleryCarpalTest";

export default function CarpalTest() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Іспити та тести</h2>
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Ліва частина 2/3 */}
        <div className="md:w-2/3 w-full bg-[#e7eeef] rounded-lg flex flex-col justify-center p-2">
          <div className="mb-6">
            <span className="font-semibold text-lg mb-2 block">Під час медичного огляду лікар може виявити:</span>
            <ul className="list-none space-y-3 text-base">
              <li>🔹 <span className="font-bold">Оніміння долоні</span>, великого, вказівного, середнього пальців і сторони великого пальця безіменного (у різних людей зона оніміння може відрізнятися).</li>
              <li>🔹 <span className="font-bold">Слабкий хват руки.</span></li>
              <li>🔹 <span className="font-bold">Симптом Тінеля</span> — постукування по серединному нерву на зап&apos;ясті викликає біль або поколювання, що віддає в пальці.</li>
              <li>🔹 <span className="font-bold">Тест Фалена</span> — при повному згинанні зап&apos;ястя вперед протягом 60 секунд з&apos;являються поколювання, оніміння або слабкість.</li>
              <li>🔹 <span className="font-bold">Проблеми з визначенням двох точок на пальцях</span> — порушення чутливості.</li>
            </ul>
          </div>
          <div className="mb-6">
            <span className="font-semibold text-lg mb-2 block">Додаткові тести та аналізи:</span>
            <ul className="list-none space-y-2 text-base">
              <li>🔹 <span className="font-bold">Рентген зап&apos;ястя</span> — допомагає виключити інші стани, наприклад, артрит.</li>
              <li>🔹 <span className="font-bold">Електроміографія (ЕМГ)</span> — перевіряє стан м&apos;язів і нервів, що їх контролюють.</li>
              <li>🔹 <span className="font-bold">Тест на швидкість нервової провідності</span> — показує, як швидко електричні імпульси проходять по нерву.</li>
            </ul>
          </div>
        </div>
        {/* Права частина 1/3: галерея */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <GalleryCarpalTest />
        </div>
      </div>
    </div>
  );
}
