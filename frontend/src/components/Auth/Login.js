import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.detail || 'Failed to login');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-gradient-radial from-accent-muted/10 via-transparent to-transparent -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-accent-muted/5 via-transparent to-transparent -z-10" />
        
        <div className="card max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-3xl font-bold">
              <span className="gradient-text">Sign in to Lark</span>
            </h2>
          </div>
          
          {error && (
            <div className="bg-red-900/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="text-sm font-medium text-white/70">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-medium text-white/70">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="mt-1 input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button type="submit" className="w-full btn-primary">
                Sign in
              </button>
            </div>

            <div className="text-center text-sm">
              <span className="text-white/70">Don't have an account? </span>
              <Link to="/register" className="text-accent hover:text-accent-hover">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login; 