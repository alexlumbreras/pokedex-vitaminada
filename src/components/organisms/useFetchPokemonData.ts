import { Pokemon } from "@/core/domain/Pokemon.model";
import { pokemonService } from "@/core/service/pokemon.service";
import { useEffect, useState } from "react";

export const useFetchPokemonData = (identifier: string) => {
	const [pokemon, setPokemon] = useState<Pokemon>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const getPokemon = async () => {
		setIsLoading(true);
		const pokemon = await pokemonService.getPokemon(identifier);
		setPokemon(pokemon);
		setIsLoading(false);
	};

	useEffect(() => {
		getPokemon();
	}, []);

	return { pokemon, isLoading };
};
