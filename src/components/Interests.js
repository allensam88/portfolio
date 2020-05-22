import React from "react";
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: [left] 33% [center] 34% [right] 33%;
	padding: 50px 0;
	padding-left: 20px;
`;

const List1 = styled.div`
	grid-column: left;
	justify-self: left;	
	display: flex;
	flex-direction: column;
`;

const List2 = styled.div`
	grid-column: right;	
	justify-self: left;
	display: flex;
	flex-direction: column;
`;

const Header = styled.h3`
	font-size: 2rem;
	color: @darkblue;
	font-weight: bold;
	padding: 10px 0;
`;

const Item = styled.li`
	font-size: 1.5rem;	
	margin: 2px;
`;

const Gear = styled.img`
	grid-column: center;
	justify-self: left;
	width: 150px;
	margin: 10px;
	object-fit: cover;
`;

function Interests() {
	return (
		<Container>
			<List1>
				<Header>Topics of Interest</Header>
				<Item>web tech</Item>
				<Item>clean energy tech</Item>
				<Item>classical music</Item>
				<Item>history / geography</Item>
				<Item>economics / philosophy</Item>
			</List1>
			<Gear src="assets/images/gear_icon.jpg" alt="fun gear icon" />
			<List2>
				<Header>Hobbies</Header>
				<Item>playing the piano</Item>
				<Item>sailing / hiking / outdoors</Item>
				<Item>woodworking / remodeling</Item>
				<Item>documentaries / comedies</Item>
				<Item>board games / puzzles</Item>
			</List2>
		</Container>
	)
}

export default Interests;