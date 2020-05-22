import React from "react";
import { Route } from "react-router-dom";

import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="App">
			<Nav />
			<Route exact path="/" component={About} />
			<Route path="/projects" component={Projects} />
		</div>
	)
}

export default App;