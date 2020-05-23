import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Navbar = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 800px) {
		flex-direction: row;
		justify-content: center;
		grid-row: 2;
	}
`;

const StyledLink = styled(Link)`
	font-size: 2rem;
	color: #E4E4E9;
	padding: 10px;
	text-align: center;
	text-decoration: none;

	&:hover {
		border-bottom: 2px solid #E4E4E9;
	}

	@media (max-width: 800px) {
		font-size: 1.5rem;
		padding: 0;
		flex: 1;
	}
`;

const Anchor = styled.a`
	font-size: 2rem;
	color: #E4E4E9;
	padding: 10px;
	text-align: center;
	text-decoration: none;

	&:hover {
		border-bottom: 2px solid #E4E4E9;
	}

	@media (max-width: 800px) {
		font-size: 1.5rem;
		padding: 0;
		flex: 1;
	}
`;

const Nav = () => {
	return (
		<Navbar>
			<StyledLink to="/">About</StyledLink>
			<StyledLink to="/projects">Projects</StyledLink>
			<Anchor href="../assets/Sam_Allen_Resume.pdf" target="_blank">Resumé</Anchor>
		</Navbar>
	)
}

export default Nav;