import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

function App() {
	return createElement(
		"div",
		{ className: "App" },
		createElement(
			"header",
			{
				className: "App-header",
			},
			[
				createElement("img", {
					src: logo,
					className: "App-logo",
					alt: "logo",
				}),
				createElement("p", null, [
					"Edit ",
					createElement("code", null, ["src/App.js"]),
					" and save to reload.",
				]),
				createElement(
					"a",
					{
						src: logo,
						className: "App-link",
						href: "https://reactjs.org",
						target: "_blank",
						rel: "noopener noreferrer",
					},
					"Learn React",
				),
				createElement("p", null, new Date().getFullYear()),
			],
		),
	);
}

export default App;
