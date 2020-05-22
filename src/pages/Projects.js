import React from "react";
import Sider from "../components/Sider";
import Title from "../components/Title";
import ProjectList from "../components/ProjectList";
import styled from 'styled-components';

const Page = styled.body`
	display: flex;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	margin: 0 auto;
	width: 70%;
`;

function Projects() {
	return (
		<Page>
			<Sider />
			<Container>
				<Title title={"Projects"} />
				<ProjectList />
			</Container>
		</Page>
	)
}

export default Projects;