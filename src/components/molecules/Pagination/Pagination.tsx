import { StyledButton, StyledPagination } from "./Pagination.styled";

type Props = {
	onPrevClick: () => void;
	onNextClick: () => void;
	onPageClick: (index: number) => void;
	isLastPage: boolean;
	isFirstPage: boolean;
	paginationIndex: number[];
	pagesLength: number;
	currentPage: number;
};

export const Pagination: React.FC<Props> = ({
	onPrevClick,
	onNextClick,
	onPageClick,
	isLastPage,
	isFirstPage,
	paginationIndex,
	pagesLength,
	currentPage,
}) => {
	return (
		<StyledPagination>
			<StyledButton onClick={onPrevClick} disabled={isFirstPage}>
				{"<"}
			</StyledButton>
			{currentPage <= 4 ? (
				<StyledButton
					onClick={() => onPageClick(1)}
					className={currentPage == 1 ? "active-button" : undefined}
				>
					{"1"}
				</StyledButton>
			) : (
				<StyledButton
					onClick={() => onPageClick(1)}
					className={currentPage == 1 ? "active-button" : undefined}
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
							className={currentPage == page ? "active-button" : undefined}
						>{`${page}`}</StyledButton>
					)
			)}
			{pagesLength - currentPage < 4 ? (
				<StyledButton
					onClick={() => onPageClick(pagesLength)}
					className={currentPage == pagesLength ? "active-button" : undefined}
				>{`${pagesLength}`}</StyledButton>
			) : (
				<StyledButton
					onClick={() => onPageClick(pagesLength)}
					className={currentPage == pagesLength ? "active-button" : undefined}
					style={{ fontWeight: "bold" }}
				>{`...${pagesLength}`}</StyledButton>
			)}
			<StyledButton onClick={onNextClick} disabled={isLastPage}>
				{">"}
			</StyledButton>
		</StyledPagination>
	);
};
