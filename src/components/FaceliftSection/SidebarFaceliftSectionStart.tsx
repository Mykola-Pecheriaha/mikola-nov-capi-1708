'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const menu = [
  { label: 'Консультація пластичного хірурга', href: '/services/plastic-surg-consult' },
  { label: 'Блефаропластика', href: '/services/blefaroplastica' },
  { label: 'Корекція вух', href: '/services/ottoplastic' },
];
export default function SidebarFaceliftSectionStart() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:block md:w-1/5 flex-none mt-10">
      <div className="sticky top-30 max-h-[calc(100vh-7rem)] overflow-y-auto bg-white rounded-xl shadow-md p-4 border border-blue-100">
        <ul className="space-y-3 text-base font-medium">
          {menu
            .filter(
              (item) => !(item.href === '/services/face-lift' && pathname.startsWith('/face-lift')),
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
