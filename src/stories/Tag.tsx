import "./Tag.css";

interface TagProps {
	backgroundColor: string;
	type?:
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

export const Tag = ({ backgroundColor, type, label, ...props }: TagProps) => {
	return (
		<span
			className={["storybook-tag", `storybook-tag--${type}`].join(" ")}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</span>
	);
};
