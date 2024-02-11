const NewPost = ({ postTitle, postBody, handleSubmit, setPostTitle, setPostBody }) => {
	return (
		<form onSubmit={handleSubmit} className="newpost px-3 py-4">
			<div className="form-floating">
				<input
					type="text"
					name="post-title"
					id="floatingInput"
					className="form-control"
					placeholder="Enter title..."
					value={postTitle}
					onChange={(e) => {
						setPostTitle(e.target.value);
					}}
				/>
				<label htmlFor="floatingInput">Enter title...</label>
			</div>
			<div className="form-floating">
				<textarea
					name="post-body"
					id="floatingTextarea2"
					placeholder="Wite Content for post..."
					className="form-control"
					style={{ height: '200px' }}
					value={postBody}
					onChange={(e) => {
						setPostBody(e.target.value);
					}}
				/>
				<label htmlFor="floatingTextarea2">Write content for post...</label>
			</div>
			<button className="btn btn-primary w-100" type="submit">
				Submit
			</button>
		</form>
	);
};
export default NewPost;
