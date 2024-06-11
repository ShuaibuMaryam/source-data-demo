import styled from "styled-components";

export const Container = styled.div`
  background: #DB0090;
  color: #fff;
	margin: 0 auto;
	padding: 90px;
	@media (min-width: 992px) {
		.hide-desktop {
			display: none;
		}
	}
	@media (max-width: 992px) {
		padding: 1.5rem;
		.hide-mobile {
			display: none;
		}
	}
`;

export const GridOne = styled.div`
	display: grid;
	gap: 1rem;
	max-width: 2000px;
	margin: 0 auto;

	@media (max-width: 600px) {
		grid-template-columns: 100%;
	}
	@media (min-width: 992px) {
		grid-template-columns: repeat(5, 1fr);
	}
`;




