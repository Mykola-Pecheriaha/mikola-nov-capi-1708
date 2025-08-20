"use client";
import React, { useState } from "react";
import Image from "next/image";

const mainList = [
  { label: "Консультація хірурга", link: "/services/phlebology-consultation" },
  { label: "Лазерне видалення вен", link: "/services/phlebology-laser" },
  { label: "Мініфлебектомія", link: "/services/phlebology-miniphlebectomy" },
  { label: "Склеротерапія", link: "/services/phlebology-sclerotherapy" },
];

export default function PhlebologyCard() {
  const [showMore, setShowMore] = useState(false);
  const visibleCount = 5;
  return (
    <div className="w-full bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden my-8 relative z-10">
      {/* Ліва частина зображення */}
      <div className="md:w-1/3 w-full min-w-[120px] bg-gray-100 flex items-center justify-center p-2 md:p-4 min-h-[180px] h-[180px] md:h-[220px] max-w-[320px] max-h-[240px] md:max-w-[300px] md:max-h-[220px] mx-auto">
        <Image src="/images/gallery-images/gallery-images2.JPG" alt="Флебологія" width={300} height={220} className="rounded-lg object-cover object-top w-full h-full max-w-full max-h-full" style={{objectFit:'cover', objectPosition:'top', width:'100%', height:'100%', position:'static'}} />
      </div>
      {/* Права частина текст */}
      <div className="md:w-2/3 w-full p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-2 underline">Хірургія вен - флебологія</h2>
        <ul className="mb-2">
          {(showMore ? mainList : mainList.slice(0, visibleCount)).map((item) => (
            <li key={item.label} className="mb-1">
              <a href={item.link} className="text-zinc-600 underline hover:font-bold hover:text-zinc-900 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
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
  {showMore ? "Сховати" : "показати більше +"}
</button>
      </div>
    </div>
  );
}
