import { colors } from "../foundations/colors";
import { fonts } from "../foundations/fonts";
import { spaces } from "../foundations/spaces";
import { Theme } from "../theme";

export const darkTheme: Theme = {
	colors: colors,
	fonts: fonts,
	spaces: spaces,
	themeColors: {
		mainColor: colors.grayScaleE,
		secondaryColor: colors.grayScaleC,
		textColor: colors.grayScaleA,
	},
};
