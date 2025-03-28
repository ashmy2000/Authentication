import React, { useState } from 'react';
import './authform.css';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = isLogin ? 'login' : 'signup';

    const payload = isLogin
      ? { email, password }
      : { email, password, username };

    const response = await fetch(`http://localhost:8000/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  
    const data = await response.json();

    if (data.message) {
      setMessage(data.message);
    } else {
      setMessage(data.error || 'Something went wrong');
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
            onChange={e => setUsername(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {isLogin && <a href="#" className="forgot">Forgot password?</a>}
        <button type="submit">{isLogin ? 'Get Started' : 'Create Account'}</button>
        


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
};

export default AuthForm;
