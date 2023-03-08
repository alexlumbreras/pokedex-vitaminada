import { Pokemon } from "@/core/domain/Pokemon.model";
import { pokeApiRepository } from "@/core/infrastructure/PokeApi.repository";

const getPokemon = async (identifier: string): Promise<Pokemon> => {
	return await pokeApiRepository.getPokemon(identifier);
};

export const pokemonService = {
	getPokemon,
};
