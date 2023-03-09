import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";
import { PokeApiCard } from "@/components/organisms/PokeApiCard";
import { StyledContent, StyledGrid, StyledWrapper } from "./Pokedex.styled";

const pokemonIndexArray = [
	"sceptile-mega",
	"heracross-mega",
	"tyranitar-mega",
	"charizard-mega-y",
	"swampert-mega",
	"garchomp-mega",
];

function Pokedex() {
	return (
		<StyledWrapper>
			<Header />
			<StyledContent>
				<StyledGrid>
					{pokemonIndexArray.map((index) => (
						<PokeApiCard identifier={index} key={index} />
					))}
				</StyledGrid>
			</StyledContent>
			<Footer />
		</StyledWrapper>
	);
}

export default Pokedex;
