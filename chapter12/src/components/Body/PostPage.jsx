import { useParams, Link } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {
	const { id } = useParams();
	const post = posts.find((post) => post.id == id);
	return (
		<main>
			<article>
				{post && (
					<>
						<h2>{post.title}</h2>
						<p>{post.datetime}</p>
						<p>{post.body}</p>
						<Link to={`/edit/${id}`}>
							<button className="btn btn-secondary">Edit Post</button>
						</Link>
						<button
							className="btn btn-danger mx-2"
							onClick={() => {
								handleDelete(post.id);
							}}
						>
							Delete Post
						</button>
					</>
				)}
				{!post && (
					<>
						<h2>Post not found</h2>
						<p>{"sorry to dissapoint, but the post you're looking for does not exist."}</p>
						<Link to={'/'}>Go back to home</Link>
					</>
				)}
			</article>
		</main>
	);
};
export default PostPage;
