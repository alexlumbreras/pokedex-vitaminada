import styled from "styled-components";
import { PokemonType } from "../Tag";

const typeColors = {
	grass: "#74cb48",
	ghost: "#70559b",
	ground: "#dec16b",
	electric: "#f9cf30",
	rock: "#b69e31",
	dark: "#75574c",
	fire: "#f57d31",
	fairy: "#e69eac",
	psychic: "#fb5584",
};

export const StyledTag = styled.span<{ type: PokemonType }>`
	border-radius: 12px;
	padding: 2px 8px;

	background-color: ${({ type }) => typeColors[type]};

	font-size: 12px;
	line-height: 16px;
	font-family: "Poppins", sans-serif;
	font-weight: 700;
	text-transform: capitalize;
	color: #ffffff;
`;
