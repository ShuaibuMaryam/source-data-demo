import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSpecialOffersThunk } from "./specialOffersThunk";

const initialState = {
	isLoading: false,
	specialOffers: [],
	service: "Centrifuge",
	ourWorks: [],
	index: 0,
};

export const getSpecialOffers = createAsyncThunk(
	"specialOffers/getSpecialOffers",
	getSpecialOffersThunk
);

const servicesSlice = createSlice({
	name: "specialOffers",
	initialState,
	reducers: {
		testing: (state) => {
			console.log(state);
		},
		setServices: (state, { payload }) => {
			state.services = payload;
		},
		setIndex: (state, { payload }) => {
			state.index = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getSpecialOffers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSpecialOffers.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.specialOffers = payload;
			})
			.addCase(getSpecialOffers.rejected, (state, { payload }) => {
				state.isLoading = false;
			});
	},
});

export const { testing, setServices, setIndex } = servicesSlice.actions;
export default servicesSlice.reducer;
