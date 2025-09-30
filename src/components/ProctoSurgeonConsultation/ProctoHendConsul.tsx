"use client";

import React from "react";
import Image from "next/image";

const ProctoHendConsul: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row bg-[#e7eeef] rounded-xl shadow p-6 gap-8 items-stretch">
        {/* Ліва частина: заголовок і список */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Проктологія</h2>
          <h3 className="text-xl font-semibold mb-3 text-blue-900">Діагностика і фахове лікування</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-900 text-base font-medium mb-4 pl-2">
            <li>Безболісно</li>
            <li>Делікатно</li>
            <li>Конфіденційно</li>
            <li>Професійно</li>
            <li>Без страху та сорому</li>
            <li>Сучасні методи</li>
            <li>Швидко та ефективно</li>
            <li>Дбайливо до кожного пацієнта</li>
          </ul>
        </div>
        {/* Права частина: малюнок */}
        <div className="md:w-1/3 w-full flex items-center justify-center">
          <Image
            src="/images/procto/proctology-removebg-preview.png"
            alt="Проктологія"
            width={320}
            height={320}
            className="rounded-lg object-contain max-h-[320px]"
          />
        </div>
      </div>
      {/* Опис на всю ширину */}
      <div className="mt-6">
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5 flex gap-4 items-start shadow">
          <span className="mt-1 text-blue-400 text-2xl">ℹ️</span>
          <div className="text-blue-900 text-base">
            <p className="mb-2">
              Сучасне, адекватне та доступне лікування гострих та хронічних захворювань прямої кишки.
            </p>
            <p className="mb-2">
              Проктологічні захворювання завжди відносились до категорії делікатних захворювань, але сьогодні це група одних з найпоширеніших захворювань. У більшості випадків пацієнти зволікають зі зверненням до спеціаліста, відкладають візит до проктолога, тим самим погіршуючи ситуацію.
            </p>
            <p>
              Своєчасне звернення до проктолога має вирішальне значення для запобігання серйозним ускладненням та забезпечення ефективного лікування. Багато проктологічних захворювань протікають безсимптомно або викликають мінімальний дискомфорт на ранніх стадіях, що змушує пацієнтів зволікати зі зверненням до лікаря. Однак рання діагностика може запобігти необхідності хірургічного втручання та тяжким наслідкам.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProctoHendConsul;
