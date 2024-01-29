import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: false,
			value: 'Canned Goods',
		},
		{
			id: 2,
			checked: false,
			value: 'Bread',
		},
		{
			id: 3,
			checked: false,
			value: 'Dairy products',
		},
	]);

	const handleCheck = (id) => {
		setItems(
			items.map((item) =>
				item.id === id ? { ...item, checked: !item.checked } : item
			)
		);
	};

	const handleDelete = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	return (
		<main>
			<section>
				{items.length ? (
					<ul>
						{items.map((item) => (
							<li key={item.id} className="item">
								<input
									type="checkbox"
									name="item-check"
									onChange={() => handleCheck(item.id)}
								/>
								<label
									htmlFor="item-check"
									style={
										item.checked ? { textDecoration: 'line-through' } : null
									}
								>
									{item.value}
								</label>
								<FaTrashAlt
									onClick={() => handleDelete(item.id)}
									role="button"
								/>
							</li>
						))}
					</ul>
				) : (
					<div>No Items</div>
				)}
			</section>
		</main>
	);
};

export default Content;
