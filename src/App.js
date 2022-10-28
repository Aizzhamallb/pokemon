import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsList from "./components/PokemonsList";
import Header from "./components/Header";
import Detail from "./components/Detail";
import PokemonsContextProvider from "./pokemonContext";

const App = () => {
  return (
    <PokemonsContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PokemonsList />} />
          <Route path="/details/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </PokemonsContextProvider>
  );
};

export default App;

// В новое реакт приложение установить Material-UI, React-router-dom. Вам дана API, на которую нужно кидать GET-запрос. Используйте Context и useReducer вместе, чтобы создать глобальное состояние. Нужно создать страницу отображения всех покемонов, и каждого по-отдельности. В MUI поищите готовые компоненты и примените их для отображения.

// https://pokeapi.co/api/v2/pokemon
