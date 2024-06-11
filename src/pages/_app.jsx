import React from "react";
import { theme } from "../theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { createStandaloneToast } from "@chakra-ui/toast";

// Client-side cache, shared for the whole session of the user in the browser.
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";

const algoliaID = process.env.NEXT_PUBLIC_ALGOLIA_ID || "7D4AYGXH2S";
const algoliaKey =
	process.env.NEXT_PUBLIC_ALGOLIA_KEY || "16ceb33e54fe2c29391a7a7afc070d59";

const searchClient = algoliasearch(algoliaID, algoliaKey);
export default function MyApp(props) {
	const { Component, pageProps } = props;
	const { ToastContainer } = createStandaloneToast();

	const MainComponent = () => {
		const getLayout = Component.getLayout ?? ((page) => page);

		return getLayout(
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
				<ToastContainer />
			</ChakraProvider>
		);
	};
	return (
		<InstantSearch searchClient={searchClient} indexName="website_index">
			<Provider store={store}>{MainComponent()}</Provider>
		</InstantSearch>
	);
}
