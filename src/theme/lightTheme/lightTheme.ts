import { Theme } from "@/theme/theme";
import { colors } from "@/theme/foundations/colors";
import { fonts } from "@/theme/foundations/fonts";
import { spaces } from "@/theme/foundations/spaces";

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
