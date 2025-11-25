'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const mainList = [
  { label: 'Консультація пластичного хірурга', link: '/services/plastic-surg-consult' },
  { label: 'Альбоми результатів', link: '/services/albums' },
  { label: 'Збільшення грудей', link: '/services/breast-augmentation' },
  { label: 'Підтяжка грудей і корекція соска.', link: '/services/mastopexy-nipple-correction' },
  { label: 'Видалення або заміна імплантів', link: '/services/removal-replacement-implants' },

  { label: 'Гінекомастія', link: '/services/gynecomastia' },
];

const extraList = [
  {
    label: 'Пластика обличча',
    link: '/services/plastic-face',
    children: [
      { label: 'Підтяжка обличчя', link: '/services/face-lift' },
      { label: 'Блефаропластика', link: '/services/plastic-face#blepharoplasty' },
      { label: 'Корекція вух', link: '/services/plastic-face#ears' },
      { label: 'Видалення утворень в ділянці обличчя', link: '/services/plastic-face#removal' },
    ],
  },
  {
    label: 'Пластика торса',
    link: '/services/plastic-torso',
    children: [
      { label: 'Абдомінопластика', link: '/services/plastic-torso#abdominoplasty' },
      { label: 'Ліпосакція', link: '/services/plastic-torso#liposuction' },
      { label: 'Видалення шийного горба', link: '/services/plastic-torso#hump' },
      { label: 'Збільшення сідниць', link: '/services/plastic-torso#buttocks' },
      { label: 'Вирівнювання гомілок', link: '/services/plastic-torso#shins' },
    ],
  },
];

export default function PlasticSurgeryCard() {
  const [showMore, setShowMore] = useState(false);
  const visibleCount = 5;
  // Об'єднуємо всі рядки для розгортання
  const allRows = [
    ...mainList,
    ...extraList.flatMap((section) => [
      { label: section.label, link: section.link, isSection: true },
      ...section.children,
    ]),
  ];
  return (
    <div className="w-full bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden my-8 relative z-10">
      {/* Ліва частина зображення */}
      <div className="md:w-1/3 w-full min-w-[120px] bg-gray-100 flex items-center justify-center p-2 md:p-4 min-h-[180px] h-[180px] md:h-[220px] max-w-[320px] max-h-[240px] md:max-w-[300px] md:max-h-[220px] mx-auto">
        <Image
          src="/images/gallery-images/gallery-images1.jpg"
          alt="Пластична хірургія"
          width={300}
          height={220}
          className="rounded-lg object-cover object-top w-full h-full max-w-full max-h-full"
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
            width: '100%',
            height: '100%',
            position: 'static',
          }}
        />
      </div>
      {/* Права частина текст */}
      <div className="md:w-2/3 w-full p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-2">Пластична хірургія</h2>
        <ul className="mb-2">
          {(showMore ? allRows : allRows.slice(0, visibleCount)).map((item, idx) => {
            const isSection = 'isSection' in item && item.isSection;
            return (
              <li key={item.label + idx} className={isSection ? 'font-semibold mt-2 mb-1' : 'mb-1'}>
                {item.link ? (
                  <a
                    href={item.link}
                    className={
                      isSection
                        ? 'text-zinc-600 underline hover:text-zinc-900 font-semibold'
                        : 'text-zinc-900 underline hover:font-bold transition-colors'
                    }
                  >
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            );
          })}
        </ul>
        <button
          className="
    mt-4 px-4 py-2 
    bg-slate-50 
    text-black 
    border border-black 
    rounded 
    hover:bg-slate-400 
    hover:text-white 
    transition-colors 
    self-start
  "
          onClick={() => setShowMore((v) => !v)}
        >
          {showMore ? 'Сховати' : 'показати більше +'}
        </button>
      </div>
    </div>
  );
}
