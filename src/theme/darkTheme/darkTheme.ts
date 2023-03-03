import { colors } from "@/theme/foundations/colors";
import { fonts } from "@/theme/foundations/fonts";
import { spaces } from "@/theme/foundations/spaces";
import { Theme } from "@/theme/theme";

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
