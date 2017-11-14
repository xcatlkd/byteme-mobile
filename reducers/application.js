const INITIAL_STATE = {
	isLoading: false,
	imagesLoaded: false,

}

function applicationReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case "LOADING":
			return {
				...state,
				isLoading: true,
			}
		case "IMAGE_LOAD_SUCCESS":
			return {
				...state,
				imagesLoaded: true,
			}
		default:
			return state;
	}
}

export default applicationReducer;