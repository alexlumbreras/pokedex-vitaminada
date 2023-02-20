import { StyledTag } from "./Tag.styled";

export type PokemonType =
	| "grass"
	| "ghost"
	| "ground"
	| "electric"
	| "rock"
	| "dark"
	| "fire"
	| "fairy"
	| "psychic";

interface TagProps {
	type: PokemonType;
	label: string;
}

export const Tag = ({ type, label }: TagProps) => {
	return <StyledTag type={type}>{label}</StyledTag>;
};
