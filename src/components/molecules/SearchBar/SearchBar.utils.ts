import { PokemonList } from "@/core/domain/PokemonList.model";
import { MINIMUM_SUGGESTION_LENGTH } from "./SearchBar";

const isValidSearchTerm = (searchTerm: string) => {
	if (!searchTerm) {
		return false;
	}
	return searchTerm.length < MINIMUM_SUGGESTION_LENGTH;
};

const getFilteredList = (
	searchValue: string,
	pokemonList: PokemonList
): PokemonList => {
	const regularExpression = new RegExp(`${searchValue}`, "i");

	return pokemonList.filter((suggestion) => regularExpression.test(suggestion));
};

export const searchBarUtils = {
	isValidSearchTerm,
	getFilteredList,
};
