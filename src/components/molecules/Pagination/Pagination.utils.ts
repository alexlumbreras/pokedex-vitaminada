const getCurrentPagination = (
	numberofPages: number,
	currentPage: number,
	paginationLength: number
) => {
	const output: number[] = [];

	if (currentPage > 4 && numberofPages - currentPage >= 4) {
		output.push(1);

		const array = Array.from(Array(paginationLength).keys());
		array.map((index) => {
			const newIndex = currentPage - 1 + index;
			output.push(newIndex);
		});
		output.push(numberofPages);
		return output;
	}

	if (currentPage <= 4) {
		const array = Array.from(Array(paginationLength + 1).keys());
		array.map((index) => {
			const newIndex = index + 1;
			output.push(newIndex);
		});
		output.push(numberofPages);
		return output;
	}

	if (numberofPages - currentPage < 4) {
		output.push(1);
		const array = Array.from(Array(paginationLength + 1).keys());
		array.map((index) => {
			const newIndex = numberofPages - paginationLength + index;
			output.push(newIndex);
		});
		return output;
	}
};

export const paginationUtils = {
	getCurrentPagination,
};
