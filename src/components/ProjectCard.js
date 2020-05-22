import React from "react";

function ProjectCard() {
	return (
		<div className="project">
			<h3>Alpaca Vids!</h3>
			<p>Record practice interviews and get feedback.</p>
			<p>Demo login: Sam | password: 1234</p>
			<a href="" target="_blank">
				<img src="../assets/images/alpaca-vids.jpg" alt="screenshot of Alpaca Vids App" /></a>
			<div className="code">
				<p>Code: </p>
				<a href="http://github.com/AlpacaVids/video-journal-for-teams-fe">Front-End</a>
				<p>|</p>
				<a href="http://github.com/AlpacaVids/video-journal-for-teams-be">Back-End</a>
			</div>
		</div>
	)
}

export default ProjectCard;