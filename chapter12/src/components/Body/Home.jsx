import Feed from '../Posts/Feed';

const Home = ({ posts }) => {
	return <main>{posts.length ? <Feed posts={posts} /> : <p>No posts as of now...</p>}</main>;
};
export default Home;
