import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/components/molecules/Header";
import { Card } from "@/components/molecules/Card";
import { useEffect, useState } from "react";
import { Pokemon } from "@/core/domain/Pokemon.model";
import { pokemonService } from "@/core/service/pokemon.service";
import { Footer } from "@/components/molecules/Footer";

function App() {
	const [pokemon, setPokemon] = useState<Pokemon>();
	const [isLoading, setIsLoading] = useState(false);

	const getPokemon = async () => {
		setIsLoading(true);
		const pokemon = await pokemonService.getPokemon();
		setPokemon(pokemon);
		setIsLoading(false);
	};

	useEffect(() => {
		getPokemon();
	}, []);

	return (
		<ThemeProvider>
			<Header />
			{!!pokemon ? (
				<Card pokemon={pokemon} />
			) : (
				<span>Se está cargando la página</span>
			)}
			<Footer />
		</ThemeProvider>
	);
}

export default App;
