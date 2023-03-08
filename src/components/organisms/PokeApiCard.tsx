import { Pokemon } from "@/core/domain/Pokemon.model";
import { pokemonService } from "@/core/service/pokemon.service";
import { useEffect, useState } from "react";
import { StyledPokeApiCard } from "./PokeApiCard.styled";

export const PokeApiCard = () => {
	const [pokemon, setPokemon] = useState<Pokemon>();

	const getPokemon = async () => {
		const pokemon = await pokemonService.getPokemon();
		setPokemon(pokemon);
	};

	useEffect(() => {
		getPokemon();
	}, []);
	return <StyledPokeApiCard>PokeApiCard Placeholder</StyledPokeApiCard>;
};
