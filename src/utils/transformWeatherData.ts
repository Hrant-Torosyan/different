interface WeatherEntry {
	dt_txt: string;
	main: {
		temp: number;
		humidity: number;
	};
	weather: {
		icon: string;
		description: string;
	}[];
	wind: {
		speed: number;
	};
}

interface WeatherTime {
	time: string;
	temp: number;
	icon: string;
}

interface DailyWeather {
	date: string;
	times: WeatherTime[];
	temp: number;
	icon: string;
	description: string;
	wind: number;
	humidity: number;
}

export const transformWeatherData = (data: WeatherEntry[]): DailyWeather[] => {
	const dailyWeather: { [key: string]: DailyWeather } = {};

	data.forEach((entry) => {
		const [date, time] = entry.dt_txt.split(" ");

		if (!dailyWeather[date]) {
			dailyWeather[date] = {
				date: date,
				times: [],
				temp: entry.main.temp,
				icon: entry.weather[0].icon,
				description: entry.weather[0].description,
				wind: entry.wind.speed,
				humidity: entry.main.humidity,
			};
		}

		dailyWeather[date].times.push({
			time: time,
			temp: entry.main.temp,
			icon: entry.weather[0].icon,
		});
	});

	return Object.values(dailyWeather);
};
