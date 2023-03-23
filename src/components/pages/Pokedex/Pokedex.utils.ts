import { PAGE_LENGTH } from "./Pokedex.constants";

const getPokemonIdentifiersByPage = (
	allPokemonIdentifiersList: string[],
	selectdPage: number
): string[] | undefined => {
	const start = (selectdPage - 1) * PAGE_LENGTH;
	return allPokemonIdentifiersList.slice(start, start + PAGE_LENGTH);
};

export const pokedexUtils = {
	getPokemonIdentifiersByPage,
};
