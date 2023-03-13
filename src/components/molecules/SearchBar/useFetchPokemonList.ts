import { PokemonList } from "@/core/domain/PokemonList.model";
import { pokemonService } from "@/core/service/pokemon.service";
import { useEffect, useState } from "react";

export const useFetchPokemonList = () => {
	const [pokemonList, setPokemonList] = useState<PokemonList>([]);

	const getPokemons = async () => {
		const pokemons = await pokemonService.getPokemonList();
		setPokemonList(pokemons);
	};

	useEffect(() => {
		getPokemons();
	}, []);

	return { pokemonList };
};
