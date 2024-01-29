import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import AddItem from './components/formInputs/AddItem';
import Content from './components/Body/Content';
import Footer from './components/Footer/Footer';

function App() {
	const API_URL = 'http://localhost:3000/items';
	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState('');
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw Error('Error:Failed to recieve items from api');
				const listItems = await response.json();
				setItems(listItems);
				setFetchError(null);
			} catch (error) {
				setFetchError(error.message);
			} finally {
				setIsLoading(false);
			}
		};
		setTimeout(() => {
			fetchItems();
		}, 2000);
	}, []);

	const addNewItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const itemObject = { id: id, checked: false, value: item };
		const newItemArray = [...items, itemObject];
		setItems(newItemArray);
	};

	const handleCheck = (id) => {
		const mappedArray = items.map((item) => {
			return item.id === id ? { ...item, checked: !item.checked } : item;
		});
		setItems(mappedArray);
	};

	const handleDelete = (id) => {
		const filteredArray = items.filter((item) => {
			return item.id !== id;
		});
		setItems(filteredArray);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addNewItem(newItem);
		setNewItem(''); // reset the newItems variable so that the input field is empty
	};

	return (
		<>
			<div className="container box">
				<Header title={'Shopping Cart'} />
				<AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
				<main className="my-2 section">
					{isLoading && <h4 className="my-2">Loading Items..</h4>}
					{fetchError && <h4 style={{ color: 'red' }} className="my-2">{`${fetchError}`}</h4>}
					{!fetchError && !isLoading && (
						<Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
					)}
				</main>
				<Footer itemNumber={items.length} />
			</div>
		</>
	);
}

export default App;
