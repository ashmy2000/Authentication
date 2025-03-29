// src/components/AuthForm.tsx

import React, { useState } from 'react';
import './authform.css';
import { signup, login } from '../api/auth';

/**
 * Authentication form component
 * - Handles both Sign Up and Login flows
 * - Switches between views
 * - Calls backend API
 */
const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  /**
   * Handles form submission
   * Sends login or signup request to backend
   * Displays success or error message
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      type AuthResponse = {
        message: string;
      };

      const res = (isLogin
        ? await login(email, password)
        : await signup(username, email, password)) as { data: AuthResponse };

      setMessage(res.data.message);

      // Automatically switch to login after successful signup
      if (!isLogin) {
        setTimeout(() => {
          setIsLogin(true);
          setMessage('');
        }, 1000);
      }

    } catch (err: any) {
      setMessage(err.response?.data?.detail || 'Something went wrong');
    }

    // Reset form
    setEmail('');
    setPassword('');
    setUsername('');
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="icon">✔️</div>
        <h2>{isLogin ? 'Sign in with email' : 'Create an account'}</h2>

        <p className="subtext">
          {isLogin ? (
            'Welcome Back: Your Focus Starts Here'
          ) : (
            <>
              Every great day starts with a great list...<br />
              Join the platform and power your productivity with intention!
            </>
          )}
        </p>

        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isLogin && (
          <a href="https://example.com/forgot" className="forgot">
            Forgot password?
          </a>
        )}

        <button type="submit">
          {isLogin ? 'Get Started' : 'Create Account'}
        </button>

        {/* ✅ Message feedback */}
        {message && <p className="auth-message">{message}</p>}

        {/* Switch mode */}
        <div className="alt-option">
          {isLogin ? (
            <>
              Don&apos;t have an account?{' '}
              <span onClick={() => setIsLogin(false)}>Sign up</span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span onClick={() => setIsLogin(true)}>Sign in</span>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
