import {
	StyledCardLoader,
	StyledLoaderImage,
	StyledLogoImage,
} from "./CardLoader.styled";
import pokeball from "@/assets/svgs/pokeball-big-icon.svg";
import pokemonLogo from "@/assets/svgs/pokemon-logo.svg";

export const CardLoader = () => {
	return (
		<StyledCardLoader>
			<StyledLogoImage src={pokemonLogo} alt="Pokemon Logo" />
			<StyledLoaderImage src={pokeball} alt="Pokeball Logo" />
		</StyledCardLoader>
	);
};
