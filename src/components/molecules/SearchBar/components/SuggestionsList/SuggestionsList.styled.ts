import styled from "styled-components";

export const StyledList = styled.ul`
	/* height: auto;
	width: 300px;
	background-color: white; */

	position: absolute;
	top: calc(48px + 16px);
	left: 0;

	width: 100%;
	max-height: 400px;

	list-style: none;
	margin: 0;
	padding: 0;

	border-radius: 24px;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

	overflow: auto;
	background-color: white;
`;

export const StyledListItem = styled.li`
	font-size: ${({ theme }) => theme.fonts.body.textSize.l};

	height: 48px;
	padding: 16px;

	display: flex;
	align-items: center;

	cursor: pointer;

	:hover {
		background-color: #fafafa;
	}

	:not(:last-child) {
		border-bottom: 1px solid #eee;
	}
`;
