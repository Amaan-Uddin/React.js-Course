import Square from './components/square';
import Input from './components/input';

import './styles/App.css';

import { useState } from 'react';

function App() {
	const [colorValue, setColorValue] = useState('');
	return (
		<div className="App">
			<Square colorValue={colorValue} />
			<Input colorValue={colorValue} setColorValue={setColorValue} />
		</div>
	);
}

export default App;
