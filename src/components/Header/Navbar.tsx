'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useTheme } from '@/context/ThemeContext'
import { Bars3Icon, XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import BurgerConsultationModal from './BurgerConsultationModal';
// import { useTheme } from '@/context/ThemeContext'

const navigation = [
  {
    name: 'Головна',
    href: '/',
  },

  {
    name: 'Послуги',
    href: '/services',
    submenu: [
      { name: 'Невідкладна хірургія', href: '/services/emergency' },
      { name: 'Традиційна хірургія', href: '/services/traditional' },
      { name: 'Пластична хірургія', href: '/services/plastic' },
      { name: 'Малоінвазивна хірургія', href: '/services/minimally-invasive' },
      { name: 'Хірургія вен', href: '/services/vein' },
      { name: 'Баріартрична хірургія', href: '/services/bariatric' },
      { name: 'Проктологія', href: '/services/proctology' },
      { name: 'Урологія', href: '/services/urology' },
      { name: 'Хірургія пухлин шкіри і слизових', href: '/services/tumor' },
      { name: 'Гнійносептична хірургія', href: '/services/purulent' },
    ],
  },
  {
    name: 'Команда',
    href: '/team',
  },
  {
    name: 'Про клініку',
    href: '/about',
    submenu: [
      { name: 'Відділення хірургічне', href: '/about/department' },
      { name: 'Операційна', href: '/about/operating-room' },
      { name: 'Обладнання', href: '/about/equipment' },
    ],
  },
  {
    name: 'Контакти',
    href: '/contacts',
  },
  {
    name: 'Блог',
    href: '/blog',
  },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
  const { theme, toggleTheme } = useTheme();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setActiveSubmenu(null)
  }

  const handleMenuItemClick = (item: { name: string; submenu?: { name: string; href: string }[] }) => {
    if (item.submenu) {
      setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
    } else {
      closeMobileMenu()
    }
  }

  return (
    <nav style={{
      backgroundColor: 'var(--navbar-bg)',
      color: 'var(--navbar-text)'
    }}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Десктопне меню */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <div className="flex items-center space-x-1">
                  <Link
                    href={item.href}
                    className="text-white hover:text-white/80 text-base font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <ChevronRightIcon className="h-4 w-4 text-white group-hover:text-white/80 rotate-90" />
                  )}
                </div>

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-base text-[#7491a3] hover:bg-gray-50"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Перемикач теми та бургер-меню справа */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition text-white"
              aria-label="Перемкнути тему"
            >
              {theme === 'dark' ? (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
              ) : (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.46 6.46L5.05 5.05m12.02 0l-1.41 1.41M6.46 17.54l-1.41 1.41"/></svg>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-white/80"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Бургер-меню (правий стовпчик) */}
        <div
          className={`fixed top-[64px] right-0 h-[calc(100vh-64px)] z-50 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ width: '340px', maxWidth: '100vw', backgroundColor: '#7491a3' }}
        >
          <div className="h-full overflow-y-auto relative flex flex-col">
            {/* Кнопка закриття бургер-меню справа вгорі */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 p-2 text-white hover:text-white/80 z-50"
              aria-label="Закрити меню"
            >
              <XMarkIcon className="h-7 w-7" />
            </button>
            <div className="divide-y divide-white/10 pt-12 px-4">
              {navigation.map((item) => (
                <div key={item.name} className="py-2">
                  <button
                    onClick={() => handleMenuItemClick(item)}
                    className="w-full px-0 py-2 flex items-center justify-between text-white hover:text-white/80"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                    {item.submenu && (
                      <ChevronRightIcon
                        className={`h-5 w-5 transition-transform ${
                          activeSubmenu === item.name ? 'rotate-90' : ''
                        }`}
                      />
                    )}
                  </button>
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="bg-white/10 py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={closeMobileMenu}
                          className="block px-8 py-2 text-sm text-white hover:text-white/80"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Телефон і кнопка консультації */}
              <div className="mt-6 flex flex-col items-center gap-3">
                <a href="tel:+380507575411" className="w-full flex items-center justify-center bg-white text-[#7491a3] font-semibold rounded-md py-2 px-3 hover:bg-white/90 transition">
                  +380507575411
                </a>
                <button
                  className="w-full bg-[#5e9b9b] text-white rounded-full py-2 font-semibold hover:bg-[#3b6e6e] transition"
                  onClick={() => setIsConsultationModalOpen(true)}
                >
                  Записатися на консультацію
                </button>
              </div>
            </div>
            {/* Модальне вікно консультації */}
            <BurgerConsultationModal open={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)} />
          </div>
        </div>
      </div>

  {/* ConsultationModal видалено */}
    </nav>
  )
}
