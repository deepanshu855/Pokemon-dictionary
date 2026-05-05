import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getAllPokemons } from "../api/pokeApi";

export const PokemonDataContext = createContext();

const PokemonContext = ({ children }) => {
  const [pokemonsData, setPokemonsData] = useState([]);

  const getData = async () => {
    const response = await getAllPokemons();
    setPokemonsData(response)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PokemonDataContext.Provider value={pokemonsData}>
      {children}
    </PokemonDataContext.Provider>
  );
};

export default PokemonContext;
