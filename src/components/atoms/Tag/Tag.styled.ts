import styled from "styled-components";
import { PokemonType } from ".";

export const StyledTag = styled.span<{ type: PokemonType }>`
	border-radius: 1.2rem;
	padding: 2px 8px;

	background-color: ${({ type }) =>
		({ theme }) =>
			theme.colors.typeColors[type]};

	font-size: 1.2rem;
	line-height: 1.6rem;
	font-weight: 700;
	text-transform: capitalize;
	color: ${({ theme }) => theme.colors.baseColors.grayScaleE};
`;
