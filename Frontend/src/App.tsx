// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthForm from './components/authform';
import ForgotPassword from './components/forgotpassword';

/**
 * App Component: Main entry point for routing views.
 */
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default App;