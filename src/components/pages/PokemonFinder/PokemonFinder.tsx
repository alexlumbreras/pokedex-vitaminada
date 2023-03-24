import { SearchBar } from "@/components/molecules/SearchBar";
import { PokeApiCard } from "@/components/organisms";
import { useState } from "react";
import {
	StyledContent,
	StyledFinder,
	StyledSearchBarWrapper,
} from "./PokemonFinder.styled";

export const PokemonFinder = () => {
	const [pokemons, setPokemons] = useState<string[]>([]);

	const handleSearch = (identifier: string) => {
		const newPokemon = [...pokemons, identifier];
		setPokemons(newPokemon);
	};

	return (
		<StyledFinder>
			<StyledSearchBarWrapper>
				<SearchBar onSearch={handleSearch} />
			</StyledSearchBarWrapper>
			<StyledContent>
				{!!pokemons &&
					pokemons.map((pokemon) => <PokeApiCard identifier={pokemon} />)}
			</StyledContent>
		</StyledFinder>
	);
};
