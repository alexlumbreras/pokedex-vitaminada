import { Footer } from "./components/molecules/Footer";
import { Header } from "./components/molecules/Header";
import { Router } from "./Router";
import { ThemeProvider } from "./theme/ThemeProvider";

export const App = () => {
	return (
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	);
};
