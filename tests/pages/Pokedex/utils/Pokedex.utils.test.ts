import { pokedexUtils } from "@/components/pages/Pokedex/Pokedex.utils";

const smallPokemonsList = [
	"irrelevant-pokemon-1",
	"irrelevant-pokemon-2",
	"irrelevant-pokemon-3",
	"irrelevant-pokemon-4",
	"irrelevant-pokemon-5",
	"irrelevant-pokemon-6",
	"irrelevant-pokemon-7",
];

const largePokemonsList = [
	"irrelevant-pokemon-1",
	"irrelevant-pokemon-2",
	"irrelevant-pokemon-3",
	"irrelevant-pokemon-4",
	"irrelevant-pokemon-5",
	"irrelevant-pokemon-6",
	"irrelevant-pokemon-7",
	"irrelevant-pokemon-8",
	"irrelevant-pokemon-9",
	"irrelevant-pokemon-10",
	"irrelevant-pokemon-11",
	"irrelevant-pokemon-12",
	"irrelevant-pokemon-13",
	"irrelevant-pokemon-14",
];

const tinyPokemonsList = ["irrelevant-pokemon-1", "irrelevant-pokemon-2"];

describe("pokedexUtils", () => {
	describe("getPageIdentifiers", () => {
		test.each`
			pokemonsList         | page | expectedResult
			${smallPokemonsList} | ${1} | ${["irrelevant-pokemon-1", "irrelevant-pokemon-2", "irrelevant-pokemon-3", "irrelevant-pokemon-4", "irrelevant-pokemon-5", "irrelevant-pokemon-6"]}
			${smallPokemonsList} | ${2} | ${["irrelevant-pokemon-7"]}
			${largePokemonsList} | ${2} | ${["irrelevant-pokemon-7", "irrelevant-pokemon-8", "irrelevant-pokemon-9", "irrelevant-pokemon-10", "irrelevant-pokemon-11", "irrelevant-pokemon-12"]}
			${largePokemonsList} | ${3} | ${["irrelevant-pokemon-13", "irrelevant-pokemon-14"]}
			${tinyPokemonsList}  | ${1} | ${["irrelevant-pokemon-1", "irrelevant-pokemon-2"]}
			${tinyPokemonsList}  | ${0} | ${[]}
		`(
			"Returns $expectedResult when page $page is selected",
			({ pokemonsList, page, expectedResult }) => {
				const result = pokedexUtils.getPokemonIdentifiersByPage(pokemonsList, page);
				expect(result).toEqual(expectedResult);
			}
		);
	});
});
