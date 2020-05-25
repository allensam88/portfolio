import React, { useState } from "react";
import { Route } from "react-router-dom";

import Sider from "./components/Sider";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
	const [title, setTitle] = useState("~ About ~")

	return (
		<div className="grid">
			<Sider setTitle={setTitle} />
			<Header title={title} />
			<div className="content">
				<Route exact path="/" component={About} />
				<Route path="/projects" component={Projects} />
			</div>
		</div>
	)
}

export default App;