import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Profiles from './components/Profiles.jsx';

function setCookie(value) {
	const expiry = new Date().getTime() + (30*24*60*60*1000);
	document.cookie = `flicker=${value}; expires=${expiry}`;
}

function getCookie() {
	console.log(document.cookie);
	const value = (document.cookie.split('=').length <= 0)
		? true
		: (document.cookie.split('=')[1] === 'false')
		? false
		: true;
	console.log(value);
	return(value);
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			flicker: getCookie()
		}
		this.toggleEffect = this.toggleEffect.bind(this);
	}

	toggleEffect(event) {
		const status = (this.state.flicker) ? false : true;
		this.setState({
			flicker: status
		})
		setCookie(status);
	}

	render() {
		const { flicker } = this.state;
		console.log('flicker-->', flicker);
		return (
			<div className={`App crt ${(flicker) ? 'flicker' : ''}`}>
				<header>
					<h1>Worldwide Future Foundation Member Profiles</h1>
				</header>
				<Profiles />
				<footer>
					<small>
						<p>All characters represented are fictional.</p>
						<button onClick={this.toggleEffect}>
							{(flicker) ? 'Disable' : 'Enable'} Flicker Effect
						</button>
					</small>
				</footer>
			</div>
		);
	}
}

export default App;
