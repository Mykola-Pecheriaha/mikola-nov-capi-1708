"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const menu = [
  { label: "Консультація хірурга", href: "/services/general-surg-consult" },
  { label: "Герніопластика", href: "/services/general-hernia" },
  { label: "Холецистектомія", href: "/services/general-cholecystectomy" },
  { label: "Грижесічення з абдомінопластикою ", href: "/services/general-hernia-abdominoplasty" },
  { label: "Пластика білої лінії живота", href: "/services/general-white-line" },
];
export default function SidebarProctoConsult() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:block md:w-1/5 flex-none mt-10">
       <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto bg-white rounded-xl shadow-md p-4 border border-blue-100">
        <ul className="space-y-3 text-base font-medium">
          {menu
            .filter(item => !(item.href === "/services/general-surg-consult" && pathname.startsWith("/services/general-surg-consult")))
            .map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-2 py-1 rounded transition-colors ${pathname === item.href ? "bg-blue-100 text-blue-900 font-bold" : "text-blue-900 hover:text-blue-600"}`}
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
