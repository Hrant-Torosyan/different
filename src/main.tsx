import { createRoot } from "react-dom/client";
import InitialConfigProvider from "./providers/InitialConfigProvider";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
	<InitialConfigProvider>
		<App />
	</InitialConfigProvider>
);
