import styled from "styled-components";

export const StyledCard = styled.div`
	display: grid;
	grid-template-rows: min-content 240px;
	align-content: space-between;

	height: 400px;
	max-width: 360px;

	padding: ${({ theme }) => theme.spaces.xxs};
	border-radius: ${({ theme }) => theme.spaces.s};
	box-shadow: "0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.25)";
	background-color: ${({ theme }) => theme.colors.typeColors.grass};

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.s} 0;
	}

	.name {
		text-transform: capitalize;
		font-size: ${({ theme }) => theme.fonts.heading.textSize.m};
		line-height: ${({ theme }) => theme.fonts.heading.textHeight.m};

		color: ${({ theme }) => theme.colors.baseColors.grayScaleE};
		font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
	}

	.index {
		font-size: ${({ theme }) => theme.fonts.body.textSize.xs};
		line-height: ${({ theme }) => theme.fonts.body.textHeight.xs};
		color: ${({ theme }) => theme.colors.baseColors.grayScaleE};
		font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
	}

	.content {
		padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.s};
		background-color: ${({ theme }) => theme.colors.baseColors.grayScaleE};
		border-radius: ${({ theme }) => theme.spaces.xs};
	}

	.image {
		display: block;
		margin: auto;
		width: 150px;
		margin-top: -100px;
	}

	.types {
		display: flex;
		justify-content: center;
		gap: ${({ theme }) => theme.spaces.s};
	}

	.information {
		display: grid;
		grid-template-rows: repeat(2, auto) 1fr;
		gap: ${({ theme }) => theme.spaces.m};
	}

	.measures {
		display: flex;
		justify-content: center;
	}

	.measure {
		padding: 0 ${({ theme }) => theme.spaces.s};
		text-align: center;
	}

	.measure:not(:last-child) {
		border-right: 1px solid ${({ theme }) => theme.colors.baseColors.grayScaleB};
	}

	.measure-data {
		display: flex;
		gap: ${({ theme }) => theme.spaces.s};
	}

	.measure-name {
		font-size: ${({ theme }) => theme.fonts.body.textSize.xs};
		line-height: ${({ theme }) => theme.fonts.body.textHeight.xs};

		margin-top: ${({ theme }) => theme.spaces.xs};
		color: ${({ theme }) => theme.colors.baseColors.grayScaleB};
	}

	.description {
		text-align: justify;
		font-size: ${({ theme }) => theme.fonts.body.textSize.xs};
		line-height: ${({ theme }) => theme.fonts.body.textHeight.xs};
	}
`;
