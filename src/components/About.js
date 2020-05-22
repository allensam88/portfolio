import React from "react";

function About() {
	return (
		<div id="about">
			<div className="profile">
				<div className="title">
					<img className="profile-img" src={"assets/images/profile_pic.jpg"}
						alt="Sam outside, sunny day with trees" />
					<h3>Web Developer</h3>
					<p>Based in the Pacific Northwest</p>
				</div>
				<div className="intro">
					<h3>Brief Intro</h3>
					<p>I enjoy problem-solving, process-improvement, and learning new ideas & skills.</p>
					<p>I've served in the military, played piano in a band, worked hard in construction, and led manufacturing & logistics workshops and projects.</p>
					<p>I'm passionate about travel and experiencing different cultures.</p>
				</div>
			</div>

			<div className="lists">
				<div className="list">
					<h3>Topics of Interest</h3>
					<li>web tech</li>
					<li>clean energy tech</li>
					<li>classical music</li>
					<li>history / geography</li>
					<li>economics / philosophy</li>
				</div>
				<img className="gears-img" src="assets/images/gear_icon.jpg" alt="fun gear icon" />
				<div className="list">
					<h3>Hobbies</h3>
					<li>sailing / hiking / outdoors</li>
					<li>woodworking / remodeling</li>
					<li>playing the piano</li>
					<li>documentaries / comedies</li>
					<li>board games / puzzles</li>
				</div>
			</div>

		</div >
	)
}

export default About;