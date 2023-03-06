import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/components/molecules/Header";
import { Card } from "@/components/molecules/Card";
import { useEffect, useState } from "react";
import { Pokemon } from "@/core/domain/Pokemon.model";
import { pokemonService } from "@/core/service/pokemon.service";
import { Footer } from "@/components/molecules/Footer";
import { StyledWrapper } from "./App.styled";

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

	const getLoadingStatus = () => {
		return <span className="status">Cargando Pokémons ...</span>;
	};

	return (
		<ThemeProvider>
			<StyledWrapper>
				<Header />
				<main className="main">
					{!!pokemon ? (
						<section className="grid">
							<Card pokemon={pokemon} />
						</section>
					) : (
						getLoadingStatus()
					)}
				</main>
				<Footer />
			</StyledWrapper>
		</ThemeProvider>
	);
}

export default App;
