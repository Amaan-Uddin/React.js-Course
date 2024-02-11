import { Link } from 'react-router-dom';
const Post = ({ post }) => {
	return (
		<article className="post container border rounded-2 my-3 pt-3 px-4">
			<Link to={`/post/${post.id}`}>
				<h2>{post.title}</h2>
				<p>{post.datetime}</p>
			</Link>
			<p>{post.body.length <= 40 ? post.body : `${post.body.slice(0, 40)}...`}</p>
		</article>
	);
};
export default Post;
