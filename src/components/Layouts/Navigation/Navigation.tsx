import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { useMemo } from "react";

type NavButton = {
	title: string;
	href: string;
};

const Navigation: React.FC = () => {
	const btnArr = useMemo<NavButton[]>(() => {
		const buttons: NavButton[] = [
			{ title: "Welcome", href: "/" },
			{ title: "Coffee", href: "/coffee" },
			{ title: "Todo", href: "/todo" },
			{ title: "Weather", href: "/weather" },
		];
		return buttons;
	}, []);

	return (
		<nav className="scroll">
			<div className="navContent">
				<ul>
					{btnArr.map((item, index) => (
						<li key={index}>
							<NavLink to={item.href}>{item.title}</NavLink>
						</li>
					))}
				</ul>
			</div>

			<div className="logout">
				<p>Log out</p>
			</div>
		</nav>
	);
};

export default Navigation;
