import { Icon } from "@/components/atoms/Icon";
import { GitHubLogo } from "@/components/atoms/Icon/icons/GitHubLogo";
import pokeApiLogo from "@/assets/svgs/pokeapi-logo.svg";
import { Theme } from "@/theme/theme";
import { useTheme } from "styled-components";
import { StyledFooter, StyledLogo } from "./Footer.styled";

export const Footer = () => {
	const theme = useTheme() as Theme;

	return (
		<StyledFooter>
			<StyledLogo>
				<Icon icon={GitHubLogo} color={theme.themeColors.textColor} />
			</StyledLogo>
			<StyledLogo>
				<img src={pokeApiLogo} alt="PokeApi Logo" />
			</StyledLogo>
		</StyledFooter>
	);
};
