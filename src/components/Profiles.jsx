import React, { Component } from 'react';
import Tabletop from 'tabletop';
import Profile from './Profile.jsx';

export default class Profiles extends Component {
	constructor() {
		super()
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		Tabletop.init({
			key: 'https://docs.google.com/spreadsheets/d/1RMkKMmpACwE3PHbrU44vNdDsWwLmBwL-FwMzAk6lf8o/edit?usp=sharing',
			simpleSheet: false,
			prettyColumnNames: false,
			callback: googleData => {
	          this.setState({
	            data: googleData['Public Profiles'].elements
	          })
	        }
		})
	}
	render() {
		const { data } = this.state;
		console.log('data-->', data);
		return(
			<main>
				{data.map(obj => Profile(obj))}
			</main>
		)
	}
}
