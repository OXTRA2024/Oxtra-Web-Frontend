import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from './useLocalStorage';
import { dangerAlert } from '@/components/Toasts';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  id?: string;
  dob: string;
  address: string;
  state: string;
  phoneNumber: string;
  city: string;
  phoneCode: string;
}

interface AuthContextValue {
  login: (data: User) => void;
  logout: () => void;
  user: User | null;
  disable: boolean;
  setDisable: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextValue>({
  login() {},
  logout() {},
  user: null,
  disable: false,
  setDisable: () => {},
  token: '',
  setToken: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [token, setToken] = useState('');

  console.log(token);

  const [disable, setDisable] = useState(false);
  const router = useRouter();

  const login = async (data: User) => {
    setUser(data);
    router.push('/dashboard');
  };

  const logout = () => {
    setUser(null);
    dangerAlert('Logged out!');
    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, user, disable, setDisable, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
