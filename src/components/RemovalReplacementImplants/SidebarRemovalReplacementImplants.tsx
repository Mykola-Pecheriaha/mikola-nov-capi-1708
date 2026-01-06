'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const menu = [
  { label: 'Пластика грудей', href: '/plastic-surg-consult/breast' },
  { label: 'Збільшення грудей', href: '/services/breast-augmentation' },
  {
    label: 'Видалення або заміна імплантів',
    href: '/services/removal-replacement-implants',
  },
  {
    label: 'Підтяжка грудей та корекція соска.',
    href: '/services/mastopexy-nipple-correction',
  },
  { label: 'Гінекомастія', href: '/services/gynecomastia' },
  { label: 'Пластика обличча', href: '/services/face' },
  { label: 'Підтяжка обличчя', href: '/services/face-lift' },
  { label: 'Блефаропластика', href: '/services/blefaroplastica' },
  { label: 'Пластика зовнішнього вуха', href: '/services/ottoplastic' },
  { label: 'Видалення утворень в ділянці обличчя', href: '/services/face-tumors' },
  { label: 'Пластика торса', href: '/services/torso-plastic-surgery' },
  { label: 'Абдомінопластика', href: '/services/abdomino-plasty' },
  { label: 'Ліпосакція', href: '/services/liposuction' },
  { label: 'Видалення шийного горба', href: '/services/cervical-hump-removal' },
  { label: 'Збільшення сідниць', href: '/services/buttock-augmentation' },
  { label: 'Вирівнювання гомілок', href: '/services/plastic-cruroplasty' },
];

export default function SidebarRemovalReplacementImplants() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:block md:w-1/5 flex-none mt-10">
      <div className="sticky top-34 max-h-[calc(100vh-7rem)] overflow-y-auto bg-white rounded-xl shadow-md p-4 border border-blue-100">
        <ul className="space-y-3 text-base font-medium">
          {menu
            .filter(
              (item) =>
                !(
                  item.href === '/services/removal-replacement-implants' &&
                  pathname.startsWith('/services/removal-replacement-implants')
                ),
            )
            .map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-2 py-1 rounded transition-colors ${pathname === item.href ? 'bg-blue-100 text-blue-900 font-bold' : 'text-blue-900 hover:text-blue-600'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
}
