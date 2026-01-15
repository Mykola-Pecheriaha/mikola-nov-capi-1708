'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [
  {
    label: 'Видалення доброякісних новоутворень (атероми, ліпоми, фіброми, гігроми)',
    href: '/services/face-formations',
  },
  {
    label: 'Пластика дефектів шкіри та рпісляопераційних зубців',
    href: '/services/derm-correction',
  },
  {
    label: 'Лікування гнійно-запальнихзахворювань шкіри і м`ягких тканей',
    href: '/services/ambulatory-infections',
  },
  {
    label: 'Врослий ніготь і видалення нігтьової пластини',
    href: '/services/ambulatory-ingrown-nail',
  },
];
export default function SidebarNailCorrection() {
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
