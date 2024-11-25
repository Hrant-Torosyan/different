import { useAppSelector } from "../../hooks/reduxHooks";
import Title from "../../components/widgets/Title/Title";
import "./Coffee.scss";
import CoffeeCard from "../../components/shared/cards/CoffeeCard/CoffeeCard";
const Coffee = () => {
	const { coffee } = useAppSelector((state) => state.coffee);
	return (
		<div className="coffee">
			<Title title={"Coffee"} />
			<div className="coffeeList">
				{coffee.map((item, key) => (
					<CoffeeCard key={key} {...item} />
				))}
			</div>
		</div>
	);
};

export default Coffee;
