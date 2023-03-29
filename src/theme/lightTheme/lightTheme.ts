import { Theme } from "@/theme/theme";
import { colors } from "@/theme/foundations/colors";
import { fonts } from "@/theme/foundations/fonts";
import { spaces } from "@/theme/foundations/spaces";
import { borderRadius } from "@/theme/foundations/borderRadius";

export const lightTheme: Theme = {
	colors: colors,
	fonts: fonts,
	spaces: spaces,
	borderRadius: borderRadius,
	themeColors: {
		mainColor: colors.grayScaleA,
		secondaryColor: colors.grayScaleB,
		textColor: colors.grayScaleE,
		hoverColor: colors.blueScaleC,
		disabledColor: colors.grayScaleF,
		error404BackgroundColor: colors.darkGreen,
		error404TextColor: colors.yellow,
		error404HoverColor: colors.lightYellow,
		errorBackgroundColor: colors.blueScaleA,
		errorTextColor: colors.blueScaleB,
	},
};
