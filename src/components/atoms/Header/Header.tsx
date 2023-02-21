import { Theme } from "@/theme/ThemeProvider";
import { useTheme } from "styled-components";
import { Logo } from "../Logo";
import { StyledHeader } from "./Header.styled";

export const Header = () => {
	const theme = useTheme() as Theme;
	return (
		<StyledHeader>
			<section>
				<Logo fill={theme.grayScaleD} />
				Pokédex
			</section>
		</StyledHeader>
	);
};
