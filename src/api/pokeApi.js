import axios from "axios";

export const getAllPokemons = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150",
    );
    return response.data.results;
  } catch (error) {
    return [];
  }
};

export const getPokemonDetail = async (pokemonId) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
    );
    return response.data;
  } catch (error) {
    return [];
  }
};
