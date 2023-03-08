import { Card } from "../molecules/Card";
import { useFetchPokemonData } from "./useFetchPokemonData";

export const PokeApiCard = ({ identifier }: { identifier: string }) => {
	const { pokemon, isLoading } = useFetchPokemonData(identifier);

	if (isLoading || !pokemon) {
		return <span>Loading...</span>;
	}

	return <Card pokemon={pokemon} />;
};
