import React from "react";
import LandingLayout from "../layouts/landing.layout";
import { Box } from "@chakra-ui/react";

import ErrorPage from "../components/authenticationPages/errorPage/errorPage";

function ErrorPages() {
	return (
		<>
			<Box minHeight={"100vh"} mt={"5rem"}>
				<ErrorPage />
			</Box>
		</>
	);
}

ErrorPages.getLayout = (page) => {
	return <LandingLayout>{page} </LandingLayout>;
};

export default ErrorPages;
