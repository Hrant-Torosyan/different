import joinArray from "../../../../utils/joinArray";
import Image from "../../../widgets/Image/Image";
import "./CoffeeCard.scss";

interface CoffeeCardProps {
	title: string;
	description: string;
	ingredients: string[];
	image: string;
}
const CoffeeCard: React.FC<CoffeeCardProps> = ({ title, description, ingredients, image }) => {
	return (
		<div className="coffeeCard">
			<div className="coffeeCardImage">
				<Image url={image} alt={title} />
			</div>

			<div className="coffeeCardContent">
				<h4>{title}</h4>
				<h3>{description}</h3>
				<h5>{joinArray(ingredients)}</h5>
			</div>
		</div>
	);
};

export default CoffeeCard;
