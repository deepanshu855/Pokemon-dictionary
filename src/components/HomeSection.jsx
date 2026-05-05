import React from "react";
import pokedex from "../assets/pokedex.png";
import { useNavigate } from "react-router-dom";

const HomeSection = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 flex justify-center items-center grow">
      <div className="title p-8 flex flex-col items-center justify-center gap-y-12 w-1/2">
        <h1 className="text-8xl">Explore the Original Pokédex</h1>

        <h3 className="text-2xl">
          Dive into the world of Pokémon and explore the original 150. From
          Bulbasaur to Mew, uncover every detail and become a true Pokédex
          master.
        </h3>
      </div>

      <div className="pokedex flex flex-col items-center justify-center gap-4 w-1/2">
        <div className="logo h-80 w-80 overflow-hidden">
          <img
            src={pokedex}
            alt=""
            className="h-full w-full object-cover scale-125"
          />
        </div>
        <button
          className="text-2xl px-6 py-4 rounded-xl text-white bg-[#DA0000] cursor-pointer"
          onClick={() => {
            navigate("/pokemons");
          }}
        >
          Explore Pokemons
        </button>
      </div>
    </div>
  );
};

export default HomeSection;
