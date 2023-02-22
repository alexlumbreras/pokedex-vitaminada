import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/components/molecules/Header";
import { Card } from "./components/molecules/Card/Card";
import { Pokemon } from "./components/molecules/Card/Pokemon";

function App() {
	return (
		<ThemeProvider>
			<Header />
			<Card {...Pokemon} />
		</ThemeProvider>
	);
}

export default App;
