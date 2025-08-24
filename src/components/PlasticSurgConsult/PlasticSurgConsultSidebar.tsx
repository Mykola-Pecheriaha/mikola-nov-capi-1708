"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Пластика грудей", href: "/plastic-surg-consult/breast" },
  { label: "Збільшення грудей", href: "/plastic-surg-consult/breast-augmentation" },
  { label: "Зменшення грудей", href: "/plastic-surg-consult/breast-reduction" },
  { label: "Видалення або заміна імплантів", href: "/plastic-surg-consult/implant-removal" },
  { label: "Підтяжка грудей", href: "/plastic-surg-consult/breast-lift" },
  { label: "Гінекомастія", href: "/plastic-surg-consult/gynecomastia" },
  { label: "Пластика обличча", href: "/plastic-surg-consult/face" },
  { label: "Підтяжка обличчя", href: "/plastic-surg-consult/face-lift" },
  { label: "Блефаропластика", href: "/plastic-surg-consult/blepharoplasty" },
  { label: "Корекція вух", href: "/plastic-surg-consult/ears" },
  { label: "Видалення утворень в ділянці обличчя", href: "/plastic-surg-consult/face-tumors" },
  { label: "Пластика торса", href: "/plastic-surg-consult/torso" },
  { label: "Абдомінопластика", href: "/plastic-surg-consult/abdominoplasty" },
  { label: "Ліпосакція", href: "/plastic-surg-consult/liposuction" },
  { label: "Видалення шийного горба", href: "/plastic-surg-consult/neck-hump" },
  { label: "Збільшення сідниць", href: "/plastic-surg-consult/buttock-augmentation" },
  { label: "Вирівнювання гомілок", href: "/plastic-surg-consult/calf-correction" },
];

export default function PlasticSurgConsultSidebar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-24 max-h-[80vh] overflow-y-auto bg-white rounded-xl shadow-md p-4 w-full md:w-64">
      <ul className="space-y-2">
        {links.filter(link => link.href !== pathname).map(link => (
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
