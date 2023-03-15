import { StyledButton } from "@/components/molecules/Pagination/Pagination.styled";

type PageButtonProps = {
	onPageClick: (index: number) => void;
	currentPage: number;
	paginationIndex: number[];
	pagesLength: number;
};

export const PageButtons: React.FC<PageButtonProps> = ({
	onPageClick,
	currentPage,
	paginationIndex,
	pagesLength,
}) => {
	const firstFourPages = currentPage <= 4;
	const lastFourPages = pagesLength - currentPage < 4;
	const buttonStatus = (page: number) =>
		currentPage == page ? "active-button" : undefined;

	return (
		<>
			{firstFourPages ? (
				<StyledButton onClick={() => onPageClick(1)} className={buttonStatus(1)}>
					{"1"}
				</StyledButton>
			) : (
				<StyledButton
					onClick={() => onPageClick(1)}
					className={buttonStatus(1)}
					style={{ fontWeight: "bold" }}
				>
					{"1..."}
				</StyledButton>
			)}
			{paginationIndex.map(
				(page) =>
					page !== 1 &&
					page !== pagesLength && (
						<StyledButton
							onClick={() => onPageClick(page)}
							className={buttonStatus(page)}
						>{`${page}`}</StyledButton>
					)
			)}
			{lastFourPages ? (
				<StyledButton
					onClick={() => onPageClick(pagesLength)}
					className={buttonStatus(pagesLength)}
				>{`${pagesLength}`}</StyledButton>
			) : (
				<StyledButton
					onClick={() => onPageClick(pagesLength)}
					className={buttonStatus(pagesLength)}
					style={{ fontWeight: "bold" }}
				>{`...${pagesLength}`}</StyledButton>
			)}
		</>
	);
};
