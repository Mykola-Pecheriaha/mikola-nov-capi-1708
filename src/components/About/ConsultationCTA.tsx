'use client';
import React, { useState } from 'react';
import { Phone, Calendar, Clock, CheckCircle } from 'lucide-react';

const ConsultationCTA: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    // Можна додати логіку для відкриття форми або навігації
    console.log('Записатися на консультацію');
  };

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Основний контент */}
        <div className="relative">
          {/* Декоративні кола */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-500 to-transparent rounded-full opacity-5"></div>
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-gradient-to-br from-blue-500 to-transparent rounded-full opacity-5"></div>
            <div className="absolute top-1/2 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500 to-transparent rounded-full opacity-5 hidden sm:block"></div>
          </div>

          {/* Карточка контенту */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-200 dark:border-blue-700">
            {/* Текстова секція */}
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                Готові до змін?
              </h2>

              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Запишіться на безкоштовну консультацію та дізнайтеся, як ми можемо допомогти вам
                досягти бажаного результату
              </p>

              {/* Список переваг */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-blue-600 dark:text-blue-400 flex-shrink-0"
                  />
                  <span className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium">
                    Безкоштовна консультація
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-blue-600 dark:text-blue-400 flex-shrink-0"
                  />
                  <span className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium">
                    Індивідуальний план лікування
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-blue-600 dark:text-blue-400 flex-shrink-0"
                  />
                  <span className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium">
                    Професійна консультація
                  </span>
                </div>
              </div>
            </div>

            {/* Секція дій */}
            <div className="flex flex-col items-center justify-center text-center md:border-l border-blue-200 dark:border-blue-700 md:pl-8 md:py-0">
              <button
                onClick={openContactForm}
                className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 mb-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-base md:text-lg"
              >
                <Calendar size={20} />
                <span className="hidden sm:inline">Записатися на консультацію</span>
                <span className="sm:hidden">Записатися</span>
              </button>

              {/* Контактна інформація */}
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Phone size={16} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                    +380 (50) 757-54-11
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <Clock size={16} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                    Пн-Пт: 9:00-16:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
