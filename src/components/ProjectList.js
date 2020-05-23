import React from "react";
import styled from 'styled-components';

const Projects = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	position: fixed;
	top: 72px;
	left: 20vw;
`;

const Project = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	margin: 20px;
	padding: 10px;
	border: 2px solid #152238;
	border-radius: 10px;
	background: #23395D;
`;

const Header = styled.h3`
	font-size: 3rem;
	color: #E4E4E9;
`;

const Text = styled.p`
	font-size: 1.3rem;
	color: #E4E4E9;
	padding: 5px;
`;

const Image = styled.img`
  	width: 200px;
	object-fit: cover;
	padding: 1px;
	margin: 5px;
	border: 2px solid #313030;

	&:hover {
		transform: scale(1.05);
		transition: all 0.4s ease-in-out;
	}
`;

const Code = styled.div`
	display: flex;
`;

const Anchor = styled.a`
	font-size: 1.3rem;
	text-decoration: none;
	color: #E4E4E9;
	padding: 5px;

	&:hover {
		font-style: italic;
		text-decoration: underline;
	}
`;

function ProjectList() {
	return (
		<Projects>
			<Project>
				<Header>Alpaca Vids!</Header>
				<Text>Record practice interviews and get feedback.</Text>
				<Text>Demo login: Sam | password: 1234</Text>
				<a href="" target="_blank">
					<Image src="../assets/images/alpaca-vids.jpg" alt="screenshot of Alpaca Vids App" /></a>
				<Code>
					<Text>Code: </Text>
					<Anchor href="http://github.com/AlpacaVids/video-journal-for-teams-fe" target="_blank">Front-End</Anchor>
					<Text>|</Text>
					<Anchor href="http://github.com/AlpacaVids/video-journal-for-teams-be" target="_blank">Back-End</Anchor>
				</Code>
			</Project>
			<Project>
				<Header>Use My Tools</Header>
				<Text>Exchange tools with other members.</Text>
				<Text>Demo login: Sam | password: 1234</Text>
				<a href="https://use-my-tools-sam.netlify.app/" target="_blank">
					<Image src="../assets/images/use-my-tools.jpg" alt="screenshot of Use-My-Tools App" /></a>
				<Code>
					<Text>Code: </Text>
					<Anchor href="http://github.com/allensam88/use-my-tools" target="_blank">Front-End</Anchor>
					<Text>|</Text>
					<Anchor href="http://github.com/allensam88/use-my-tools-server" target="_blank">Back-End</Anchor>
				</Code>
			</Project>
			<Project>
				<Header>African Marketplace</Header>
				<Text>An eCommerce demo site.</Text>
				<Text>Demo login: Sam | password: 1234</Text>
				<a href="http://african-marketplace-app.netlify.app/" target="_blank">
					<Image src="../assets/images/african-marketplace.jpg" alt="screenshot of African Marketplace App" /></a>
				<Code>
					<Text>Code: </Text>
					<Anchor href="http://github.com/allensam88/african-marketplace" target="_blank">Front-End</Anchor>
					<Text>|</Text>
					<Anchor href="http://github.com/allensam88/african-marketplace-server" target="_blank">Back-End</Anchor>
				</Code>
			</Project>
		</Projects>
	)
}

export default ProjectList;