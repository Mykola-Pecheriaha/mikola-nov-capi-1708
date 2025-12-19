'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const mainList = [
  { label: 'Консультація хірурга', link: '/services/hand-surgeon-consultation' },
  { label: 'Лікування контрактури Дюпюітрена', link: '/services/hand-dupyutren' },
  { label: 'Лікування карпального синдрому', link: '/services/carpal-syndrome' },
  {
    label: 'Лікування тендовагинітів та Видалення утворень на кисті (гангліом)',
    link: '/services/hand-surgery',
  },
  { label: 'Лікування гнійних уражень кисті', link: '/services/hand-infection' },
];

export default function HandSurgeryCard() {
  const [showMore, setShowMore] = useState(false);
  const visibleCount = 4;
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden my-8 relative z-10">
      {/* Ліва частина зображення */}
      <Link
        href="/services/hand-surgery-main"
        className="md:w-1/3 w-full min-w-[120px] bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-2 md:p-4 min-h-[180px] h-[180px] md:h-[220px] max-w-[320px] max-h-[240px] md:max-w-[300px] md:max-h-[220px] mx-auto hover:opacity-80 transition-opacity"
      >
        <Image
          src="/images/gallery-images/gallery-images5.jpg"
          alt="Хірургія кисті"
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
      </Link>
      {/* Права частина текст */}
      <div className="md:w-2/3 w-full p-6 flex flex-col">
        <Link
          href="/services/hand-surgery-main"
          className="text-2xl font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Хірургія кисті
        </Link>
        <ul className="mb-2">
          {(showMore ? mainList : mainList.slice(0, visibleCount)).map((item) => (
            <li key={item.label} className="mb-1">
              <a
                href={item.link}
                className="text-zinc-600 dark:text-zinc-400 underline hover:font-bold hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 mt-4">
          {mainList.length > visibleCount && (
            <button
              className="px-4 py-2 bg-slate-50 dark:bg-gray-700 text-black dark:text-white border border-black dark:border-gray-600 rounded hover:bg-slate-400 dark:hover:bg-slate-600 hover:text-white transition-colors self-start"
              onClick={() => setShowMore((v) => !v)}
            >
              {showMore ? 'Сховати' : 'показати більше +'}
            </button>
          )}
          <Link
            href="/services/hand-surgery-main"
            className="mt-0 px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors self-start"
          >
            Всі послуги →
          </Link>
        </div>
      </div>
    </div>
  );
}
