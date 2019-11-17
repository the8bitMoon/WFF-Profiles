import React from 'react';

export default function Nav(props) {
	return(
		<nav>
			<a href="https://tea-etiquette-academy.tumblr.com/tea-1.5">Info</a>
			<a href="https://discord.gg/DvU5PkR">Discord</a>
			<button onClick={props.handleClick}>
				{(props.flickerStatus) ? 'Disable' : 'Enable'} Flicker Effect
			</button>
		</nav>
	)
}
