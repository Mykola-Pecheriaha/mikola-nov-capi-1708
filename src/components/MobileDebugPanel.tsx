'use client';

import { useState, useEffect } from 'react';

export default function MobileDebugPanel() {
  const [isVisible, setIsVisible] = useState(false);
  const [debugInfo, setDebugInfo] = useState<Record<string, unknown>>({});
  useEffect(() => {
    const updateDebugInfo = () => {
      setDebugInfo({
        isMobile: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ),
        userAgent: navigator.userAgent,
        online: navigator.onLine,
        cookieEnabled: navigator.cookieEnabled,
        platform: navigator.platform,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
          devicePixelRatio: window.devicePixelRatio || 1,
        },
        connection: {
          effectiveType:
            (navigator as Navigator & { connection?: { effectiveType?: string } }).connection
              ?.effectiveType || 'unknown',
          downlink:
            (navigator as Navigator & { connection?: { downlink?: number } }).connection
              ?.downlink || 'unknown',
          rtt:
            (navigator as Navigator & { connection?: { rtt?: number } }).connection?.rtt ||
            'unknown',
        },
        url: window.location.href,
        timestamp: new Date().toLocaleString(),
      });
    };

    updateDebugInfo();
    const interval = setInterval(updateDebugInfo, 5000);

    return () => clearInterval(interval);
  }, []);

  const testAPI = async (endpoint: string) => {
    try {
      console.log(`🧪 Testing ${endpoint}...`);

      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

      const testData = {
        test: true,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        isMobile,
        viewport: debugInfo.viewport,
      };

      let res: Response;

      if (isMobile) {
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Mobile test timeout')), 15000),
        );

        const fetchPromise = fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'User-Agent': navigator.userAgent,
          },
          body: JSON.stringify(testData),
          credentials: 'same-origin',
        });

        res = await Promise.race([fetchPromise, timeoutPromise]);
      } else {
        res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(testData),
        });
      }

      const data = await res.json();
      console.log(`✅ ${endpoint} test result:`, data);
      alert(`✅ ${endpoint} test successful!\nStatus: ${res.status}\nSuccess: ${data.success}`);
    } catch (error) {
      console.error(`❌ ${endpoint} test failed:`, error);
      alert(
        `❌ ${endpoint} test failed:\n${error instanceof Error ? error.message : String(error)}`,
      );
    }
  };

  if (!debugInfo.isMobile) {
    return null; // Показувати тільки на мобільних пристроях
  }

  return (
    <>
      {/* Floating debug button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-red-500 text-white p-3 rounded-full shadow-lg"
        style={{ fontSize: '12px' }}
      >
        🐛
      </button>

      {/* Debug panel */}
      {isVisible && (
        <div className="fixed inset-0 z-[200] bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-4 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">📱 Mobile Debug</h3>
              <button
                onClick={() => setIsVisible(false)}
                className="text-2xl font-bold text-gray-500"
              >
                ×
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <strong>Device:</strong> {debugInfo.isMobile ? '📱 Mobile' : '💻 Desktop'}
              </div>
              <div>
                <strong>Online:</strong> {debugInfo.online ? '✅' : '❌'}
              </div>
              <div>
                <strong>Platform:</strong> {String(debugInfo.platform || 'unknown')}
              </div>
              <div>
                <strong>Viewport:</strong>{' '}
                {String((debugInfo.viewport as { width?: number; height?: number })?.width || 0)}×
                {String((debugInfo.viewport as { width?: number; height?: number })?.height || 0)}
              </div>
              <div>
                <strong>Connection:</strong>{' '}
                {String(
                  (debugInfo.connection as { effectiveType?: string })?.effectiveType || 'unknown',
                )}
              </div>
              <div>
                <strong>Cookies:</strong> {debugInfo.cookieEnabled ? '✅' : '❌'}
              </div>
              <div>
                <strong>Updated:</strong> {String(debugInfo.timestamp)}
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <h4 className="font-bold">API Tests:</h4>
              <button
                onClick={() => testAPI('/api/debug')}
                className="w-full bg-blue-500 text-white py-2 px-3 rounded text-sm"
              >
                Test Debug API
              </button>
              <button
                onClick={() => testAPI('/api/consultations')}
                className="w-full bg-green-500 text-white py-2 px-3 rounded text-sm"
              >
                Test Consultation API
              </button>
              <button
                onClick={() => testAPI('/api/medical-forms')}
                className="w-full bg-purple-500 text-white py-2 px-3 rounded text-sm"
              >
                Test Medical Form API
              </button>
            </div>

            <div className="mt-4 text-xs bg-gray-100 p-2 rounded">
              <strong>User Agent:</strong>
              <br />
              {String(debugInfo.userAgent)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
