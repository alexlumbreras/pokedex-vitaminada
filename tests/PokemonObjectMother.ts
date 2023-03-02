import { Pokemon } from "@/core/domain/Pokemon.model";
import "@faker-js/faker";
import { faker } from "@faker-js/faker";

const create = (params?: Partial<Pokemon>): Pokemon => {
	const defaultParams = {
		name: faker.helpers.unique(faker.random.word),
		index: faker.datatype.number({ min: 100, max: 999 }),
		imageUrl: `${faker.internet.url}`,
		types: {
			firstType: faker.random.word(),
			secondType: faker.random.word(),
		},
		weight: faker.datatype.number({ max: 999 }),
		height: faker.datatype.number({ max: 999 }),
		description: faker.random.words(20),
		...params,
	};

	return defaultParams;
};

export const pokemonObjectMother = {
	create,
};
