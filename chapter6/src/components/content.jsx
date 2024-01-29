// importing a state hook
import { useState } from 'react';

const Content = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('john');

	const handleNameChange = () => {
		const names = ['john', 'bob', 'henry', 'miguel', 'jamie', 'kenny', 'gru'];
		const randomInt = Math.floor(Math.random() * names.length);
		setName(names[randomInt]);
	};
	return (
		<main>
			<section className="content">
				<div>hello {name}</div>
				{/* read note.txt on gotchas */}
				<div>count : {count}</div>
				<button
					onClick={() => {
						setCount(count + 1);
					}}
				>
					Click
				</button>
				<button onClick={handleNameChange}>Change Name</button>
			</section>
		</main>
	);
};

export default Content;
