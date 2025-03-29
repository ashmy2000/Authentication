// src/components/AuthForm.tsx

import React, { useState } from 'react';
import './authform.css';
import { signup, login } from '../api/auth';
import { Link } from 'react-router-dom';

/**
 * Authentication form component.
 * Handles both login and signup with API integration.
 */
const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  /**
   * Toggle between Sign In and Sign Up forms.
   */
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setUsername('');
    setMessage('');
  };

  /**
   * Submit handler for form (signup/login).
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      type AuthResponse = { message: string };

      const res = (isLogin
        ? await login(email, password)
        : await signup(username, email, password)) as { data: AuthResponse };

      setMessage(res.data.message);

      // After successful signup, switch to login
      if (!isLogin) {
        setTimeout(() => {
          setIsLogin(true);
          setMessage('');
        }, 1000);
      }

    } catch (err: any) {
      setMessage(err.response?.data?.detail || 'Something went wrong');
    }

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
          <Link to="/forgot-password" className="forgot">
            Forgot password?
          </Link>
        )}

        <button type="submit">
          {isLogin ? 'Get Started' : 'Create Account'}
        </button>

        {message && <p className="auth-message">{message}</p>}

        <div className="alt-option">
          {isLogin ? (
            <>
              Don&apos;t have an account?{' '}
              <span onClick={toggleForm}>Sign up</span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span onClick={toggleForm}>Sign in</span>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
