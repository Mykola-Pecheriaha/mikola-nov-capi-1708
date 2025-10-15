"use client";
import type React from "react";
import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}
export interface FaqAccordionProps {
  items: FaqItem[];
}
export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="w-full rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-4 border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden"
        >
          <div
            className={`flex justify-between items-center px-5 py-5 cursor-pointer bg-gray-50 transition-colors duration-300 ${activeIndex === index ? "bg-green-50 border-b border-gray-200" : "hover:bg-gray-100"}`}
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 m-0">{item.question}</h3>
            <span
              className={`text-2xl md:text-3xl font-bold text-green-600 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
            >
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 px-5 ${activeIndex === index ? "max-h-[2000px] py-5" : "max-h-0 py-0"}`}
          >
            {activeIndex === index && (
              <div className="text-base md:text-lg text-gray-700">{item.answer}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
