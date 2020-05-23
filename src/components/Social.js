import React from "react";
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	position: fixed;
	bottom: 0;

	@media (max-width: 800px) {
		
		z-index: 1;
		background: #23395D;
		width: 100%;
	}
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