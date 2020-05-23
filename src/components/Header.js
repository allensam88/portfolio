import React from "react";
import styled from 'styled-components';

const StyledTitle = styled.h1`
	font-size: 5rem;
	font-weight: bold;
	font-family: 'Nunito', sans-serif;
	text-align: right;
	color: #152238;
	background: #E4E4E9;
	border-bottom: 2px solid #152238;
	padding: 10px 20px;
	width: 100%;
	position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
`;

const Header = (props) => {
	return (
		<StyledTitle>
			{props.title}
		</StyledTitle>
	)
}

export default Header;