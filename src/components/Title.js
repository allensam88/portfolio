import React from "react";
import styled from 'styled-components';

const StyledTitle = styled.h1`
	font-size: 5rem;
	border-bottom: 2px solid black;
	text-align: right;
	padding: 10px 0;
	font-family: 'Nunito', sans-serif;
	font-weight: bold;
`;

const Title = (props) => {
	return (
		<StyledTitle>
			{props.title}
		</StyledTitle>
	)
}

export default Title;