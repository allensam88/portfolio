import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<header>
			<div className="name-bar">
				<h3>Sam Allen | </h3>
				<a href="http://www.linkedin.com/in/allensam88/" target="_blank"><i class="fab fa-linkedin"></i></a>
				<a href="http://github.com/allensam88" target="_blank"><i class="fab fa-github-square"></i></a>
			</div>
			<nav>
				<Link to="/">About</Link>
				<Link to="/projects">Projects</Link>
				<a href="../assets/Sam_Allen_Resume.pdf" target="_blank">Resumé</a>
			</nav>

		</header>
	)
}

export default Nav;