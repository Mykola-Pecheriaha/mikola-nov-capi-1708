'use client';
import { useState } from 'react';

export default function TestAPIPage() {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    setResult('');

    try {
      const testData = {
        name: 'Test User',
        age: '30',
        gender: 'Чоловіча',
        phone: '123456789',
        height: '180',
        weight: '75',
        complaints: 'Test complaint',
        examinations: ['Огляд'],
        hasChronicDisease: false,
        chronicDiseases: '',
        takesMedication: false,
        medications: '',
        painLevel: 2,
        additionalComments: 'Test comment',
      };

      console.log('Testing API with data:', testData);

      const response = await fetch('/api/medical-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      const result = await response.json();
      console.log('API Response:', result);

      setResult(`
Status: ${response.status}
Success: ${result.success}
Message: ${result.message || result.error}
ID: ${result.id || 'N/A'}
Response: ${JSON.stringify(result, null, 2)}
      `);
    } catch (error) {
      console.error('Test error:', error);
      setResult(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }

    setLoading(false);
  };

  const testGET = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/medical-forms');
      const data = await response.json();
      console.log('GET Response:', data);
      setResult(`GET Response (${data.length} items):\n${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      console.error('GET error:', error);
      setResult(`GET Error: ${error instanceof Error ? error.message : String(error)}`);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">API Test Page</h1>

      <div className="space-y-4 mb-8">
        <button
          onClick={testAPI}
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test POST API'}
        </button>

        <button
          onClick={testGET}
          disabled={loading}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 disabled:opacity-50 ml-4"
        >
          {loading ? 'Testing...' : 'Test GET API'}
        </button>
      </div>

      {result && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Result:</h2>
          <pre className="whitespace-pre-wrap text-sm">{result}</pre>
        </div>
      )}

      <div className="mt-8 text-sm text-gray-600">
        <p>Environment: {process.env.NODE_ENV}</p>
        <p>Is Vercel: {process.env.VERCEL === '1' ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}
