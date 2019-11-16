import React from 'react';

export default function Nav(props) {
	return(
		<nav>
			<a href="https://tea-etiquette-academy.tumblr.com/post/189096660795/tea-15-applications-open-hello-everyone">Info</a>
			<a href="https://discord.gg/DvU5PkR">Discord</a>
			<a onClick={props.handleClick} href="#">
				{(props.flickerStatus) ? 'Disable' : 'Enable'} Flicker Effect
			</a>
		</nav>
	)
}
