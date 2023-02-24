import styled from "styled-components";

export const StyledHeader = styled.header`
	padding: ${({ theme }) => theme.spaces.l};
	width: 100%;

	box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
	background-color: ${({ theme }) => theme.themeColors.mainColor};

	display: flex;
	align-items: center;

	gap: ${({ theme }) => theme.spaces.m};

	font-size: ${({ theme }) => theme.fonts.heading.textSize.m};
	line-height: ${({ theme }) => theme.fonts.heading.textSize.l};
	font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
`;
