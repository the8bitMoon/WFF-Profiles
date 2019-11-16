import React from 'react';

export default function Profile(props){
	return(
		<article key={props.rowNumber}>
			<figure><a href={props.imagelink}><img alt={props.name} src={props.imagelink} /></a></figure>
			<section><h3>Name</h3><p>{props.name}</p></section>
			<section><h3>Pronouns</h3><p>{props.pronouns}</p></section>
			<section><h3>Status</h3><p>{props.status}</p></section>
			<section><h3>WFF ID</h3><p>{props.discordtag}</p></section>
			<section><h3>Height</h3><p>{props.formattedheight}</p></section>
			<section><h3>Weight</h3><p>{props.formattedweight}</p></section>
			<section><h3>Branch</h3><p>{props.divisionnumber}</p></section>
			<section><h3 style={{borderRight: 'none'}}>Notes</h3></section>
			<section style={{flexDirection: 'column'}}>
				<p>{props.connectiontoworldwidefuturefoundation}.</p>
				<p>{props.divisiondescription}.</p>
				<p>{props.personality}</p>
			</section>
		</article>
	)
}
