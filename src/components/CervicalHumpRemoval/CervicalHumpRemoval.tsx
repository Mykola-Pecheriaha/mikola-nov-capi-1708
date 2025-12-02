'use client';
import Image from 'next/image';

interface CervicalHumpRemovalProps {
  backgroundColor?: string;
}

export function CervicalHumpRemoval({ backgroundColor }: CervicalHumpRemovalProps) {
  return (
    <section
      className="w-full py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="container-custom">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12 relative pb-4">
          <span className="text-blue-500 dark:text-blue-400 mr-3">✦</span>
          Шийний горб
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded"></span>
        </h2>

        {/* Перший блок - зліва текст, справа зображення */}
        <div className="mb-12 bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm border border-blue-100 dark:border-blue-900">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Ліва колонка з переліком */}
            <div className="flex-1">
              <ul className="space-y-4">
                <li className="flex items-start text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0">🔹</span>
                  <span>Усунення проблеми без розрізів</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0">🔹</span>
                  <span>Зникнення болів в шиї</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0">🔹</span>
                  <span>Усунення косметичного дефекту</span>
                </li>
                <li className="flex items-start text-lg text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0">🔹</span>
                  <span>Покращення осанки</span>
                </li>
              </ul>
            </div>

            {/* Права колонка з зображенням */}
            <div className="flex-1 w-full">
              <div className="relative w-full h-[400px] md:h-[350px] sm:h-[300px]">
                <Image
                  src="/images/cervical-hump/liposuction25.jpg"
                  alt="Шийний горб"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Другий блок - текст на всю ширину */}
        <div className="bg-blue-50/70 dark:bg-blue-900/20 rounded-2xl p-6 md:p-8 shadow-md border border-blue-100 dark:border-blue-800">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 text-center">
            Локальні жирові відкладення в районі нижнього шийного/верхнього грудного відділів часто
            називають &quot;холкою&quot;, &quot;вдовиним&quot; або клімактеричним горбом. Проблема
            видна візуально, може з часом призвести до сутулості та згорбленої фігури. Відхилення в
            переважній більшості утворюється у жінок певного віку.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CervicalHumpRemoval;
