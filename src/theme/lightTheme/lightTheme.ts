import { Theme } from "../theme";
import { colors } from "../foundations/colors";
import { fonts } from "../foundations/fonts";
import { spaces } from "../foundations/spaces";

export const lightTheme: Theme = {
	colors: colors,
	fonts: fonts,
	spaces: spaces,
	themeColors: {
		mainColor: colors.grayScaleA,
		secondaryColor: colors.grayScaleB,
		textColor: colors.grayScaleE,
	},
};
