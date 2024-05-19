import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (userData) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', userData);
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const signUp = async (userData) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', userData);
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
