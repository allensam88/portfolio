import React from "react";
import Profile from "./Profile";
import Nav from "./Nav";
import Social from "./Social";
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;	
	width: 25vw;
	height: 100vh;
	border-right: 4px solid #152238;
	background: #23395D;
`;

const Sider = () => {
	return (
		<Container>
			<Profile />
			<Nav />
			<Social />
		</Container>
	)
}

export default Sider;