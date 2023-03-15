const getPokemonIndexArray = (
	pokemonList: string[],
	elementsLength: number,
	page: number
) => {
	const arraySplits = Array.from(Array(Math.ceil(elementsLength / 6)).keys());

	const newArray = arraySplits.map((index) =>
		pokemonList.slice(6 * index, 6 * index + 6)
	);

	return newArray[page - 1];
};

export const pokedexUtils = {
	getPokemonIndexArray,
};
