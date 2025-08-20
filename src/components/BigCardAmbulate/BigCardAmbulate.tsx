import GalleryAmbulate from '../GalleryAmbulate/GalleryAmbulate'

export default function BigCardAmbulate() {
  return (
    <section className="w-full bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
          {/* Ліва карточка */}
          <div className="flex-1 md:flex-[2] bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Амбулаторна хірургія</h2>
                <span className="text-2xl text-gray-400">&rarr;</span>
              </div>
              <p className="text-gray-600 text-base md:text-lg mb-8">
                Амбулаторна та хірургія одного дня — швидке й безпечне лікування без потреби тривалої госпіталізації. Сучасні методи дозволяють ефективно усунути доброякісні утворення, врослі нігті та запальні процеси шкіри.
              </p>
            </div>
            <button className="mt-auto w-full md:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded transition-all duration-200 text-base md:text-lg shadow">
              Дізнатися більше
            </button>
          </div>
          {/* Права: галерея амбулаторної хірургії */}
          <div className="flex-1 md:flex-[1] flex flex-col items-stretch min-h-[400px]">
            <GalleryAmbulate className="h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
