"use client"
import { useState } from "react";

interface BurgerConsultationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BurgerConsultationModal({ open, onClose }: BurgerConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xs p-6 relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-[#5e9b9b] hover:text-[#3b6e6e] text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Закрити"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold text-center mb-2 text-[#5e9b9b]">Записатися на прийом</h2>
        <div className="border-b border-[#5e9b9b] mb-4"></div>
        <form className="space-y-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1" htmlFor="burger-consult-name">Ім&apos;я? *</label>
            <input
              id="burger-consult-name"
              type="text"
              placeholder="Ім'я"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#5e9b9b]"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1" htmlFor="burger-consult-phone">Телефон *</label>
            <input
              id="burger-consult-phone"
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#5e9b9b]"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1" htmlFor="burger-consult-email">Email</label>
            <input
              id="burger-consult-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#5e9b9b]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5e9b9b] text-white rounded-full py-2 mt-2 font-semibold hover:bg-[#3b6e6e] transition"
          >
            Записатися на прийом
          </button>
        </form>
      </div>
    </div>
  );
}
