'use client';
import { useState } from 'react';

interface BurgerConsultationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BurgerConsultationModal({ open, onClose }: BurgerConsultationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

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
        <h2 className="text-xl font-semibold text-center mb-2 text-[#5e9b9b]">
          Записатися на прийом
        </h2>
        <div className="border-b border-[#5e9b9b] mb-4"></div>
        <form
          className="space-y-3"
          onSubmit={async (e) => {
            e.preventDefault();

            // Prevent double submission
            if (loading) return;

            console.log('🔥 MOBILE FORM SUBMISSION STARTED');
            console.log('📱 User agent:', navigator.userAgent);
            console.log('🌐 Online status:', navigator.onLine);
            console.log('📝 Form data:', {
              name: name.trim(),
              phone: phone.trim(),
              comment: comment.trim(),
            });

            if (!name || !phone) {
              console.log('❌ Validation failed: missing required fields');
              setMessage("❌ Будь ласка, заповніть обов'язкові поля");
              return;
            }

            // Check network connectivity
            if (!navigator.onLine) {
              console.log('❌ No internet connection');
              setMessage("❌ Немає з'єднання з інтернетом");
              return;
            }

            setLoading(true);
            setMessage(null);

            try {
              const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent,
              );

              console.log('🚀 Sending consultation request to API...');
              console.log('🌐 Current URL:', window.location.href);
              console.log('� Is Mobile:', isMobile);
              console.log('�📡 API endpoint:', '/api/consultations');

              const requestData = {
                name: name.trim(),
                phone: phone.trim(),
                comment: comment.trim(),
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                isMobile,
                viewport: {
                  width: window.innerWidth,
                  height: window.innerHeight,
                },
                connection: {
                  online: navigator.onLine,
                  effectiveType:
                    (navigator as Navigator & { connection?: { effectiveType?: string } })
                      .connection?.effectiveType || 'unknown',
                },
              };

              let res: Response;

              if (isMobile) {
                console.log('📱 Using mobile-optimized request...');

                // Мобільна версія з більшим таймаутом і без AbortController
                const timeoutPromise = new Promise<never>((_, reject) =>
                  setTimeout(() => reject(new Error('Mobile consultation timeout')), 20000),
                );

                const fetchPromise = fetch('/api/consultations', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Cache-Control': 'no-cache',
                    'User-Agent': navigator.userAgent,
                  },
                  body: JSON.stringify(requestData),
                  credentials: 'same-origin',
                });

                res = await Promise.race([fetchPromise, timeoutPromise]);
              } else {
                console.log('💻 Using desktop request...');

                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 10000);

                res = await fetch('/api/consultations', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Cache-Control': 'no-cache',
                  },
                  body: JSON.stringify(requestData),
                  signal: controller.signal,
                });

                clearTimeout(timeoutId);
              }

              console.log('📡 Response received:', {
                status: res.status,
                statusText: res.statusText,
                ok: res.ok,
                headers: Object.fromEntries(res.headers.entries()),
              });

              if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status} ${res.statusText}`);
              }

              const data = await res.json();
              console.log('✅ Response data:', data);

              if (data.success) {
                console.log('🎉 SUBMISSION SUCCESSFUL!');
                setMessage('✅ Запис успішно надіслано! Дякуємо!');
                setName('');
                setPhone('');
                setComment('');
                setTimeout(() => {
                  setMessage(null);
                  onClose();
                }, 2500); // Longer delay for mobile
              } else {
                console.log('❌ Server returned error:', data.error);
                setMessage(`❌ Помилка: ${data.error || 'Невідома помилка'}`);
              }
            } catch (error) {
              const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent,
              );

              console.error('💥 Consultation submission error:', error);
              console.error('📱 Mobile device:', isMobile);

              if (error instanceof Error && error.name === 'AbortError') {
                setMessage('⏰ Час очікування минув. Спробуйте ще раз.');
              } else if (
                error instanceof Error &&
                error.message.includes('Mobile consultation timeout')
              ) {
                setMessage(
                  '📱 Мобільний таймаут. Спробуйте:\n• Перевірити Wi-Fi\n• Оновити сторінку',
                );
              } else if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
                if (isMobile) {
                  setMessage(
                    '📱 Мобільна мережа недоступна.\nСпробуйте Wi-Fi або оновіть сторінку.',
                  );
                } else {
                  setMessage("🌐 Проблема з мережею. Перевірте з'єднання.");
                }
              } else {
                const errorMsg = error instanceof Error ? error.message : 'Невідома помилка';
                if (isMobile) {
                  setMessage(`📱 Мобільна помилка: ${errorMsg}`);
                } else {
                  setMessage(`❌ Помилка: ${errorMsg}`);
                }
              }
            } finally {
              setLoading(false);
            }
          }}
        >
          <div>
            <label className="block text-sm text-gray-600 mb-1" htmlFor="burger-consult-name">
              Ім&apos;я? *
            </label>
            <input
              id="burger-consult-name"
              type="text"
              placeholder="Ім'я"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#5e9b9b]"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1" htmlFor="burger-consult-phone">
              Телефон *
            </label>
            <input
              id="burger-consult-phone"
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#5e9b9b]"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1" htmlFor="burger-consult-comment">
              Коментар
            </label>
            <input
              id="burger-consult-comment"
              type="text"
              placeholder="Коментар або email"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#5e9b9b]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5e9b9b] text-white rounded-full py-2 mt-2 font-semibold hover:bg-[#3b6e6e] transition"
            disabled={loading}
          >
            {loading ? 'Відправка...' : 'Записатися на прийом'}
          </button>
          {message && (
            <div
              className={`mt-3 text-center font-medium text-sm px-2 py-2 rounded-lg ${
                message.includes('успішно') || message.includes('✅')
                  ? 'text-green-700 bg-green-50 border border-green-200'
                  : 'text-red-700 bg-red-50 border border-red-200'
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
