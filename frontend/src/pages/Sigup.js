import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import '../styles.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ firstName, lastName, email });
    history.push('/dashboard');
  };

  return (
    <div className="container">
      <h2>Mechago Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button">Driver's License</button>
        <button type="button">Vehicle Registration</button>
        <label>
          <input type="checkbox" /> By creating an account, you agree to our Terms of Service.
        </label>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default SignUp;
