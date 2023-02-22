export interface PokemonProps {
	name: string;
	index: string;
	imageUrl: string;
	types: {
		firstType: string;
		secondType: string;
	};
	weight: string;
	height: string;
	description: string;
}

export const Pokemon: PokemonProps = {
	name: "Bulbasaur",
	index: "001",
	imageUrl:
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	types: {
		firstType: "grass",
		secondType: "poison",
	},
	weight: "6.9",
	height: "0.7",
	description:
		"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
};
