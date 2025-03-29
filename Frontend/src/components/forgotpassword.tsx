// src/components/ForgotPassword.tsx

import React, { useState } from 'react';

/**
 * ForgotPassword Component
 * Allows users to request a password reset by submitting their email.
 */
const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  /**
   * Handles the form submission to request password reset
   * @param e - Form event
   */
  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.message) {
        setMessage(data.message);
      } else {
        setError(data.error || 'Unable to process request');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className="form-box">
      <h2>Forgot Password</h2>

      <form onSubmit={handleForgot}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
      </form>

      {/* Success or Error Message */}
      {message && <p className="auth-message success">{message}</p>}
      {error && <p className="auth-message error">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
