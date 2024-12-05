import React from "react";
import DataPokemon from "../components/DataPokemon";
import { useFavoris } from "../context/FavorisContext";
import { Row, Col } from "react-bootstrap";
import { Pokemon } from "../types";

const FavorisPage: React.FC = () => {
  const { favoris } = useFavoris();

  return (
    <>
      <h1 className="text-center mb-4">Mes Favoris</h1>
      <Row className="g-4 justify-content-center">
        {favoris.map((pokemon: Pokemon) => (
          <Col key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
            <DataPokemon pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FavorisPage;
