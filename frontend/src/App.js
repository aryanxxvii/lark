import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import ApiKeys from './components/Dashboard/ApiKeys';
import Analytics from './components/Dashboard/Analytics';
import TestAPI from './components/Dashboard/TestAPI';
import Navbar from './components/Layout/Navbar';
import PrivateRoute from './components/Auth/PrivateRoute';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0B]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <div className="min-h-screen bg-[#0A0A0B]">
                  <Navbar />
                  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <Routes>
                      <Route index element={<Dashboard />} />
                      <Route path="api-keys" element={<ApiKeys />} />
                      <Route path="analytics" element={<Analytics />} />
                      <Route path="test-api" element={<TestAPI />} />
                    </Routes>
                  </div>
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 