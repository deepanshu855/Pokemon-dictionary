import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const PokemonDataContext = createContext();

const PokemonContext = ({ children }) => {
  const [pokemonsData, setPokemonsData] = useState([]);

  const getAllPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150",
    );
    setPokemonsData(response.data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonDataContext.Provider value={pokemonsData}>
      {children}
    </PokemonDataContext.Provider>
  );
};

export default PokemonContext;
