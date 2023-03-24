import { StyledButton } from "@/components/molecules/Pagination/Pagination.styled";

type NextButtonProps = {
	onClick: () => void;
	disabled: boolean;
};

export const NextButton: React.FC<NextButtonProps> = ({
	onClick,
	disabled,
}) => {
	return (
		<StyledButton onClick={onClick} disabled={disabled}>
			&gt;
		</StyledButton>
	);
};
