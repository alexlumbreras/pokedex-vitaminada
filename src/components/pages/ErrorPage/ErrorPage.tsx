import SnorlaxImage from "@/assets/svgs/snorlax.svg";
import {
	StyledContainer,
	StyledErrorDescription,
	StyledErrorSubtitle,
	StyledErrorTitle,
	StyledSvg,
} from "./ErrorPage.styled";

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
		</StyledContainer>
	);
};
