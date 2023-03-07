import { Pokemon } from "@/core/domain/Pokemon.model";
import { bulbasaurRawData } from "@/core/infrastructure/bulbasaurData";
import { pokeApiMapper } from "@/core/infrastructure/PokeApi.mapper";

describe("PokeApi mapper", () => {
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

	it("Returns mapped data", () => {
		const pokemon = pokeApiMapper.mapData(bulbasaurRawData);

		expect(pokemon).toStrictEqual(Bulbasaur);
	});
});
