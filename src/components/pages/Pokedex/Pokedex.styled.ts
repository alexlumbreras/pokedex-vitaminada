import styled from "styled-components";

export const StyledContent = styled.main`
	width: 100%;
	height: 100%;

	padding: 0 ${({ theme }) => theme.spaces.m};
	max-width: 1200px;

	margin: auto;

	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	gap: ${({ theme }) => theme.spaces.l};
`;

export const StyledGrid = styled.section``;
