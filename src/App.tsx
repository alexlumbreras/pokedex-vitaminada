import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/components/molecules/Header";
import { Card } from "./components/molecules/Card";
import pokemon from "@/components/molecules/Card/pokemon.json";

function App() {
	return (
		<ThemeProvider>
			<Header />
			<Card {...pokemon} />
		</ThemeProvider>
	);
}

export default App;
