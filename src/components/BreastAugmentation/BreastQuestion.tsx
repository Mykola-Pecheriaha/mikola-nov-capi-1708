'use client';
import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface BreastQuestionProps {
  backgroundColor?: string;
  onContactClick?: () => void;
}

interface Question {
  id: string;
  title: string;
  content: string | React.ReactNode;
  image: string;
}

const questions: Question[] = [
  {
    id: 'preparation',
    title: 'Збільшення грудей: підготовка до операції',
    content: `За два тижні до хірургічного втручання рекомендовано відмовитись від куріння та прийому лікарських препаратів. Обов'язково повідомте спеціаліста, якщо ви регулярно приймаєте будь-які ліки!
    
Варто враховувати, що вагітність і годування можуть вплинути на форму залози, після чого є ймовірність необхідності додаткової корекції. Тому втручання ефективніше через півроку після закінчення грудного годування.
    
Результати обстеження та проведені аналізи мають показати, що пацієнтка здорова та готова до операції.`,
    image: '/images/breast-question/preparation1.jpg',
  },
  {
    id: 'duration',
    title: 'Скільки триває операція зі збільшення грудей',
    content: `Збільшення молочних залоз триває від 1,5 до 2 годин. Час залежить від обсягу хірургічного втручання та індивідуальних особливостей пацієнтки. 
    
Задача хірурга є в тому, щоб створити простір під молочною залозою в запланованих шарах тканей (підмолочною залозою, під фасцією або під м'язом) для установки імплантів. Ретельне розшарування тканин з надійним гемостазом в різних пацієнтів буде потребувати різної кількості часу.
    
Для хірурга важливий результат, а не час операції. Дуже важливим чинником є досвід хірурга в проведенні цих операцій. Операція проводиться під загальною анестезією. В наших клініках ми практикуємо проводити операції на грудних залозах під епідуральною анестезією.`,
    image: '/images/breast-question/breastQuestion1.jpg',
  },
  {
    id: 'indications',
    title: 'Покази до проведення операції зі збільшення грудей',
    content: (
      <>
        <p className="mb-3">Покази можна умовно поділити на 2 види: естетичні та медичні:</p>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
          До медичних належать:
        </h4>
        <ul className="list-none pl-0 space-y-2">
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            Вроджені або набуті кистозні утворення молочних залоз;
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            виражена асиметрія залози, синдром Полланда тощо;
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            Доброякісні пухлини молочних залоз;
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            відновлення молочних залоз після радикальних операцій з приводу пухлин, або травм;
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            відновлення молочних залоз після травм.
          </li>
        </ul>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
          До естетичних належать:
        </h4>
        <ul className="list-none pl-0 space-y-2">
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            недостатньо розвинута за обсягом молочна залоза (аплазія молочних залоз);
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            виражена асиметрія залози, синдром Полланда тощо;
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            постлактаційна інволюція молочних залоз (постлактаційний птоз);
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            різке схуднення, що позначилося на формі грудей.
          </li>
        </ul>
      </>
    ),
    image: '/images/breast-question/breast-gipoplasiya1.jpg',
  },
  {
    id: 'contraindications',
    title: 'Протипокази до операції по збільшуванню молочних залоз',
    content: (
      <>
        <p className="mb-4">Операція збільшення грудей протипоказана у таких випадках:</p>
        <ul className="list-none pl-0 space-y-2">
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            вік до 18 років;
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            при загостренні хронічних захворювань (у тому числі й ГРВІ);
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            при патологічних порушеннях згортання крові;
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            при підозрі на рак, навіть у вигляді спадкової історії (у цьому випадку необхідна
            консультація мамолога);
          </li>
          <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 dark:before:text-blue-400 before:text-xl">
            при психічних захворюваннях, серцево-судинній недостатності та цукровому діабеті в
            некомпенсованій формі.
          </li>
        </ul>
      </>
    ),
    image: '/images/breast-question/blefaroContraindicatio1.jpg',
  },
  {
    id: 'rehabilitation',
    title: 'Реабілітація після збільшення грудей',
    content: (
      <>
        <p className="mb-3">
          Після операції пацієнтка перебуває у клініці 1 добу під наглядом пластичного хірурга та
          медичного персоналу. Наступного дня вона їде додому із рекомендаціями.
        </p>
        <p className="mb-3">
          Реабілітація після пластики триває 2-3 тижні. Відразу пацієнтка може мати відчуття, які
          можна порівняти з крепатурою від занять спортом. Також є деякі обмеження рухливості рук.
          Все це легко усувається знеболюючими.
        </p>
        <p className="mb-3">
          Період реабілітації потребує обов&apos;язкового носіння компресійної білизни для зменшення
          ризику ускладнень та стабілізації результату операції зі збільшення грудей. Білизну треба
          носити 4-6 тижнів.
        </p>
        <p className="mb-3">
          На рахунок швів, то тут підхід індивідуальний. Частіше їх не треба знімати. Але часом для
          хорошої адаптації країв рани ми самий верхній шов накладаємо тонкою ниткою (як волосок),
          то її треба буде зняти на 7-8 день після операції.
        </p>
        <p className="mb-3">
          Після операції до звичайного ритму життя можна повернутись через 7-10 днів. Через 2 місяці
          можна повертатися до активних фізичних навантажень (спортзал, басейн).
        </p>
      </>
    ),
    image: '/images/breast-question/implant16.jpg',
  },
];

const BreastQuestion: React.FC<BreastQuestionProps> = ({ backgroundColor, onContactClick }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedText, setExpandedText] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const toggleText = (questionId: string) => {
    setExpandedText((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const truncateText = (text: string, charLimit: number) => {
    if (text.length <= charLimit) {
      return { truncated: text, needsTruncation: false };
    }
    return {
      truncated: text.substring(0, charLimit) + '...',
      needsTruncation: true,
    };
  };

  return (
    <section
      className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-16"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Заголовок */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 dark:text-gray-100">
            Поширені запитання про збільшення грудей
          </h2>
        </div>

        {/* Акордеон */}
        <div className="flex flex-col gap-4 md:gap-6">
          {questions.map((question) => {
            const isExpanded = expandedSection === question.id;

            return (
              <div
                key={question.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-blue-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-blue-300 dark:hover:border-gray-600"
              >
                {/* Заголовок акордеона */}
                <button
                  className="w-full flex items-center justify-between p-4 md:p-6 bg-white dark:bg-gray-800 cursor-pointer transition-colors duration-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                  onClick={() => toggleSection(question.id)}
                  aria-expanded={isExpanded}
                >
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-blue-900 dark:text-gray-100 text-left flex-1">
                    {question.title}
                  </h3>
                  <div className="ml-4 text-blue-600 dark:text-blue-400 flex-shrink-0 transition-transform duration-300">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>

                {/* Контент акордеона */}
                {isExpanded && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-blue-100 dark:border-gray-700 bg-blue-50/30 dark:bg-gray-800/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 pt-4 md:pt-6">
                      {/* Ліва частина - текст */}
                      <div className="flex flex-col gap-4 md:gap-6">
                        {/* Блок питання */}
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-xl p-5 md:p-7 shadow-md relative">
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-yellow-300 dark:bg-yellow-600 rounded-t-xl"></div>
                          <h4 className="text-base md:text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-3 md:mb-4 pb-2 md:pb-3 border-b border-yellow-200 dark:border-yellow-700">
                            Питання:
                          </h4>
                          <div className="text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                            <p>{question.title}</p>
                          </div>
                        </div>

                        {/* Блок відповіді */}
                        <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-700 rounded-xl p-5 md:p-7 shadow-md relative">
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-green-400 dark:bg-green-600 rounded-t-xl"></div>
                          <h4 className="text-base md:text-lg font-bold text-green-800 dark:text-green-300 mb-3 md:mb-4 pb-2 md:pb-3 border-b border-green-200 dark:border-green-700">
                            Відповідь:
                          </h4>
                          <div className="text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                            {(() => {
                              const isTextExpanded = expandedText[question.id];
                              const isString = typeof question.content === 'string';

                              if (isString) {
                                const { truncated, needsTruncation } = truncateText(
                                  question.content as string,
                                  50,
                                );

                                return (
                                  <>
                                    <p className="whitespace-pre-line">
                                      {isTextExpanded ? question.content : truncated}
                                    </p>
                                    {needsTruncation && (
                                      <button
                                        onClick={() => toggleText(question.id)}
                                        className="mt-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm underline transition-colors duration-200"
                                      >
                                        {isTextExpanded ? 'Згорнути' : 'Розгорнути'}
                                      </button>
                                    )}
                                  </>
                                );
                              } else {
                                // Для JSX контенту
                                return (
                                  <>
                                    <div
                                      className={`overflow-hidden transition-all duration-300 ${
                                        isTextExpanded ? 'max-h-none' : 'max-h-24'
                                      }`}
                                    >
                                      {question.content}
                                    </div>
                                    <button
                                      onClick={() => toggleText(question.id)}
                                      className="mt-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm underline transition-colors duration-200"
                                    >
                                      {isTextExpanded ? 'Згорнути' : 'Розгорнути'}
                                    </button>
                                  </>
                                );
                              }
                            })()}
                          </div>
                        </div>
                      </div>

                      {/* Права частина - зображення */}
                      <div className="flex justify-center items-start">
                        <div className="w-full rounded-xl overflow-hidden shadow-lg border border-blue-200 dark:border-gray-600">
                          <Image
                            src={question.image}
                            alt={`Ілюстрація до ${question.title}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Заклик до дії */}
        <div className="mt-8 md:mt-12 text-center p-6 md:p-10 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl shadow-xl">
          <p className="text-base md:text-lg text-white mb-4 md:mb-6 leading-relaxed">
            Маєте додаткові запитання? Наші спеціалісти готові надати вам детальну консультацію.
          </p>
          <button
            className="bg-white text-blue-700 dark:bg-gray-100 dark:text-blue-800 px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-semibold rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-300"
            onClick={onContactClick}
          >
            Зв&apos;язатися з нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default BreastQuestion;
