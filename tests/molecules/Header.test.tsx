import { Header } from "@/components/molecules/Header";
import { render, screen } from "tests/custom-render";

describe("Header component", () => {
	it("Shows the title of the header", () => {
		render(<Header />);

		const title = screen.getByText(new RegExp("Pokédex", "i"));

		expect(title).toBeInTheDocument();
	});
});
