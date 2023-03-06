import styled from "styled-components";

export const StyledTag = styled.span<{ type: string }>`
	border-radius: ${({ theme }) => theme.spaces.s};
	padding: 2px ${({ theme }) => theme.spaces.xs};

	background-color: ${({ type }) =>
		({ theme }) =>
			theme.colors[type]};

	font-size: ${({ theme }) => theme.fonts.body.textSize.xs};
	line-height: ${({ theme }) => theme.fonts.body.textHeight.xs};
	font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
	text-transform: capitalize;
	color: ${({ theme }) => theme.themeColors.mainColor};
`;
