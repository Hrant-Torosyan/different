import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosClient from "../axiosClient";
import { HTTP_STATUS } from "../constant";

interface Coffee {
	id: number;
	title: string;
	description: string;
	ingredients: string[];
	image: string;
	text: number;
}
type HTTPStatus = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];
interface CoffeeState {
	coffee: Coffee[];
	status: HTTPStatus;
	error: string | null;
}
const initialState: CoffeeState = {
	coffee: [],
	status: HTTP_STATUS.IDLE,
	error: null,
};

export const getCoffee = createAsyncThunk<Coffee[], void, { rejectValue: string }>(
	"coffee/get",
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axiosClient.get("/coffee/hot");
			return data;
		} catch (err: any) {
			return rejectWithValue(err.response?.status || "Unknown Error");
		}
	}
);

const coffeeSlice = createSlice({
	name: "coffee",
	initialState,
	reducers: {
		resetState: (state) => {
			Object.assign(state, initialState);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCoffee.pending, (state) => {
				state.status = HTTP_STATUS.PENDING;
			})
			.addCase(getCoffee.fulfilled, (state, action: PayloadAction<Coffee[]>) => {
				state.coffee = action.payload;
				state.status = HTTP_STATUS.FULFILLED;
			})
			.addCase(getCoffee.rejected, (state, action: PayloadAction<any>) => {
				state.status = HTTP_STATUS.REJECTED;
				state.error = action.payload;
			});
	},
});

export const { resetState } = coffeeSlice.actions;
export default coffeeSlice.reducer;
