import App from "@/App";
import { bulbasaur } from "@/core/infrastructure/bulbasaur";
import { render } from "../custom-render";

export {};
describe("App", () => {
	it("", async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(bulbasaur),
			})
		) as jest.Mock;

		render(<App />);
	});
});
