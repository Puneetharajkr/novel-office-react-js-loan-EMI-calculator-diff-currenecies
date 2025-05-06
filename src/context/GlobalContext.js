import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <GlobalContext.Provider value={{ currency, setCurrency, darkMode, setDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};