import { Pokemon } from "@/core/domain/Pokemon.model";
import { bulbasaurRawData } from "@/core/infrastructure/bulbasaurData";
import { pokeApiMapper } from "@/core/infrastructure/PokeApi.mapper";

describe("Fetching PokeApi ", () => {
	const BASE_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
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

		const res = await fetch(BASE_URL);
		const json = await res.json();

		expect(json).toEqual(fakeData);
		expect(fetch).toHaveBeenCalled();
		expect(fetch).toHaveBeenCalledWith(BASE_URL);
	});

	it("Fetching a certain pokemon (bulbasaur) and transform it to a domain model", async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({ json: () => Promise.resolve(fakeData) })
		) as jest.Mock;

		const res = await fetch(BASE_URL);
		const json = await res.json();

		const mappedData = pokeApiMapper.mapData(json);

		expect(json).toStrictEqual(fakeData);
		expect(fetch).toHaveBeenCalledWith(BASE_URL);
		expect(mappedData).toStrictEqual(Bulbasaur);
	});
});
