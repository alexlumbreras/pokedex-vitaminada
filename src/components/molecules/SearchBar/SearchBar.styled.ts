import styled from "styled-components";

export const StyledSearchBar = styled.input`
	padding-left: 10px;
	padding-right: 10px;
	height: 40px;
	width: 500px;
	overflow-wrap: break-word;
	border: 1px solid gray;
	border-radius: 50px;
	word-wrap: break-word;
	background-color: white;
	font-size: 16px;
`;

export const StyledList = styled.ul`
	height: auto;
	width: 500px;
	background-color: white;
`;

export const StyledListItem = styled.li`
	font-size: ${({ theme }) => theme.fonts.body.textSize.s};
	cursor: pointer;
`;
