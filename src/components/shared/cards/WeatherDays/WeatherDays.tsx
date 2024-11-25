import "./WeatherDays.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { calculateTemperature } from "../../../../utils/calculateTemperature";
import { setSelectedDay } from "../../../../redux/slices/weatherSlice";
import Image from "../../../widgets/Image/Image";

interface ForecastWeather {
	date: string;
	temp: number;
	icon: string;
	description: string;
	times: [{ temp: number; icon: string }];
}
interface WeatherDaysProps {
	data: ForecastWeather[];
}

const WeatherDays: React.FC<WeatherDaysProps> = ({ data }) => {
	const dispatch = useAppDispatch();
	const unit = useAppSelector((state) => state.weather.unit);
	const { selectedDay } = useAppSelector((state) => state.weather);
	return (
		<div className="weatherDays">
			{data.map((item, key) => (
				<div
					key={key}
					onClick={() => dispatch(setSelectedDay(item.date))}
					className={`weatherDaysItem ${item.date === selectedDay ? "active" : ""}`}
				>
					<p>{item.date}</p>
					<div className="weatherDaysItemImg">
						<h2>{calculateTemperature(item.temp, unit)}</h2>
						<Image
							url={`http://openweathermap.org/img/wn/${item.icon}.png`}
							alt={item.description}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default WeatherDays;
