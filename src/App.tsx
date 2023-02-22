import { ThemeProvider } from "@/theme/ThemeProvider";
import { Tag } from "@/components/atoms/Tag";
import { Header } from "@/components/molecules/Header";

function App() {
	return (
		<ThemeProvider>
			<Header />
			<Tag label="electric" type="electric" />
		</ThemeProvider>
	);
}

export default App;
