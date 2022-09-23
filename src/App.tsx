import 'css/App.css';
import React from 'react';
import { Home } from 'pages';

function App() {
	const cursor = document.querySelector('.cursor');
	const cursorPointer = document.querySelector('.cursor-pointer');

	window.addEventListener('mousemove', (e) => {
		// @ts-ignore
		cursor.style.top = `${e.pageY}px`;
		// @ts-ignore
		cursor.style.left = `${e.pageX}px`;
		// @ts-ignore
		cursor.style.opacity = 1;
	});

	return (
		<div className="App">
			<div className="cursor">
				<div className="cursor-pointer"></div>
			</div>
			<Home />
		</div>
	);
}

export default App;
