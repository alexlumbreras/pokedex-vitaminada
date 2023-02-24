import { screen } from "@testing-library/react";
import { Header } from "../../src/components/molecules/Header";
import { render } from "../custom-render";

export {};

describe("Header component", () => {
	it("Shows the title of the header", () => {
		render(<Header />);

		const title = screen.getByText(new RegExp("Pokédex", "i"));

		expect(title).toBeInTheDocument();
	});
});
