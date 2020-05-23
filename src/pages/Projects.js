import React from "react";
import Sider from "../components/Sider";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";

function Projects() {
	return (
		<>
			<Sider />
			<Header title={"Projects"} />
			<ProjectList />
		</>
	)
}

export default Projects;