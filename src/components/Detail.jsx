import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { pokemonsContext } from "../pokemonContext";
import PokemonCard from "./PokemonCard";

const Detail = () => {
  const { getOnePokemon, getPokemons, onePokemon, pokemons } =
    useContext(pokemonsContext);
  const { id } = useParams();

  useEffect(() => {
    getOnePokemon(id);
  }, []);

  return onePokemon ? (
    <div>
      <PokemonCard />
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Detail;
