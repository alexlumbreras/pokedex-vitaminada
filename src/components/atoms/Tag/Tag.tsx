import { StyledTag } from "./Tag.styled";

export const Tag = ({ type, label }: { type: string; label: string }) => {
	return <StyledTag type={type}>{label}</StyledTag>;
};
