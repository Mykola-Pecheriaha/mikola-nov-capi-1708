"use client";

export default function VidioBord() {
  return (
  <section className="relative w-full h-[95vh] min-h-[750px] flex items-center justify-start overflow-hidden">
      {/* Відео фон */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/vidio/mainvidioheppi.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Напівпрозорий оверлей для кращої читабельності тексту */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Контент */}
      <div className="relative z-20 flex flex-col items-start justify-center text-left px-6 md:px-20 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-10 drop-shadow-lg leading-tight">
          Пластична хірургія<br />в Чернівцях
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-white drop-shadow-md max-w-2xl">
          Ввесь спектор пластчних та естетичних операцій.<br />
          Досвід лікарів та сучасні оснащення клініки забезпечують нашим пацієнтам безпечність і ефективність  оперативних втручань
        </p>
      </div>
    </section>
  );
}
