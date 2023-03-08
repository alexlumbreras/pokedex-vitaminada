import { Card } from "../molecules/Card";
import { CardLoader } from "../molecules/CardLoader";
import { useFetchPokemonData } from "./useFetchPokemonData";

export const PokeApiCard = ({ identifier }: { identifier: string }) => {
	const { pokemon, isLoading } = useFetchPokemonData(identifier);

	if (isLoading || !pokemon) {
		return <CardLoader />;
	}

	return <Card pokemon={pokemon} />;
};
