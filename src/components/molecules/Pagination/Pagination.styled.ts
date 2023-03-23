import styled from "styled-components";

export const StyledPagination = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledButton = styled.button<{ isActive?: boolean }>`
	width: 60px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #dee2e6;
	background-color: #ffffff;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
	padding: 10px 15px;
	color: #000000;
	font-size: 16px;
	text-decoration: none;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out;
	cursor: pointer;

	:first-child {
		border-top-left-radius: 15px;
		border-bottom-left-radius: 15px;
	}

	:last-child {
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
	}

	:not(:first-child) {
		margin-left: -1px;
	}

	:disabled {
		color: grey;
		background-color: #e9ecef;
		pointer-events: none;
	}

	:hover {
		color: #0a58ca;
		background-color: #e9ecef;
	}

	${({ isActive }) =>
		isActive &&
		`color: white;
	background-color: #0a58ca;
	font-weight: bold;
	z-index: 3;
	height: 45px;`}
`;
