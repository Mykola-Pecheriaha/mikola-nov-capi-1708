"use client";
import React, { useEffect, useState } from "react";

interface Consultation {
  name: string;
  phone: string;
  comment?: string;
  date?: string;
  createdAt?: string;
}

export default function ConsultationsAdminPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/consultations")
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        setConsultations(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setConsultations([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Записи на консультацію</h1>
      {loading ? (
        <p className="text-gray-500">Завантаження...</p>
      ) : consultations.length === 0 ? (
        <p className="text-gray-500">Записів поки немає.</p>
      ) : (
        <table className="min-w-full bg-white border rounded shadow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Ім&apos;я</th>
              <th className="py-2 px-4 border-b">Телефон</th>
              <th className="py-2 px-4 border-b">Коментар</th>
              <th className="py-2 px-4 border-b">Дата</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((c, idx) => (
              <tr key={idx}>
                <td className="py-2 px-4 border-b">{c.name}</td>
                <td className="py-2 px-4 border-b">{c.phone}</td>
                <td className="py-2 px-4 border-b">{c.comment || "-"}</td>
                <td className="py-2 px-4 border-b">{
                  c.date
                    ? new Date(c.date).toLocaleString()
                    : c.createdAt
                      ? new Date(c.createdAt).toLocaleString()
                      : "-"
                }</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
