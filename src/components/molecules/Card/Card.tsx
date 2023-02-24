import { StyledCard } from "./Card.styled";
import { Tag } from "../../atoms/Tag";
import { Pokemon } from "../../../core/domain/Pokemon.model";

export const Card = (pokemon: Pokemon) => {
	return (
		<StyledCard>
			<div className="header">
				<h4 className="name">{pokemon.name}</h4>
				<p className="index">#{pokemon.index}</p>
			</div>

			<div className="content">
				<img className="image" src={pokemon.imageUrl} alt={pokemon.name} />
				<div className="information">
					<div className="types">
						<Tag label={pokemon.types.firstType} type={pokemon.types.firstType} />
						<Tag label={pokemon.types.secondType} type={pokemon.types.secondType} />
					</div>
					<div className="measures">
						<div className="measure">
							<div className="measure-data">
								<p>{pokemon.weight} kg</p>
							</div>
							<p className="measure-name">Weight</p>
						</div>

						<div className="measure">
							<div className="measure-data">
								<p>{pokemon.height} m</p>
							</div>
							<p className="measure-name">Height</p>
						</div>
					</div>

					<p className="description">{pokemon.description}</p>
				</div>
			</div>
		</StyledCard>
	);
};