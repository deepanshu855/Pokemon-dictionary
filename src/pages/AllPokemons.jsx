import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PokemonDataContext } from "../context/PokemonContext";

const AllPokemons = () => {
  const pokemonData = useContext(PokemonDataContext);
  console.log(pokemonData);

  return (
    <div>
      <Navbar />
      {pokemonData.map((elem, idx)=>{
        return <h4>{elem.name}</h4>
      })}
      <Footer />
    </div>
  );
};

export default AllPokemons;
