import { PokemonList } from "@/core/domain/PokemonList.model";
import { pokemonService } from "@/core/service/pokemon.service";
import { useEffect, useState } from "react";
import {
	StyledList,
	StyledListItem,
	StyledSearchBar,
} from "./SearchBar.styled";

export const SearchBar = ({
	onSearch,
}: {
	onSearch: (searchValue: string) => void;
}) => {
	const [pokemonList, setPokemonList] = useState<PokemonList>([]);
	const [searchInput, setSearchInput] = useState("");
	const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

	const getPokemons = async () => {
		const pokemons = await pokemonService.getPokemonList();
		setPokemonList(pokemons);
	};

	useEffect(() => {
		getPokemons();
	}, []);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchInput(value);
		updateSuggestions(value);
	};

	const updateSuggestions = (searcheValue: string) => {
		if (!searcheValue || searcheValue.length < 3) {
			setFilteredSuggestions([]);
			return;
		}

		const regularExpression = new RegExp(`${searcheValue}`, "i");

		const filteredList = pokemonList.filter((suggestion) =>
			regularExpression.test(suggestion)
		);

		setFilteredSuggestions(filteredList);
	};

	const handleSuggestionClick = (suggestion: string) => {
		setSearchInput("");
		setFilteredSuggestions([]);
		onSearch(suggestion);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			onSearch(searchInput);
			setSearchInput("");
			setFilteredSuggestions([]);
		}
	};

	return (
		<>
			<StyledSearchBar
				type="text"
				name="search-bar"
				id="search-bar"
				placeholder="Search a pokemon..."
				value={searchInput}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			{!!filteredSuggestions.length && (
				<StyledList>
					{filteredSuggestions.map((suggestion) => (
						<StyledListItem
							onClick={() => handleSuggestionClick(suggestion)}
							dangerouslySetInnerHTML={{
								__html: suggestion.replace(
									searchInput.toLowerCase(),
									`<strong>${searchInput.toLowerCase()}</strong>`
								),
							}}
						/>
					))}
				</StyledList>
			)}
		</>
	);
};
