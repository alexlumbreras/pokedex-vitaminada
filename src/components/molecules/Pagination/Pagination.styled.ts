import styled, { css } from "styled-components";

const BUTTON_WIDTH = "60px";
const BUTTON_HEIGHT = "40px";
const ACTIVE_BUTTON_HEIGHT = "45px";

export const StyledPagination = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledButton = styled.button<{ isActive?: boolean }>`
	width: ${BUTTON_WIDTH};
	height: ${BUTTON_HEIGHT};
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.themeColors.secondaryColor};
	background-color: ${({ theme }) => theme.themeColors.mainColor};
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
	padding: ${({ theme }) => theme.spaces.xs} ${({ theme }) => theme.spaces.s};
	color: ${({ theme }) => theme.themeColors.textColor};
	font-size: ${({ theme }) => theme.fonts.body.textSize.m};
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out;

	:first-child {
		border-top-left-radius: ${({ theme }) => theme.borderRadius.s};
		border-bottom-left-radius: ${({ theme }) => theme.borderRadius.s};
	}

	:last-child {
		border-top-right-radius: ${({ theme }) => theme.borderRadius.s};
		border-bottom-right-radius: ${({ theme }) => theme.borderRadius.s};
	}

	:not(:first-child) {
		margin-left: -1px;
	}

	:disabled {
		color: ${({ theme }) => theme.colors.grayScaleC};
		background-color: ${({ theme }) => theme.themeColors.disabledColor};
		pointer-events: none;
	}

	:hover {
		color: ${({ theme }) => theme.themeColors.hoverColor};
		background-color: ${({ theme }) => theme.themeColors.disabledColor};
	}

	${({ isActive }) =>
		isActive &&
		css`
			color: ${({ theme }) => theme.themeColors.mainColor};
			background-color: ${({ theme }) => theme.themeColors.hoverColor};
			font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
			z-index: 3;
			height: ${ACTIVE_BUTTON_HEIGHT};
		`}
`;
