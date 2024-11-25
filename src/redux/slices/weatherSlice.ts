import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosClient from "../axiosClient";
import { HTTP_STATUS } from "../constant";
import { transformWeatherData } from "../../utils/transformWeatherData";
const apiKey = import.meta.env.VITE_API_KEY;

interface CurrentWeather {
	name: string;
	main: { temp: number };
	weather: [{ icon: string; description: string }];
}
interface ForecastWeather {
	date: string;
	temp: number;
	icon: string;
	description: string;
	times: [{ temp: number; time: string; icon: string }];
}

type HTTPStatus = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];

interface WeatherState {
	error: string | null;
	status: HTTPStatus;
	currentWeather: CurrentWeather | null;
	listOfWeather: ForecastWeather[] | null;
	selectedDay: string;
	unit: string;
}

const initialState: WeatherState = {
	error: null,
	status: HTTP_STATUS.IDLE,
	currentWeather: null,
	listOfWeather: null,
	selectedDay: new Date().toISOString().split("T")[0],
	unit: localStorage.getItem("unit") || "metric",
};

interface WeatherDataPayload {
	city?: string;
	latitude?: number;
	longitude?: number;
	type: "CITY" | "LOCATION";
}
export const getWeatherData = createAsyncThunk(
	"weather/data",
	async ({ city, latitude, longitude, type }: WeatherDataPayload, { rejectWithValue }) => {
		try {
			const currentWeatherResponse =
				type === "LOCATION"
					? await axiosClient.get(
							`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
					  )
					: await axiosClient.get(
							`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
					  );

			const forecastResponse =
				type === "LOCATION"
					? await axiosClient.get(
							`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
					  )
					: await axiosClient.get(
							`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
					  );

			return {
				currentWeather: currentWeatherResponse.data,
				forecast: transformWeatherData(forecastResponse.data.list),
			};
		} catch (err: any) {
			return rejectWithValue(err.response.data);
		}
	}
);

const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		getWeatherDataSucceeded: (state) => {
			state.status = "idle";
		},
		setSelectedDay: (state, action: PayloadAction<string>) => {
			state.selectedDay = action.payload;
		},
		toggleUnit: (state) => {
			state.unit = state.unit === "metric" ? "imperial" : "metric";
			localStorage.setItem("unit", state.unit);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getWeatherData.fulfilled, (state, action: PayloadAction<any>) => {
				state.status = HTTP_STATUS.FULFILLED;
				state.currentWeather = action.payload.currentWeather;
				state.listOfWeather = action.payload.forecast;
				state.error = null;
			})
			.addCase(getWeatherData.pending, (state) => {
				state.status = HTTP_STATUS.PENDING;
			})
			.addCase(getWeatherData.rejected, (state, action: PayloadAction<any>) => {
				state.status = HTTP_STATUS.FULFILLED;
				state.error = action.payload;
			});
	},
});

export const { setSelectedDay, toggleUnit, getWeatherDataSucceeded } = weatherSlice.actions;

export default weatherSlice.reducer;
