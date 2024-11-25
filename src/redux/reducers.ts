import coffeeReducer from "./slices/coffeeSlice";
import todoReducer from "./slices/todoSlice";
import weatherReducer from "./slices/weatherSlice";

export const reducers = {
	coffee: coffeeReducer,
	todo: todoReducer,
	weather: weatherReducer,
};
