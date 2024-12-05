import React, { createContext, useContext, useState, useEffect } from "react";
import { Pokemon } from "../types";

const FavorisContext = createContext<any>(null);

export const FavorisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoris, setFavoris] = useState<Pokemon[]>([]);

  useEffect(() => {
    const storedFavoris = JSON.parse(localStorage.getItem("favoris") || "[]");
    setFavoris(storedFavoris);
  }, []);

  const toggleFavorite = (poke: Pokemon) => {
    const updatedFavoris = favoris.some((fav) => fav.name === poke.name)
      ? favoris.filter((fav) => fav.name !== poke.name)
      : [...favoris, poke];
  
    setFavoris(updatedFavoris);
    localStorage.setItem("favoris", JSON.stringify(updatedFavoris));
  };

  return (
    <FavorisContext.Provider value={{ favoris, toggleFavorite }}>
      {children}
    </FavorisContext.Provider>
  );
};

export const useFavoris = () => useContext(FavorisContext);
