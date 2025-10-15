"use client"
import { useState } from "react";

interface BurgerConsultationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BurgerConsultationModal({ open, onClose }: BurgerConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string|null>(null);

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
        <form className="space-y-3" onSubmit={async e => {
          e.preventDefault();
          if (!name || !phone) return;
          setLoading(true);
          setMessage(null);
          try {
            const res = await fetch("/api/consultations", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, phone, comment })
            });
            const data = await res.json();
            if (data.success) {
              setMessage("Запис успішно надіслано!");
              setName("");
              setPhone("");
              setComment("");
              setTimeout(() => { setMessage(null); onClose(); }, 1200);
            } else {
              setMessage("Помилка при надсиланні запису");
            }
          } catch {
            setMessage("Помилка при надсиланні запису");
          }
          setLoading(false);
        }}>
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
            <label className="block text-sm text-gray-600 mb-1" htmlFor="burger-consult-comment">Коментар</label>
            <input
              id="burger-consult-comment"
              type="text"
              placeholder="Коментар або email"
              value={comment}
              onChange={e => setComment(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#5e9b9b]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5e9b9b] text-white rounded-full py-2 mt-2 font-semibold hover:bg-[#3b6e6e] transition"
            disabled={loading}
          >
            {loading ? "Відправка..." : "Записатися на прийом"}
          </button>
          {message && (
            <div className={`mt-2 text-center text-sm ${message.includes("успішно") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
