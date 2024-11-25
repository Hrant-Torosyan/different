import { useAppSelector } from "../../../hooks/reduxHooks";
import "./Checkbox.scss";

interface CheckboxProps {
	onClick: () => void;
}
export const Checkbox: React.FC<CheckboxProps> = ({ onClick }) => {
	const unit = useAppSelector((state) => state.weather.unit);

	return (
		<div className="checkbox">
			<p
				onClick={() => onClick()}
				className={`checkboxItem ${unit === "metric" ? "active" : ""}`}
			>
				°C
			</p>
			<p
				onClick={() => onClick()}
				className={`checkboxItem ${unit === "imperial" ? "active" : ""}`}
			>
				°F
			</p>
		</div>
	);
};
