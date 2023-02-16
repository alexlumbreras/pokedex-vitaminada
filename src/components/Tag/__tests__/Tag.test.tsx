import { screen, render } from "@testing-library/react";
import { Tag } from "..";

describe("Tag component", () => {
	it("Shows a grass type tag", () => {
		render(<Tag type="grass" label="grass" />);

		const type = screen.getByText(new RegExp("grass", "i"));

		expect(type).toBeInTheDocument();
	});
});
