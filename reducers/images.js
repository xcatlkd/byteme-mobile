const INITIAL_STATE = {
	images: [],
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
		case "LEFT_SWIPE":
			return {
				...state,
				leftImages: [...state.leftImages, action.targetImage],
			}
		case "RIGHT_SWIPE":
			return {
				...state,
				rightImages: [...state.rightImages, action.targetImage],
			}
		default:
			return state;
	}
}
export default imagesReducer;