import API from '../util/api';

export function getPhotos() {
	return (dispatch) => {
		dispatch({
			type: "IMAGE_LOAD_PENDING",
		})
		API.post("/posts", {
			args: {

			}
		})
		.then((res) => {
			if (res) {
				dispatch({
					type: "IMAGE_LOAD_SUCCESS",
					images: res,
				})
			}
			else {
				dispatch({
					type: "IMAGE_LOAD_FAILURE",
					error: res.error,
				})
			}
		})
		.catch((error) => {
			console.error(error);
			dispatch({
				type: "IMAGE_LOAD_FAILURE",
				error: error,
			})
		})
	}
}