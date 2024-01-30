import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import AddItem from './components/formInputs/AddItem';
import Content from './components/Body/Content';
import Footer from './components/Footer/Footer';
import apiFunction from './components/api/apiFunction';

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

	const addNewItem = async (item) => {
		const id = items.length ? parseInt(items[items.length - 1].id) + 1 : 1;
		const itemObject = { id: id.toLocaleString(), checked: false, value: item };
		const newItemArray = [...items, itemObject];
		setItems(newItemArray);
		const postOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(itemObject),
		};
		const response = await apiFunction(API_URL, postOptions);
		if (response) setFetchError(response);
	};

	const handleCheck = async (id) => {
		const mappedArray = items.map((item) => {
			return item.id === id ? { ...item, checked: !item.checked } : item;
		});
		setItems(mappedArray);

		const myItem = mappedArray.filter((item) => item.id === id);
		const patchOptions = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ checked: myItem[0].checked }),
		};
		const reqUrl = `${API_URL}/${id}`;
		const response = await apiFunction(reqUrl, patchOptions);
		if (response) setFetchError(response);
	};

	const handleDelete = async (id) => {
		const filteredArray = items.filter((item) => {
			return item.id !== id;
		});
		setItems(filteredArray);
		const reqUrl = `${API_URL}/${id}`;
		const response = await apiFunction(reqUrl, { method: 'DELETE' });
		if (response) setFetchError(response);
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
