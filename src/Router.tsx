import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Error404Page } from "@/components/pages/404Page";
import Pokedex from "@/components/pages/Pokedex/Pokedex";
import { PokemonFinder } from "@/components/pages/PokemonFinder";
import { ErrorPage } from "./components/pages/ErrorPage";

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
				path: "/error",
				element: <ErrorPage />,
			},
			{
				path: "*",
				element: <Error404Page />,
			},
		],
	},
]);

export function Router() {
	return <RouterProvider router={router} />;
}
