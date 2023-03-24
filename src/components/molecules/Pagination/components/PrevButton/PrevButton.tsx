import { StyledButton } from "@/components/molecules/Pagination/Pagination.styled";

type PrevButtonProps = {
	onClick: () => void;
	disabled: boolean;
};

export const PrevButton: React.FC<PrevButtonProps> = ({
	onClick,
	disabled,
}) => {
	return (
		<StyledButton onClick={onClick} disabled={disabled}>
			&lt;
		</StyledButton>
	);
};
