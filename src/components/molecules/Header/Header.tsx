import { StyledHeader } from "./Header.styled";
import { Icon } from "@/components/atoms/Icon";
import { Pokeball } from "@/components/atoms/Icon/icons/Pokeball";

export const Header = () => {
	return (
		<StyledHeader>
			<Icon icon={Pokeball} color="crimson" />
			Pokédex
		</StyledHeader>
	);
};
