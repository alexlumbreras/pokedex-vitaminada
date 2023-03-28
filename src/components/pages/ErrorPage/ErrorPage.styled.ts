import styled from "styled-components";

const ERROR_TITLE_FONT_SIZE = "24rem";
const SVG_SIZE = "24rem";
const CONTAINER_MARGIN_VERTICAL = "15rem";
const CONTAINER_MARGIN_HORIZONTAL = "25rem";
const CONTAINER_BOX_SHADOW = "0px 0px 2px rgba(0, 0, 0, 0.5)";

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: ${({ theme }) => theme.spaces.l};
	background-color: ${({ theme }) => theme.themeColors.errorBackgroundColor};
	margin: ${CONTAINER_MARGIN_VERTICAL} ${CONTAINER_MARGIN_HORIZONTAL};
	border-radius: ${({ theme }) => theme.borderRadius.m};
	box-shadow: ${CONTAINER_BOX_SHADOW};
`;

export const StyledErrorTitle = styled.div`
	font-size: ${ERROR_TITLE_FONT_SIZE};
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.themeColors.errorTextColor};
`;

export const StyledSvg = styled.img`
	width: ${SVG_SIZE};
	height: ${SVG_SIZE};
`;

export const StyledErrorSubtitle = styled.div`
	font-size: ${({ theme }) => theme.fonts.heading.textSize.l};
	color: ${({ theme }) => theme.themeColors.errorTextColor};
	text-align: center;
	font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
`;

export const StyledErrorDescription = styled.div`
	font-size: ${({ theme }) => theme.fonts.heading.textSize.s};
	color: ${({ theme }) => theme.themeColors.errorTextColor};
	text-align: center;
`;
