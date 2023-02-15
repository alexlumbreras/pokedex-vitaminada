import "./Tag.css";

interface TagProps {
	type:
		| "grass"
		| "ghost"
		| "ground"
		| "electric"
		| "rock"
		| "dark"
		| "fire"
		| "fairy"
		| "psychic";
	label: string;
}

export const Tag = ({ type, label }: TagProps) => {
	return <span className={`tag ${type}-background`}>{label}</span>;
};
