import { GlobalStyles } from "./globalStyles";

type Props = {
	children: React.ReactNode;
};
export const ThemeProvider: React.FC<Props> = ({ children }) => {
	return (
		<>
			<GlobalStyles />
			{children}
		</>
	);
};
