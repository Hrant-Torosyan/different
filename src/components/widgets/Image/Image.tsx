import React, { useState } from "react";
import Load from "../Load/Load";

const defaultUser = "/Images/noUser.png";
const defaultImageUrl = "/Images/noImage.jpg";

interface ImageProps {
	url: string;
	alt: string;
	type?: string | null;
}

const Image: React.FC<ImageProps> = ({ url, alt = "image", type = null }) => {
	const [loading, setLoading] = useState(true);

	const handleLoad = () => {
		setLoading(false);
	};

	const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.onerror = null;
		setLoading(false);
		if (type === "user") {
			e.currentTarget.src = defaultUser;
		} else {
			e.currentTarget.src = defaultImageUrl;
		}
	};

	return (
		<>
			{loading && <Load type={"imageLoader"} />}
			<img
				src={url}
				alt={alt}
				className={loading ? "hide" : ""}
				onLoad={handleLoad}
				onError={handleError}
			/>
		</>
	);
};

export default Image;
