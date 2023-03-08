import { Pokemon } from "@/core/domain/Pokemon.model";
import { pokeApiRepository } from "@/core/infrastructure/PokeApi.repository";

const getPokemon = async (pokemonApikey: string): Promise<Pokemon> => {
	return await pokeApiRepository.getPokemon(pokemonApikey);
};

export const pokemonService = {
	getPokemon,
};
