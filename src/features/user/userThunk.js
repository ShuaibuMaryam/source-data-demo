import axiosInstance, { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";
import { logoutUser } from "./userSlice";
const baseUrl =
	process.env.REACT_APP_BASE_URL || "https://api.sandbox.burtechproducts.com";
export const registerUserThunk = async (user, thunkAPI) => {
	try {
		const resp = await axios.post(`${baseUrl}/auth/register/`, user);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};
export const getAllUserQuotesThunk = async (userID, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/quotations/?search=${userID}`);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};
export const getAllWorkshopsThunk = async (userID, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/enrollments/?search=${userID}`);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};
export const getAllOrdersThunk = async (userID, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/orders/?search=${userID}`);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};

export const loginUserThunk = async (user, thunkAPI) => {
	try {
		const resp = await axios.post(`${baseUrl}/auth/login/`, user);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};

export const updateUserThunk = async (url, user, thunkAPI) => {
	try {
		const resp = await axiosInstance.patch(url, user);
		return resp.data;
	} catch (error) {
		return checkForUnauthorizedResponse(error, thunkAPI);
	}
};

export const clearStoreThunk = async (message, thunkAPI) => {
	try {
		thunkAPI.dispatch(logoutUser(message));
		return Promise.resolve();
	} catch (error) {
		return Promise.reject();
	}
};
