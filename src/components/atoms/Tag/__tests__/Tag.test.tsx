import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { screen, render } from "@testing-library/react";
import { Tag } from "../Tag";

describe("Tag component", () => {
	it("Shows a grass type tag", () => {
		render(
			<ThemeProvider>
				<Tag type="grass" label="grass" />
			</ThemeProvider>
		);

		const type = screen.getByText(new RegExp("grass", "i"));

		expect(type).toBeInTheDocument();
	});
});

//custom render!!!!
