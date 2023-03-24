import { resetStyles } from "./resetStyles";
import { createGlobalStyle, css } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${resetStyles}

  //index.css properties

	*,
	:before,
	:after {
		box-sizing: border-box;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}

	html,
	body {
		color: ${({ theme }) => theme.themeColors.textColor};
		background-color: ${({ theme }) => theme.themeColors.secondaryColor};

		min-height: 100%;

		font-family: ${({ theme }) => theme.fonts.fontFamily};

		font-size: 62.5%;
	}

  
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	span,
	p,
	strong,
	input {
		font-size: ${({ theme }) => theme.fonts.body.textSize.m};
		line-height: ${({ theme }) => theme.fonts.body.textHeight.m};
		margin: 0;
	}

	strong{
		font-weight: 700;
	}

	input {
		font-family: ${({ theme }) => theme.fonts.fontFamily};
		outline: none;
	}

	button{
		text-decoration: none;
		cursor:pointer
	}
`;
