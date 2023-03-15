const getPokemonIndexArray = (pokemonList: string[], page: number) => {
	const pokemonListLength = pokemonList.length;
	const numberOfPokemonPerPage = 6;
	const numberOfPages = pokemonListLength / numberOfPokemonPerPage;

	const pagesArray = Array.from(Array(Math.ceil(numberOfPages)).keys());

	const pokemonArrayPerPage = pagesArray.map((page) =>
		pokemonList.slice(
			numberOfPokemonPerPage * page,
			numberOfPokemonPerPage * (page + 1)
		)
	);

	return pokemonArrayPerPage[page - 1];
};

export const pokedexUtils = {
	getPokemonIndexArray,
};
