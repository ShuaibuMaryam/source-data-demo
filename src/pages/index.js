import Head from "next/head";
import LandingLayout from "../layouts/landing.layout";
import LandingPage from "../components/LandingPage";
import { Box } from "@chakra-ui/react";
/**
 *
 * @description this is the Home page section
 * @returns {React.JSX.Element}
 */
const Home = ({}) => {
	return (
		<>
			<Head>
				<title>Source data</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="keywords" content="" />
				<meta name="author" content="Tanta Innovative Limited" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />

				{/* ----------Fonts--------- */}
				<link rel="icon" href="/assets/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap"
					rel="stylesheet"
				></link>

				{/* ----------Work sans font---------- */}
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Work+Sans&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<LandingPage />
		</>
	);
};
// Home.getLayout = (page) => {
// 	return <LandingLayout>{page}</LandingLayout>;
// };
export default Home;
