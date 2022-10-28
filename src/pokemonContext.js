import React, { createContext, useReducer } from "react";
import axios from "axios";

export const pokemonsContext = createContext();

const INIT_STATE = {
  pokemons: [],
  onePokemon: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return { ...state, pokemons: action.payload };
    case "GET_ONE_POKEMON":
      return { ...state, onePokemon: action.payload };
    default:
      return state;
  }
}

const PokemonsContextProvider = ({ children }) => {
  const API = "https://pokeapi.co/api/v2/pokemon";

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getPokemons() {
    let res = await axios.get(API);
    console.log(res);
    // const results = [];
    // data.results.forEach(async poke => {
    //   let res = await axios.get(poke.url);
    //   results.push(res.data);
    // });
    // console.log(results);
    dispatch({
      type: "GET_POKEMONS",
      payload: res.data.results,
    });
  }
  async function getOnePokemon(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_POKEMON",
      payload: res.data,
    });
    console.log(res);
  }

  return (
    <pokemonsContext.Provider
      value={{
        pokemons: state.pokemons,
        onePokemon: state.onePokemon,

        getPokemons,
        getOnePokemon,
      }}>
      {children}
    </pokemonsContext.Provider>
  );
};

export default PokemonsContextProvider;
