import React, { useState, useEffect } from "react";
import { fetchPage } from "../service/pokeAPI";
import DataPokemon from "../components/DataPokemon";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import { fetchPokemonDetails } from "../service/pokeAPI";

const Home: React.FC = () => {
  const [paginatedPokemons, setPaginatedPokemons] = useState<any[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false); // État pour gérer le chargement

  useEffect(() => {
    const loadPage = async () => {
      setLoading(true); // Démarrer le chargement
      try {
        const page = await fetchPage(12, offset); // Charger 12 Pokémon par page
        const detailedPokemons = await Promise.all(
          page.results.map((poke: any) => fetchPokemonDetails(poke.url))
        );
        setPaginatedPokemons(detailedPokemons);
      } catch (err) {
        console.error("Erreur lors du chargement :", err);
      } finally {
        setLoading(false); // Fin du chargement
        window.scrollTo({ top: 0, behavior: "smooth" }); // Revenir en haut une fois le chargement terminé
      }
    };
    loadPage();
  }, [offset]);

  return (
    <>
      <h1 className="text-center mb-4">Pokédex</h1>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row className="g-4 justify-content-center">
          {paginatedPokemons.map((pokemon) => (
            <Col key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
              <DataPokemon pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      )}
      <div className="d-flex justify-content-between mt-4" style={{ paddingBottom: "5em" }}>
        <Button
          disabled={offset === 0 || loading} // Désactiver pendant le chargement
          onClick={() => setOffset((prev) => Math.max(prev - 12, 0))}
        >
          Précédent
        </Button>
        <Button
          disabled={loading} // Désactiver pendant le chargement
          onClick={() => setOffset((prev) => prev + 12)}
        >
          Suivant
        </Button>
      </div>
    </>
  );
};

export default Home;
