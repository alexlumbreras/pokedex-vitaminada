const NUMERIC_PAGINATION_BUTTONS = 3;

const getCurrentPagination = (numberofPages: number, currentPage: number) => {
	const paginationArray: number[] = [];
	const firstFourPages: boolean = currentPage <= 4;
	const lastFourPages: boolean = numberofPages - currentPage < 4;

	const addPagetoPaginationArray = (page: number) => {
		paginationArray.push(page);
	};

	const createArray = (paginationButtonsLength: number) => {
		return Array.from(Array(paginationButtonsLength).keys());
	};

	if (!firstFourPages && !lastFourPages) {
		addPagetoPaginationArray(1);
		const auxiliaryArray = createArray(NUMERIC_PAGINATION_BUTTONS);
		auxiliaryArray.map((arrayElement) => {
			addPagetoPaginationArray(currentPage + arrayElement - 1);
		});
		addPagetoPaginationArray(numberofPages);

		return paginationArray;
	}

	if (firstFourPages) {
		const auxiliaryArray = createArray(NUMERIC_PAGINATION_BUTTONS + 1);
		auxiliaryArray.map((arrayElement) => {
			addPagetoPaginationArray(arrayElement + 1);
		});
		addPagetoPaginationArray(numberofPages);

		return paginationArray;
	}

	if (lastFourPages) {
		addPagetoPaginationArray(1);
		const auxiliaryArray = createArray(NUMERIC_PAGINATION_BUTTONS + 1);
		auxiliaryArray.map((arrayElement) => {
			addPagetoPaginationArray(
				numberofPages + arrayElement - NUMERIC_PAGINATION_BUTTONS
			);
		});

		return paginationArray;
	}
};

export const paginationUtils = {
	getCurrentPagination,
};
