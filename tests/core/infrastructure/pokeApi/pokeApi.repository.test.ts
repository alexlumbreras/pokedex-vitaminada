import { Pokemon } from "@/core/domain/Pokemon.model";
import { bulbasaurRawData } from "@/core/infrastructure/bulbasaurData";
import { pokeApiMapper } from "@/core/infrastructure/PokeApi.mapper";
import { pokeApiRepository } from "@/core/infrastructure/PokeApi.repository";

describe("PokeApi repository", () => {
	const BASE_URL = "https://pokeapi.co/api/v2/pokemon/1";
	const POKEMON_INDEX = "1";

	const fakeData = bulbasaurRawData;
	const Bulbasaur: Pokemon = {
		name: "bulbasaur",
		index: 1,
		imageUrl:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		types: {
			firstType: "grass",
			secondType: "poison",
		},
		weight: 69,
		height: 7,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, sapien quis rhoncus commodo, ex ante euismod augue, a sollicitudin.",
	};

	it("Fetching a certain pokemon (bulbasaur)", async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({ json: () => Promise.resolve(fakeData) })
		) as jest.Mock;

		jest.spyOn(pokeApiMapper, "mapData").mockReturnValue(Bulbasaur);

		const pokemon = await pokeApiRepository.getPokemon(POKEMON_INDEX);

		expect(pokemon).toEqual(Bulbasaur);
		expect(pokeApiMapper.mapData).toHaveBeenCalledWith(fakeData);
		expect(fetch).toHaveBeenCalledWith(BASE_URL);
	});
});
