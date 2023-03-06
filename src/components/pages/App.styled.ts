import styled from "styled-components";

export const StyledWrapper = styled.div`
	height: 100vh;

	display: grid;
	grid-template-rows: auto 1fr auto;
	gap: ${({ theme }) => theme.spaces.s};

	.main {
		width: 100%;
		height: 100%;

		display: grid;
		gap: ${({ theme }) => theme.spaces.l};

		padding: 0 ${({ theme }) => theme.spaces.m};
		max-width: 1200px;

		margin: auto;
	}

	.status {
		justify-self: center;
		align-self: center;
		text-align: center;
	}
	.grid {
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: ${({ theme }) => theme.spaces.l};
	}
`;
