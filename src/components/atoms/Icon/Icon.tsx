import { useContext } from "react";
import { ThemeContext } from "styled-components";

type Props = {
	icon: React.FC<{
		color: string;
	}>;
	color: string;
	className?: string;
};

export const Icon: React.FC<Props> = ({ icon: SvgIcon, color, className }) => {
	const theme = useContext(ThemeContext);

	const themeColor = theme.colors[color] || theme.themeColors[color];

	return (
		<section className={className}>
			<SvgIcon color={themeColor ?? color} />
		</section>
	);
};
