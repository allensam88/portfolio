import React from "react";
import { Route } from "react-router-dom";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Page from "./pages/Page";

function App() {
	return (
		<div>
			<Route exact path="/" component={Page} />
			<Route path="/projects" component={Projects} />
		</div>
	)
}

export default App;