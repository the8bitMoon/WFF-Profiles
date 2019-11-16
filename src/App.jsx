import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Profiles from './components/Profiles.jsx';

function App() {
 	return (
		<div className="App crt">
			<header>
				<h1>Worldwide Future Foundation Member Profiles</h1>
			</header>
			<main>
				<Profiles />
			</main>
		</div>
 	);
}

export default App;
