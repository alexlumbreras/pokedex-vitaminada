import styled from "styled-components";

export const StyledFooter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: ${({ theme }) => theme.spaces.xs};

	border-top: 1px solid ${({ theme }) => theme.themeColors.textColor};

	.logo {
		padding: 0 ${({ theme }) => theme.spaces.s};
	}

	.logo:not(:last-child) {
		border-right: 1px solid ${({ theme }) => theme.themeColors.textColor};
	}
`;
