import styled from "styled-components";

const SUGGESTION_LIST_MAX_HEIGHT = "400px";

export const StyledList = styled.ul`
	position: absolute;
	top: calc(48px + 16px);
	left: 0;

	width: 100%;
	max-height: ${SUGGESTION_LIST_MAX_HEIGHT};

	list-style: none;
	margin: 0;
	padding: 0;

	border-radius: ${({ theme }) => theme.borderRadius.m};
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

	overflow: auto;
	background-color: ${({ theme }) => theme.themeColors.mainColor};
`;

export const StyledListItem = styled.li`
	font-size: ${({ theme }) => theme.fonts.body.textSize.l};

	height: ${({ theme }) => theme.spaces.xxl};
	padding: ${({ theme }) => theme.spaces.m};

	display: flex;
	align-items: center;

	cursor: pointer;

	:hover {
		background-color: ${({ theme }) => theme.themeColors.mainColor};
	}

	:not(:last-child) {
		border-bottom: 1px solid ${({ theme }) => theme.themeColors.secondaryColor};
	}
`;
