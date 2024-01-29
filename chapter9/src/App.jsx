import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import { useState } from 'react';

function App() {
	/**
	 * {id<number>,checked<boolean>,value<string>}
	 */
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem('listItems'))
	);
	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('');

	const saveItems = (array) => {
		setItems(array);
		localStorage.setItem('listItems', JSON.stringify(array));
	};

	const handleCheck = (id) => {
		const mappedArray = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		saveItems(mappedArray);
	};

	const handleDelete = (id) => {
		const filteredArray = items.filter((item) => item.id !== id);
		saveItems(filteredArray);
	};

	const addNewItem = (item) => {
		/**
		 *
		 * when this function is called remember that the newItem has already been updated and we just need to
		 * add the new item to the Content component, thus changing the items array.
		 */
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const itemObj = { id: id, checked: false, value: item };
		const updatedArray = [...items, itemObj];
		saveItems(updatedArray);
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // prevets the page from reloading
		if (!newItem) return;
		addNewItem(newItem);
		setNewItem('');
	};

	return (
		<div className="App">
			<Header title={'Grocery Items'} />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<SearchItem search={search} setSearch={setSearch} />
			<Content
				items={items.filter((item) =>
					item.value.toLowerCase().includes(search.toLowerCase())
				)}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	);
}

export default App;
