import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { createStandaloneToast } from "@chakra-ui/react";
import {
	addUserToLocalStorage,
	getUserFromLocalStorage,
	removeUserFromLocalStorage,
} from "../../utils/localStorage";
import {
	loginUserThunk,
	registerUserThunk,
	updateUserThunk,
	clearStoreThunk,
	getAllUserQuotesThunk,
	getAllOrdersThunk,
	getAllWorkshopsThunk,
} from "./userThunk";
const { toast } = createStandaloneToast();

const initialState = {
	isLoading: false,
	isSidebarOpen: false,
	user: getUserFromLocalStorage(),
	showMenu: false,
	success: false,
	allOrders: [],
	allWorkshops: [],
	allQuotes: [],
	filteredOrders: [],
	filteredQuotes: [],
	filteredWorkshops: [],
	searchText: "",
};

export const registerUser = createAsyncThunk(
	"user/registerUser",
	registerUserThunk
);

export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
export const getAllUserQuotes = createAsyncThunk(
	"user/getAllUserQuotes",
	getAllUserQuotesThunk
);
export const getAllWorkshops = createAsyncThunk(
	"user/getAllWorkshops",
	getAllWorkshopsThunk
);
export const getAllOrders = createAsyncThunk(
	"user/getAllOrders",
	getAllOrdersThunk
);

export const updateUser = createAsyncThunk(
	"user/updateUser",
	async (user, thunkAPI) => {
		return updateUserThunk("/auth/updateUser", user, thunkAPI);
	}
);
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
		logoutUser: (state, { payload }) => {
			state.user = false;
			state.isSidebarOpen = false;

			state.success = false;
			removeUserFromLocalStorage();
		},
		setShowMenu: (state, action) => {
			state.showMenu = true;
		},
		toggleMenu: (state, action) => {
			state.showMenu = false;
		},
		addUserInfo: (state, { payload }) => {
			state.user = { ...state.user, ...payload };
			addUserToLocalStorage({ ...state.user, ...payload });
		},
		setSearchText: (state, { payload }) => {
			if (payload) {
				state.searchText = payload;
			} else {
				state.searchText = "";
			}
		},
		SetFilteredQuotes: (state, { payload }) => {
			let tempData = [...state.allQuotes];
			if (state.searchText) {
				state.filteredQuotes = tempData.filter((product) => {
					return product.product_name
						.toLowerCase()
						.includes(state.searchText.toLowerCase());
				});
			} else {
				state.filteredQuotes = tempData;
			}
		},
		SetFilteredOrders: (state, { payload }) => {
			let tempData = [...state.allOrders];
			if (state.searchText) {
				state.filteredOrders = tempData.filter((product) => {
					return product.product_name
						.toLowerCase()
						.includes(state.searchText.toLowerCase());
				});
			} else {
				state.filteredOrders = tempData;
			}
		},
		SetFilteredWorkshops: (state, { payload }) => {
			let tempData = [...state.allWorkshops];
			if (state.searchText) {
				state.filteredWorkshops = tempData.filter((product) => {
					return product.title
						.toLowerCase()
						.includes(state.searchText.toLowerCase());
				});
			} else {
				state.filteredWorkshops = tempData;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.success = true;
				toast({
					title: "Awesome!",
					description: "Account Created! Proceed to Login",
					status: "info",
					duration: 5000,
					isClosable: true,
					position: "top",
					variant: "left-accent",
				});
			})
			.addCase(registerUser.rejected, (state, { payload }) => {
				state.isLoading = false;
				const msg = Object.values(payload).join("\n");

				console.log(msg);
				toast({
					title: "An error occurred",
					description: msg,
					status: "error",
					duration: 5000,
					isClosable: true,
					variant: "left-accent",
					position: "top",
				});
			})

			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})

			.addCase(loginUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				const decodedToken = jwt_decode(payload.access);
				state.user = {
					token: payload.access,
					...decodedToken,
					refresh: payload.refresh,
				};
				addUserToLocalStorage({
					token: payload.access,
					...decodedToken,
					refresh: payload.refresh,
				});
				toast({
					title: "Welcome Back",
					description: ` Hi ${decodedToken.username}`,
					status: "info",
					duration: 5000,
					isClosable: true,
					position: "top",
					variant: "left-accent",
				});
			})

			.addCase(loginUser.rejected, (state, { payload }) => {
				state.isLoading = false;
				toast({
					title: "An error occurred.",
					description: `${payload.detail}`,
					status: "error",
					duration: 5000,
					isClosable: true,
					position: "top",
				});
			})

			.addCase(updateUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateUser.fulfilled, (state, { payload }) => {
				const { user } = payload;
				state.isLoading = false;
				state.user = user;
				addUserToLocalStorage(user);
			})
			.addCase(updateUser.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getAllUserQuotes.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllUserQuotes.fulfilled, (state, { payload }) => {
				state.filteredQuotes = payload;
				state.isLoading = false;
				state.allQuotes = payload;
			})
			.addCase(getAllUserQuotes.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getAllOrders.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllOrders.fulfilled, (state, { payload }) => {
				state.filteredOrders = payload;
				state.isLoading = false;
				state.allOrders = payload;
			})
			.addCase(getAllOrders.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getAllWorkshops.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllWorkshops.fulfilled, (state, { payload }) => {
				state.filteredWorkshops = payload;
				state.isLoading = false;
				state.allWorkshops = payload;
			})
			.addCase(getAllWorkshops.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(clearStore.rejected, () => {});
	},
});

export const {
	toggleSidebar,
	logoutUser,
	setShowMenu,
	addUserInfo,
	setSearchText,
	SetFilteredOrders,
	SetFilteredQuotes,
	SetFilteredWorkshops,
	toggleMenu,
} = userSlice.actions;
export default userSlice.reducer;
