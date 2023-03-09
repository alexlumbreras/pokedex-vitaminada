import { useState } from "react";
import { Card } from "@/components/molecules/Card";
import { useFetchPokemonData } from "./useFetchPokemonData";

export const PokeApiCard = ({ identifier }: { identifier: string }) => {
	const { pokemon, isLoading } = useFetchPokemonData(identifier);
	const [imageLoaded, setImageLoaded] = useState<boolean>(false);

	return (
		<Card
			pokemon={pokemon}
			onImageLoaded={() => setImageLoaded(true)}
			isLoading={isLoading || !imageLoaded}
		/>
	);
};
