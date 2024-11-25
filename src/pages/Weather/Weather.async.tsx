import { lazy, Suspense, useEffect } from "react";
import Load from "../../components/widgets/Load/Load";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getWeatherData } from "../../redux/slices/weatherSlice";
const Weather = lazy(() => import("./Weather"));
const WeatherAsync = () => {
	const dispatch = useAppDispatch();
	const { status } = useAppSelector((state) => state.weather);

	useEffect(() => {
		if (status === "IDLE") {
			if ("geolocation" in navigator) {
				navigator.geolocation.getCurrentPosition((position) => {
					const { latitude, longitude } = position.coords;

					dispatch(
						getWeatherData({
							latitude: latitude,
							longitude: longitude,
							type: "LOCATION",
						})
					);
				});
			} else {
				console.log("Geolocation is not available in this browser.");
			}
		}
	}, [status, dispatch]);

	if (status === "PENDING" || status === "IDLE") {
		return <Load type="moduleLoader" />;
	}

	return (
		<Suspense fallback={<Load type="moduleLoader" />}>
			<Weather />
		</Suspense>
	);
};

export default WeatherAsync;
