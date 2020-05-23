import React from "react";
import { Route } from "react-router-dom";

import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
	return (
		<div>
			<Route exact path="/" component={About} />
			<Route path="/projects" component={Projects} />
		</div>
	)
}

export default App;