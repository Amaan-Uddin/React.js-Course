import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
const EditPost = ({ posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit }) => {
	const { id } = useParams();
	const post = posts.find((post) => post.id === id);
	useEffect(() => {
		if (post) {
			setEditTitle(post.title);
			setEditBody(post.body);
		}
	}, [post, setEditBody, setEditTitle]);
	return (
		<>
			{editTitle && (
				<form onSubmit={(e) => e.preventDefault()} className="newpost px-3 py-4">
					<div className="form-floating">
						<input
							type="text"
							name="post-title"
							id="floatingInput"
							className="form-control"
							placeholder="Enter title..."
							value={editTitle}
							onChange={(e) => {
								setEditTitle(e.target.value);
							}}
							autoComplete="off"
						/>
						<label htmlFor="floatingInput">Enter title</label>
					</div>
					<div className="form-floating">
						<textarea
							name="post-body"
							id="floatingTextarea2"
							placeholder="Wite Content for post..."
							className="form-control"
							style={{ height: '200px' }}
							value={editBody}
							onChange={(e) => {
								setEditBody(e.target.value);
							}}
						/>
						<label htmlFor="floatingTextarea2">Write content for post</label>
					</div>
					<button className="btn btn-primary w-100" type="submit" onClick={() => handleEdit(post.id)}>
						Submit
					</button>
				</form>
			)}
			{!editTitle && (
				<>
					<h2>Post not found</h2>
					<p>{"sorry to dissapoint, but the post you're looking for does not exist."}</p>
					<Link to={'/'}>Go back to home</Link>
				</>
			)}
		</>
	);
};
export default EditPost;
