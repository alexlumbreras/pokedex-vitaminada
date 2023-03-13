import { useEffect, useState } from "react";

export const useSetPokemonCards = () => {
	const [pokemonIndexArray, setPokemonIndexArray] = useState([1, 2, 3, 4, 5, 6]);
	const [page, setPage] = useState(1);

	const changeIndexArray = (indexArray: number[]): void => {
		if (page !== 1) {
			const newArray = indexArray.map((index) => index + 6);
			setPokemonIndexArray(newArray);
		}
	};

	useEffect(() => {
		changeIndexArray(pokemonIndexArray);
	}, [page]);

	const handleClick = () => {
		setPage(page + 1);
	};

	return { pokemonIndexArray, handleClick };
};
