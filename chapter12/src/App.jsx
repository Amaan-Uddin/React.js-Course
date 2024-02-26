import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import Layout from './components/Layout/Layout';
import Home from './components/Body/Home';
import About from './components/Body/About';
import NewPost from './components/Body/NewPost';
import PostPage from './components/Body/PostPage';
import Missing from './components/Body/Missing';
import api from './api/posts';
import EditPost from './components/Body/EditPost';

function App() {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [postTitle, setPostTitle] = useState('');
	const [postBody, setPostBody] = useState('');
	const [editTitle, setEditTitle] = useState('');
	const [editBody, setEditBody] = useState('');

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await api.get('/posts');
				setPosts(response.data);
			} catch (error) {
				// error logs from axios documentation
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.header);
			}
		};
		fetchPost();
	}, []);

	useEffect(() => {
		const filteredPost = posts.filter(
			(post) =>
				post.body.toLowerCase().includes(search.toLowerCase()) ||
				post.title.toLowerCase().includes(search.toLowerCase())
		);
		setSearchResult(filteredPost.reverse());
	}, [posts, search]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const id = posts.length ? parseInt(posts[posts.length - 1].id) + 1 : 1;
		const date = format(new Date(), 'MMMM dd, yyyy pp');
		const newPost = { id: id.toString(), datetime: date, title: postTitle, body: postBody };
		try {
			const response = await api.post('/posts', newPost);
			console.log(response.data);
			setPosts([...posts, response.data]);
			setPostTitle('');
			setPostBody('');
			navigate('/');
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
	};

	const handleEdit = async (id) => {
		const date = format(new Date(), 'MMMM dd, yyyy pp');
		const updatedPost = { id, datetime: date, title: editTitle, body: editBody };
		try {
			const response = await api.put(`/posts/${id}`, updatedPost);
			setPosts(posts.map((post) => (post.id === id ? { ...response.data } : post)));
			setEditTitle('');
			setEditBody('');
			navigate('/');
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
	};

	const handleDelete = async (id) => {
		try {
			await api.delete(`/posts/${id}`);
			const filteredPosts = posts.filter((post) => post.id != id);
			setPosts(filteredPosts);
			navigate('/');
		} catch (error) {
			console.log(`Error: ${error.message}`);
		}
	};

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
					<Route index element={<Home posts={searchResult} />} />
					<Route path="post">
						<Route
							index
							element={
								<NewPost
									handleSubmit={handleSubmit}
									postTitle={postTitle}
									postBody={postBody}
									setPostTitle={setPostTitle}
									setPostBody={setPostBody}
								/>
							}
						/>
						<Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
					</Route>
					<Route path="edit">
						<Route
							path=":id"
							element={
								<EditPost
									posts={posts}
									handleEdit={handleEdit}
									editTitle={editTitle}
									setEditTitle={setEditTitle}
									editBody={editBody}
									setEditBody={setEditBody}
								/>
							}
						></Route>
					</Route>
					<Route path="about" element={<About />} />
					<Route path="*" element={<Missing />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
