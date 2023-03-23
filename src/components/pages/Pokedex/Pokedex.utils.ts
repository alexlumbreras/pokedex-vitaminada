import { PAGE_LENGTH } from "./Pokedex.constants";

const getPageIdentifiers = (
	pokemonIdentifiersList: string[],
	page: number
): string[] => {
	const pokemonListLength = pokemonIdentifiersList.length;
	const numberOfPages = pokemonListLength / PAGE_LENGTH;

	const pagesArray = Array.from(Array(Math.ceil(numberOfPages)).keys());

	const pokemonArrayPerPage = pagesArray.map((page) =>
		pokemonIdentifiersList.slice(PAGE_LENGTH * page, PAGE_LENGTH * (page + 1))
	);

	return pokemonArrayPerPage[page - 1];
};

export const pokedexUtils = {
	getPageIdentifiers,
};
