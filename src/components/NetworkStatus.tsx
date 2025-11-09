'use client';

import { useEffect, useState } from 'react';

export default function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [showOffline, setShowOffline] = useState(false);

  useEffect(() => {
    // Перевіряємо початковий статус
    setIsOnline(navigator.onLine);

    // Функції для обробки зміни статусу мережі
    const handleOnline = () => {
      setIsOnline(true);
      setShowOffline(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOffline(true);
    };

    // Додаємо слухачі подій
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Автоматично приховуємо повідомлення через 5 секунд
    if (!isOnline) {
      const timer = setTimeout(() => {
        setShowOffline(false);
      }, 5000);
      return () => clearTimeout(timer);
    }

    // Очищення слухачів при демонтажі компонента
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isOnline]);

  // Не показуємо нічого, якщо онлайн або не потрібно показувати
  if (isOnline || !showOffline) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white px-4 py-3 text-center font-medium shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <span>🌐</span>
        <span>Немає інтернет-з&apos;єднання</span>
        <button
          onClick={() => setShowOffline(false)}
          className="ml-4 text-white hover:text-red-200"
          aria-label="Закрити"
        >
          ×
        </button>
      </div>
    </div>
  );
}
