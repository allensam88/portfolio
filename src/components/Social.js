import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	position: absolute;
	bottom: 0;
`;

const Social = () => {
	return (
		<Container>
			<a href="http://www.linkedin.com/in/allensam88/" target="_blank">
				<i class="fab fa-linkedin"
					style={{ color: "#0E76A8", fontSize: "5rem", margin: "10px" }}>
				</i>
			</a>
			<a href="http://github.com/allensam88" target="_blank">
				<i class="fab fa-github-square"
					style={{ color: "#222222", fontSize: "5rem", margin: "10px" }}>
				</i>
			</a>
		</Container>
	)
}

export default Social;