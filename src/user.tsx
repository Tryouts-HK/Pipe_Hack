import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
  image: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  // token: string | null;
  // setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  });

  // const [token, setToken] = useState<string | null>(() => {
  //   const tokenData = localStorage.getItem('token');
  //   return tokenData ? JSON.parse(tokenData) : null;
  // });


  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      // localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('user');
      // localStorage.removeItem('token');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};


