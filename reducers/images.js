const INITIAL_STATE = {
	images: [{
		title: "Sami!",
		description: "Null",
		id: "https://s3.us-east-2.amazonaws.com/bytemeimagestorage/1505352183872",
	}],
	leftImages: [],
	rightImages: [],
	error: null,
	imagesLoading: false,
}

function imagesReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case "IMAGE_LOAD_PENDING":
			return {
				...state,
				imagesLoading: true,
			}
		case "IMAGE_LOAD_SUCCESS":
			return {
				...state,
				imagesLoading: false,
				images: action.images,
			}
		case "IMAGE_LOAD_FAILURE":
			return {
				...state,
				imagesLoading: false,
				error: action.error,
			}
		case "SWIPE_LEFT":
			return {
				...state,
			}
		case "SWIPE_RIGHT":
			return {
				...state,

			}
		default:
			return state;
	}
}
export default imagesReducer;