import { useContext } from "react";
import { ThemeContext } from "styled-components";

type Props = {
	icon: React.FC<{
		color: string;
	}>;
	color: string;
};

export const Icon: React.FC<Props> = ({ icon: SvgIcon, color }) => {
	const theme = useContext(ThemeContext);

	const themeColor = theme.colors[color] || theme.themeColors[color];

	return <SvgIcon color={themeColor ?? color} />;
};
