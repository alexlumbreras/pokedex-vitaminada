import { useState } from "react";
import { StyledButton, StyledPaginationBar } from "./PaginationBar.styled";

const PAGES = [1, 2, 3, 4, 5, 6, 7];

export const PaginationBar = ({
	handleClick,
}: {
	handleClick: (page: number) => void;
}) => {
	return (
		<StyledPaginationBar>
			<StyledButton>{"<<"}</StyledButton>
			{PAGES.map((page) => (
				<StyledButton onClick={() => handleClick(page)}>{`${page}`}</StyledButton>
			))}
			<StyledButton>{">>"}</StyledButton>
		</StyledPaginationBar>
	);
};
