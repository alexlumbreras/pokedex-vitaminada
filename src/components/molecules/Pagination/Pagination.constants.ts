export const NUMERIC_PAGINATION_BUTTONS = 3;

export const firstFourPages = (currentPage: number): boolean =>
	currentPage <= 4;
export const lastFourPages = (
	currentPage: number,
	totalPages: number
): boolean => totalPages - currentPage < 4;
