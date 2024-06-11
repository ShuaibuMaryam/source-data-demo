import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getProductsThunk, getSingleProductThunk } from "./productThunk";

const initialState = {
	isLoading: false,
	products: [],
	product: null,
	groupId: 1,
	selectedTab: 0,
	categoryId: 1,
	filteredProducts: [],
};

export const getProducts = createAsyncThunk(
	"products/getProducts",
	getProductsThunk
);

export const getSingleProduct = createAsyncThunk(
	"products/getSingleProduct",
	getSingleProductThunk
);
const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		testing: (state) => {
			console.log(state);
		},
		setProduct: (state, { payload }) => {
			state.product = payload;
		},
		setGroupId: (state, { payload }) => {
			state.groupId = payload;
		},

		setSelectedTab: (state, { payload }) => {
			state.selectedTab = payload;
		},
		setCategoryId: (state, { payload }) => {
			state.categoryId = payload;
		},
		setFilteredProducts: (state, { payload }) => {
			state.filteredProducts = state.products?.filter((item) =>
				item?.categories?.includes(payload)
			);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.products = payload;
			})
			.addCase(getProducts.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getSingleProduct.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSingleProduct.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.product = payload;
			})
			.addCase(getSingleProduct.rejected, (state, { payload }) => {
				state.isLoading = false;
			});
	},
});

export const {
	testing,
	setProduct,
	setGroupId,
	setSelectedTab,
	setFilteredProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
