import "./WeatherTimes.scss";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { calculateTemperature } from "../../../../utils/calculateTemperature";
import Image from "../../../widgets/Image/Image";

interface ForecastWeather {
	date: string;
	temp: number;
	icon: string;
	description: string;
	times: [{ temp: number; time: string; icon: string }];
}
interface WeatherTimesProps {
	data: ForecastWeather[];
}

const WeatherTimes: React.FC<WeatherTimesProps> = ({ data }) => {
	const unit = useAppSelector((state) => state.weather.unit);

	const { selectedDay } = useAppSelector((state) => state.weather);
	const selected = data.find((item) => item.date === selectedDay);
	const times = selected ? selected.times : [];
	console.log(times);
	return (
		<div className="weatherTimes scroll">
			{times.length > 0 ? (
				times.map((item, key) => (
					<div key={key} className="weatherTimesItem">
						<p>{calculateTemperature(item.temp, unit)}</p>
						<p>{item.time}</p>
						<Image
							url={`http://openweathermap.org/img/wn/${item.icon}.png`}
							alt={item.icon}
						/>
					</div>
				))
			) : (
				<p className="emptyInfo">No weather data available for this day.</p>
			)}
		</div>
	);
};

export default WeatherTimes;
