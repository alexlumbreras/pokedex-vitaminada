import { StyledHeader } from "./Header.styled";
import { StyledSVG } from "../../atoms/Icon";
import PokeballLogo from "../../../assets/svgs/pokeball-logo.svg";

export const Header = () => {
	return (
		<StyledHeader>
			<section>
				<StyledSVG src={PokeballLogo} />
				Pokédex
			</section>
		</StyledHeader>
	);
};
