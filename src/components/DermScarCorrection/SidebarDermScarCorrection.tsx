'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [
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
  { label: 'Видалення утворень в ділянці обличчя', href: '/services/face-formations' },
  { label: 'Пластика торса', href: '/services/torso-plastic-surgery' },
  { label: 'Абдомінопластика', href: '/services/abdomino-plasty' },
  { label: 'Ліпосакція', href: '/services/liposuction' },
  { label: 'Видалення шийного горба', href: '/services/cervical-hump-removal' },
  { label: 'Збільшення сідниць', href: '/services/buttock-augmentation' },
  { label: 'Вирівнювання гомілок', href: '/services/plastic-cruroplasty' },
];
export default function SidebarDermScarCorrection() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-34 max-h-[80vh] overflow-y-auto bg-white rounded-xl shadow-md p-4 w-full md:w-64">
      <ul className="space-y-2">
        {links
          .filter((link) => link.href !== pathname)
          .map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-2 py-1 rounded hover:bg-blue-100 text-blue-700 font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
}
