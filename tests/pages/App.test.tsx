import App from "@/components/pages/App";
import { pokemonObjectMother } from "tests/PokemonObjectMother";
import { render, screen } from "tests/custom-render";
import { pokemonService } from "@/core/service/pokemon.service";

const pokemon = pokemonObjectMother.create();
//pendiente

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
