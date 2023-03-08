import { Footer } from "@/components/molecules/Footer";
import { screen, render } from "tests/custom-render";

describe("Footer component", () => {
	it("Shows footer elements", () => {
		render(<Footer />);
	});
});
