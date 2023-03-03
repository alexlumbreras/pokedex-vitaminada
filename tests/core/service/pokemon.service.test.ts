import { pokeApiRepository } from "@/core/infrastructure/PokeApi.repository";
import { pokemonService } from "@/core/service/pokemon.service";
import { pokemonObjectMother } from "tests/PokemonObjectMother";

const pokemon = pokemonObjectMother.create();

describe("pokemon service", () => {
	it("gets pokemon", async () => {
		jest.spyOn(pokeApiRepository, "getPokemon").mockResolvedValue(pokemon);

		const pokeApiPokemon = await pokemonService.getPokemon();

		expect(pokeApiPokemon).toStrictEqual(pokemon);
		expect(pokeApiRepository.getPokemon).toHaveBeenCalled();
	});
});
