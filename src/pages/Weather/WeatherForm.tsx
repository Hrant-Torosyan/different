import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import { getWeatherData } from "../../redux/slices/weatherSlice";

const WeatherForm = () => {
	const dispatch = useAppDispatch();

	const [city, setCity] = useState<string>("");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (city.trim()) {
			dispatch(getWeatherData({ city: city, type: "CITY" }));
		}
	};
	return (
		<form className="weatherForm" onSubmit={handleSubmit}>
			<Input val={city} setVal={setCity} type={"text"} placholder={"City"} />
			<Button
				variant={"DEFAULT"}
				text={"Search"}
				type={"submit"}
				disabled={!city.trim().length}
			/>
		</form>
	);
};

export default WeatherForm;
