import { lazy, Suspense, useEffect } from "react";
import { getCoffee } from "../../redux/slices/coffeeSlice";
import Load from "../../components/widgets/Load/Load";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
const Coffee = lazy(() => import("./Coffee"));

const CoffeeAsync = () => {
	const dispatch = useAppDispatch();
	const { status } = useAppSelector((state) => state.coffee);

	useEffect(() => {
		if (status === "IDLE") {
			dispatch(getCoffee());
		}
	}, [status, dispatch]);

	if (status === "PENDING" || status === "IDLE") {
		return <Load type="moduleLoader" />;
	}

	return (
		<Suspense fallback={<Load type="moduleLoader" />}>
			<Coffee />
		</Suspense>
	);
};

export default CoffeeAsync;
