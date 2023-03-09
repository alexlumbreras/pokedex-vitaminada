import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pokedex from "./components/pages/Pokedex/Pokedex";
import { PokemonFinder } from "./components/pages/PokemonFinder";
import { ThemeProvider } from "./theme/ThemeProvider";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Pokedex />,
	},
	{
		path: "/finder",
		element: <PokemonFinder />,
	},
]);

export function Router() {
	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}
