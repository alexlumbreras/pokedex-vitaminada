import { PokeApiCard } from "@/components/organisms/PokeApiCard";
import { StyledContent } from "./Pokedex.styled";
import { useSetPokemonCards } from "./useSetPokemonCards";

function Pokedex() {
	const { pokemonIndexArray, handleClick } = useSetPokemonCards();

	return (
		<StyledContent>
			{pokemonIndexArray.map((index) => (
				<PokeApiCard identifier={`${index}`} key={index} />
			))}
			<button onClick={handleClick} style={{ width: "100px", height: "100px" }}>
				Change pokemon cards!
			</button>
		</StyledContent>
	);
}

export default Pokedex;
