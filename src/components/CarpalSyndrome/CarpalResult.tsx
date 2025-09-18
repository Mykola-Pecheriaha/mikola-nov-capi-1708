import GalleryCarpalResult from "./GalleryCarpalResult";

export default function CarpalResult() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mt-8 mb-6">Результати лікування</h2>
      <div className="flex w-full max-w-5xl gap-8 bg-[#e7eeef] rounded-lg p-2">
        {/* Ліва частина 2/3 */}
        <div className="w-2/3">
          <section className="mb-6">
            <ul className="list-disc pl-6">
                <li><span className="font-bold">У більшості пацієнтів після хірургічного втручання</span> спостерігається суттєве покращення симптомів синдрому зап&#39;ястного каналу.</li>
            </ul>
          </section>
          <section className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Важливо пам&#39;ятати:</h3>
            <ul className="list-disc pl-6">
              <li><span className="font-bold">Повне одужання може бути поступовим</span> і тривати до 1 року.</li>
              <li><span className="font-bold">Якщо біль і слабкість не зникають протягом 2 місяців</span>, лікар може направити вас до терапевта кисті для пришвидшення відновлення.</li>
            </ul>
          </section>
          <section className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Фактори, що можуть уповільнити одужання:</h3>
            <ul className="list-disc pl-6">
                <li><span className="font-bold">Важкий або занедбаний синдром зап&#39;ястного каналу.</span></li>
                <li><span className="font-bold">Супутні захворювання:</span> артрит, тендиніт або інші проблеми, що викликають біль і скутість у руці чи зап&#39;ясті.</li>
            </ul>
          </section>
          <section className="mb-6">
            <ul className="list-disc pl-6">
              <li><span className="font-bold">Рецидив синдрому</span> — рідкісний, але можливий.</li>
              <li>У таких випадках може знадобитися <span className="font-bold">додаткове лікування або повторне хірургічне втручання.</span></li>
            </ul>
          </section>
        </div>
        {/* Права частина 1/3 */}
        <div className="w-1/3 flex items-center justify-center">
          <GalleryCarpalResult />
        </div>
      </div>
    </div>
  );
}
