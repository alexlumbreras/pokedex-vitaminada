import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { screen, render } from "@testing-library/react";
import { Header } from "../Header";

export {};

describe("Header component", () => {
	it("Shows the title of the header", () => {
		render(
			<ThemeProvider>
				<Header />
			</ThemeProvider>
		);

		const title = screen.getByText(new RegExp("Pokédex", "i"));
		console.log(title);

		expect(title).toBeInTheDocument();
	});
});
