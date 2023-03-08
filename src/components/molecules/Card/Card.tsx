import {
	StyledCard,
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
} from "./Card.styled";
import { Tag } from "@/components/atoms/Tag";
import { Pokemon } from "@/core/domain/Pokemon.model";
import { useEffect, useState } from "react";
import { CardLoader } from "../CardLoader";

export const Card = ({ pokemon }: { pokemon: Pokemon }) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const formattedIndex: string = `#${pokemon.index.toString().padStart(3, "0")}`;

	const getFormattedMeasure = (measure: number): string =>
		measure.toString().replace(".", ",");

	const handleLoad = () => {
		setIsLoading(false);
		console.log("imagen cargada");
	};

	const firstType = pokemon.types.firstType;
	const secondType = pokemon.types.secondType;

	return (
		<>
			{isLoading && <CardLoader />}
			<StyledCard type={firstType}>
				<StyledCardHeader>
					<StyledCardName>{pokemon.name}</StyledCardName>
					<StyledCardIndex>{formattedIndex}</StyledCardIndex>
				</StyledCardHeader>

				<StyledCardContent>
					<StyledCardImage
						src={pokemon.imageUrl}
						alt={pokemon.name}
						onLoad={handleLoad}
					/>

					<StyledCardInformation>
						<StyledCardTypes>
							<Tag label={firstType} type={firstType} />
							<Tag label={secondType} type={secondType} />
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
			</StyledCard>
		</>
	);
};
