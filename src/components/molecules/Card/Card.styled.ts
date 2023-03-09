import styled from "styled-components";

export const StyledWrapper = styled.div`
	position: relative;
`;

export const StyledCard = styled.div<{ type: string }>`
	display: grid;
	grid-template-rows: min-content 240px;
	align-content: space-between;

	height: 400px;
	max-width: 360px;

	padding: ${({ theme }) => theme.spaces.xxs};
	border-radius: ${({ theme }) => theme.spaces.s};
	box-shadow: "0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.25)";
	background-color: ${({ type }) =>
		({ theme }) =>
			theme.colors[type]};
`;

export const StyledCardHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.s} 0;
`;
export const StyledCardName = styled.h4`
	text-transform: capitalize;
	font-size: ${({ theme }) => theme.fonts.heading.textSize.m};
	line-height: ${({ theme }) => theme.fonts.heading.textHeight.m};

	color: ${({ theme }) => theme.themeColors.mainColor};
	font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
`;

export const StyledCardIndex = styled.p`
	font-size: ${({ theme }) => theme.fonts.body.textSize.xs};
	line-height: ${({ theme }) => theme.fonts.body.textHeight.xs};
	color: ${({ theme }) => theme.themeColors.mainColor};
	font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
`;

export const StyledCardContent = styled.div`
	padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.s};
	background-color: ${({ theme }) => theme.themeColors.mainColor};
	border-radius: ${({ theme }) => theme.spaces.xs};
`;

export const StyledCardImage = styled.img`
	display: block;
	margin: auto;
	width: 150px;
	height: 150px;
	margin-top: -100px;
`;

export const StyledCardTypes = styled.div`
	display: flex;
	justify-content: center;
	gap: ${({ theme }) => theme.spaces.s};
`;

export const StyledCardInformation = styled.div`
	display: grid;
	grid-template-rows: repeat(2, auto) 1fr;
	gap: ${({ theme }) => theme.spaces.m};
`;

export const StyledCardDescription = styled.p`
	text-align: justify;
	font-size: ${({ theme }) => theme.fonts.body.textSize.xs};
	line-height: ${({ theme }) => theme.fonts.body.textHeight.xs};
`;

export const StyledCardMeasures = styled.div`
	display: flex;
	justify-content: center;
`;

export const StyledCardMeasure = styled.div`
	padding: 0 ${({ theme }) => theme.spaces.s};
	text-align: center;

	:not(:last-child) {
		border-right: 1px solid ${({ theme }) => theme.themeColors.textColor};
	}
`;

export const StyledCardMeasureData = styled.div`
	display: flex;
	gap: ${({ theme }) => theme.spaces.s};
`;

export const StyledCardMeasureName = styled.div`
	font-size: ${({ theme }) => theme.fonts.body.textSize.xs};
	line-height: ${({ theme }) => theme.fonts.body.textHeight.xs};

	margin-top: ${({ theme }) => theme.spaces.xs};
	color: ${({ theme }) => theme.themeColors.textColor};
`;
