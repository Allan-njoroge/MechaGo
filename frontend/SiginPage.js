import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import '../styles.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password });
    history.push('/dashboard');
  };

  return (
    <div className="container">
      <h2>Mechago Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => history.push('/signin-email')}>Use Email</button>
        <button type="submit">Next</button>
        <div>
          <button type="button">Face ID</button>
          <button type="button">Touch ID</button>
        </div>
        <p>By continuing, you agree to our Terms of Service and acknowledge our Privacy Policy.</p>
      </form>
    </div>
  );
};

export default SignIn;
