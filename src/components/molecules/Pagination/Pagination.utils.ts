import {
	MINIMUM_NUMERIC_PAGE_COUNT,
	PAGES_TO_SHOW,
} from "./Pagination.constants";

export const shouldShowFirstPages = (currentPage: number): boolean =>
	currentPage <= PAGES_TO_SHOW;

export const shouldShowLastPages = (
	currentPage: number,
	totalPages: number
): boolean => totalPages - currentPage < PAGES_TO_SHOW;

const getCurrentPagination = (totalPages: number, currentPage: number) => {
	const isFirstPages = shouldShowFirstPages(currentPage);
	const isLastPages = shouldShowLastPages(currentPage, totalPages);
	const pagesToShow =
		MINIMUM_NUMERIC_PAGE_COUNT + Number(isFirstPages) + Number(isLastPages);

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
