import React from "react";
import styled from 'styled-components';

const Projects = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media (max-width: 800px) {
		margin-bottom: 60px;
	}
`;

const Project = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 250px;
	margin: 20px;
	padding: 10px;
	border: 3px solid #152238;
	border-radius: 10px;
	background: #23395D;
	box-shadow: 10px 10px 10px #222222;
`;

const Header = styled.h3`
	font-size: 20px;	
	color: #E4E4E9;
	margin: 0;
`;

const Text = styled.p`
	font-size: 11pt;
	color: #E4E4E9;
	text-align: center;
	margin: 0;
	padding: 3px;
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
	// font-size: 1.3rem;
	text-decoration: none;
	color: #E4E4E9;
	padding: 3px;

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
				<Text>For practice interviews & feedback.</Text>
				<Text>demo login: fwilloughley0</Text>
				<Text>password: 4OTUUVDkYT</Text>
				<a href="http://alpacavids.netlify.app/" target="_blank" rel="noopener noreferrer">
					<Image src="../assets/images/alpaca-vids.jpg" alt="screenshot of Alpaca Vids App" /></a>
				<Code>
					<Text>Code: </Text>
					<Anchor href="http://github.com/AlpacaVids/video-journal-for-teams-fe" target="_blank" rel="noopener noreferrer">Front-End</Anchor>
					<Text>|</Text>
					<Anchor href="http://github.com/AlpacaVids/video-journal-for-teams-be" target="_blank" rel="noopener noreferrer">Back-End</Anchor>
				</Code>
			</Project>
			<Project>
				<Header>Use My Tools</Header>
				<Text>Exchange tools with members.</Text>
				<Text>demo login: Sam</Text>
				<Text>password: 1234</Text>
				<a href="https://use-my-tools-sam.netlify.app/" target="_blank" rel="noopener noreferrer">
					<Image src="../assets/images/use-my-tools.jpg" alt="screenshot of Use-My-Tools App" /></a>
				<Code>
					<Text>Code: </Text>
					<Anchor href="http://github.com/allensam88/use-my-tools" target="_blank" rel="noopener noreferrer">Front-End</Anchor>
					<Text>|</Text>
					<Anchor href="http://github.com/allensam88/use-my-tools-server" target="_blank" rel="noopener noreferrer">Back-End</Anchor>
				</Code>
			</Project>
			<Project>
				<Header>African Marketplace</Header>
				<Text>An eCommerce demo site.</Text>
				<Text>demo login: Sam</Text>
				<Text>password: 1234</Text>
				<a href="http://african-marketplace-app.netlify.app/" target="_blank" rel="noopener noreferrer">
					<Image src="../assets/images/african-marketplace.jpg" alt="screenshot of African Marketplace App" /></a>
				<Code>
					<Text>Code: </Text>
					<Anchor href="http://github.com/allensam88/african-marketplace" target="_blank" rel="noopener noreferrer">Front-End</Anchor>
					<Text>|</Text>
					<Anchor href="http://github.com/allensam88/african-marketplace-server" target="_blank" rel="noopener noreferrer">Back-End</Anchor>
				</Code>
			</Project>
		</Projects>
	)
}

export default ProjectList;