import React from "react";
import { PokemonList } from "@/core/domain/PokemonList.model";
import { StyledList, StyledListItem } from "./SuggestionsList.styled";

type Props = {
	filteredSuggestions: PokemonList;
	searchTerm: string;
	onSuggestionClick: (suggestion: string) => void;
};
export const SuggestionsList: React.FC<Props> = ({
	filteredSuggestions,
	searchTerm,
	onSuggestionClick,
}) => {
	const handleSuggestionClick = (suggestion: string) => {
		onSuggestionClick(suggestion);
	};

	return (
		<StyledList>
			{filteredSuggestions.map((suggestion: string) => (
				<StyledListItem
					onClick={() => handleSuggestionClick(suggestion)}
					dangerouslySetInnerHTML={{
						__html: suggestion.replace(
							searchTerm.toLowerCase(),
							`<strong>${searchTerm.toLowerCase()}</strong>`
						),
					}}
				/>
			))}
		</StyledList>
	);
};
