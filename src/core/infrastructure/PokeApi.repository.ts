import { Pokemon } from "@/core/domain/Pokemon.model";
import { pokeApiMapper } from "./PokeApi.mapper";

const getPokemon = async (identifier: string): Promise<Pokemon> => {
	const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${identifier}`;
	const response = await fetch(`${pokemonUrl}`);
	const jsonResponse = await response.json();

	return pokeApiMapper.mapData(jsonResponse);
};

export const pokeApiRepository = {
	getPokemon,
};
