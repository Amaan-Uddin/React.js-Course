import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Body/Home';
import About from './components/Body/About';
import NewPost from './components/Body/NewPost';
import PostPage from './components/Body/PostPage';
import Missing from './components/Body/Missing';

function App() {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: 'My 1st Post',
			datetime: 'July 01, 2021 11:17:36 AM',
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
		},
		{
			id: 2,
			title: 'My 2nd Post',
			datetime: 'July 01, 2021 11:17:36 AM',
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
		},
		{
			id: 3,
			title: 'My 3rd Post',
			datetime: 'July 01, 2021 11:17:36 AM',
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
		},
		{
			id: 4,
			title: 'My 4th Post',
			datetime: 'July 01, 2021 11:17:36 AM',
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
		},
	]);
	const [search, setSearch] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [postTitle, setPostTitle] = useState('');
	const [postBody, setPostBody] = useState('');

	const handleSubmit = (e) => {};
	const handleDelete = (id) => {
		const filteredPosts = posts.filter((post) => post.id != id);
		setPosts(filteredPosts);
		navigate('/');
	};

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
					<Route index element={<Home posts={posts} />} />
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
					<Route path="about" element={<About />} />
					<Route path="*" element={<Missing />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
