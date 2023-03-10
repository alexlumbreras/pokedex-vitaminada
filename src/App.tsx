import { Router } from "./Router";
import { ThemeProvider } from "./theme/ThemeProvider";

export const App = () => {
	return (
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	);
};
