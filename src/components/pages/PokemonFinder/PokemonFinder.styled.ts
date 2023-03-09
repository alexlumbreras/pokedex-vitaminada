import styled from "styled-components";

export const StyledFinder = styled.div`
	height: 100vh;

	display: grid;
	grid-template-rows: auto 1fr auto;
	gap: ${({ theme }) => theme.spaces.s};
`;
