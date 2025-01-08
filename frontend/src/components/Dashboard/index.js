import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-gradient-radial from-accent-muted/10 via-transparent to-transparent -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-accent-muted/5 via-transparent to-transparent -z-10" />
        
        <main className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-12">
            <span className="gradient-text">Dashboard</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/dashboard/api-keys" className="feature-card">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">API Keys</h3>
              <p className="text-white/70">Manage your API keys and create new ones</p>
            </Link>

            <Link to="/dashboard/analytics" className="feature-card">
              <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Usage</h3>
              <p className="text-white/70">View your API usage statistics</p>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard; 