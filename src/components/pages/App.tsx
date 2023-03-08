import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";
import { StyledContent, StyledGrid, StyledWrapper } from "./App.styled";
import { PokeApiCard } from "../organisms";

const pokemonIndexArray = ["1"];

function App() {
	return (
		<ThemeProvider>
			<StyledWrapper>
				<Header />
				<StyledContent>
					<StyledGrid>
						{pokemonIndexArray.map((index) => (
							<PokeApiCard pokemonApiKey={index} key={index} />
						))}
					</StyledGrid>
				</StyledContent>
				<Footer />
			</StyledWrapper>
		</ThemeProvider>
	);
}

export default App;
