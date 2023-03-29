import { Link } from "react-router-dom";
import styled from "styled-components";

const ERROR_TITLE_FONT_SIZE = "24rem";
const SVG_SIZE = "24rem";
const CONTAINER_MARGIN_VERTICAL = "15rem";
const CONTAINER_MARGIN_HORIZONTAL = "25rem";
const CONTAINER_BOX_SHADOW = "0px 0px 2px rgba(0, 0, 0, 0.5)";
const BUTTON_BORDER = "1px solid #000000";

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

export const StyledHomeButton = styled.button`
	display: inline-block;
	padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.l};
	background-color: ${({ theme }) => theme.themeColors.errorTextColor};
	border: ${BUTTON_BORDER};
	border-radius: ${({ theme }) => theme.borderRadius.s};
	font-size: ${({ theme }) => theme.fonts.body.textSize.m};
	font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
	text-align: center;
	text-decoration: none;
	transition: background-color 0.3s ease;

	:hover {
		background-color: ${({ theme }) => theme.themeColors.errorHoverColor};
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.themeColors.textColor};
`;
