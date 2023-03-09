import { Card } from "@/components/molecules/Card";
import { pokemonObjectMother } from "tests/PokemonObjectMother";
import { screen, render } from "tests/custom-render";

describe("Card component", () => {
	const cardData = pokemonObjectMother.create();

	it("Shows a Pokemon card with all its attributes when image is loaded", () => {
		render(<Card pokemon={cardData} onImageLoaded={() => true} />);

		const pokemonName = screen.getByText(cardData.name);
		const pokemonIndex = screen.getByText(`#${cardData.index}`);
		const pokemonImage = screen.getByRole("img");
		const pokemonFirstType = screen.getByText(cardData.types.firstType);
		const pokemonSecondType = screen.getByText(cardData.types.secondType);
		const pokemonWeight = screen.getByText(
			`${(cardData.weight / 10).toString().replace(".", ",")} kg`
		);
		const pokemonHeight = screen.getByText(
			`${(cardData.height / 10).toString().replace(".", ",")} m`
		);
		const pokemonDescription = screen.getByText(cardData.description);

		expect(pokemonName).toBeInTheDocument();
		expect(pokemonIndex).toBeInTheDocument();
		expect(pokemonImage).toBeInTheDocument();
		expect(pokemonImage).toHaveAttribute("src", cardData.imageUrl);
		expect(pokemonFirstType).toBeInTheDocument();
		expect(pokemonSecondType).toBeInTheDocument();
		expect(pokemonWeight).toBeInTheDocument();
		expect(pokemonHeight).toBeInTheDocument();
		expect(pokemonDescription).toBeInTheDocument();
	});
});
