import { paginationUtils } from "@/components/molecules/Pagination/Pagination.utils";

const LOW_NUMBER_OF_PAGES = 10;
const HIGH_NUMBER_OF_PAGES = 64;

describe("Pagination utils", () => {
	describe("getCurrentPagination", () => {
		test.each`
			numberOfPages           | page  | expectedResult
			${LOW_NUMBER_OF_PAGES}  | ${1}  | ${[1, 2, 3, 4]}
			${LOW_NUMBER_OF_PAGES}  | ${2}  | ${[1, 2, 3, 4]}
			${LOW_NUMBER_OF_PAGES}  | ${3}  | ${[1, 2, 3, 4]}
			${LOW_NUMBER_OF_PAGES}  | ${4}  | ${[1, 2, 3, 4]}
			${LOW_NUMBER_OF_PAGES}  | ${5}  | ${[4, 5, 6]}
			${LOW_NUMBER_OF_PAGES}  | ${6}  | ${[5, 6, 7]}
			${LOW_NUMBER_OF_PAGES}  | ${7}  | ${[7, 8, 9, 10]}
			${LOW_NUMBER_OF_PAGES}  | ${8}  | ${[7, 8, 9, 10]}
			${LOW_NUMBER_OF_PAGES}  | ${9}  | ${[7, 8, 9, 10]}
			${LOW_NUMBER_OF_PAGES}  | ${10} | ${[7, 8, 9, 10]}
			${HIGH_NUMBER_OF_PAGES} | ${4}  | ${[1, 2, 3, 4]}
			${HIGH_NUMBER_OF_PAGES} | ${19} | ${[18, 19, 20]}
			${HIGH_NUMBER_OF_PAGES} | ${62} | ${[61, 62, 63, 64]}
		`(
			"Returns $expectedResult when page $page is selected",
			({ numberOfPages, page, expectedResult }) => {
				const result = paginationUtils.getCurrentPagination(numberOfPages, page);
				expect(result).toEqual(expectedResult);
			}
		);
	});
});
