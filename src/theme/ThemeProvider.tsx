import { ThemeProvider as StyledTheme } from "styled-components";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { GlobalStyles } from "./globalStyles";

const theme = "LIGHT";

type Props = {
	children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	return (
		<StyledTheme theme={(theme as string) !== "DARK" ? lightTheme : darkTheme}>
			<GlobalStyles />
			{children}
		</StyledTheme>
	);
};
