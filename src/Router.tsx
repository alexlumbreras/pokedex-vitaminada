import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ErrorPage } from "@/components/pages/ErrorPage";
import Pokedex from "@/components/pages/Pokedex/Pokedex";
import { PokemonFinder } from "@/components/pages/PokemonFinder";

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
			{
				path: "*",
				element: <ErrorPage />,
			},
		],
	},
]);

export function Router() {
	return <RouterProvider router={router} />;
}
