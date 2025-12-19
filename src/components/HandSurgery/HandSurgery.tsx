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

const handSurgeryServices: ServiceCard[] = [
  {
    id: 'hand-consultation',
    title: 'Консультація хірурга',
    description:
      'Первинна консультація з хірургом-спеціалістом з хірургії кисті для діагностики та обговорення плану лікування',
    coverImage: '/images/services/carpale17.jpg',
    href: '/services/hand-surgeon-consultation',
  },
  {
    id: 'dupuytren-contracture',
    title: 'Лікування контрактури Дюпюітрена',
    description:
      'Хірургічне лікування контрактури Дюпюітрена для відновлення рухливості пальців та функції кисті',
    coverImage: '/images/services/HendConsul4.jpg',
    href: '/services/hand-dupyutren',
  },
  {
    id: 'carpal-syndrome',
    title: 'Лікування карпального синдрому',
    description:
      'Хірургічне та консервативне лікування синдрому карпального каналу для зниження болю та відновлення чутливості',
    coverImage: '/images/services/carpale15.jpg',
    href: '/services/carpal-syndrome',
  },
  {
    id: 'tenosynovitis-and-ganglion',
    title: 'Лікування тендовагинітів та Видалення утворень на кисті (гангліом)',
    description:
      'Лікування запалення сухожильних оболонок та хірургічне видалення доброякісних утворень кисті',
    coverImage: '/images/services/common6.jpg',
    href: '/services/hand-surgery',
  },
  {
    id: 'purulent-hand-infection',
    title: 'Лікування гнійних уражень кисті',
    description:
      'Вичерпне лікування гнійно-запальних захворювань кисті для запобігання ускладненням та збереження функції',
    coverImage: '/images/services/purulent-hand.jpg',
    href: '/services/hand-infection',
  },
];

export default function HandSurgery() {
  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900 dark:text-blue-100">
            Хірургія кисті
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Спеціалізована хірургічна допомога при захворюваннях та травмах кисті. Виберіть
            відповідну процедуру для детальної інформації.
          </p>
        </div>

        {/* Сітка карточок */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
          {handSurgeryServices.map((service) => (
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
                    e.currentTarget.src = '/placeholder.svg?height=256&width=256&query=hand';
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
              Чому обирають нас?
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Спеціалізація
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Висококваліфіковані хірурги зі спеціалізацією на хірургії кисті
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Прецизійні методики
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Точне виконання операцій для збереження максимальної функції кисті
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Сучасне обладнання
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Мікроскопія та новітні інструменти для оптимальних результатів
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Заклик до дії */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 shadow-md border border-blue-200 dark:border-gray-700">
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
              Маєте запитання або хочете записатися на консультацію?
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
