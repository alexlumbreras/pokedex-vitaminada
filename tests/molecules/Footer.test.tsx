import { Footer } from "@/components/molecules/Footer";
import { screen, render } from "tests/custom-render";

describe("Footer component", () => {
	it("Shows ", () => {
		render(<Footer />);

		const logos = screen.getAllByRole("img");
		const gitHubLogo = logos[0];
		const pokeApiLogo = logos[1];

		expect(gitHubLogo).toBeInTheDocument();
		expect(pokeApiLogo).toBeInTheDocument();
		expect(pokeApiLogo).toHaveAttribute("alt", "PokeApi Logo");
	});
});
