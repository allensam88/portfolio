import React from "react";
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-rows: [top] 4fr [center] 1fr [bottom] 4fr;
	grid-template-columns: [left] 1fr [center] 1fr [right] 1fr;
	margin: 50px 0 0 50px;

	@media (max-width: 800px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin: 20px;
		margin-bottom: 70px;
	}
`;

const Section1 = styled.div`
	grid-row: top;
	grid-column: left / span 2;
	align-self: center;
	justify-self: left;
	display: flex;
	flex-direction: column;
	padding-right: 20px;
`;

const Section2 = styled.div`
	grid-row: top;
	grid-column: right;
	align-self: center;
	justify-self: left;
	display: flex;
	flex-direction: column;
	padding-right: 20px;
`;

const Section3 = styled.div`
	grid-row: bottom;
	grid-column: left;
	align-self: center;
	justify-self: left;
	display: flex;
	flex-direction: column;
	padding-right: 20px;
`;

const Section4 = styled.div`
	grid-row: bottom;
	grid-column: right;
	align-self: center;
	justify-self: left;
	display: flex;
	flex-direction: column;
	padding-right: 20px;
`;

const Gear = styled.img`
	grid-row: bottom;
	grid-column: center;
	align-self: center;
	justify-self: left;
	width: 50%;
	object-fit: contain;

	@media (max-width: 800px) {
		display: none;
	}
`;

const Divider = styled.div`
	grid-row: center;
	grid-column: left / span 3;
	align-self: center;
	justify-self: left;	
	border-bottom: 2px solid #152238;
	width: 95%;

	@media (max-width: 800px) {
		display: none;
	}
`;

const Header = styled.h3`
	color: #152238;
	font-weight: bold;
	margin: 0;
	padding: 10px 0 10px 0;
`;

const Text = styled.p`
	margin: 0;
	padding: 3px 0;
`;

const Item = styled.li`
	margin: 0;
	padding: 2px 0;
`;

const About = () => {
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
				<Item>ArcGIS</Item>
				<Item>Process Improvement</Item>
				<Item>Strategic Planning</Item>
				<Item>Training Implementation</Item>
			</Section2>
			<Divider />
			<Section3>
				<Header>Topics of Interest</Header>
				<Item>web tech</Item>
				<Item>clean energy tech</Item>
				<Item>classical music</Item>
				<Item>history / geography</Item>
				<Item>economics / philosophy</Item>
			</Section3>
			<Gear src="assets/images/gear_icon.jpg" alt="fun gear icon" />
			<Section4>
				<Header>Hobbies</Header>
				<Item>playing the piano</Item>
				<Item>sailing / hiking</Item>
				<Item>remodeling</Item>
				<Item>documentaries</Item>
				<Item>games / puzzles</Item>
			</Section4>
		</Container>
	)
}

export default About;