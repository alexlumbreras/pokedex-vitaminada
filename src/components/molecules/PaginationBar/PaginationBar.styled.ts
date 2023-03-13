import styled from "styled-components";

export const StyledPaginationBar = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
export const StyledButton = styled.button`
	border: none;

	padding: 8px 16px;
	font-size: 16px;
	background-color: #e0e0e0;
	cursor: pointer;

	:hover {
		background-color: white;
		border-radius: 12px;
	}

	:active {
		font-weight: bold;
	}
`;
