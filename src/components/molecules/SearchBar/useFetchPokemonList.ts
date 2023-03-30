import { PokemonList } from "@/core/domain/PokemonList.model";
import { pokemonService } from "@/core/service/pokemon.service";
import { useEffect, useState } from "react";

export const useFetchPokemonList = () => {
	const [pokemonList, setPokemonList] = useState<PokemonList>([]);
	const [hasError, setHasError] = useState<boolean>(false);

	const getPokemons = async () => {
		try {
			const pokemons = await pokemonService.getPokemonList();
			setPokemonList(pokemons);
			throw new Error("Ha ocurrido un error");
		} catch (error) {
			setHasError(true);
		}
	};

	useEffect(() => {
		getPokemons();
	}, []);

	return { pokemonList, hasError };
};
