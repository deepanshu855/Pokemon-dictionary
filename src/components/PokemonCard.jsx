import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ imageURL, name, idx, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-54 w-48 rounded-4xl bg-gray-100 p-2 flex flex-col justify-center items-center shadow-lg hover:scale-105 transition"
      onClick={() => {
        navigate(`/pokemons/${id}`);
      }}
    >
      <div className="image h-3/4 rounded-4xl mb-2 overflow-hidden">
        <img src={imageURL} alt="" className="h-full w-full object-contain" />
      </div>
      <h3 className="text-2xl text-gray-800">{name}</h3>
    </div>
  );
};

export default PokemonCard;
