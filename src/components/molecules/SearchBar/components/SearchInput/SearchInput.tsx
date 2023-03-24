import React from "react";
import { StyledSearchBar } from "./SearchInput.styled";

type Props = {
	searchTerm: string;
	onEnter: () => void;
	onChange: (searchTerm: string) => void;
};

export const SearchInput: React.FC<Props> = ({
	searchTerm,
	onEnter,
	onChange,
}) => {
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			onEnter();
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<StyledSearchBar
			type="text"
			name="search-bar"
			id="search-bar"
			placeholder="Search a pokemon..."
			value={searchTerm}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			autoComplete="off"
		/>
	);
};
