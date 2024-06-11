import styled from "styled-components";
import { breakpoints, colors, sizes } from "./theme";

export const Section = styled.div`
	width: 100%;
	padding: 4rem 0;
	margin-inline: auto;
`;

// Hero section styling
export const HeroSection = styled.section`
	min-height: 80vh;
	width: 100%;
	padding-top: 9rem;
	box-shadow: 0 8px 15px 0 rgba(8, 0, 42, 0.18);

	${breakpoints.sm} {
		margin-top: 30px;
	}
`;

export const HeroWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-image: url("/assets/headerbg.png");
	background-repeat: no-repeat;
	background-size: contain;
	position: relative;
	bottom: 2rem;

	${breakpoints.sm} {
		margin-top: -1rem;
	}

	.red-line_small {
		width: 60px;
		height: 5px;
		background: ${colors.primaryColor};
		border-radius: 3px;
		margin-bottom: 1.4rem;
	}

	.headline {
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: 0.085em;
		text-transform: uppercase;
		color: #636363;
		margin-top: 3rem;

		${breakpoints.sm} {
			display: none;
		}
	}
	.heading {
		max-width: 1200px;
	}
	h1 {
		font-weight: 700;
		font-size: 49px;
		line-height: 70px;
		text-align: center;
		color: ${colors.textColor};
		margin: 1rem 0;

		${breakpoints.lg} {
			font-size: 36px;
			line-height: 50px;
		}

		${breakpoints.md} {
			font-size: 28px;
			line-height: 50px;
		}

		${breakpoints.sm} {
			font-size: 24px;
			line-height: 40px;
			text-align: left;
			padding: 0 1rem;
			font-weight: 600;

			span {
				color: #e9000e;
			}
		}
	}
	.red-line {
		width: 120px;
		height: 5px;
		background: ${colors.primaryColor};
		border-radius: 3px;

		${breakpoints.sm} {
			width: 80px;
			height: 3px;
			align-self: flex-start;
			margin-left: 1rem;
			margin-top: -0.5rem;
		}
	}
`;

export const Wrapper = styled.div`
	width: 98%;
	max-width: ${sizes.wrapperWidth};
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	${breakpoints.sm} {
		margin-top: -1rem;
	}

	.red-line_small {
		width: 60px;
		height: 5px;
		background: ${colors.primaryColor};
		border-radius: 3px;
		margin-bottom: 1.4rem;
	}

	.headline {
		font-weight: 400;
		font-size: 18px;
		line-height: 24px;
		letter-spacing: 0.085em;
		text-transform: uppercase;
		color: #636363;

		${breakpoints.sm} {
			display: none;
		}
	}
	h1 {
		font-weight: 700;
		font-size: 46px;
		line-height: 70px;
		text-align: center;
		color: ${colors.textColor};
		margin: 1rem 0;

		${breakpoints.lg} {
			font-size: 36px;
			line-height: 50px;
		}

		${breakpoints.md} {
			font-size: 28px;
			line-height: 50px;
		}

		${breakpoints.sm} {
			font-size: 24px;
			line-height: 40px;
			text-align: left;
			padding: 0 1rem;
			font-weight: 600;

			span {
				color: #e9000e;
			}
		}
	}
	.red-line {
		width: 120px;
		height: 5px;
		background: ${colors.primaryColor};
		border-radius: 3px;

		${breakpoints.sm} {
			width: 80px;
			height: 3px;
			align-self: flex-start;
			margin-left: 1rem;
			margin-top: -0.5rem;
		}
	}
`;
export const Wrapper1 = styled.div`
	width: 100%;
	max-width: ${sizes.wrapperWidth};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
`;
export const Experience = styled.div`
	max-width: 1200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	margin-top: 1rem;
	gap: 2rem;
	width: 100%;

	${breakpoints.sm} {
		flex-direction: column;
	}

	div {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;

		${breakpoints.sm} {
			width: 100%;
			padding-bottom: 1rem;
		}

		h1 {
			font-weight: 800;
			font-size: 180px;
			line-height: 235px;
			text-align: center;
			background: linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			margin-right: 1rem;

			${breakpoints.lg} {
				font-size: 120px;
				line-height: 150px;
			}

			${breakpoints.md} {
				font-size: 80px;
				line-height: 100px;
			}

			${breakpoints.sm} {
				font-size: 129px;
				padding-bottom: 1rem;
				padding-left: 1rem;
				margin-right: 0;
			}
		}
		h4 {
			font-weight: 400;
			font-size: 20px;
			line-height: 170%;
			color: #414141;

			${breakpoints.lg} {
				font-size: 16px;
			}

			${breakpoints.md} {
				font-size: 14px;
				font-weight: 400;
				padding-right: 1rem;
			}

			${breakpoints.sm} {
				padding-right: 1.5rem;
			}
		}
		.details {
			font-weight: 400;
			font-size: 20px;
			line-height: 170%;
			color: #414141;

			${breakpoints.lg} {
				font-size: 18px;
			}

			${breakpoints.md} {
				font-size: 16px;
			}

			${breakpoints.sm} {
				font-size: 15px;
				font-weight: 400;
				padding: 0 1.5rem;
				margin-top: -2.5rem;
				margin-bottom: 1rem;
				text-align: center;
			}
		}
	}
`;

export const Associates = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 3rem 0;

	.wrapper {
		max-width: 1200px;
		position: relative;
	}
	.wrapper .carousel {
		white-space: nowrap;
		overflow: hidden;

		display: flex;
	}
	@media (max-width: 576px) {
		margin: 1.5rem 0.8rem;
	}
`;

export const OfferContainer = styled.div`
	display: flex;
`;

export const SearchForm = styled.div`
	margin-bottom: 1rem;
	${breakpoints.md} {
		display: none;
	}

	.search-box {
		border: 1px solid #ccc;
		border-radius: 3px;
		padding: 0.5rem 0.8rem;
		display: flex;
		width: 80%;

		svg {
			font-size: 24px;
			color: ${colors.textColor};
			margin-right: 1.4rem;
		}
		input {
			border: none;
			outline: none;
			background: transparent;
			color: ${colors.textColor};
			width: 400px;

			::placeholder {
				font-size: 16px;
			}
		}
	}
`;
export const Details = styled.div`
	width: 60%;
	padding: 1rem;
	text-align: start;

	${breakpoints.md} {
		width: 100%;
	}
	.red-line_small {
		width: 60px;
		height: 5px;
		background: ${colors.primaryColor};
		border-radius: 3px;

		margin-bottom: 1.4rem;
	}
	.offer-details {
		h3 {
			padding-top: 1rem;
			padding-bottom: 0.9rem;
			font-weight: 600;
			font-size: 25px;
			line-height: 28px;
			text-align: start;
			color: ${colors.textColor};

			${breakpoints.lg} {
				font-size: 23px;
			}

			${breakpoints.md} {
				font-size: 20px;
			}
		}
		p {
			font-weight: 400;
			font-size: 20px;
			line-height: 170%;
			color: ${colors.textColor};
			margin-bottom: 1rem;

			${breakpoints.lg} {
				font-size: 18px;
			}

			${breakpoints.md} {
				font-size: 16px;
			}
		}
		a {
			color: ${colors.primaryColor};

			display: flex;
			align-items: center;
			flex-direction: row;

			text-transform: uppercase;
			margin: 0.6rem 0;

			svg {
				font-size: 32px;
				font-weight: 600;
				padding-left: 0.8rem;
			}
		}
	}
`;

export const Tabs = styled.div`
	width: 40%;
	padding: 0 1.5rem;

	${breakpoints.md} {
		width: 100%;
	}
	h3 {
		font-weight: 600;
		font-size: 30px;
		line-height: 28px;
		text-align: start;
		color: ${colors.textColor};
		padding-bottom: 0.9rem;
		margin-top: 0.7rem;

		${breakpoints.lg} {
			font-size: 26px;
		}

		${breakpoints.md} {
			font-size: 22px;
		}
	}
	.tabs-container {
		width: 100%;

		a {
			color: ${colors.textColor};
		}

		ul {
			display: flex;
			flex-direction: column;
			li {
				margin: 0.6rem 0;
				background: transparent;
				color: ${colors.textColor};
				list-style: none;
				border: 1px solid #808587;
				border-radius: 6px;
				font-weight: 600;
				font-size: 16px;
				line-height: 36px;
				text-align: center;

				${breakpoints.lg} {
					font-size: 14px;
				}

				${breakpoints.md} {
					font-size: 16px;
				}

				button {
					background: transparent;
					width: 100%;
					padding: 0.5rem 2rem;
				}
			}
			li.active {
				background: radial-gradient(
					144.82% 1073.17% at 144.82% 108.82%,
					#c90303 0%,
					#981e13 100%
				);
				color: white;
			}
		}
	}
`;

export const BannerSection = styled.div`
	width: 100%;
	padding: 2rem 0;
	background: linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);

	.banner-details {
		display: flex;
		gap: 2rem;

		${breakpoints.sm} {
			flex-direction: column;
			align-items: center;
			padding: 0.5rem 1.5rem;

			.details {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-self: start;
			}
		}

		.details-container,
		.details-title2 {
			${breakpoints.sm} {
				width: 100%;
			}
		}

		.details-title2.it-sol {
			${breakpoints.sm} {
				display: none;
			}
		}
	}
	.banner-details.calculator {
		display: flex;
		justify-content: space-between;
		padding: 0;
		margin: 0;
		gap: 3rem;

		${breakpoints.sm} {
			flex-direction: column;
			justify-content: flex-start;
			gap: 1rem;
			margin-left: -1rem;
		}
	}
	.details-title1 {
		color: #fff;
		font-size: 14px;
		@media (max-width: 600px) and (min-width: 501px) {
			font-size: 12px;
		}
		${breakpoints.sm} {
			font-size: 12px;
			padding-bottom: 0.5rem;
		}
	}

	.details-title2 {
		color: #fff;
		font-weight: 700;
		font-size: 24px;

		${breakpoints.md} {
			font-size: 20px;
		}
		@media (max-width: 600px) and (min-width: 501px) {
			font-size: 13px;
		}
		${breakpoints.sm} {
			font-size: 15px;
			width: 220px;
		}
	}

	.cta-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;

		${breakpoints.sm} {
			justify-content: flex-end;
			margin-top: 1.2rem;
			gap: 1rem;
		}

		.arrow {
			position: absolute;
			width: 50px;
			left: -20px;
			margin-top: 4rem;

			${breakpoints.sm} {
				left: -30px;
			}
		}
	}
	button {
		background: #fff;
		border-radius: 1rem;
		padding: 0.3rem 0.8rem;
		color: #e9000e;
		font-weight: 600;
		font-size: 14px;
		min-width: 150px;

		:hover {
			background: transparent;
			border: 1px solid #fff;
			color: #fff;
		}
	}

	.cta-phone {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border: 1px solid #fff;
		border-radius: 1rem;
		padding: 0.3rem 0.5rem;
		min-width: 150px;

		span {
			padding: 0.2rem;
			background: #fff;
			border-radius: 50%;

			svg {
				color: #e9000e;
				font-size: 12px;
			}
		}
		p {
			font-size: 14px;
			color: #fff;
		}
	}
`;

export const BannerWrapper = styled.div`
	width: 100%;
	max-width: ${sizes.wrapperWidth};
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;

	.cta-wrapper.dev_calc {
		display: flex;
		padding-left: 6rem;

		${breakpoints.sm} {
			padding-left: 3rem;
		}
		button {
			color: #2a2a2a;
			padding: 0.5rem 1.5rem;
			border-radius: 1.5rem;
			min-width: 250px;
			${breakpoints.sm} {
				width: 250px;
				min-width: 150px;
				font-size: 10px;
				padding: 0.5rem;
				margin-left: 3rem;
			}

			:hover {
				background: #fff;
				color: #e9000e;
			}
		}
		.arrow {
			position: absolute;
			width: 50px;
			left: 40px;
			margin-top: 5rem;

			${breakpoints.sm} {
				left: 40px;
			}
		}
	}
`;
