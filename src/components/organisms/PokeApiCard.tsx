import { Pokemon } from "@/core/domain/Pokemon.model";
import { pokemonService } from "@/core/service/pokemon.service";
import { useEffect, useState } from "react";
import { Tag } from "@/components/atoms/Tag";
import {
	StyledCardContent,
	StyledCardDescription,
	StyledCardHeader,
	StyledCardImage,
	StyledCardIndex,
	StyledCardInformation,
	StyledCardMeasure,
	StyledCardMeasureData,
	StyledCardMeasureName,
	StyledCardMeasures,
	StyledCardName,
	StyledCardTypes,
	StyledPokeApiCard,
} from "./PokeApiCard.styled";

export const PokeApiCard = () => {
	const [pokemon, setPokemon] = useState<Pokemon>();

	const getPokemon = async () => {
		const pokemon = await pokemonService.getPokemon();
		setPokemon(pokemon);
	};

	useEffect(() => {
		getPokemon();
	}, []);

	const getFormattedMeasure = (measure: number): string =>
		measure.toString().replace(".", ",");

	const getFormattedIndex = (index: number): string =>
		`#${index.toString().padStart(3, "0")}`;

	return !!pokemon ? (
		<StyledPokeApiCard type={pokemon.types.firstType}>
			<StyledCardHeader>
				<StyledCardName>{pokemon.name}</StyledCardName>
				<StyledCardIndex>{getFormattedIndex(pokemon.index)}</StyledCardIndex>
			</StyledCardHeader>

			<StyledCardContent>
				<StyledCardImage src={pokemon.imageUrl} alt={pokemon.name} />

				<StyledCardInformation>
					<StyledCardTypes>
						<Tag label={pokemon.types.firstType} type={pokemon.types.firstType} />
						<Tag label={pokemon.types.secondType} type={pokemon.types.secondType} />
					</StyledCardTypes>

					<StyledCardMeasures>
						<StyledCardMeasure>
							<StyledCardMeasureData>
								<p>{getFormattedMeasure(pokemon.weight / 10)} kg</p>
							</StyledCardMeasureData>
							<StyledCardMeasureName>Weight</StyledCardMeasureName>
						</StyledCardMeasure>

						<StyledCardMeasure>
							<StyledCardMeasureData>
								<p>{getFormattedMeasure(pokemon.height / 10)} m</p>
							</StyledCardMeasureData>
							<StyledCardMeasureName>Height</StyledCardMeasureName>
						</StyledCardMeasure>
					</StyledCardMeasures>

					<StyledCardDescription>{pokemon.description}</StyledCardDescription>
				</StyledCardInformation>
			</StyledCardContent>
		</StyledPokeApiCard>
	) : (
		<span></span>
	);
};
