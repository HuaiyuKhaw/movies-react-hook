import React from 'react';
const Header = props => {
	return (
		<header className="App-header">
			<h2>{props.text}</h2>
			<div style={{fontSize: 12}}>{props.description}</div>
		</header>
	);
};
export default Header;