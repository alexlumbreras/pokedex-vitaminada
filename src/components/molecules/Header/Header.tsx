import {
	StyledHeader,
	StyledLink,
	StyledSearchImage,
	StyledWrapper,
} from "./Header.styled";
import { Icon } from "@/components/atoms/Icon";
import { Pokeball } from "@/components/atoms/Icon/icons/Pokeball";
import { useTheme } from "styled-components";
import { Theme } from "@/theme/theme";
import searchIcon from "@/assets/svgs/search.svg";

export const Header = () => {
	const theme = useTheme() as Theme;

	return (
		<StyledHeader>
			<StyledWrapper>
				<Icon icon={Pokeball} color={theme.themeColors.textColor} />

				<StyledLink to={"/"}>Pokédex</StyledLink>
			</StyledWrapper>

			<StyledWrapper>
				<StyledLink to={"/finder"}>Finder</StyledLink>

				<StyledSearchImage src={searchIcon} alt="Search Icon" />
			</StyledWrapper>
		</StyledHeader>
	);
};
