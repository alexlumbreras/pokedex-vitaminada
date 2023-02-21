import { ThemeProvider as StyledTheme } from "styled-components";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { GlobalStyles } from "./globalStyles";

type Props = {
	children: React.ReactNode;
};

export type Theme = {
	grayScaleA: string;
	grayScaleB: string;
	grayScaleC: string;
	grayScaleD: string;
};

const getTheme = (theme: string): Theme => {
	if (theme === "LIGHT") {
		return lightTheme;
	}

	return darkTheme;
};
export const ThemeProvider: React.FC<Props> = ({ children }) => {
	const activeTheme = getTheme("LIGHT");

	return (
		<StyledTheme theme={activeTheme}>
			<GlobalStyles />
			{children}
		</StyledTheme>
	);
};
