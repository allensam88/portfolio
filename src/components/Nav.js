import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledLink = styled(Link)`
	font-size: 2rem;
	color: #E4E4E9;
	padding: 10px 0;
	text-decoration: none;

	&:hover {
		border-bottom: 2px solid #E4E4E9;
	}
`;

const Anchor = styled.a`
	font-size: 2rem;
	color: #E4E4E9;
	padding: 10px 0;
	text-decoration: none;

	&:hover {
		border-bottom: 2px solid #E4E4E9;
	}
`;

const Nav = () => {
	return (
		<Container>
			<StyledLink to="/">About</StyledLink>
			<StyledLink to="/projects">Projects</StyledLink>
			<Anchor href="../assets/Sam_Allen_Resume.pdf" target="_blank">Resumé</Anchor>
		</Container>
	)
}

export default Nav;