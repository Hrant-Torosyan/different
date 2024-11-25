import React from "react";
import "./Load.scss";

interface LoadProps {
	type: "mainLoader" | "moduleLoader" | "modalLoader" | "imageLoader";
}

const Load: React.FC<LoadProps> = ({ type }) => {
	if (type === "mainLoader") {
		return (
			<div id="mainLoader">
				<img src="/images/mainLoad.gif" alt="PreLoader" />
			</div>
		);
	} else if (type === "moduleLoader") {
		return (
			<div id="moduleLoader">
				<img src="/images/moduleLoad.gif" alt="PreLoader" />
			</div>
		);
	} else if (type === "modalLoader") {
		return (
			<div id="modalLoader">
				<img
					src="https://cdn-images-1.medium.com/max/691/1*JWRrHmGBM_DxatdKk6qBnA.gif"
					alt="PreLoader"
				/>
			</div>
		);
	} else if (type === "imageLoader") {
		return (
			<div id="imageLoader">
				<img src="/images/moduleLoad.gif" alt="PreLoader" />
			</div>
		);
	}

	return null;
};

export default Load;
