import { NextButton } from "./components/NextButton";
import { PageButtons } from "./components/PageButtons";
import { PrevButton } from "./components/PrevButton";
import { StyledPagination } from "./Pagination.styled";

type Props = {
	onPrevClick: () => void;
	onNextClick: () => void;
	onPageClick: (index: number) => void;
	isLastPage: boolean;
	isFirstPage: boolean;
	pages: number[];
	pagesLength: number;
	currentPage: number;
};

export const Pagination: React.FC<Props> = ({
	onPrevClick,
	onNextClick,
	onPageClick,
	isLastPage,
	isFirstPage,
	pages,
	pagesLength,
	currentPage,
}) => {
	return (
		<StyledPagination>
			<PrevButton onClick={onPrevClick} disabled={isFirstPage} />
			<PageButtons
				onPageClick={onPageClick}
				currentPage={currentPage}
				pages={pages}
				pagesLength={pagesLength}
			/>
			<NextButton onClick={onNextClick} disabled={isLastPage} />
		</StyledPagination>
	);
};
