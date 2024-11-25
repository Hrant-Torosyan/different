import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Load from "../components/widgets/Load/Load";
const Layouts = lazy(() => import("../components/Layouts/Layouts"));
import CoffeeAsync from "../pages/Coffee/Coffee.async";
import WeatherAsync from "../pages/Weather/Weather.async";
const Welcome = lazy(() => import("../pages/Welcome/Welcome"));
const ToDo = lazy(() => import("../pages/ToDo/ToDo"));

import "../assets/styles/main.scss";

const App: React.FC = () => {
	return (
		<Router
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true,
			}}
		>
			<Suspense fallback={<Load type="mainLoader" />}>
				<Routes>
					<Route element={<Layouts />}>
						<Route path="/" element={<Welcome />} />
						<Route path="/coffee" element={<CoffeeAsync />} />
						<Route path="/todo" element={<ToDo />} />
						<Route path="/weather" element={<WeatherAsync />} />
						<Route path="/*" element={<Welcome />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
};

export default App;
