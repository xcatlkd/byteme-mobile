const INITIAL_STATE = {
	isLoading: false,

}

function applicationReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case "LOADING":
			return {
				...state,
				isLoading: true,
			}
		case "LOADED":
			return {
				...state,
				isLoading: false,
			}
		default:
			return state;
	}
}