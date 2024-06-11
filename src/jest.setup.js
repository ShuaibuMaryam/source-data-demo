import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store/store";

const ReduxProviderWrapper = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options) =>
	render(ui, { wrapper: ReduxProviderWrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
