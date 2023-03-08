import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";
import { StyledContent, StyledGrid, StyledWrapper } from "./App.styled";
import { PokeApiCard } from "../organisms";

function App() {
	return (
		<ThemeProvider>
			<StyledWrapper>
				<Header />
				<StyledContent>
					<StyledGrid>
						<PokeApiCard></PokeApiCard>
					</StyledGrid>
				</StyledContent>
				<Footer />
			</StyledWrapper>
		</ThemeProvider>
	);
}

export default App;
