import { StyledTag } from "./Tag.styled";

interface TagProps {
	type: string;
	label: string;
}

export const Tag = ({ type, label }: TagProps) => {
	return <StyledTag type={type}>{label}</StyledTag>;
};
