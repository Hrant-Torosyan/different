import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Load from "../widgets/Load/Load";
const Navigation = React.lazy(() => import("./Navigation/Navigation"));
import "./Layouts.scss";

const Layout = () => {
	return (
		<div id="mainContent">
			<aside>
				<Navigation />
			</aside>
			<main className={`scroll`}>
				<Suspense fallback={<Load type={"moduleLoader"} />}>
					<Outlet />
				</Suspense>
			</main>
		</div>
	);
};

export default Layout;
