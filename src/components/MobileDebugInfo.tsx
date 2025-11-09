'use client';

import { useEffect, useState } from 'react';

interface DebugInfo {
  userAgent: string;
  isMobile: boolean;
  screenWidth: number;
  screenHeight: number;
  windowWidth: number;
  windowHeight: number;
  devicePixelRatio: number;
  online: boolean;
  touchSupport: boolean;
  cookieEnabled: boolean;
  language: string;
  platform: string;
  timestamp: string;
}

export default function MobileDebugInfo() {
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null);
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    // Збираємо інформацію про пристрій
    const info = {
      userAgent: navigator.userAgent,
      isMobile: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ),
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio,
      online: navigator.onLine,
      touchSupport: 'ontouchstart' in window,
      cookieEnabled: navigator.cookieEnabled,
      language: navigator.language,
      platform: navigator.platform,
      timestamp: new Date().toISOString(),
    };

    setDebugInfo(info);

    // Автоматично показуємо debug на мобільних пристроях
    if (info.isMobile) {
      console.log('📱 Mobile device detected:', info);
    }
  }, []);

  // Показуємо debug info тільки в development режимі
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShowDebug(!showDebug)}
        className="bg-blue-500 text-white px-3 py-2 rounded-full text-xs font-mono shadow-lg"
        title="Debug Info"
      >
        🐛
      </button>

      {showDebug && debugInfo && (
        <div className="absolute bottom-12 right-0 bg-black text-green-400 p-4 rounded-lg max-w-sm text-xs font-mono shadow-xl max-h-96 overflow-y-auto">
          <div className="mb-2 text-yellow-400 font-bold">📱 Device Debug Info</div>
          {Object.entries(debugInfo).map(([key, value]) => (
            <div key={key} className="mb-1">
              <span className="text-blue-400">{key}:</span>{' '}
              <span className="text-white break-all">
                {typeof value === 'boolean' ? (value ? '✅' : '❌') : String(value)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
