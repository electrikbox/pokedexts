import axios from "axios";
const API = "https://pokeapi.co/api/v2/";

// récupère les données d'un Pokémon en fonction de son nom
export const fetchData = async (nom: string) => {
  try {
    const response = await axios.get(`${API}pokemon/${nom}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// récupère une page de Pokémon en fonction de la limite et de l'offset
export const fetchPage = async (limit = 12, offset = 0) => {
  try {
    const response = await axios.get(`${API}pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de la page :", error);
    return null;
  }
};

// récupère les détails d'un Pokémon en fonction de son URL
export const fetchPokemonDetails = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des détails :", error);
    return null;
  }
};

