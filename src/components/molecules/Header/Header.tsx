import { StyledHeader } from "./Header.styled";
import { Icon } from "@/components/atoms/Icon";
import { Pokeball } from "@/components/atoms/Icon/icons/Pokeball";
import { useTheme } from "styled-components";
import { Theme } from "@/theme/theme";

export const Header = () => {
	const theme = useTheme() as Theme;

	return (
		<StyledHeader>
			<Icon icon={Pokeball} color={theme.themeColors.textColor} />
			Pokédex
		</StyledHeader>
	);
};
