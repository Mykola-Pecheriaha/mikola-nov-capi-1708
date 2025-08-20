import type { ReactNode } from "react";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-4 border-b bg-white shadow-sm">
        <h2 className="text-xl font-semibold">Сервіси</h2>
      </header>
      <section className="p-6">{children}</section>
    </div>
  );
}
