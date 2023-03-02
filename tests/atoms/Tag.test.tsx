import { Tag } from "@/components/atoms/Tag";
import { render, screen } from "tests/custom-render";

describe("Tag component", () => {
	it("Shows a grass type tag", () => {
		render(<Tag type="grass" label="grass" />);

		const type = screen.getByText(new RegExp("grass", "i"));

		expect(type).toBeInTheDocument();
	});
});
