import API from '../util/api';
const basePath = "https://desolate-anchorage-50545.herokuapp.com/api";

export function getPhotos() {
	return (dispatch) => {
		dispatch({
			type: "IMAGE_LOAD_PENDING",
		})
		return fetch(basePath + "/posts")
		.then((res) => {
			if (res) {
				dispatch({
					type: "IMAGE_LOAD_SUCCESS",
					images: JSON.parse(res._bodyText),
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

export function leftSwipe(image) {
	return (dispatch) => {
		dispatch({
			type: "LEFT_SWIPE",
			targetImage: image,
		})
	// 	return fetch(basePath + "/")
	// 	.then((res) => {

	// 	})
	// }	.catch((error) => {
	// 	console.error(error);
	// 	dispatch({
	// 		type: "",
	// 	})
	// })
	}
}

export function rightSwipe(image) {
	return (dispatch) => {
		dispatch({
			type: "RIGHT_SWIPE",
			targetImage: image,
		})
	// 	return fetch(basePath + "/")
	// 	.then((res) => {

	// 	})
	// }	.catch((error) => {
	// 	console.error(error);
	// 	dispatch({
	// 		type: "",
	// 	})
	// })
	}
}
