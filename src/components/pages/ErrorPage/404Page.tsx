import SnorlaxImage from "@/assets/svgs/snorlax.svg";
import {
	StyledContainer,
	StyledErrorDescription,
	StyledErrorSubtitle,
	StyledErrorTitle,
	StyledHomeButton,
	StyledLink,
	StyledSvg,
} from "./404Page.styled";

export const ErrorPage = () => {
	return (
		<StyledContainer>
			<StyledErrorTitle>
				4<StyledSvg src={SnorlaxImage} />4
			</StyledErrorTitle>
			<StyledErrorSubtitle>Oops!</StyledErrorSubtitle>
			<StyledErrorDescription>
				A wild Snorlax has blocked your path!
			</StyledErrorDescription>
			<StyledLink to={"/"}>
				<StyledHomeButton>GO BACK!</StyledHomeButton>
			</StyledLink>
		</StyledContainer>
	);
};
