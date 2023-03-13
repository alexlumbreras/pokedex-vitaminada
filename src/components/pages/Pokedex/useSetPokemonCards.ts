import { useEffect, useState } from "react";

export const useSetPokemonCards = ({ page }: { page: number }) => {
	const baseIndex = [1, 2, 3, 4, 5, 6];
	const [pokemonIndexArray, setPokemonIndexArray] = useState<number[]>([]);

	const changeIndexArray = (indexArray: number[], page: number): void => {
		if (page !== 1) {
			const newArray = indexArray.map((index) => index + 6 * (page - 1));
			setPokemonIndexArray(newArray);
			return;
		}

		setPokemonIndexArray(baseIndex);
	};

	useEffect(() => {
		changeIndexArray(baseIndex, page);
	}, [page]);

	console.log(pokemonIndexArray);

	return { pokemonIndexArray };
};
