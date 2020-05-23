import React from "react";
import Sider from "../components/Sider";
import Header from "../components/Header";
import Intro from "../components/Intro";

function About() {
	return (
		<>
			<Sider />
			<Header title={"About"} />
			<Intro />
		</>
	)
}

export default About;