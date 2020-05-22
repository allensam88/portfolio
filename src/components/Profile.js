import React from "react";
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 5%;	
`;

const Name = styled.h1`
	font-size: 5rem;
	color: #E4E4E9;
	padding: 10px 0;
	font-family: 'Nunito', sans-serif;
	// font-weight: bold;
`;

const Avatar = styled.img`
	width: 180px;
	object-fit: cover;
	padding: 1px;
	border: 2px solid #152238;
	border-radius: 50%;
`;

const Title = styled.h3`
	font-size: 2.5rem;
	color: #E4E4E9;
	padding: 10px 0;
`;

const Location = styled.h6`
	font-size: 1.5rem;
	color: #E4E4E9;
	padding: 10px 0;
`;

const Profile = () => {
	return (
		<Container>
			<Name>Sam Allen</Name>
			<Avatar src={"assets/images/profile_pic.jpg"}
				alt="Sam outside, sunny day with trees" />
			<Title>Web Developer</Title>
			<Location>Based in the Pacific Northwest</Location>
		</Container>
	)
}

export default Profile;