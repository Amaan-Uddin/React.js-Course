const apiFunction = async (url = '', options = null, errMsg = null) => {
	try {
		console.log(url);
		const response = await fetch(url, options);
		if (!response.ok) throw Error('Please reload the page');
	} catch (error) {
		errMsg = error.message;
	} finally {
		// eslint-disable-next-line no-unsafe-finally
		return errMsg;
	}
};

export default apiFunction;
