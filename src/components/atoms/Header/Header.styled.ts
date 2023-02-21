import styled from "styled-components";

export const StyledHeader = styled.header`
	padding: 2.4rem;
	width: 100%;

	box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
	background-color: ${({ theme }) => theme.grayScaleA};
	color: ${({ theme }) => theme.grayScaleD};

	section {
		display: flex;
		align-items: center;

		gap: 1.6rem;

		margin: auto;
	}

	font-size: 2.4rem;
	line-height: 3.2rem;
	font-weight: 700;
`;
