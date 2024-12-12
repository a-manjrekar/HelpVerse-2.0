import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUsers, saveUser } from '../utils/localStorage';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'volunteer' | 'organizer';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: 'volunteer' | 'organizer') => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const users = getUsers();
      const user = users.find((u: any) => u.email === email && u.password === password);
      
      if (!user) {
        throw new Error('Invalid credentials');
      }
      
      setUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string, role: 'volunteer' | 'organizer') => {
    setIsLoading(true);
    try {
      const users = getUsers();
      if (users.some((u: any) => u.email === email)) {
        throw new Error('Email already exists');
      }

      const newUser = {
        id: crypto.randomUUID(),
        email,
        password,
        name,
        role
      };
      
      saveUser(newUser);
      setUser(newUser);
      localStorage.setItem('currentUser', JSON.stringify(newUser));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}