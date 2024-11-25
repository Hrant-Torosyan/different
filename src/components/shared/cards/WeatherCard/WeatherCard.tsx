import "./WeatherCard.scss";
import { calculateTemperature } from "../../../../utils/calculateTemperature";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import Image from "../../../widgets/Image/Image";
interface WeatherCard {
	name: string;
	temp: number;
	icon: string;
	description: string;
}

const WeatherCard: React.FC<WeatherCard> = ({ name, temp, icon, description }) => {
	const unit = useAppSelector((state) => state.weather.unit);
	return (
		<div className="weatherCard">
			<h2>{name}</h2>
			<p>{calculateTemperature(temp, unit)}</p>
			<Image url={`http://openweathermap.org/img/wn/${icon}.png`} alt={`description`} />
			<p>{description}</p>
		</div>
	);
};

export default WeatherCard;
