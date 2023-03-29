import PsyduckImage from "@/assets/svgs/psyduck.svg";
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
				<StyledSvg src={PsyduckImage} />
			</StyledErrorTitle>
			<StyledErrorSubtitle>Oops!</StyledErrorSubtitle>
			<StyledErrorDescription>
				Data could not be loaded correctly!
			</StyledErrorDescription>
		</StyledContainer>
	);
};
