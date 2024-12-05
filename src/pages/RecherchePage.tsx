import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../service/pokeAPI";
import DataPokemon from "../components/DataPokemon";

const RecherchePage: React.FC = () => {
  const [searchedPokemon, setSearchedPokemon] = useState<any>(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      const searchPokemon = async () => {
        try {
          const data = await fetchData(query.toLowerCase());
          setSearchedPokemon(data);
        } catch (err) {
          console.log("Erreur lors de la recherche du Pokémon :", err);
        }
      };
      searchPokemon();
    }
  }, [query]);

  return (
    <>
      <h1 className="text-center mb-4">Résultat de la recherche</h1>
      {searchedPokemon ? (
        <div className="d-flex justify-content-center">
          <DataPokemon pokemon={searchedPokemon} />
        </div>
      ) : (
        <p className="text-center">Aucun Pokémon trouvé.</p>
      )}
    </>
  );
};

export default RecherchePage;
