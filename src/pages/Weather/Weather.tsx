import React from "react";
import Title from "../../components/widgets/Title/Title";
import WeatherForm from "./WeatherForm";
import "./Weather.scss";
import { Checkbox } from "../../components/widgets/Checkbox/Checkbox";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { toggleUnit } from "../../redux/slices/weatherSlice";
import WeatherCard from "../../components/shared/cards/WeatherCard/WeatherCard";
import WeatherTimes from "../../components/shared/cards/WeatherTimes/WeatherTimes";
import WeatherDays from "../../components/shared/cards/WeatherDays/WeatherDays";
const Weather: React.FC = () => {
	const { currentWeather, listOfWeather } = useAppSelector((state) => state.weather);

	const dispatch = useAppDispatch();
	return (
		<div className="weather">
			<div className="weatherTtile">
				<Title title={"Weather"} />
				<Checkbox onClick={() => dispatch(toggleUnit())} />
			</div>
			<WeatherForm />
			{currentWeather && listOfWeather && (
				<div className="weatherContent">
					<div className="weatherContentItem">
						<WeatherCard
							name={currentWeather.name}
							temp={currentWeather.main.temp}
							icon={currentWeather.weather[0].icon}
							description={currentWeather.weather[0].description}
						/>
						<WeatherTimes data={listOfWeather} />
					</div>
					<WeatherDays data={listOfWeather} />
				</div>
			)}
		</div>
	);
};

export default Weather;
