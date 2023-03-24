import styled from "styled-components";

const SEARCHBAR_WIDTH = "500px";

export const StyledSearchBar = styled.input`
	width: ${SEARCHBAR_WIDTH};
	height: ${({ theme }) => theme.spaces.xxl};

	padding: ${({ theme }) => theme.spaces.m};

	border: none;
	border-radius: ${({ theme }) => theme.borderRadius.xl};
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
	font-size: initial;

	position: relative;
`;
