export interface Theme {
	colors: {
		baseColors: {
			grayScaleA: string;
			grayScaleB: string;
			grayScaleC: string;
			grayScaleD: string;
			grayScaleE: string;
		};

		typeColors: {
			normal: string;
			ground: string;
			electric: string;
			rock: string;
			dark: string;
			fire: string;
			fairy: string;
			psychic: string;
			fighting: string;
			poison: string;
			dragon: string;
			ghost: string;
			flying: string;
			water: string;
			steel: string;
			ice: string;
			grass: string;
			bug: string;
		};
	};

	fonts: {
		fontFamily: string;

		fontWeight: {
			regular: string;
			bold: string;
		};

		heading: {
			textSize: {
				s: string;
				m: string;
				l: string;
			};

			textHeight: {
				s: string;
				m: string;
				l: string;
			};
		};

		body: {
			textSize: {
				xs: string;
				s: string;
				m: string;
				l: string;
			};

			textHeight: {
				xs: string;
				s: string;
				m: string;
				l: string;
			};
		};
	};
	spaces: {
		xxs: string;
		xs: string;
		s: string;
		m: string;
		l: string;
		xl: string;
		xxl: string;
	};
}
