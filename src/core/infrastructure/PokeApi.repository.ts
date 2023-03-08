import { Pokemon } from "@/core/domain/Pokemon.model";
import { pokeApiMapper } from "./PokeApi.mapper";

const getPokemon = async (pokemonApikey: string): Promise<Pokemon> => {
	const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonApikey}`;
	const response = await fetch(`${pokemonUrl}`);
	const jsonResponse = await response.json();

	return pokeApiMapper.mapData(jsonResponse);
};

export const pokeApiRepository = {
	getPokemon,
};
