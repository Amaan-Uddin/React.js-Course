import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
	/**
	 *
	 * In the previous chapter we declared our item's array in our Content component,
	 * here we decalre it in the App component for ease of access to the items array
	 */

	const [items, setItems] = useState([
		{
			id: 1,
			checked: false,
			value: 'Canned goods',
		},
		{
			id: 2,
			checked: false,
			value: 'Red meat',
		},
		{
			id: 3,
			checked: false,
			value: 'Dairy products',
		},
	]);

	/**
	 *
	 * declare the functions to handle check and delete operation on the list items
	 */

	const handleCheck = (id) => {
		const mappedArray = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(mappedArray);
	};

	const handleDelete = (id) => {
		const filteredArray = items.filter((item) => item.id !== id);
		setItems(filteredArray);
	};

	return (
		<div className="App">
			<Header title="Grocery Items" />
			<Content
				items={items}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	);
}

export default App;
