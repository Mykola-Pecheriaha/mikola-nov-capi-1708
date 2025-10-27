import VidioBord from '@/components/VidioBord/VidioBord';
import BigCard from '@/components/BigCard/BigCard';
import BigCardFlebo from '@/components/BigCardFlebo/BigCardFlebo';
import BigCardHand from '@/components/BigCardHand/BigCardHand';
import BigCardProcto from '@/components/BigCardProcto/BigCardProcto';
import BigCardGernio from '@/components/BigCardGernio/BigCardGernio';
import BigCardAmbulate from '@/components/BigCardAmbulate/BigCardAmbulate';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <VidioBord />
      <BigCard />

      {/* Промо-секція медичної форми */}
      <section className="py-16 bg-gradient-to-r bg-[#7491a3] to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🏥 Заповніть медичну форму онлайн
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Детальна медична анкета допоможе нашим спеціалістам краще підготуватися до вашої
              консультації. Заповніть форму зараз і отримайте якісну медичну допомогу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/medical-form"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📋 Заповнити медичну форму
              </Link>
              <div className="text-white/80 text-sm">⏱️ Займає 5-10 хвилин</div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">🔒</span>
                <span>Конфіденційно</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">⚡</span>
                <span>Швидко і зручно</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">👨‍⚕️</span>
                <span>Професійний підхід</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BigCardFlebo />
      <BigCardHand />
      <BigCardProcto />
      <BigCardGernio />
      <BigCardAmbulate />
    </div>
  );
}
