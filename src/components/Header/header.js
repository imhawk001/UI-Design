import React from 'react';
import './style.css';
import logo from '../../assets/amc.png';
import me from '../../assets/jp.png';

const header = (props) => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Automatic Sudoku Solver</h1>

		</header>
	);
};

export default header;
