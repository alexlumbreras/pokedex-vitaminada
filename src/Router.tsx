import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Pokedex from "./components/pages/Pokedex/Pokedex";
import { PokemonFinder } from "./components/pages/PokemonFinder";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Pokedex />,
			},
			{
				path: "/finder",
				element: <PokemonFinder />,
			},
		],
	},
]);

export function Router() {
	return <RouterProvider router={router} />;
}
