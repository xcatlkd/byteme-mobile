import API from '../util/api';
const basePath = "https://desolate-anchorage-50545.herokuapp.com/api";

export function getPhotos() {
	return (dispatch) => {
		dispatch({
			type: "IMAGE_LOAD_PENDING",
		})
		return fetch(basePath + "/posts")
		// .then((data) => data.JSON())
		.then((res) => {
			if (res) {
				console.log("actions/images  getPhotos()   JSON.parse(res._bodyText): ", JSON.parse(res._bodyText));
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

	// _fetchPhotos = () => {
	// 	return fetch("https://desolate-anchorage-50545.herokuapp.com/api/posts")
	// 	// .then((data) => data.JSON())
	// 	.then((data) => {
	// 		this.setState({
	// 			images: JSON.parse(data._bodyText),
	// 		});
	// 	})
	// 	.then(() => {
	// 		console.log("_fetch   state: ", this.state);
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 	})
	// }