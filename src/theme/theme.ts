export interface Theme {
	colors: {
		grayScaleA: string;
		grayScaleB: string;
		grayScaleC: string;
		grayScaleD: string;
		grayScaleE: string;
		grayScaleF: string;
		blue: string;
		darkGreen: string;
		yellow: string;
		lightYellow: string;

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
				xl: string;
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

	borderRadius: {
		s: string;
		m: string;
		l: string;
		xl: string;
	};

	themeColors: {
		mainColor: string;
		secondaryColor: string;
		textColor: string;
		hoverColor: string;
		disabledColor: string;
		errorBackgroundColor: string;
		errorTextColor: string;
		errorHoverColor: string;
	};
}
