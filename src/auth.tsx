

import React, { createContext, useContext, useState } from 'react';


type User = {
  username: string;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
  setToken: (token: string) => void;
};


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = async (username: string, password: string) => {
    try {
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser({ username: userData.username });
      } else {
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      console.log('Login error:', error);
      throw error;
    }
  };

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
  } 

  const token = localStorage.getItem('authToken')
  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, setToken, token }}>
      {children}
    </AuthContext.Provider>
  );
};
