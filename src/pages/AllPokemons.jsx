import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PokemonDataContext } from "../context/PokemonContext";
import PokemonCard from "../components/PokemonCard";

const AllPokemons = () => {
  const pokemonData = useContext(PokemonDataContext);
  
  if (!pokemonData || pokemonData.length === 0) return <div className="text-white">Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap p-8 gap-2">
        {pokemonData.map((elem, idx) => {
          const id = elem.url.split("/")[6];
          return (
            <PokemonCard
              key={idx}
              id={id}
              imageURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              name={elem.name}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default AllPokemons;
