import { useState } from "react";
import { StyledSearchBar } from "./SearchBar.styled";

export const SearchBar = ({
	onSearch,
}: {
	onSearch: (searchValue: string) => void;
}) => {
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchInput(value);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			onSearch(searchInput);
			setSearchInput("");
		}
	};

	return (
		<StyledSearchBar
			type="text"
			name="search-bar"
			id="search-bar"
			placeholder="Search..."
			value={searchInput}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
		/>
	);
};
