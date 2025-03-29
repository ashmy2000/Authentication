// src/components/AuthForm.tsx
import React, { useState } from 'react';
import './authform.css';
import { signup, login } from '../api/auth';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

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
  
      // 👇 Switch to login form after successful signup
      if (!isLogin) {
        setTimeout(() => {
          setIsLogin(true); // Switch to login
          setMessage('');   // Optional: clear success message
        }, 1000); // 2-second delay
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
          {isLogin
            ? 'Welcome Back: Your Focus Starts Here'
            : <>Every great day starts with a great list...<br />Join the platform and power your productivity with intention!</>}
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
  
        {isLogin && <a href="https://example.com/forgot" className="forgot">Forgot password?</a>}
  
        <button type="submit">{isLogin ? 'Get Started' : 'Create Account'}</button>
  
        {/* ✅ Show message here */}
        {message && <p className="auth-message">{message}</p>}
  
        <div className="alt-option">
          {isLogin ? (
            <>
              Don't have an account?{' '}
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
}
export default AuthForm;