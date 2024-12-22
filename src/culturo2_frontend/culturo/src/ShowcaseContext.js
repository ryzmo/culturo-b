import React, { createContext, useState, useContext } from "react";

// Buat Context
const ShowcaseContext = createContext();

// Provider untuk State Global
export const ShowcaseProvider = ({ children }) => {
  const [showcases, setShowcases] = useState([]);

  return (
    <ShowcaseContext.Provider value={{ showcases, setShowcases }}>
      {children}
    </ShowcaseContext.Provider>
  );
};

// Custom Hook untuk Menggunakan Context
export const useShowcase = () => useContext(ShowcaseContext);
