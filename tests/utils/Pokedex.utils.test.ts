import { pokedexUtils } from "@/components/pages/Pokedex/Pokedex.utils";

const POKEMON_LIST_API_LENGTH = 1281;
const NUMBER_OF_PAGES = Math.ceil(POKEMON_LIST_API_LENGTH / 6);

const pokemonIndexList = Array.from(Array(POKEMON_LIST_API_LENGTH).keys());
const pokemonListPerPage = pokemonIndexList.map((index) => `${index + 1}`);

describe("getPokemonIndexArray utility", () => {
	test.each`
		page                   | expectedResult
		${0}                   | ${undefined}
		${1}                   | ${["1", "2", "3", "4", "5", "6"]}
		${2}                   | ${["7", "8", "9", "10", "11", "12"]}
		${NUMBER_OF_PAGES - 1} | ${["1273", "1274", "1275", "1276", "1277", "1278"]}
		${NUMBER_OF_PAGES}     | ${["1279", "1280", "1281"]}
		${NUMBER_OF_PAGES + 1} | ${undefined}
	`(
		"Returns $expectedResult when page $page is selected",
		({ page, expectedResult }) => {
			const result = pokedexUtils.getPokemonIndexArray(pokemonListPerPage, page);
			expect(result).toEqual(expectedResult);
		}
	);
});
