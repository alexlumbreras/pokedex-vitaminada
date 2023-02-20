import { ThemeProvider } from "@/theme/ThemeProvider";
import { Tag } from "@/components/atoms/Tag";
import { Header } from "@/components/atoms/Header";

function App() {
	return (
		<ThemeProvider>
			<Header />
			<Tag label="grass" type="grass" />
		</ThemeProvider>
	);
}

export default App;
