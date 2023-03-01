import { Pokemon } from "../domain/Pokemon.model";
import { pokeApiRepository } from "../infrastructure/PokeApi.repository";

const getPokemon = async (): Promise<Pokemon> => {
	return await pokeApiRepository.getPokemon();
};

export const pokemonService = {
	getPokemon,
};
