import React from 'react';

export default function Profile(props){
	const image = {backgroundImage: props.imagelink}
	return(
		<article key={props.rowNumber}>
			<figure><img src={props.imagelink} /></figure>
			<section><h3>Name</h3><p>{props.name}</p></section>
			<section><h3>Status</h3><p>{props.status}</p></section>
			<section><h3>WFF ID</h3><p>{props.discordtag}</p></section>
			<section><h3>Height</h3><p>{props.formattedheight}</p></section>
			<section><h3>Weight</h3><p>{props.formattedweight}</p></section>
			<section><h3>Branch</h3><p>{props.divisionnumber}</p></section>
			<section><h3 style={{borderRight: 'none'}}>Notes</h3></section>
			<section style={{flexDirection: 'column'}}>
				<p>{props.connectiontoworldwidefuturefoundation}.</p>
				<p>{props.divisiondescription}.</p>
			</section>
		</article>
	)
}
