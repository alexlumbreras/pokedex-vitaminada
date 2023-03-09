import { SearchBar } from "@/components/molecules/SearchBar";
import { PokeApiCard } from "@/components/organisms";
import { useState } from "react";
import { StyledFinder } from "./PokemonFinder.styled";

export const PokemonFinder = () => {
	const [pokemons, setPokemons] = useState<string[]>([]);

	const handleSearch = (identifier: string) => {
		const newPokemon = [...pokemons, identifier];
		setPokemons(newPokemon);
	};

	console.log(pokemons);

	return (
		<StyledFinder>
			<SearchBar onSearch={handleSearch} />
			{!!pokemons &&
				pokemons.map((pokemon) => <PokeApiCard identifier={pokemon} />)}
		</StyledFinder>
	);
};
