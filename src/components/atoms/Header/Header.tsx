import PokeballImage from "../../../assets/svgs/pokeball-logo.svg";
import { StyledHeader } from "./Header.styled";
export const Header = () => {
	return (
		<StyledHeader>
			<section>
				<img src={PokeballImage} alt="Pokedex Logo" />
				Pokédex
			</section>
		</StyledHeader>
	);
};
