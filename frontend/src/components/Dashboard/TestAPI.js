import React, { useState } from 'react';
import { testLarkAPI } from '../../services/api';

const TestAPI = () => {
  const [apiKey, setApiKey] = useState('');
  const [audioData, setAudioData] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!apiKey || !audioData) {
      setError('Please provide both API key and audio data');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await testLarkAPI(apiKey, audioData);
      setResult(response);
    } catch (err) {
      setError(err.response?.data?.detail || 'An error occurred while testing the API');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#121218] rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Test Lark API</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-300 mb-1">
            API Key
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-4 py-2 bg-[#1E1E2D] border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your API key"
          />
        </div>

        <div>
          <label htmlFor="audioData" className="block text-sm font-medium text-gray-300 mb-1">
            Base64 Audio Data
          </label>
          <textarea
            id="audioData"
            value={audioData}
            onChange={(e) => setAudioData(e.target.value)}
            rows={8}
            className="w-full px-4 py-2 bg-[#1E1E2D] border border-gray-700 rounded-md text-white font-mono text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Paste your base64 encoded audio data here..."
          />
          <p className="mt-1 text-xs text-gray-400">
            Convert your audio file to base64 and paste the result here
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-900/30 border border-red-700 text-red-200 rounded-md">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-2 rounded-md font-medium ${
            loading
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          } text-white transition-colors`}
        >
          {loading ? 'Testing...' : 'Test API'}
        </button>
      </form>

      {result && (
        <div className="mt-8 p-4 bg-[#1E1E2D] rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-2">API Response</h3>
          <pre className="bg-[#0A0A0B] p-4 rounded overflow-auto text-sm text-gray-300">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TestAPI;
