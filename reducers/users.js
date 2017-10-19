const INITIAL_STATE = {
	isLoggedIn: false,
	isLoading: false,
	user: {},
	location: null,
	error: null,
}

function usersReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case "AUTH_PENDING":
			return {
				...state,
				isLoading: true,
			}
		case "AUTH_SUCCESS":
			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
				error: null,
				user: {
					username: action.username,
					userId: action.userId,
				},
			}
		case "AUTH_FAILURE":
			return {
				...state,
				isLoading: false,
				isLoggedIn: false,
				error: action.error,
			}
		case "LOGOUT":
			return {
				...state,
				isLoggedIn: false,
				user: {},
				error: null,
			}
		default:
			return state;
	}
}

export default usersReducer;