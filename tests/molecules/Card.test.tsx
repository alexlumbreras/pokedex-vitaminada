import { Card } from "@/components/molecules/Card";
import { pokemonObjectMother } from "../PokemonObjectMother";
import { screen, render } from "../custom-render";

describe("Card component", () => {
	const cardData = pokemonObjectMother.create();

	it("Shows a Pokemon card with all its attributes", () => {
		render(<Card pokemon={cardData} />);

		const pokemonName = screen.getByText(cardData.name);
		const pokemonIndex = screen.getByText(`#${cardData.index}`);
		const pokemonImage = screen.getByRole("img");
		const pokemonFirstType = screen.getByText(cardData.types.firstType);
		const pokemonSecondType = screen.getByText(cardData.types.secondType);
		const pokemonWeight = screen.getByText(`${cardData.weight} kg`);
		const pokemonHeight = screen.getByText(`${cardData.height} m`);
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