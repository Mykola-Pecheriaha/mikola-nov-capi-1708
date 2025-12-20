'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useTheme } from '@/context/ThemeContext';
import { Bars3Icon, XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import BurgerConsultationModal from './BurgerConsultationModal';

interface SubSubMenuItem {
  name: string;
  href: string;
}

interface CategoryGroup {
  category: string;
  href?: string;
  items: SubSubMenuItem[];
}

interface SubMenuItem {
  name: string;
  href: string;
  submenu?: CategoryGroup[];
}

interface MenuItem {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
}

const navigation: MenuItem[] = [
  {
    name: 'Головна',
    href: '/',
  },
  {
    name: 'Послуги',
    href: '/services',
    submenu: [
      {
        name: 'Пластична хірургія',
        href: '/services/plastic',
        submenu: [
          {
            category: 'Пластика грудей',
            href: '/services/breast-plastic-surgery',
            items: [
              { name: 'Збільшення грудей', href: '/services/breast-augmentation' },
              {
                name: 'Підтяжка грудей і корекція соска',
                href: '/services/mastopexy-nipple-correction',
              },
              {
                name: 'Видалення або заміна імплантів грудних',
                href: '/services/removal-replacement-implants',
              },
              { name: 'Гінекомастія', href: '/services/gynecomastia' },
            ],
          },
          {
            category: 'Пластика обличчя',
            href: '/services/face-plastic-surgery',
            items: [
              { name: 'Підтяжка обличчя', href: '/services/face-lift' },
              { name: 'Блефаропластика', href: '/services/blefaroplastica' },
              { name: 'Пластика зовнішнього вуха', href: '/services/ottoplastic' },
              { name: 'Видалення утворень в ділянці обличчя', href: '/services/face-formations' },
            ],
          },
          {
            category: 'Пластика торса',
            href: '/services/torso-plastic-surgery',
            items: [
              { name: 'Абдомінопластика', href: '/services/abdomino-plasty' },
              { name: 'Ліпосакція', href: '/services/liposuction' },
              { name: 'Видалення шийного горба', href: '/services/cervical-hump-removal' },
              { name: 'Збільшення сідниць', href: '/services/buttock-augmentation' },
              { name: 'Вирівнювання гомілок', href: '/services/plastic-cruroplasty' },
            ],
          },
        ],
      },
      {
        name: 'Хірургія вен - флебологія',
        href: '/services/phlebology-surgery',
        submenu: [
          {
            category: '',
            items: [
              { name: 'Консультація хірурга', href: '/services/phlebology' },
              { name: 'Лазерне видалення вен', href: '/services/phlebology-laser' },
              { name: 'Мініфлебектомія', href: '/services/phlebology-miniphlebectomy' },
              { name: 'Склеротерапія', href: '/services/phlebology-sclerotherapy' },
            ],
          },
        ],
      },
      {
        name: 'Проктологія',
        href: '/services/proctology-surgery',
        submenu: [
          {
            category: '',
            items: [
              { name: 'Консультація проктолога', href: '/services/proctolog-consultation' },
              { name: 'Лікування геморою', href: '/services/proctolog-hemorrhoids' },
              { name: 'Лікування анальної тріщини', href: '/services/proctolog-fissure' },
              { name: 'Лікування парапроктиту', href: '/services/pararect-fistul-excision' },
              { name: 'Висічення кісти куприка', href: '/services/proctology-coccyx-cyst' },
            ],
          },
        ],
      },
      {
        name: 'Загальна хірургія',
        href: '/services/general-surgery',
        submenu: [
          {
            category: '',
            items: [
              { name: 'Консультація хірурга', href: '/services/general-surg-consult' },
              { name: 'Герніопластика (видалення гриж живота)', href: '/services/general-hernia' },
              { name: 'Холецистектомія', href: '/services/general-cholecystectomy' },
              { name: 'Грижесічення з абдомінопластикою', href: '/services/hernia-abdominoplasty' },
              { name: 'Пластика білої лінії живота', href: '/services/surgery-abdomen-line' },
            ],
          },
        ],
      },
      {
        name: 'Хірургія кисті',
        href: '/services/hand-surgery-main',
        submenu: [
          {
            category: '',
            items: [
              { name: 'Консультація хірурга', href: '/services/hand-surgeon-consultation' },
              { name: 'Лікування контрактури Дюпюітрена', href: '/services/hand-dupyutren' },
              { name: 'Лікування карпального синдрому', href: '/services/carpal-syndrome' },
              {
                name: 'Лікування тендовагинітів та видалення утворень на кисті (гангліом)',
                href: '/services/hand-surgery',
              },
              { name: 'Лікування гнійних уражень кисті', href: '/services/hand-infection' },
            ],
          },
        ],
      },
      {
        name: 'Амбулаторна хірургія',
        href: '/services/ambulatory-surgery',
        submenu: [
          {
            category: '',
            items: [
              {
                name: 'Видалення новоутворень шкіри (бородавки, родимки, папіломи)',
                href: '/services/ambulatory-skin-tumors',
              },
              {
                name: 'Видалення доброякісних новоутворень (атероми, ліпоми, фіброми, гігроми)',
                href: '/services/ambulatory-benign-tumors',
              },
              {
                name: "Лікування гнійно-запальних захворювань шкіри і м'яких тканин",
                href: '/services/ambulatory-infections',
              },
              {
                name: 'Пластика післяопераційних рубців',
                href: '/services/ambulatory-scar-plasty',
              },
              {
                name: 'Врослий ніготь і видалення нігтьової пластини',
                href: '/services/ambulatory-ingrown-nail',
              },
            ],
          },
        ],
      },
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
  {
    name: 'Медична форма',
    href: '/medical-form',
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
    setActiveCategory(null);
  };

  const handleMenuItemClick = (item: MenuItem) => {
    if (item.submenu) {
      setActiveSubmenu(activeSubmenu === item.name ? null : item.name);
    } else {
      closeMobileMenu();
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <nav
      style={{
        backgroundColor: 'var(--navbar-bg)',
        color: 'var(--navbar-text)',
      }}
    >
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
                  <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name} className="relative group/sub">
                          {/* Основне меню */}
                          <div className="flex items-center justify-between px-4 py-2 text-base text-[#7491a3] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                            <Link href={subItem.href} className="flex-1">
                              {subItem.name}
                            </Link>
                            {subItem.submenu && (
                              <ChevronRightIcon className="h-4 w-4 text-[#7491a3] dark:text-gray-300" />
                            )}
                          </div>

                          {/* Субменю (відкривається справа) */}
                          {subItem.submenu && (
                            <div className="absolute left-full top-0 ml-1 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50">
                              <div className="py-2 max-h-[80vh] overflow-y-auto">
                                {subItem.submenu.map((categoryGroup, idx) => (
                                  <div key={idx} className="mb-2">
                                    {categoryGroup.category && (
                                      <div className="px-4 py-2 text-sm font-semibold text-[#7491a3] dark:text-blue-400 bg-gray-50 dark:bg-gray-700/50">
                                        {categoryGroup.href ? (
                                          <Link
                                            href={categoryGroup.href}
                                            className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors block"
                                          >
                                            {categoryGroup.category}
                                          </Link>
                                        ) : (
                                          <span>{categoryGroup.category}</span>
                                        )}
                                      </div>
                                    )}
                                    <div className="py-1">
                                      {categoryGroup.items.map((subSubItem) => (
                                        <Link
                                          key={subSubItem.name}
                                          href={subSubItem.href}
                                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                                        >
                                          {subSubItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Медична форма, перемикач теми та бургер-меню справа */}
          <div className="flex items-center gap-3">
            {/* (CTA переміщено у Footer) */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition text-white"
              aria-label="Перемкнути тему"
            >
              {theme === 'dark' ? (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              ) : (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="5" strokeWidth={2} />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.46 6.46L5.05 5.05m12.02 0l-1.41 1.41M6.46 17.54l-1.41 1.41"
                  />
                </svg>
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
                        <div key={subItem.name}>
                          {/* Основний пункт */}
                          <button
                            onClick={() => handleCategoryClick(subItem.name)}
                            className="w-full px-8 py-2 flex items-center justify-between text-sm text-white hover:text-white/80"
                          >
                            <span>{subItem.name}</span>
                            {subItem.submenu && (
                              <ChevronRightIcon
                                className={`h-4 w-4 transition-transform ${
                                  activeCategory === subItem.name ? 'rotate-90' : ''
                                }`}
                              />
                            )}
                          </button>

                          {/* Субменю з категоріями */}
                          {subItem.submenu && activeCategory === subItem.name && (
                            <div className="bg-white/5 py-1">
                              {subItem.submenu.map((categoryGroup, idx) => (
                                <div key={idx} className="mb-2">
                                  {categoryGroup.category && (
                                    <div className="px-10 py-1 text-xs font-semibold text-white/70">
                                      {categoryGroup.href ? (
                                        <Link
                                          href={categoryGroup.href}
                                          onClick={closeMobileMenu}
                                          className="hover:text-white transition-colors block"
                                        >
                                          {categoryGroup.category}
                                        </Link>
                                      ) : (
                                        <span>{categoryGroup.category}</span>
                                      )}
                                    </div>
                                  )}
                                  {categoryGroup.items.map((subSubItem) => (
                                    <Link
                                      key={subSubItem.name}
                                      href={subSubItem.href}
                                      onClick={closeMobileMenu}
                                      className="block px-12 py-1.5 text-xs text-white/90 hover:text-white"
                                    >
                                      {subSubItem.name}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Телефон і кнопки дій */}
              <div className="mt-6 flex flex-col items-center gap-3">
                <a
                  href="tel:+380507575411"
                  className="w-full flex items-center justify-center bg-white text-[#7491a3] font-semibold rounded-md py-2 px-3 hover:bg-white/90 transition"
                >
                  +380507575411
                </a>
                <Link
                  href="/medical-form"
                  onClick={closeMobileMenu}
                  className="w-full bg-green-600 text-white rounded-full py-2 font-semibold hover:bg-green-700 transition text-center"
                >
                  📋 Медична форма
                </Link>
                <button
                  className="w-full bg-[#5e9b9b] text-white rounded-full py-2 font-semibold hover:bg-[#3b6e6e] transition"
                  onClick={() => setIsConsultationModalOpen(true)}
                >
                  Записатися на консультацію
                </button>
              </div>
            </div>
            {/* Модальне вікно консультації */}
            <BurgerConsultationModal
              open={isConsultationModalOpen}
              onClose={() => setIsConsultationModalOpen(false)}
            />
          </div>
        </div>
      </div>

      {/* ConsultationModal видалено */}
    </nav>
  );
}
