import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
	padding: ${({ theme }) => theme.spaces.l};
	width: 100%;

	box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
	background-color: ${({ theme }) => theme.themeColors.mainColor};

	display: flex;
	justify-content: space-evenly;

	font-size: ${({ theme }) => theme.fonts.heading.textSize.m};
	line-height: ${({ theme }) => theme.fonts.heading.textSize.l};
	font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
`;

export const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.spaces.m};
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.themeColors.textColor};

	:hover {
		color: ${({ theme }) => theme.themeColors.hoverColor};
	}
`;

export const StyledSearchImage = styled.img`
	width: 24px;
	height: 24px;
`;
