'use client';

import { useState } from 'react';

interface TestResult {
  timestamp: string;
  endpoint: string;
  method: string;
  status?: number;
  ok?: boolean;
  result?: unknown;
  error?: string;
  environment: string;
}

export default function TestPage() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(false);

  const testAPI = async (endpoint: string, method: string = 'GET', data?: unknown) => {
    setLoading(true);
    const timestamp = new Date().toISOString();

    try {
      console.log(`🧪 Testing ${method} ${endpoint} at ${timestamp}`);

      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      if (data) {
        options.body = JSON.stringify(data);
      }

      const response = await fetch(endpoint, options);
      const result = await response.json();

      const testResult = {
        timestamp,
        endpoint,
        method,
        status: response.status,
        ok: response.ok,
        result,
        environment: window.location.hostname.includes('vercel') ? 'vercel' : 'local',
      };

      console.log('🧪 Test result:', testResult);
      setResults((prev) => [testResult, ...prev]);
    } catch (error) {
      const testResult = {
        timestamp,
        endpoint,
        method,
        error: error instanceof Error ? error.message : String(error),
        environment: window.location.hostname.includes('vercel') ? 'vercel' : 'local',
      };

      console.error('🧪 Test error:', testResult);
      setResults((prev) => [testResult, ...prev]);
    }

    setLoading(false);
  };

  const getTestData = () => ({
    consultation: {
      name: 'Test User',
      phone: '123456789',
      comment: 'Test comment',
      timestamp: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      isMobile:
        typeof navigator !== 'undefined'
          ? /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
          : false,
    },
    medicalForm: {
      name: 'Test Patient',
      age: '30',
      gender: 'Чоловіча',
      phone: '987654321',
      height: '180',
      weight: '75',
      complaints: 'Test complaint',
      examinations: ['Огляд'],
      hasChronicDisease: false,
      chronicDiseases: '',
      takesMedication: false,
      medications: '',
      painLevel: 1,
      additionalComments: 'Test comment',
      bmi: 23.1,
      timestamp: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      isMobile:
        typeof navigator !== 'undefined'
          ? /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
          : false,
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">🧪 API Test Page</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Environment Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Hostname:</strong>{' '}
              {typeof window !== 'undefined' ? window.location.hostname : 'unknown'}
            </div>
            <div>
              <strong>URL:</strong>{' '}
              {typeof window !== 'undefined' ? window.location.href : 'unknown'}
            </div>
            <div>
              <strong>User Agent:</strong>{' '}
              {typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'}
            </div>
            <div>
              <strong>Online:</strong>{' '}
              {typeof navigator !== 'undefined' && navigator.onLine ? '✅' : '❌'}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">API Tests</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <button
              onClick={() => testAPI('/api/consultations')}
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              GET Consultations
            </button>

            <button
              onClick={() => testAPI('/api/consultations', 'POST', getTestData().consultation)}
              disabled={loading}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
            >
              POST Consultation
            </button>

            <button
              onClick={() => testAPI('/api/medical-forms')}
              disabled={loading}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50"
            >
              GET Medical Forms
            </button>

            <button
              onClick={() => testAPI('/api/medical-forms', 'POST', getTestData().medicalForm)}
              disabled={loading}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
            >
              POST Medical Form
            </button>

            <button
              onClick={() => testAPI('/api/debug')}
              disabled={loading}
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 disabled:opacity-50"
            >
              Debug Environment
            </button>

            <button
              onClick={() =>
                testAPI('/api/debug', 'POST', {
                  test: 'debug data',
                  timestamp: new Date().toISOString(),
                })
              }
              disabled={loading}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
            >
              Debug POST
            </button>

            <button
              onClick={() => setResults([])}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Clear Results
            </button>
          </div>

          {loading && (
            <div className="text-center py-4">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <p className="mt-2">Testing API...</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Test Results ({results.length})</h2>

          {results.length === 0 ? (
            <p className="text-gray-500">No test results yet. Click buttons above to test APIs.</p>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 ${
                    result.error
                      ? 'border-red-300 bg-red-50'
                      : result.ok
                        ? 'border-green-300 bg-green-50'
                        : 'border-yellow-300 bg-yellow-50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-sm">
                      {result.method} {result.endpoint}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(result.timestamp).toLocaleTimeString()}
                    </span>
                  </div>

                  {result.error ? (
                    <div className="text-red-600">
                      <strong>Error:</strong> {result.error}
                    </div>
                  ) : (
                    <div>
                      <div className="mb-2">
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-mono ${
                            result.ok ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {result.status}
                        </span>
                        <span className="ml-2 text-xs text-gray-600">{result.environment}</span>
                      </div>
                      <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                        {JSON.stringify(result.result, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
