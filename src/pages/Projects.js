import React from "react";
import { Link } from "react-router-dom";

import ProjectList from "../components/ProjectList";

function About() {
	return (
		<div className="grid">
			<div className="sider">
				<div className="profile">
					<h1 className="name">Sam Allen</h1>
					<img className="avatar" src={"assets/images/profile_pic.jpg"}
						alt="Sam outside, sunny day with trees" />
					<h2 className="name">Web Developer</h2>
					<h3 className="name">Based in the Pacific NW</h3>
				</div>
				<nav className="navbar">
					<Link className="link" to="/">About</Link>
					<Link className="link" to="/projects">Projects</Link>
					<a className="link" href="../assets/Sam_Allen_Resume.pdf" target="_blank" rel="noopener noreferrer">Resumé</a>
				</nav>
				<div className="icons">
					<a href="http://www.linkedin.com/in/allensam88/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-linkedin"
							style={{ color: "#0E76A8", fontSize: "40px", margin: "10px" }}>
						</i>
					</a>
					<a href="http://github.com/allensam88" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github-square"
							style={{ color: "#222222", fontSize: "40px", margin: "10px" }}>
						</i>
					</a>
				</div>
			</div>
			<div className="header">
				<h1 className="title">~ Projects ~</h1>
			</div>
			<div className="content">
				<ProjectList />
			</div>
		</div>
	)
}

export default About;