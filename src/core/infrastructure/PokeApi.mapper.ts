import { Pokemon } from "@/core/domain/Pokemon.model";
import { PokemonDTO } from "./PokeApi.dto";

const mapData = (pokemon: PokemonDTO): Pokemon => {
	return {
		name: pokemon.name,
		index: pokemon.id,
		imageUrl: pokemon.sprites.other["official-artwork"].front_default,
		types: {
			firstType: pokemon.types[0].type.name,
			secondType: pokemon.types[1]?.type.name,
		},
		weight: pokemon.weight,
		height: pokemon.height,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, sapien quis rhoncus commodo, ex ante euismod augue, a sollicitudin.",
	};
};

export const pokeApiMapper = {
	mapData,
};
