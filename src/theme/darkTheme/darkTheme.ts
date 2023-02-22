import { Theme } from "../theme";

export const darkTheme: Theme = {
	colors: {
		baseColors: {
			grayScaleA: "#ffffff",
			grayScaleB: "#e0e0e0",
			grayScaleC: "#666666",
			grayScaleD: "#f7f7f7",
			grayScaleE: "#212121",
		},

		typeColors: {
			normal: "#aaa67f",
			ground: "#dec16b",
			electric: "#f9cf30",
			rock: "#b69e31",
			dark: "#75574c",
			fire: "#f57d31",
			fairy: "#e69eac",
			psychic: "#fb5584",
			fighting: "#c12239",
			poison: "#a43e9e",
			dragon: "#7037ff",
			ghost: "#70559b",
			flying: "#a891ec",
			steel: "#b7b9d0",
			water: "#6493eb",
			ice: "#9ad6df",
			grass: "#74cb48",
			bug: "#a7b723",
		},
	},

	fonts: {
		fontFamily: "Poppins, sans-serif",

		fontWeight: {
			regular: "400",
			bold: "700",
		},

		heading: {
			textSize: {
				s: "1.8rem",
				m: "2.4rem",
				l: "3.2rem",
			},

			textHeight: {
				s: "2.8rem",
				m: "3.2rem",
				l: "3.6rem",
			},
		},

		body: {
			textSize: {
				xs: "1.2rem",
				s: "1.4rem",
				m: "1.6rem",
				l: "1.8rem",
			},

			textHeight: {
				xs: "1.6rem",
				s: "2rem",
				m: "2.4rem",
				l: "2.4rem",
			},
		},
	},
	spaces: {
		xxs: "0.4rem",
		xs: "0.8rem",
		s: "1.2rem",
		m: "1.6rem",
		l: "2.4rem",
		xl: "3.2rem",
		xxl: "4.8rem",
	},
};
