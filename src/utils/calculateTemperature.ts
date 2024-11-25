export const calculateTemperature = (temp: number, unit: string): string => {
	let convertedTemp;
	if (unit === "metric") {
		convertedTemp = Math.round(temp - 273.15);
	} else {
		convertedTemp = Math.round(((temp - 273.15) * 9) / 5 + 32);
	}

	return `${convertedTemp} °${unit === "metric" ? "C" : "F"}`;
};
