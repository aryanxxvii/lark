import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth';

function Navbar({ showAuthButtons = false }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 border-b border-border backdrop-blur-md bg-background/30 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to={isAuthenticated ? "/dashboard" : "/"} className="text-md font-bold gradient-text">
              Lark API
            </Link>
            {isAuthenticated && (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                  <Link to="/dashboard/api-keys" className="nav-link">
                    API Keys
                  </Link>
                  <Link to="/dashboard/analytics" className="nav-link">
                    Usage
                  </Link>
                  <Link to="/dashboard/test-api" className="nav-link">
                    Test API
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-6">
            {!isAuthenticated && showAuthButtons ? (
              <>
                <Link to="/login" className="text-white/70 hover:text-white transition-colors">
                  Sign In
                </Link>
                <Link to="/register" className="btn-primary">
                  Get Started
                </Link>
              </>
            ) : isAuthenticated ? (
              <button onClick={handleLogout} className="btn-secondary">
                Sign out
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 