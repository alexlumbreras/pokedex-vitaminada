import { PaginationBar } from "@/components/molecules/PaginationBar";
import { PokeApiCard } from "@/components/organisms/PokeApiCard";
import { useState } from "react";
import { StyledContent } from "./Pokedex.styled";
import { useSetPokemonCards } from "./useSetPokemonCards";

function Pokedex() {
	const [page, setPage] = useState(1);

	const { pokemonIndexArray } = useSetPokemonCards({ page });

	const handlePageClick = (page: number) => {
		setPage(page);
	};

	console.log(page);

	return (
		<>
			<PaginationBar handleClick={handlePageClick} />
			<StyledContent>
				{pokemonIndexArray.map((index) => (
					<PokeApiCard identifier={`${index}`} key={index} />
				))}
			</StyledContent>
		</>
	);
}

export default Pokedex;
