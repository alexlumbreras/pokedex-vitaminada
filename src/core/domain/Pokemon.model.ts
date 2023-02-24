export interface Pokemon {
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
