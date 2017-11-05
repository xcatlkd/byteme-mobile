const INITIAL_STATE = {
	imagesLoading: true,
	imagesLoaded: false,
	location: null,
	error: null,
}

function usersReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case "FETCH_IMAGES_PENDING":
			return {
				...state,
				
			}
		case "FETCH_IMAGES_SUCCESS":
			return {
				...state,
				
			}
		case "FETCH_IMAGES_FAILURE":
			return {
				...state,
				
			}			
		default:
			return state;
	}
}

export default usersReducer;