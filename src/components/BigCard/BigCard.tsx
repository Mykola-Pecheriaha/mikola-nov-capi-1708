
"use client";
import GalleryBigCard from '../GalleryBigCard/GalleryBigCard'
import galleryPlasticSurgery from '../../data/galleryPlasticSurgery'
import { useRouter } from 'next/navigation';

export default function BigCard() {
  const router = useRouter();
  return (
    <section className="w-full bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
          {/* Ліва карточка */}
          <div className="flex-1 md:flex-[2] bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Пластична хірургія</h2>
                <span className="text-2xl text-gray-400">&rarr;</span>
              </div>
              <p className="text-gray-600 text-base md:text-lg mb-8">
                Оперативне втручання з метою усунення негативних естетичних наслідків вікових змін, а також різних набутих особливостей статури
              </p>
            </div>
            <button
              className="mt-auto w-full md:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-600 text-white font-semibold rounded transition-all duration-200 text-base md:text-lg shadow"
              onClick={() => router.push('/services/plastic-surgery')}
            >
              Дізнатися більше
            </button>
          </div>
          {/* Права галерея */}
          <div className="flex-1 md:flex-[1] flex items-stretch">
            <GalleryBigCard images={galleryPlasticSurgery} />
          </div>
        </div>
      </div>
    </section>
  )
}
