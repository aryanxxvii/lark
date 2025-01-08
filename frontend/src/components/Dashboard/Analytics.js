import React, { useState, useEffect } from 'react';
import { getApiCalls } from '../../services/api';

function Analytics() {
  const [apiCalls, setApiCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadApiCalls();
  }, []);

  const loadApiCalls = async () => {
    try {
      const calls = await getApiCalls();
      setApiCalls(calls);
    } catch (error) {
      setError('Failed to load API calls');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    if (status >= 200 && status < 300) {
      return 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300';
    } else if (status >= 400 && status < 500) {
      return 'bg-amber-500/20 border-amber-500/30 text-amber-300';
    }
    return 'bg-red-500/20 border-red-500/30 text-red-300';
  };

  if (loading) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-white/70">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-gradient-radial from-accent-muted/10 via-transparent to-transparent -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-accent-muted/5 via-transparent to-transparent -z-10" />
        
        <main className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-12">
            <span className="gradient-text">Usage</span>
          </h1>

          {error && (
            <div className="bg-red-900/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl mb-8">
              {error}
            </div>
          )}

          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-surface/50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-white/70 uppercase tracking-wider">
                      Response Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {apiCalls.map((call) => (
                    <tr key={call.id} className="hover:bg-surface/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">
                        {new Date(call.timestamp).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(call.status_code)}`}>
                          {call.status_code}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">
                        {call.response_time.toFixed(2)}ms
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Analytics; 