import { screen } from "@testing-library/react";
import { Tag } from "../src/components/atoms/Tag/Tag";
import { render } from "./test-utils";

describe("Tag component", () => {
	it("Shows a grass type tag", () => {
		render(<Tag type="grass" label="grass" />);

		const type = screen.getByText(new RegExp("grass", "i"));

		expect(type).toBeInTheDocument();
	});
});

//custom render!!!!
