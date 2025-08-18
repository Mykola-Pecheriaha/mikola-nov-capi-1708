
"use client";
import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber, FaTelegramPlane } from "react-icons/fa";
import { MdLocationOn, MdAccessTime } from "react-icons/md";

const links = [
  {
    icon: <FaPhoneAlt size={28} />, href: "tel:+380507575411", label: "Телефон"
  },
  {
    icon: <FaViber size={32} />, href: "viber://chat?number=%2B380507575411", label: "Viber"
  },
  {
    icon: <FaTelegramPlane size={32} />, href: "https://t.me/yourtelegram", label: "Telegram", target: "_blank"
  },
  {
    icon: <MdLocationOn size={32} />, href: "https://maps.app.goo.gl/yourlocation", label: "Локація", target: "_blank"
  },
  {
    icon: <MdAccessTime size={32} />, href: "#worktime", label: "Графік"
  },
];


export default function SocialSidebar() {
  return (
    <>
      {/* Desktop: правий сайдбар */}
      <div className="hidden lg:flex flex-col fixed top-1/2 right-4 -translate-y-1/2 z-40 bg-[#5e9b9b] rounded-full py-3 px-2 gap-3 shadow-lg"
        style={{ backgroundColor: 'var(--topbar-bg, #5e9b9b)' }}>
        {links.map((l, i) => (
          <a
            key={i}
            href={l.href}
            target={l.target || undefined}
            rel={l.target ? "noopener noreferrer" : undefined}
            aria-label={l.label}
            className="flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
          >
            {l.icon}
          </a>
        ))}
      </div>
      {/* Mobile: нижній бар, sticky над футером */}
      <StickyMobileSocialBar />
    </>
  );
}

// Sticky-бар для мобільних, який зупиняється над футером
function StickyMobileSocialBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const [bottom, setBottom] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const footer = document.querySelector('footer');
      if (!footer || !barRef.current) return;
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Якщо футер видимий знизу, піднімаємо бар
      if (footerRect.top < windowHeight) {
        setBottom(windowHeight - footerRect.top);
      } else {
        setBottom(0);
      }
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="lg:hidden fixed left-0 w-full z-40 flex justify-between items-center px-6 py-2 bg-[#5e9b9b] rounded-t-2xl shadow-2xl"
      style={{
        backgroundColor: 'var(--topbar-bg, #5e9b9b)',
        bottom: bottom + 'px',
        transition: 'bottom 0.15s linear'
      }}
    >
      {links.map((l, i) => (
        <a
          key={i}
          href={l.href}
          target={l.target || undefined}
          rel={l.target ? "noopener noreferrer" : undefined}
          aria-label={l.label}
          className="flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
}
