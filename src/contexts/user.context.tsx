import { createContext, ReactNode, useState } from 'react';

import User from '../models/user.types';

interface IUserContext {
  currentUser: User | null
  isAuthenticated: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}

interface Iteste {
  children: ReactNode
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
});

export const UserContextProvider = ({ children }: Iteste) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const isAuthenticated = currentUser !== null;

  const loginUser = (user: User) => {
    setCurrentUser(user);
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthenticated, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
