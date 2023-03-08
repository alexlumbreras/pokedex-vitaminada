import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";
import { StyledContent, StyledGrid, StyledWrapper } from "./App.styled";
import { PokeApiCard } from "../organisms";
import { CardLoader } from "../molecules/CardLoader";

const pokemonIndexArray = [
	"sceptile-mega",
	"heracross-mega",
	"tyranitar-mega",
	"charizard-mega-y",
	"swampert-mega",
	"garchomp-mega",
];

function App() {
	return (
		<ThemeProvider>
			<StyledWrapper>
				<Header />
				<StyledContent>
					<StyledGrid>
						{/* {pokemonIndexArray.map((index) => (
							<PokeApiCard identifier={index} key={index} />
						))} */}
						<CardLoader />
					</StyledGrid>
				</StyledContent>
				<Footer />
			</StyledWrapper>
		</ThemeProvider>
	);
}

export default App;
