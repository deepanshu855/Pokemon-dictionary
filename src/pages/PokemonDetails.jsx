import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getPokemonDetail } from "../api/pokeApi";
import PokemonDetailedCard from "../components/PokemonDetailedCard";

const PokemonDetails = () => {
  const { pokemonId } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState(null);

  const getData = async () => {
    const response = await getPokemonDetail(pokemonId);
    setPokemonDetail(response);
  };

  useEffect(() => {
    getData();
  }, [pokemonId]);

  console.log(pokemonDetail)

  return (
    <div className="flex items-center justify-center min-h-screen">
      <PokemonDetailedCard data={pokemonDetail} />
    </div>
  );
};

export default PokemonDetails;
