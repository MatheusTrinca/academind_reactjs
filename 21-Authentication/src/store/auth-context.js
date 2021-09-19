import React, { useState } from 'react';

const initialState = {
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
};

const AuthContext = React.createContext(initialState);

const calculateRemainingTime = expiration => {
  const actualTime = new Date().getTime();
  const expirationTime = new Date(expiration).getTime();
  return expirationTime - actualTime;
};

export const AuthContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const loginHandler = (token, expiresIn) => {
    setToken(token);
    localStorage.setItem('token', token);
    const remainingTIme = calculateRemainingTime(expiresIn);
    setTimeout(logoutHandler, remainingTIme);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
