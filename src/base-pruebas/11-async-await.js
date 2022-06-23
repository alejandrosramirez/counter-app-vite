export const getImage = async () => {
	try {
		const apiKey = "C2uNxzhbVmgYObL4zMuO21iPyBHXdD4u";
		const resp = await fetch(
			`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
		);
		const { data } = await resp.json();
		const { url } = data.images.original;

		return url;
	} catch (error) {
		return error;
	}
};
