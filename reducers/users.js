const INITIAL_STATE = {
	isLoggedIn: false,
	user: {},
	error: null,
}

function usersReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case "SIGNUP_PENDING":
			return {
				...state,
				error: action.error,
			}
		default:
			return state;
	}
}

export default usersReducer;