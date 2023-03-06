import { Icon } from "@/components/atoms/Icon";
import { GitHubLogo } from "@/components/atoms/Icon/icons/GitHubLogo";
import { PokeApiLogo } from "@/components/atoms/Icon/icons/PokeApiLogo";
import { Theme } from "@/theme/theme";
import { useTheme } from "styled-components";
import { StyledFooter } from "./Footer.styled";

export const Footer = () => {
	const theme = useTheme() as Theme;
	return (
		<StyledFooter>
			<Icon icon={GitHubLogo} color={"white"} />
			<Icon icon={PokeApiLogo} color={""} />
		</StyledFooter>
	);
};
