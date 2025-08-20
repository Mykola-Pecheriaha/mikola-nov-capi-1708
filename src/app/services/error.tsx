"use client"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  console.error("Services page error:", error) // Використовуємо error для логування

  return (
    <div className="flex flex-col items-center justify-center h-64 text-red-600">
      <h2 className="text-2xl font-bold mb-4">Щось пішло не так!</h2>
      <p className="text-gray-600 mb-4">Виникла помилка при завантаженні сторінки послуг.</p>
      <button onClick={() => reset()} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
        Спробувати знову
      </button>
    </div>
  )
}
