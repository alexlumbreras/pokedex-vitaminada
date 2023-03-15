import { paginationUtils } from "@/components/molecules/Pagination/Pagination.utils";

const POKEMON_LIST_API_LENGTH = 1281;
const NUMBER_OF_PAGES = Math.ceil(POKEMON_LIST_API_LENGTH / 6);

const pokemonsPerPage = 3;

describe("getCurrentIndexPerPage utility", () => {
	test.each`
		page                   | expectedResult
		${1}                   | ${[1, 2, 3, 4, 214]}
		${2}                   | ${[1, 2, 3, 4, 214]}
		${3}                   | ${[1, 2, 3, 4, 214]}
		${4}                   | ${[1, 2, 3, 4, 214]}
		${5}                   | ${[1, 4, 5, 6, 214]}
		${6}                   | ${[1, 5, 6, 7, 214]}
		${NUMBER_OF_PAGES - 4} | ${[1, 209, 210, 211, 214]}
		${NUMBER_OF_PAGES - 3} | ${[1, 211, 212, 213, 214]}
		${NUMBER_OF_PAGES - 2} | ${[1, 211, 212, 213, 214]}
		${NUMBER_OF_PAGES - 1} | ${[1, 211, 212, 213, 214]}
		${NUMBER_OF_PAGES}     | ${[1, 211, 212, 213, 214]}
	`(
		"Returns $expectedResult when page $page is selected",
		({ page, expectedResult }) => {
			const result = paginationUtils.getCurrentPagination(
				NUMBER_OF_PAGES,
				page,
				pokemonsPerPage
			);
			expect(result).toEqual(expectedResult);
		}
	);
});
