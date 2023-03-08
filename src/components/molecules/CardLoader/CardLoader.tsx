import { StyledCardLoader, StyledLoaderImage } from "./CardLoader.styled";
import pokeball from "@/assets/svgs/pokeball-big-icon.svg";
import pokemonLogo from "@/assets/svgs/pokemon-logo.svg";

export const CardLoader = () => {
	return (
		<StyledCardLoader>
			<img src={pokemonLogo} alt="Pokemon Logo" />
			<StyledLoaderImage src={pokeball} alt="Pokeball Logo" />
		</StyledCardLoader>
	);
};
