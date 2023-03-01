// domain > services > infrastructure

import { Pokemon } from "@/core/domain/Pokemon.model";
import { pokeApiMapper } from "./PokeApi.mapper";

const URL_BULBASAUR = "https://pokeapi.co/api/v2/pokemon/1";

const getPokemon = async (): Promise<Pokemon> => {
	const response = await fetch(`${URL_BULBASAUR}`);
	const jsonResponse = await response.json();

	return pokeApiMapper.mapData(jsonResponse);
};

export const pokeApiRepository = {
	getPokemon,
};
