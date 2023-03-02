import { Pokemon } from "@/core/domain/Pokemon.model";
import { pokeApiRepository } from "@/core/infrastructure/PokeApi.repository";

const getPokemon = async (): Promise<Pokemon> => {
	return await pokeApiRepository.getPokemon();
};

export const pokemonService = {
	getPokemon,
};
