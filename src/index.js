import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SearchContextProvider } from "./Contexts/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<SearchContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</SearchContextProvider>
	</React.StrictMode>
);
