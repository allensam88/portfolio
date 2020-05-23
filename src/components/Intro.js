import React from "react";
import styled from 'styled-components';

const Container = styled.body`
	display: grid;
	grid-template-rows: [top] 48% [center] 4% [bottom] 48%;
	grid-template-columns: [left] 33% [center] 34% [right] 33%;
	position: fixed;
	top: 72px;
	left: 20vw;
	height: 90%;
	width: 9z0%;
	// margin: 10px;

	@media (max-width: 800px) {
		display: flex;
		flex-direction: column;
		align-content: stretch;
		margin: 125px 20px;
	}
`;

const Section1 = styled.div`
	grid-row: top;
	grid-column: left / span 2;
	place-self: center;
	display: flex;
	flex-direction: column;
	padding-right: 30px;
`;

const Section2 = styled.div`
	grid-row: top;
	grid-column: right;
	place-self: center;
	display: flex;
	flex-direction: column;
`;

const Section3 = styled.div`
	grid-row: bottom;
	grid-column: left;
	place-self: center;
	display: flex;
	flex-direction: column;
`;

const Section4 = styled.div`
	grid-row: bottom;
	grid-column: right;
	place-self: center;
	display: flex;
	flex-direction: column;
`;

const Gear = styled.img`
	grid-row: bottom;
	grid-column: center;
	place-self: center;
	width: 150px;
	margin: 10px;
	object-fit: contain;

	@media (max-width: 800px) {
		display: none;
	}
`;

const Divider = styled.div`
	grid-row: center;
	grid-column: left / span 3;
	place-self: center;	
	border-bottom: 2px solid #152238;
	width: 90%;

	// @media (max-width: 800px) {
	// 	margin: 125px 20px;
	// }
`;

const Header = styled.h3`
	font-size: 2rem;
	color: #152238;
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

export default Intro;