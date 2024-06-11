import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getCategoriesThunk } from "./categoriesThunk";

const initialState = {
	isLoading: false,
	data: [],
	category: { sub_categories: [] },
};

export const getCategories = createAsyncThunk(
	"categories/getCategories",
	getCategoriesThunk
);

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		testing: (state) => {
			console.log(state);
		},
		setCategory: (state, { payload }) => {
			state.category = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCategories.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCategories.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.data = payload;
				state.category = state.data.find((item) => item?.is_prime === true);
			})
			.addCase(getCategories.rejected, (state, { payload }) => {
				state.isLoading = false;
			});
	},
});

export const { testing, setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
