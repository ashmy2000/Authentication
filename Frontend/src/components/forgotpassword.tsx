// src/components/ForgotPassword.tsx

import React, { useState } from 'react';
import './authform.css'; // Reuse styling from AuthForm
import { useNavigate } from 'react-router-dom';

/**
 * ForgotPassword Component
 * - Reuses AuthForm design
 * - Allows users to request a password reset
 * - Includes back-to-login option
 */
const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/forgot-password`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok && data.message) {
        setMessage(data.message);

        // Redirect to login after 2s
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError(data.error || 'Unable to process request.');
      }
    } catch {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleForgot}>
        <div className="icon">📧</div>
        <h2>Forgot Password</h2>
        <p className="subtext">
          We'll email you a link to reset your password.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Send Reset Link</button>

        {/* Feedback */}
        {message && <p className="auth-message success">{message}</p>}
        {error && <p className="auth-message error">{error}</p>}

        {/* Back to Login */}
        <div className="alt-option">
          Changed your mind?{' '}
          <span onClick={() => navigate('/')}>Back to login</span>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
