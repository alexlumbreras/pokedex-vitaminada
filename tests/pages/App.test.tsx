import App from "@/App";
import { pokemonObjectMother } from "../PokemonObjectMother";
import { render, screen } from "../custom-render";
import { pokemonService } from "@/core/service/pokemon.service";

const pokemon = pokemonObjectMother.create();

describe("App", () => {
	it("renders component", async () => {
		jest.spyOn(pokemonService, "getPokemon").mockResolvedValue(pokemon);

		render(<App />);

		const pokemonName = await screen.findByText(
			new RegExp(`${pokemon.name}`, "i")
		);

		expect(pokemonName).toBeInTheDocument();
	});
});
