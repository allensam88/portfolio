import React from "react";
import Sider from "../components/Sider";
import Title from "../components/Title";
import Intro from "../components/Intro";
import Interests from "../components/Interests";
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

function About() {
	return (
		<Page>
			<Sider />
			<Container>
				<Title title={"About"} />
				<Intro />
				<Interests />
			</Container>
		</Page>
	)
}

export default About;