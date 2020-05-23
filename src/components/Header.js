import React from "react";
import styled from 'styled-components';

const StyledTitle = styled.h1`
	font-size: 3vw;
	font-weight: bold;
	margin-right: 2vw;
`;

const Header = (props) => {
	return (
		<StyledTitle>
			{props.title}
		</StyledTitle>
	)
}

export default Header;