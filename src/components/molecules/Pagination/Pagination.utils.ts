import {
	firstFourPages,
	lastFourPages,
	NUMERIC_PAGINATION_BUTTONS,
} from "./Pagination.constants";

const getCurrentPagination = (totalPages: number, currentPage: number) => {
	const isFirstPages = firstFourPages(currentPage);
	const isLastPages = lastFourPages(currentPage, totalPages);
	const pagesToShow =
		NUMERIC_PAGINATION_BUTTONS + Number(isFirstPages) + Number(isLastPages);

	const getPageNumbers = (startingPageNumber: number) =>
		Array.from(
			{ length: pagesToShow },
			(_, pageNumber) => pageNumber + startingPageNumber
		);

	if (isFirstPages) {
		return getPageNumbers(1);
	}

	if (isLastPages) {
		return getPageNumbers(totalPages - pagesToShow + 1);
	}

	return getPageNumbers(currentPage - 1);
};

export const paginationUtils = {
	getCurrentPagination,
};
