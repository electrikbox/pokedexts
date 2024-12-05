import React from "react";
import { useFavoris } from "../context/FavorisContext";
import { Card } from "react-bootstrap";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Pokemon } from "../types";

interface Props {
  pokemon: Pokemon;
}

const DataPokemon: React.FC<Props> = ({ pokemon }) => {
  const { favoris, toggleFavorite } = useFavoris();

  return (
    <div>
      <Card
        border="info"
        style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
        className="mb-2"
      >
        <div
          className="bg-info text-white"
          style={{ borderRadius: "0.3em 0.3em 0 0" }}
        >
          <Card.Img
            variant="top"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</Card.Text>
          <Card.Text>Poids: {pokemon.weight} hg</Card.Text>
          <Card.Text>Taille: {pokemon.height} dm</Card.Text>
        </Card.Body>
        <button
          onClick={() => toggleFavorite(pokemon)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          {favoris.some((fav: Pokemon) => fav.name === pokemon.name) ? (
            <MdFavorite style={{ color: "red", fontSize: "2rem" }} />
          ) : (
            <MdFavoriteBorder style={{ fontSize: "2rem" }} />
          )}
        </button>
      </Card>
    </div>
  );
};

export default DataPokemon;
