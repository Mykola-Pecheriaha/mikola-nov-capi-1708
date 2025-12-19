'use client';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  href: string;
}

const ambulatorySurgeryServices: ServiceCard[] = [
  {
    id: 'skin-lesions-removal',
    title: 'Видалення новоутворень шкіри і підшкірної клітковини (атероми, ліпоми, папіломи)',
    description:
      'Безпечне видалення бородавок, родимок та папілом за допомогою сучасних методів для отримання косметичного результату',
    coverImage: '/images/services/resultbreast5.jpg',
    href: '/services/ambulatory-skin-tumors',
  },

  {
    id: 'soft-tissue-infections',
    title: "Лікування гнійно-запальних захворювань шкіри і м'яких тканин",
    description:
      'Комплексне лікування гнійних процесів, абсцесів та флегмон із дренуванням та медикаментозною терапією',
    coverImage: '/images/services/phlegmona.jpg',
    href: '/services/ambulatory-infections',
  },
  {
    id: 'scar-correction',
    title: 'Пластика дефектів шкіри та післяопераційних рубців',
    description:
      'Пластичне видалення та корекція непривабливих рубців для відновлення косметичного вигляду шкіри',
    coverImage: '/images/services/skinplastic1.jpg',
    href: '/services/ambulatory-scar-plasty',
  },
  {
    id: 'ingrown-nail-treatment',
    title: 'Врослий ніготь і видалення нігтьової пластини',
    description:
      'Лікування врослого нігтя та видалення нігтьової пластини для запобігання рецидивам та хронічному болю',
    coverImage: '/images/services/skinplastic2.jpg',
    href: '/services/ambulatory-ingrown-nail',
  },
];

export default function AmbulatorySurgery() {
  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900 dark:text-blue-100">
            Амбулаторна хірургія
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Професійна амбулаторна хірургічна допомога при новоутвореннях та дефектах шкіри.
            Виберіть необхідну процедуру для детальної інформації.
          </p>
        </div>

        {/* Сітка карточок */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
          {ambulatorySurgeryServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 dark:border-gray-700"
            >
              {/* Зображення */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-700 dark:to-gray-600">
                <Image
                  src={service.coverImage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg?height=256&width=256&query=ambulatory';
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Контент картки */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Кнопка детальніше */}
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Детальніше</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Додаткова інформація */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 text-center">
              Переваги амбулаторного лікування
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Швидко та ефективно
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Процедури без госпіталізації з швидким одужанням та мінімальними ускладненнями
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Гарні результати
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Мінімальні рубці та косметичні дефекти завдяки сучасним методам видалення
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Зручно</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Запис в зручний час без довгого очікування та тривалої госпіталізації
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Заклик до дії */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 shadow-md border border-blue-200 dark:border-gray-700">
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
              Хочете позбутися новоутворення або дефекту шкіри?
            </p>
            <Link
              href="/ask-doctor"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-300"
            >
              Записатися на консультацію
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
