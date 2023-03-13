import { PokeApiCard } from "@/components/organisms/PokeApiCard";
import { StyledContent } from "./Pokedex.styled";

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
		<StyledContent>
			{pokemonIndexArray.map((index) => (
				<PokeApiCard identifier={index} key={index} />
			))}
		</StyledContent>
	);
}

export default Pokedex;
