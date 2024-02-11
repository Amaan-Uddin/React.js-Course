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
						<button
							className="btn btn-danger"
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
