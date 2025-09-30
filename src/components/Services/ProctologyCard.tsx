"use client";
import React, { useState } from "react";
import Image from "next/image";

const mainList = [
  { label: "Консультація проктолога", link: "/services/proctolog-consultation" },
  { label: "Лікування геморою", link: "/services/proctology-hemorrhoids" },
  { label: "Лікування анальної тріщини", link: "/services/proctology-fissure" },
  { label: "Лікування парапроктиту", link: "/services/proctology-paraproctitis" },
  { label: "Видалення новоутворень періанальної зони і анального каналу", link: "/services/proctology-tumors" },
  { label: "Висічення кісти куприка", link: "/services/proctology-coccyx-cyst" },
  { label: "Висічення параректальної нориці", link: "/services/proctology-pararectal-fistula" },
  { label: "Геморроїдектомія (операція Мілліган-Моргана)", link: "/services/proctology-hemorrhoidectomy" },
  { label: "Трансанальна гемороїдальна деартеріалізація", link: "/services/proctology-dearterialization" },
];

export default function ProctologyCard() {
  const [showMore, setShowMore] = useState(false);
  const visibleCount = 5;
  return (
    <div className="w-full bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden my-8 relative z-10">
      {/* Ліва частина зображення */}
      <div className="md:w-1/3 w-full min-w-[120px] bg-gray-100 flex items-center justify-center p-2 md:p-4 min-h-[180px] h-[180px] md:h-[220px] max-w-[320px] max-h-[240px] md:max-w-[300px] md:max-h-[220px] mx-auto">
        <Image src="/images/gallery-images/gallery-images3.JPG" alt="Проктологія" width={300} height={220} className="rounded-lg object-cover object-top w-full h-full max-w-full max-h-full" style={{objectFit:'cover', objectPosition:'top', width:'100%', height:'100%', position:'static'}} />
      </div>
      {/* Права частина текст */}
      <div className="md:w-2/3 w-full p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-2">Проктологія</h2>
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
