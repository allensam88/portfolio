import React from "react";
import { Link } from "react-router-dom";

import Sider from "../components/Sider";
import Profile from "../components/Profile";
import Nav from "../components/Nav";
import Social from "../components/Social";
import Header from "../components/Header";
import Intro from "../components/Intro";

function Page() {
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
					<a className="link" href="../assets/Sam_Allen_Resume.pdf" target="_blank">Resumé</a>
				</nav>
				<div className="icons">
					<a href="http://www.linkedin.com/in/allensam88/" target="_blank">
						<i class="fab fa-linkedin"
							style={{ color: "#0E76A8", fontSize: "40px", margin: "10px" }}>
						</i>
					</a>
					<a href="http://github.com/allensam88" target="_blank">
						<i class="fab fa-github-square"
							style={{ color: "#222222", fontSize: "40px", margin: "10px" }}>
						</i>
					</a>
				</div>
				{/* <Profile /> */}
				{/* <Nav />
				<Social /> */}
			</div>
			<div className="header">
				<h1 className="title">Title</h1>
			</div>
			<div className="content">
				<h1>Dynamic Content</h1>
			</div>
		</div>
	)
}

export default Page;