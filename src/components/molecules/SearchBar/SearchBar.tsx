import { useState } from "react";
import { SearchInput } from "@/components/molecules/SearchBar/components/SearchInput";
import { SuggestionsList } from "@/components/molecules/SearchBar/components/SuggestionsList";
import { StyledWrapper } from "./SearchBar.styled";
import { searchBarUtils } from "./SearchBar.utils";
import { useFetchPokemonList } from "./useFetchPokemonList";

export const MINIMUM_SUGGESTION_LENGTH = 3;

export const SearchBar = ({
	onSearch,
}: {
	onSearch: (searchValue: string) => void;
}) => {
	const [searchInput, setSearchInput] = useState<string>("");
	const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
	const { pokemonList } = useFetchPokemonList();

	const updateSuggestions = (searchValue: string) => {
		if (searchBarUtils.isValidSearchTerm(searchValue)) {
			setFilteredSuggestions([]);
			return;
		}

		const filteredList = searchBarUtils.getFilteredList(searchValue, pokemonList);

		setFilteredSuggestions(filteredList);
	};

	const handleEnter = () => {
		onSearch(searchInput);
		setSearchInput("");
		setFilteredSuggestions([]);
	};

	const handleChange = (searchValue: string) => {
		setSearchInput(searchValue);
		updateSuggestions(searchValue);
	};

	const handleSuggestionClick = (suggestion: string) => {
		setSearchInput("");
		setFilteredSuggestions([]);
		onSearch(suggestion);
	};

	const hasSuggestions = !!filteredSuggestions.length;

	return (
		<StyledWrapper>
			<SearchInput
				searchTerm={searchInput}
				onEnter={handleEnter}
				onChange={handleChange}
			/>
			{hasSuggestions && (
				<SuggestionsList
					filteredSuggestions={filteredSuggestions}
					searchTerm={searchInput}
					onSuggestionClick={handleSuggestionClick}
				/>
			)}
		</StyledWrapper>
	);
};
