import { Card } from "@/components/molecules/Card";
import { pokemonObjectMother } from "../PokemonObjectMother";
import { render } from "../custom-render";
import { screen } from "@testing-library/react";
import { Pokemon } from "@/core/domain/Pokemon.model";

export {};
describe("Card component", () => {
	const randomizer = pokemonObjectMother.create();

	const carData: Pokemon = {
		name: randomizer.name,
		index: randomizer.index,
		imageUrl: randomizer.imageUrl,
		types: {
			firstType: randomizer.types.firstType,
			secondType: randomizer.types.secondType,
		},
		weight: randomizer.weight,
		height: randomizer.height,
		description: randomizer.description,
	};

	it("Shows a Pokemon card with all its attributes", () => {
		render(<Card pokemon={randomizer} />);

		const pokemonName = screen.getByText(new RegExp(`${carData.name}`, "i"));
		const pokemonIndex = screen.getByText(new RegExp(`#${carData.index}`, "i"));
		const pokemonImage = screen.getByRole("img");
		const pokemonFirstType = screen.getByText(
			new RegExp(`${carData.types.firstType}`, "i")
		);
		const pokemonSecondType = screen.getByText(
			new RegExp(`${carData.types.secondType}`, "i")
		);
		const pokemonWeight = screen.getByText(
			new RegExp(`${carData.weight} kg`, "i")
		);
		const pokemonHeight = screen.getByText(
			new RegExp(`${carData.height} m`, "i")
		);
		const pokemonDescription = screen.getByText(
			new RegExp(`${carData.description}`, "i")
		);

		expect(pokemonName).toBeInTheDocument();
		expect(pokemonIndex).toBeInTheDocument();
		expect(pokemonImage).toBeInTheDocument();
		expect(pokemonImage).toHaveAttribute("src", `${carData.imageUrl}`);
		expect(pokemonFirstType).toBeInTheDocument();
		expect(pokemonSecondType).toBeInTheDocument();
		expect(pokemonWeight).toBeInTheDocument();
		expect(pokemonHeight).toBeInTheDocument();
		expect(pokemonDescription).toBeInTheDocument();
	});
});
