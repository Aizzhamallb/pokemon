import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { pokemonsContext } from "../pokemonContext";
// import PokemonCard from "./PokemonCard";

const PokemonsList = () => {
  // console.log(pokemonsContext);
  const { getPokemons, pokemons } = useContext(pokemonsContext);

  useEffect(() => {
    getPokemons();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <h2>Pokemons List:</h2>

      {pokemons.map(item => (
        <div style={{ marginBottom: "30px" }} key={item.url}>
          Name: {item.name};
          <button
            onClick={() => {
              // console.log(item);
              navigate(
                `/details/${
                  item.url.split("").reverse().join("").split("/")[1]
                }`
              );
            }}>
            DETAILS
          </button>
        </div>
      ))}
    </div>
  );
};

export default PokemonsList;
