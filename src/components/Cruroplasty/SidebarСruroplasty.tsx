'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const menu = [
  { label: 'Консультація пластичного хірурга', href: '/services/plastic-surg-consult' },
  { label: 'Абдомінопластика', href: '/services/abdomino-plasty' },
  { label: 'Ліпосакція', href: '/services/liposuction' },
  { label: 'Видалення шийного горба', href: '/services/cervical-hump-removal' },
  { label: 'Підтяжка обличча', href: '/services/face-lift' },
];
export default function SidebarСruroplasty() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:block md:w-1/5 flex-none mt-10">
      <div className="sticky top-30 max-h-[calc(100vh-7rem)] overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-blue-100 dark:border-blue-900">
        <ul className="space-y-3 text-base font-medium">
          {menu
            .filter(
              (item) =>
                !(
                  item.href === '/services/plastic-cruroplasty' &&
                  pathname.startsWith('/services/plastic-cruroplasty')
                ),
            )
            .map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-2 py-1 rounded transition-colors ${
                    pathname === item.href
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 font-bold'
                      : 'text-blue-900 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
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
