import { StyledButton } from "@/components/molecules/Pagination/Pagination.styled";

type PageButtonProps = {
	onPageClick: (index: number) => void;
	currentPage: number;
	pages: number[];
	pagesLength: number;
};

export const PageButtons: React.FC<PageButtonProps> = ({
	onPageClick,
	currentPage,
	pages,
	pagesLength,
}) => {
	const firstPages = currentPage <= 4;
	const lastPages = pagesLength - currentPage < 4;

	const isPageActive = (page: number) => currentPage === page;

	return (
		<>
			{!firstPages && (
				<StyledButton onClick={() => onPageClick(1)}>1...</StyledButton>
			)}

			{pages.map((page) => (
				<StyledButton
					onClick={() => onPageClick(page)}
					isActive={isPageActive(page)}
				>
					{page}
				</StyledButton>
			))}

			{!lastPages && (
				<StyledButton onClick={() => onPageClick(pagesLength)}>
					...{pagesLength}
				</StyledButton>
			)}
		</>
	);
};
