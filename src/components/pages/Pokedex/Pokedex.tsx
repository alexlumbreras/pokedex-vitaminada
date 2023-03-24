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

	const arrayPokemonIndex = pokedexUtils.getPokemonIdentifiersByPage(
		pokemonList,
		page
	);

	const paginationArray = paginationUtils.getCurrentPagination(
		numberOfPages,
		page
	);

	const isFirstPage = page === 1;
	const isLastPage = page === numberOfPages;

	const handlePrevClick = () => {
		!isFirstPage && setPage(page - 1);
	};

	const handleNextClick = () => {
		!isLastPage && setPage(page + 1);
	};

	const handlePageClick = (page: number) => {
		setPage(page);
	};

	return (
		<StyledPokedexWrapper>
			{!!paginationArray && (
				<Pagination
					onPrevClick={handlePrevClick}
					onNextClick={handleNextClick}
					onPageClick={handlePageClick}
					isLastPage={isLastPage}
					isFirstPage={isFirstPage}
					pages={paginationArray}
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
