import styled from "styled-components";

export const StyledTag = styled.span<{ type: string }>`
	border-radius: 1.2rem;
	padding: 2px 8px;

	background-color: ${({ type }) =>
		({ theme }) =>
			theme.colors[type]};

	font-size: 1.2rem;
	line-height: 1.6rem;
	font-weight: 700;
	text-transform: capitalize;
	color: ${({ theme }) => theme.themeColors.mainColor};
`;
