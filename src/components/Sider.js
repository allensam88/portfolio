import React from "react";
import Profile from "./Profile";
import Nav from "./Nav";
import Social from "./Social";
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;	
	border-right: 4px solid #152238;
	background: #23395D;
	position: fixed;
	z-index: 2;
	width: 20vw;
	height: 100vh;
	left: 0;
	top: 0;

	@media (max-width: 800px) {
		display: grid;
		grid-template-rows: 70% 30%;
		width: 100vw;
		height: 20vh;
		border-right: none;
	}
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