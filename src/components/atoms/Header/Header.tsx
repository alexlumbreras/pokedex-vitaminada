import { Theme } from "@/theme/theme";
import { useTheme } from "styled-components";
import { Logo } from "../Logo";
import { StyledHeader } from "./Header.styled";

export const Header = () => {
	const theme = useTheme() as Theme;
	return (
		<StyledHeader>
			<section>
				<Logo fill={theme.colors.baseColors.grayScaleA} />
				Pokédex
			</section>
		</StyledHeader>
	);
};
