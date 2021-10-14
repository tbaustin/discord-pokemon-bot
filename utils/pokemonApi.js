import axios from "axios";

const pokemonUrl = "https://pokeapi.co/api/v2";
const headers = { Accept: "application/json" };

export const searchPokemon = async (pokemon) => {
  const response = await axios({
    method: "get",
    url: `${pokemonUrl}/pokemon/${pokemon}`,
    headers
  });

  return response.data;
};

export const getPokemonCharacteristics = async (pokemonId) => {
  const response = await axios({
    method: "get",
    url: `${pokemonUrl}/characteristic/${pokemonId}`,
    headers
  });

  return response.data;
};
