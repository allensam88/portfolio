import React from "react";
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: [left] 33% [center] 34% [right] 33%;
	border-bottom: 2px solid black;
	padding: 50px 0;
	padding-left: 20px;
`;

const Section1 = styled.div`
	grid-column: left / span 2;
	justify-self: left;
	display: flex;
	flex-direction: column;
`;

const Section2 = styled.div`
	grid-column: right;
	justify-self: left;
	display: flex;
	flex-direction: column;
`;

const Header = styled.h3`
	font-size: 2rem;
	color: @darkblue;
	font-weight: bold;
	padding: 10px 0;
`;

const Text = styled.p`
	font-size: 1.5rem;	
	margin: 5px 0;
`;

const Item = styled.li`
	font-size: 1.5rem;	
	margin: 2px;
`;

function Intro() {
	return (
		<Container>
			<Section1>
				<Header>Brief Intro</Header>
				<Text>I enjoy problem-solving, process-improvement, and learning new ideas & skills.</Text>
				<Text>I'm passionate about travel and experiencing different cultures.</Text>
				<Header>Background</Header>
				<Text>I've served in the military, played piano in a band, worked hard in construction,</Text>
				<Text>and led manufacturing & logistics workshops and projects.</Text>
			</Section1>
			<Section2>
				<Header>Skills</Header>
				<Item>React / Redux</Item>
				<Item>Node / Express</Item>
				<Item>Jest Testing</Item>
				<Item>Process Improvement</Item>
				<Item>Strategic Planning</Item>
				<Item>Geographic Information Systems</Item>
				<Item>Training Implementation</Item>
			</Section2>
		</Container>
	)
}

export default Intro;