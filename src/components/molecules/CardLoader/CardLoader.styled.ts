import styled from "styled-components";

export const StyledCardLoader = styled.section`
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	height: 400px;
	max-width: 360px;

	padding: ${({ theme }) => theme.spaces.xxs};
	border-radius: ${({ theme }) => theme.spaces.s};
	box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
	background-color: dodgerblue;
`;

export const StyledLogoImage = styled.img`
	width: 270px;
	height: 100px;
`;

export const StyledLoaderImage = styled.img`
	width: 200px;
	height: 200px;

	-webkit-animation-name: spin;
	-webkit-animation-duration: 3000ms;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
	-moz-animation-name: spin;
	-moz-animation-duration: 3000ms;
	-moz-animation-iteration-count: infinite;
	-moz-animation-timing-function: linear;
	-ms-animation-name: spin;
	-ms-animation-duration: 3000ms;
	-ms-animation-iteration-count: infinite;
	-ms-animation-timing-function: linear;
	animation-name: spin;
	animation-duration: 3000ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;

	@-ms-keyframes spin {
		from {
			-ms-transform: rotate(0deg);
		}
		to {
			-ms-transform: rotate(360deg);
		}
	}

	@-moz-keyframes spin {
		from {
			-moz-transform: rotate(0deg);
		}
		to {
			-moz-transform: rotate(360deg);
		}
	}

	@-webkit-keyframes spin {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
