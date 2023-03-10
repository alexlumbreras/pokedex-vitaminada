import { Pokemon } from "@/core/domain/Pokemon.model";
import { PokemonList } from "../domain/PokemonList.model";
import { pokeApiMapper } from "./PokeApi.mapper";
import { PokeApiListItemDTO } from "./PokeApiList.dto";

const BASE_URL = "https://pokeapi.co/api/v2";
const getPokemon = async (identifier: string): Promise<Pokemon> => {
	const pokemonUrl = `${BASE_URL}/pokemon/${identifier}`;
	const response = await fetch(pokemonUrl);
	const jsonResponse = await response.json();

	return pokeApiMapper.mapData(jsonResponse);
};

const getPokemonList = async (): Promise<PokemonList> => {
	const pokemonsUrl = `${BASE_URL}/pokemon?limit=10000`;
	const response = await fetch(pokemonsUrl);
	const jsonResponse = await response.json();

	return jsonResponse.results.map(({ name }: PokeApiListItemDTO) => name);
};

export const pokeApiRepository = {
	getPokemon,
	getPokemonList,
};
