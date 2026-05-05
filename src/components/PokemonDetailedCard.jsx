import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonDetailedCard = ({ data }) => {
  const navigate = useNavigate();
  if (!data) return <div className="text-white">Loading...</div>;

  const image = data.sprites.other["official-artwork"].front_default;

  const types = data.types;
  const stats = data.stats;

  return (
    <div className="h-[85vh] w-[320px] bg-gray-900 text-white rounded-3xl overflow-hidden shadow-xl relative">
      <button
        className="absolute left-0 inline ml-4 mt-2 cursor-pointer"
        onClick={() => {
          navigate("/pokemons");
        }}
      >
        <i className="ri-arrow-left-line"></i> Pokedex
      </button>
      {/* Top Image Section */}
      <div className="h-[35%] bg-orange-400 flex items-center justify-center">
        <img src={image} alt="" className="h-40 object-contain" />
      </div>

      {/* Name */}
      <h4 className="text-3xl text-center mt-4 capitalize font-semibold">
        {data.name}
      </h4>

      {/* Types */}
      <div className="flex justify-center gap-3 mt-2">
        {types.map((t, i) => (
          <span
            key={i}
            className="px-4 py-1 rounded-full bg-gray-200 text-gray-900 text-sm capitalize"
          >
            {t.type.name}
          </span>
        ))}
      </div>

      {/* Height & Weight */}
      <div className="flex justify-around mt-6 text-center">
        <div>
          <h6 className="text-lg font-semibold">{data.weight / 10} KG</h6>
          <p className="text-sm text-gray-400">Weight</p>
        </div>
        <div>
          <h6 className="text-lg font-semibold">{data.height / 10} M</h6>
          <p className="text-sm text-gray-400">Height</p>
        </div>
      </div>

      {/* Stats */}
      <h5 className="text-center mt-6 text-lg font-semibold">Base Stats</h5>

      <div className="px-6 mt-3">
        {stats.map((stat, i) => {
          const value = stat.base_stat;

          return (
            <div key={i} className="flex items-center gap-2 mt-2">
              <span className="w-10 text-sm uppercase">
                {stat.stat.name.slice(0, 3)}
              </span>

              <div className="flex-1 bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-green-400 h-2 rounded-full"
                  style={{ width: `${value / 2}%` }}
                ></div>
              </div>

              <span className="text-xs w-8">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonDetailedCard;
