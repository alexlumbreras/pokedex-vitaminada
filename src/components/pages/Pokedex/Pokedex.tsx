import { Pagination } from "@/components/molecules/Pagination";
import { paginationUtils } from "@/components/molecules/Pagination/Pagination.utils";
import { useFetchPokemonList } from "@/components/molecules/SearchBar/useFetchPokemonList";
import { PokeApiCard } from "@/components/organisms/PokeApiCard";
import { useState } from "react";
import { StyledContent, StyledPokedexWrapper } from "./Pokedex.styled";
import { pokedexUtils } from "./Pokedex.utils";

function Pokedex() {
	const [page, setPage] = useState<number>(1);
	const { pokemonList } = useFetchPokemonList();
	const numberOfPokemons = pokemonList.length;
	const numberOfPages = Math.ceil(numberOfPokemons / 6);
	const paginationLength = 3;

	const arrayPokemonIndex = pokedexUtils.getPokemonIndexArray(
		pokemonList,
		numberOfPokemons,
		page
	);

	const handlePrevClick = () => {
		page > 1 && setPage(page - 1);
	};

	const handleNextClick = () => {
		page < numberOfPages && setPage(page + 1);
	};

	const handlePageClick = (page: number) => {
		setPage(page);
	};

	const isLastPage = page === numberOfPages;

	const isFirstPage = page === 1;

	const paginationArray = paginationUtils.getCurrentPagination(
		numberOfPages,
		page,
		paginationLength
	);

	return (
		<StyledPokedexWrapper>
			{!!paginationArray && (
				<Pagination
					onPrevClick={handlePrevClick}
					onNextClick={handleNextClick}
					onPageClick={handlePageClick}
					isLastPage={isLastPage}
					isFirstPage={isFirstPage}
					paginationIndex={paginationArray}
					pagesLength={numberOfPages}
					currentPage={page}
				/>
			)}
			<StyledContent>
				{!!arrayPokemonIndex &&
					arrayPokemonIndex.map((index) => (
						<PokeApiCard identifier={`${index}`} key={index} />
					))}
			</StyledContent>
		</StyledPokedexWrapper>
	);
}

export default Pokedex;
